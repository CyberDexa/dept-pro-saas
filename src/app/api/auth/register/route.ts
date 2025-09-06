import { NextRequest, NextResponse } from 'next/server';

// Simple mock registration for now - in production you'd use a real database
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Registration request received:', { ...body, password: '[HIDDEN]' });
    
    // Basic validation
    const { firstName, lastName, email, password, practiceName, practiceType, phone } = body;
    
    if (!firstName || !lastName || !email || !password || !practiceName || !practiceType || !phone) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters' },
        { status: 400 }
      );
    }
    
    // For now, simulate successful registration
    // In production, this would save to a real database
    const mockUser = {
      id: `user_${Date.now()}`,
      name: `${firstName} ${lastName}`,
      email,
      createdAt: new Date().toISOString(),
    };
    
    const mockPractice = {
      id: `practice_${Date.now()}`,
      name: practiceName,
      type: practiceType,
      createdAt: new Date().toISOString(),
    };
    
    console.log('Mock user created:', mockUser);
    
    return NextResponse.json({
      message: 'Account created successfully! Please contact support to activate your account.',
      user: mockUser,
      practice: mockPractice,
      note: 'This is a demo environment. Your account will be activated within 24 hours.',
    }, { status: 201 });
    
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}
