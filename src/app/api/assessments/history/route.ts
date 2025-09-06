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
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');
    const status = searchParams.get('status');
    const practiceId = searchParams.get('practiceId');

    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Build where conditions
    const whereConditions: any = {
      userId: user.id
    };

    if (status) {
      whereConditions.status = status;
    }

    if (practiceId) {
      whereConditions.practiceId = practiceId;
    }

    // Get assessments with related data
    const assessments = await (prisma as any).assessment.findMany({
      where: whereConditions,
      include: {
        practice: {
          select: {
            name: true
          }
        },
        responses: {
          select: {
            id: true,
            response: true,
            isCompliant: true
          }
        },
        sectionScores: {
          select: {
            sectionScore: true,
            sectionTitle: true
          }
        },
        evidenceFiles: {
          select: {
            id: true,
            fileName: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: limit,
      skip: offset
    });

    // Calculate additional metrics for each assessment
    const assessmentsWithMetrics = assessments.map((assessment: any) => {
      const totalQuestions = assessment.totalQuestions || 0;
      const answeredQuestions = assessment.answeredQuestions || assessment.responses?.length || 0;
      const passedQuestions = assessment.passedQuestions || 
        assessment.responses?.filter((r: any) => r.response === 'YES' || r.isCompliant).length || 0;

      return {
        id: assessment.id,
        title: assessment.title,
        status: assessment.status,
        overallScore: assessment.overallScore,
        passStatus: assessment.passStatus,
        createdAt: assessment.createdAt,
        completedAt: assessment.completedAt,
        updatedAt: assessment.updatedAt,
        practice: assessment.practice,
        totalQuestions,
        answeredQuestions,
        passedQuestions,
        completionPercentage: totalQuestions > 0 ? (answeredQuestions / totalQuestions) * 100 : 0,
        sectionScores: assessment.sectionScores,
        evidenceFileCount: assessment.evidenceFiles?.length || 0
      };
    });

    // Get total count for pagination
    const totalCount = await (prisma as any).assessment.count({
      where: whereConditions
    });

    // Calculate summary statistics
    const completedAssessments = assessmentsWithMetrics.filter(a => a.status === 'COMPLETED');
    const averageScore = completedAssessments.length > 0
      ? completedAssessments.reduce((sum, a) => sum + (a.overallScore || 0), 0) / completedAssessments.length
      : 0;

    const summary = {
      totalAssessments: assessmentsWithMetrics.length,
      completedAssessments: completedAssessments.length,
      inProgressAssessments: assessmentsWithMetrics.filter(a => a.status === 'IN_PROGRESS').length,
      draftAssessments: assessmentsWithMetrics.filter(a => a.status === 'DRAFT').length,
      averageScore: Math.round(averageScore * 10) / 10,
      complianceRate: completedAssessments.length > 0
        ? (completedAssessments.filter(a => a.passStatus === 'PASS').length / completedAssessments.length) * 100
        : 0
    };

    return NextResponse.json({
      success: true,
      assessments: assessmentsWithMetrics,
      pagination: {
        total: totalCount,
        limit,
        offset,
        hasMore: offset + limit < totalCount
      },
      summary
    });

  } catch (error) {
    console.error('Error fetching assessment history:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
