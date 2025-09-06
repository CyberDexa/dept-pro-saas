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
    const days = parseInt(searchParams.get('days') || '30');
    const limit = parseInt(searchParams.get('limit') || '10');

    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Calculate date range
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Get recent assessments with practice info
    const recentAssessments = await (prisma as any).assessment.findMany({
      where: {
        userId: user.id,
        updatedAt: {
          gte: startDate
        }
      },
      include: {
        practice: {
          select: {
            name: true
          }
        }
      },
      orderBy: {
        updatedAt: 'desc'
      },
      take: limit
    });

    // Transform to activity items
    const activities = recentAssessments.map((assessment: any) => {
      let action = 'updated';
      let icon = 'pencil';
      
      if (assessment.status === 'COMPLETED' && assessment.completedAt) {
        const completedRecently = new Date(assessment.completedAt) >= startDate;
        if (completedRecently) {
          action = 'completed';
          icon = 'check-circle';
        }
      } else if (assessment.createdAt >= startDate) {
        action = 'created';
        icon = 'plus-circle';
      }

      return {
        id: assessment.id,
        type: 'assessment',
        title: assessment.title,
        action,
        icon,
        timestamp: assessment.updatedAt,
        timeAgo: formatTimeAgo(new Date(assessment.updatedAt)),
        status: assessment.status === 'COMPLETED' ? 'completed' : 'pending',
        metadata: {
          status: assessment.status,
          practiceId: assessment.practiceId,
          practiceName: assessment.practice?.name,
          overallScore: assessment.overallScore,
          passStatus: assessment.passStatus
        }
      };
    });

    // Get quick statistics
    const today = new Date();
    const thisWeek = new Date();
    thisWeek.setDate(today.getDate() - 7);
    const thisMonth = new Date();
    thisMonth.setDate(today.getDate() - 30);

    const [totalAssessments, weeklyAssessments, monthlyAssessments, completedAssessments] = await Promise.all([
      (prisma as any).assessment.count({
        where: { userId: user.id }
      }),
      (prisma as any).assessment.count({
        where: {
          userId: user.id,
          createdAt: { gte: thisWeek }
        }
      }),
      (prisma as any).assessment.count({
        where: {
          userId: user.id,
          createdAt: { gte: thisMonth }
        }
      }),
      (prisma as any).assessment.count({
        where: {
          userId: user.id,
          status: 'COMPLETED'
        }
      })
    ]);

    // Get compliance rate
    const passedAssessments = await (prisma as any).assessment.count({
      where: {
        userId: user.id,
        status: 'COMPLETED',
        passStatus: 'PASS'
      }
    });

    const complianceRate = completedAssessments > 0
      ? (passedAssessments / completedAssessments) * 100
      : 0;

    // Get in-progress assessments for quick actions
    const inProgressAssessments = await (prisma as any).assessment.findMany({
      where: {
        userId: user.id,
        status: 'IN_PROGRESS'
      },
      select: {
        id: true,
        title: true,
        createdAt: true
      },
      orderBy: {
        updatedAt: 'desc'
      },
      take: 3
    });

    // Build quick actions
    const quickActions = [
      {
        id: 'new-assessment',
        title: 'Start New Assessment',
        description: 'Begin a new DSPT compliance assessment',
        href: '/assessment',
        icon: 'plus',
        priority: 'high'
      },
      {
        id: 'view-analytics',
        title: 'View Analytics',
        description: 'Review compliance trends and insights',
        href: '/analytics',
        icon: 'chart-bar',
        priority: 'medium'
      },
      {
        id: 'assessment-history',
        title: 'Assessment History',
        description: 'View all past assessments',
        href: '/history',
        icon: 'clock',
        priority: 'medium'
      }
    ];

    // Add continue assessment actions for in-progress assessments
    inProgressAssessments.forEach((assessment: any, index: number) => {
      if (index < 2) { // Limit to 2 continue actions
        quickActions.unshift({
          id: `continue-${assessment.id}`,
          title: `Continue "${assessment.title}"`,
          description: 'Resume this in-progress assessment',
          href: `/assessment?id=${assessment.id}`,
          icon: 'play',
          priority: 'high'
        });
      }
    });

    const stats = {
      totalAssessments,
      weeklyAssessments,
      monthlyAssessments,
      completedAssessments,
      complianceRate: Math.round(complianceRate * 10) / 10
    };

    return NextResponse.json({
      success: true,
      activities,
      stats,
      quickActions: quickActions.slice(0, 5) // Limit to 5 quick actions
    });

  } catch (error) {
    console.error('Dashboard activity error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'Just now';
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
}
