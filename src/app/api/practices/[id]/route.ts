import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const practiceId = params.id;

    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Get practice with access check
    const practice = await prisma.practice.findFirst({
      where: {
        id: practiceId,
        OR: [
          { ownerId: user.id },
          { users: { some: { id: user.id } } }
        ]
      },
      include: {
        owner: {
          select: {
            name: true,
            email: true
          }
        },
        users: {
          select: {
            id: true,
            name: true,
            email: true,
            jobTitle: true,
            lastLoginAt: true
          }
        },
        assessments: {
          take: 10,
          orderBy: { updatedAt: 'desc' },
          select: {
            id: true,
            title: true,
            status: true,
            createdAt: true,
            updatedAt: true
          }
        },
        _count: {
          select: {
            users: true,
            assessments: true
          }
        }
      }
    });

    if (!practice) {
      return NextResponse.json({ error: 'Practice not found or access denied' }, { status: 404 });
    }

    // Determine user's role
    const isOwner = practice.ownerId === user.id;
    const role = isOwner ? 'owner' : 'member';

    return NextResponse.json({
      practice: {
        ...practice,
        userRole: role,
        canManage: isOwner
      }
    });

  } catch (error) {
    console.error('Error fetching practice details:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const practiceId = params.id;
    const updateData = await request.json();

    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if user owns the practice
    const practice = await prisma.practice.findFirst({
      where: {
        id: practiceId,
        ownerId: user.id
      }
    });

    if (!practice) {
      return NextResponse.json({ error: 'Practice not found or insufficient permissions' }, { status: 404 });
    }

    // Update practice
    const updatedPractice = await prisma.practice.update({
      where: { id: practiceId },
      data: {
        name: updateData.name,
        type: updateData.type,
        size: updateData.size,
        address: updateData.address,
        phone: updateData.phone,
        email: updateData.email,
        odsCode: updateData.odsCode,
        cqcRating: updateData.cqcRating
      }
    });

    return NextResponse.json({
      success: true,
      practice: updatedPractice
    });

  } catch (error) {
    console.error('Error updating practice:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const practiceId = params.id;

    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if user owns the practice
    const practice = await prisma.practice.findFirst({
      where: {
        id: practiceId,
        ownerId: user.id
      }
    });

    if (!practice) {
      return NextResponse.json({ error: 'Practice not found or insufficient permissions' }, { status: 404 });
    }

    // Delete practice (this will cascade delete related records)
    await prisma.practice.delete({
      where: { id: practiceId }
    });

    return NextResponse.json({
      success: true,
      message: 'Practice deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting practice:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
