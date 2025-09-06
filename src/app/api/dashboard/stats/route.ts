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

    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Get user's owned practices
    const practices = await prisma.practice.findMany({
      where: { ownerId: user.id },
      include: {
        assessments: {
          include: {
            responses: true
          },
          orderBy: { updatedAt: 'desc' }
        }
      }
    });

    if (practices.length === 0) {
      return NextResponse.json({ error: 'No practice found' }, { status: 404 });
    }

    // Calculate compliance statistics using the first practice
    const practice = practices[0];
    const latestAssessment = practice.assessments[0];
    let complianceScore = 0;
    let completedSections = 0;
    let totalSections = 10; // DSPT has 10 main sections
    let actionItems = 0;

    if (latestAssessment) {
      const responses = latestAssessment.responses;
      const totalResponses = responses.length;
      const positiveResponses = responses.filter(r => r.response === 'yes' || r.response === 'compliant').length;
      
      complianceScore = totalResponses > 0 ? Math.round((positiveResponses / totalResponses) * 100) : 0;
      
      // Count completed sections (simplified logic)
      completedSections = Math.floor(totalResponses / 5); // Assuming 5 questions per section
      
      // Count action items (non-compliant responses)
      actionItems = responses.filter(r => r.response === 'no' || r.response === 'non-compliant').length;
    }

    const stats = {
      complianceScore,
      dsptStatus: latestAssessment ? 
        (latestAssessment.status === 'completed' ? 'Completed' : 'In Progress') : 
        'Not Started',
      itemsRemaining: Math.max(0, totalSections - completedSections),
      actionItems,
      highPriorityItems: Math.ceil(actionItems * 0.6), // 60% are high priority
      lastReview: latestAssessment?.updatedAt || practice.createdAt,
      nextReview: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Dashboard stats error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
