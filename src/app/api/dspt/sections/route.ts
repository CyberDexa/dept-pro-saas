import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Fetch sections and questions from database
    const sections = await (prisma as any).dSPTSection.findMany({
      include: {
        questions: {
          orderBy: {
            id: 'asc'
          }
        }
      },
      orderBy: {
        id: 'asc'
      }
    });

    return NextResponse.json(sections);
  } catch (error) {
    console.error('Error fetching DSPT sections:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { practiceId } = await request.json();

    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Verify practice ownership
    const practice = await prisma.practice.findFirst({
      where: {
        id: practiceId,
        ownerId: user.id
      }
    });

    if (!practice) {
      return NextResponse.json({ error: 'Practice not found or access denied' }, { status: 404 });
    }

    // Create new DSPT assessment
    const assessment = await prisma.assessment.create({
      data: {
        title: `DSPT Assessment - ${new Date().toLocaleDateString()}`,
        type: 'DSPT',
        status: 'DRAFT',
        practiceId: practice.id,
        userId: user.id
      }
    });

    return NextResponse.json(assessment);
  } catch (error) {
    console.error('Error creating DSPT assessment:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
