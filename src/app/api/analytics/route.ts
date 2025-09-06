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
    const practiceId = searchParams.get('practiceId');
    const timeRange = searchParams.get('timeRange') || '6m'; // 6m, 1y, all

    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Calculate date range
    const now = new Date();
    let startDate = new Date();
    
    switch (timeRange) {
      case '3m':
        startDate.setMonth(now.getMonth() - 3);
        break;
      case '6m':
        startDate.setMonth(now.getMonth() - 6);
        break;
      case '1y':
        startDate.setFullYear(now.getFullYear() - 1);
        break;
      case 'all':
        startDate = new Date('2020-01-01');
        break;
      default:
        startDate.setMonth(now.getMonth() - 6);
    }

    // Base query conditions
    const whereConditions: any = {
      userId: user.id,
      createdAt: {
        gte: startDate
      }
    };

    if (practiceId) {
      whereConditions.practiceId = practiceId;
    }

    // Get all assessments in the time range
    const assessments = await (prisma as any).assessment.findMany({
      where: whereConditions,
      include: {
        practice: true,
        sectionScores: true,
        responses: {
          include: {
            dsptQuestion: {
              include: {
                section: true
              }
            }
          }
        },
        evidenceFiles: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Get completed assessments only for trends
    const completedAssessments = assessments.filter(a => a.status === 'COMPLETED');

    // Calculate overall statistics
    const totalAssessments = assessments.length;
    const completedCount = completedAssessments.length;
    const inProgressCount = assessments.filter(a => a.status === 'IN_PROGRESS').length;
    const averageScore = completedAssessments.length > 0 
      ? completedAssessments.reduce((sum, a) => sum + (a.overallScore || 0), 0) / completedAssessments.length 
      : 0;

    // Calculate compliance trend over time
    const complianceTrend = completedAssessments.map(assessment => ({
      date: assessment.completedAt || assessment.createdAt,
      score: assessment.overallScore || 0,
      passStatus: assessment.passStatus,
      assessmentTitle: assessment.title
    })).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // Calculate section performance analytics
    const sectionPerformance = new Map();
    
    completedAssessments.forEach(assessment => {
      if (assessment.sectionScores) {
        assessment.sectionScores.forEach((sectionScore: any) => {
          const sectionTitle = sectionScore.sectionTitle;
          if (!sectionPerformance.has(sectionTitle)) {
            sectionPerformance.set(sectionTitle, {
              sectionTitle,
              scores: [],
              averageScore: 0,
              improvementTrend: 0,
              totalAssessments: 0
            });
          }
          
          const sectionData = sectionPerformance.get(sectionTitle);
          sectionData.scores.push({
            score: sectionScore.sectionScore,
            date: assessment.completedAt || assessment.createdAt
          });
          sectionData.totalAssessments += 1;
        });
      }
    });

    // Calculate averages and trends for sections
    const sectionAnalytics = Array.from(sectionPerformance.values()).map((section: any) => {
      const scores = section.scores.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
      const averageScore = scores.reduce((sum: number, s: any) => sum + s.score, 0) / scores.length;
      
      // Calculate improvement trend (compare first half vs second half)
      const midpoint = Math.floor(scores.length / 2);
      const firstHalfAvg = scores.slice(0, midpoint).reduce((sum: number, s: any) => sum + s.score, 0) / Math.max(midpoint, 1);
      const secondHalfAvg = scores.slice(midpoint).reduce((sum: number, s: any) => sum + s.score, 0) / Math.max(scores.length - midpoint, 1);
      const improvementTrend = secondHalfAvg - firstHalfAvg;

      return {
        sectionTitle: section.sectionTitle,
        averageScore,
        improvementTrend,
        totalAssessments: section.totalAssessments,
        latestScore: scores[scores.length - 1]?.score || 0,
        scores: scores.slice(-10) // Last 10 assessments for this section
      };
    });

    // Get recent activity
    const recentActivity = assessments.slice(0, 10).map(assessment => ({
      id: assessment.id,
      title: assessment.title,
      status: assessment.status,
      score: assessment.overallScore,
      passStatus: assessment.passStatus,
      createdAt: assessment.createdAt,
      completedAt: assessment.completedAt,
      practice: assessment.practice?.name || 'Unknown Practice'
    }));

    // Calculate improvement recommendations
    const recommendations = [];
    
    // Find sections with lowest scores
    const lowPerformingSections = sectionAnalytics
      .filter(s => s.averageScore < 70)
      .sort((a, b) => a.averageScore - b.averageScore)
      .slice(0, 3);

    lowPerformingSections.forEach(section => {
      recommendations.push({
        type: 'improvement',
        priority: section.averageScore < 50 ? 'high' : 'medium',
        title: `Improve ${section.sectionTitle} Compliance`,
        description: `This section has an average score of ${Math.round(section.averageScore)}%. Focus on addressing gaps in this area.`,
        sectionTitle: section.sectionTitle,
        currentScore: section.averageScore
      });
    });

    // Find sections with declining trends
    const decliningTrends = sectionAnalytics
      .filter(s => s.improvementTrend < -5)
      .sort((a, b) => a.improvementTrend - b.improvementTrend)
      .slice(0, 2);

    decliningTrends.forEach(section => {
      recommendations.push({
        type: 'attention',
        priority: 'medium',
        title: `Monitor ${section.sectionTitle} Performance`,
        description: `This section shows a declining trend. Review recent changes and ensure compliance standards are maintained.`,
        sectionTitle: section.sectionTitle,
        trend: section.improvementTrend
      });
    });

    // Add positive recommendations for well-performing sections
    const topPerformingSections = sectionAnalytics
      .filter(s => s.averageScore >= 90)
      .sort((a, b) => b.averageScore - a.averageScore)
      .slice(0, 2);

    topPerformingSections.forEach(section => {
      recommendations.push({
        type: 'success',
        priority: 'low',
        title: `Excellent ${section.sectionTitle} Compliance`,
        description: `This section maintains high compliance standards (${Math.round(section.averageScore)}%). Continue current practices.`,
        sectionTitle: section.sectionTitle,
        currentScore: section.averageScore
      });
    });

    return NextResponse.json({
      success: true,
      analytics: {
        overview: {
          totalAssessments,
          completedAssessments: completedCount,
          inProgressAssessments: inProgressCount,
          averageComplianceScore: Math.round(averageScore * 10) / 10,
          complianceStatus: averageScore >= 80 ? 'Compliant' : 'Needs Improvement',
          timeRange
        },
        complianceTrend,
        sectionAnalytics,
        recentActivity,
        recommendations: recommendations.slice(0, 5), // Top 5 recommendations
        dataPoints: {
          assessmentsThisMonth: assessments.filter(a => {
            const monthAgo = new Date();
            monthAgo.setMonth(monthAgo.getMonth() - 1);
            return new Date(a.createdAt) >= monthAgo;
          }).length,
          evidenceFilesUploaded: assessments.reduce((total, a) => total + (a.evidenceFiles?.length || 0), 0),
          averageCompletionTime: '2-3 hours', // This could be calculated from actual data
          complianceImprovement: sectionAnalytics.filter(s => s.improvementTrend > 0).length
        }
      }
    });

  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
