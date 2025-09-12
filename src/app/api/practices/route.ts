import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        ownedPractices: {
          include: {
            _count: {
              select: {
                users: true,
                assessments: true
              }
            }
          }
        },
        memberPractices: {
          include: {
            owner: {
              select: {
                name: true,
                email: true
              }
            },
            _count: {
              select: {
                users: true,
                assessments: true
              }
            }
          }
        }
      }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Combine owned and member practices
    const ownedPractices = user.ownedPractices.map(practice => ({
      ...practice,
      role: 'owner',
      canManage: true
    }));

    const memberPractices = user.memberPractices.map(practice => ({
      ...practice,
      role: 'member',
      canManage: false
    }));

    const allPractices = [...ownedPractices, ...memberPractices];

    return NextResponse.json({
      practices: allPractices,
      totalCount: allPractices.length
    });

  } catch (error) {
    console.error('Error fetching practices:', error);
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

    const { name, type, size, address, phone, email, odsCode } = await request.json();

    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Create new practice
    const practice = await prisma.practice.create({
      data: {
        name,
        type,
        size: size || 'Small',
        address,
        phone,
        email,
        odsCode,
        ownerId: user.id
      }
    });

    return NextResponse.json({
      success: true,
      practice
    });

  } catch (error) {
    console.error('Error creating practice:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
