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
    
    // Create user with only the basic fields
    const user = await prisma.user.create({
      data: {
        name: `${validatedData.firstName} ${validatedData.lastName}`,
        email: validatedData.email,
        hashedPassword,
        role: 'USER',
      } as any,
    });
    
    // Create practice
    const practice = await prisma.practice.create({
      data: {
        name: validatedData.practiceName,
        type: validatedData.practiceType,
        size: 'SMALL',
        phone: validatedData.phone,
        email: validatedData.email,
      } as any,
    });
    
    console.log('User created successfully:', { id: user.id, email: user.email });
    
    // Return success response
    return NextResponse.json({
      message: 'Account created successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      practice: {
        id: practice.id,
        name: practice.name,
        type: practice.type,
      },
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
