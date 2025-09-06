import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { assessmentId } = await request.json();

    if (!assessmentId) {
      return NextResponse.json({ error: 'Assessment ID is required' }, { status: 400 });
    }

    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Verify assessment ownership
    const assessment = await (prisma as any).assessment.findFirst({
      where: {
        id: assessmentId,
        userId: user.id
      },
      include: {
        responses: {
          include: {
            dsptQuestion: {
              include: {
                section: true
              }
            }
          }
        }
      }
    });

    if (!assessment) {
      return NextResponse.json({ error: 'Assessment not found or access denied' }, { status: 404 });
    }

    // Get all DSPT questions to check completeness
    const allQuestions = await (prisma as any).dSPTQuestion.findMany({
      include: {
        section: true
      }
    });

    // Calculate scores
    const totalQuestions = allQuestions.length;
    const answeredQuestions = assessment.responses.length;
    const passedQuestions = assessment.responses.filter(r => r.response === 'YES').length;
    
    // Calculate section scores
    const sectionScores = new Map();
    
    for (const response of assessment.responses) {
      if (response.dsptQuestion?.section) {
        const sectionId = response.dsptQuestion.section.id;
        const sectionTitle = response.dsptQuestion.section.title;
        
        if (!sectionScores.has(sectionId)) {
          sectionScores.set(sectionId, {
            sectionId,
            sectionTitle,
            totalQuestions: 0,
            answeredQuestions: 0,
            passedQuestions: 0
          });
        }
        
        const sectionData = sectionScores.get(sectionId);
        sectionData.answeredQuestions += 1;
        if (response.response === 'YES') {
          sectionData.passedQuestions += 1;
        }
      }
    }

    // Count total questions per section
    const sectionsQuestionsCount = new Map();
    for (const question of allQuestions) {
      const sectionId = question.section.id;
      sectionsQuestionsCount.set(sectionId, (sectionsQuestionsCount.get(sectionId) || 0) + 1);
    }

    // Update section scores with total questions
    const sectionEntriesArray = Array.from(sectionScores.entries());
    for (const [sectionId, sectionData] of sectionEntriesArray) {
      sectionData.totalQuestions = sectionsQuestionsCount.get(sectionId) || 0;
      sectionData.sectionScore = sectionData.totalQuestions > 0 
        ? (sectionData.passedQuestions / sectionData.totalQuestions) * 100 
        : 0;
    }

    // Calculate overall score
    const overallScore = totalQuestions > 0 ? (passedQuestions / totalQuestions) * 100 : 0;
    
    // Determine pass status (in real DSPT, this is more complex)
    // For simplicity, requiring 80% overall compliance
    const passStatus = overallScore >= 80 ? 'PASS' : 'FAIL';

    // Update assessment with completion data
    const completedAssessment = await (prisma as any).assessment.update({
      where: { id: assessmentId },
      data: {
        status: 'COMPLETED',
        completedAt: new Date(),
        overallScore,
        passStatus,
        totalQuestions,
        answeredQuestions,
        passedQuestions
      }
    });

    // Create section score records
    const sectionScoreArray = Array.from(sectionScores.entries());
    for (const [_, sectionData] of sectionScoreArray) {
      await (prisma as any).sectionScore.create({
        data: {
          assessmentId: assessmentId,
          sectionId: sectionData.sectionId,
          sectionTitle: sectionData.sectionTitle,
          totalQuestions: sectionData.totalQuestions,
          answeredQuestions: sectionData.answeredQuestions,
          passedQuestions: sectionData.passedQuestions,
          sectionScore: sectionData.sectionScore
        }
      });
    }

    return NextResponse.json({
      success: true,
      assessment: completedAssessment,
      sectionScores: Array.from(sectionScores.values()),
      completionSummary: {
        totalQuestions,
        answeredQuestions,
        passedQuestions,
        overallScore,
        passStatus,
        completedAt: completedAssessment.completedAt
      }
    });

  } catch (error) {
    console.error('Error completing assessment:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
