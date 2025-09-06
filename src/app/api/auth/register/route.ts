import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const signupSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  practiceName: z.string().min(1, 'Practice name is required'),
  practiceType: z.string().min(1, 'Practice type is required'),
  phone: z.string().min(1, 'Phone number is required'),
  selectedPlan: z.string().optional(),
});

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Registration request:', { ...body, password: '[HIDDEN]' });
    
    // Validate the request data
    const validatedData = signupSchema.parse(body);
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email }
    });
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      );
    }
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(validatedData.password, 12);
    
    // Create user and practice in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create the user
      const user = await tx.user.create({
        data: {
          name: `${validatedData.firstName} ${validatedData.lastName}`,
          email: validatedData.email,
          firstName: validatedData.firstName,
          lastName: validatedData.lastName,
          hashedPassword,
          phone: validatedData.phone,
          role: 'USER',
          isActive: true,
        },
      });
      
      // Create the practice
      const practice = await tx.practice.create({
        data: {
          name: validatedData.practiceName,
          type: validatedData.practiceType,
          size: 'SMALL',
          phone: validatedData.phone,
          email: validatedData.email,
          subscriptionPlan: validatedData.selectedPlan || 'starter',
          isActive: true,
          owner: {
            connect: { id: user.id }
          },
          users: {
            connect: { id: user.id }
          }
        },
      });
      
      return { user, practice };
    });
    
    console.log('User created successfully:', { id: result.user.id, email: result.user.email });
    
    // Return success response (without password)
    const { hashedPassword: pwd, ...userWithoutPassword } = result.user;
    
    return NextResponse.json({
      message: 'Account created successfully',
      user: userWithoutPassword,
      practice: result.practice,
    }, { status: 201 });
    
  } catch (error) {
    console.error('Registration error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    
    // Handle Prisma errors
    if (error instanceof Error) {
      if (error.message.includes('Unique constraint')) {
        return NextResponse.json(
          { error: 'User with this email already exists' },
          { status: 400 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}
