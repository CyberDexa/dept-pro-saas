import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const practiceId = params.id;
    const { userEmail } = await request.json();

    // Get current user
    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!currentUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if user owns the practice
    const practice = await prisma.practice.findFirst({
      where: {
        id: practiceId,
        ownerId: currentUser.id
      }
    });

    if (!practice) {
      return NextResponse.json({ error: 'Practice not found or insufficient permissions' }, { status: 404 });
    }

    // Find the user to add
    const userToAdd = await prisma.user.findUnique({
      where: { email: userEmail }
    });

    if (!userToAdd) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Add user to practice members
    await prisma.practice.update({
      where: { id: practiceId },
      data: {
        users: {
          connect: { id: userToAdd.id }
        }
      }
    });

    return NextResponse.json({
      success: true,
      message: 'User added to practice successfully'
    });

  } catch (error) {
    console.error('Error adding practice member:', error);
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
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Get current user
    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!currentUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if user owns the practice
    const practice = await prisma.practice.findFirst({
      where: {
        id: practiceId,
        ownerId: currentUser.id
      }
    });

    if (!practice) {
      return NextResponse.json({ error: 'Practice not found or insufficient permissions' }, { status: 404 });
    }

    // Remove user from practice members
    await prisma.practice.update({
      where: { id: practiceId },
      data: {
        users: {
          disconnect: { id: userId }
        }
      }
    });

    return NextResponse.json({
      success: true,
      message: 'User removed from practice successfully'
    });

  } catch (error) {
    console.error('Error removing practice member:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
