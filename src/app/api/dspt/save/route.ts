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

    const { responses, assessmentTitle } = await request.json();

    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Get user's practice
    const practice = await prisma.practice.findFirst({
      where: { ownerId: user.id }
    });

    if (!practice) {
      return NextResponse.json({ error: 'Practice not found' }, { status: 404 });
    }

    // Create or update assessment
    let assessment = await prisma.assessment.findFirst({
      where: {
        practiceId: practice.id,
        type: 'DSPT',
        status: { in: ['DRAFT', 'IN_PROGRESS'] }
      }
    });

    if (!assessment) {
      assessment = await prisma.assessment.create({
        data: {
          title: assessmentTitle || `DSPT Assessment - ${new Date().toLocaleDateString()}`,
          type: 'DSPT',
          status: 'IN_PROGRESS',
          practiceId: practice.id,
          userId: user.id
        }
      });
    }

    // Save responses
    const savedResponses = [];
    for (const [questionId, responseData] of Object.entries(responses as Record<string, any>)) {
      // For demo purposes, we'll save to a simple format
      // In production, you'd save to AssessmentResponse table
      savedResponses.push({
        questionId,
        response: responseData.response,
        evidence: responseData.evidence,
        isCompliant: responseData.isCompliant
      });
    }

    // Update assessment with response count
    await (prisma as any).assessment.update({
      where: { id: assessment.id },
      data: {
        status: 'IN_PROGRESS',
        updatedAt: new Date(),
        answeredQuestions: savedResponses.length,
        passedQuestions: savedResponses.filter(r => r.isCompliant).length
      }
    });

    return NextResponse.json({
      success: true,
      assessment: assessment,
      responsesCount: savedResponses.length
    });
  } catch (error) {
    console.error('Error saving assessment:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
