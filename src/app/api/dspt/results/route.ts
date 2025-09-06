import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const assessmentId = searchParams.get('id');

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

    // Get assessment with completion data
    const assessment = await (prisma as any).assessment.findFirst({
      where: {
        id: assessmentId,
        userId: user.id,
        status: 'COMPLETED'
      },
      include: {
        sectionScores: true
      }
    });

    if (!assessment) {
      return NextResponse.json({ error: 'Completed assessment not found or access denied' }, { status: 404 });
    }

    const completionSummary = {
      totalQuestions: assessment.totalQuestions,
      answeredQuestions: assessment.answeredQuestions,
      passedQuestions: assessment.passedQuestions,
      overallScore: assessment.overallScore,
      passStatus: assessment.passStatus,
      completedAt: assessment.completedAt
    };

    return NextResponse.json({
      assessment,
      sectionScores: assessment.sectionScores,
      completionSummary
    });

  } catch (error) {
    console.error('Error fetching assessment results:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
