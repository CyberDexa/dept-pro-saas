import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const assessmentId = formData.get('assessmentId') as string;
    const questionId = formData.get('questionId') as string;
    const sectionId = formData.get('sectionId') as string;

    if (!file || !assessmentId) {
      return NextResponse.json({ error: 'File and assessment ID are required' }, { status: 400 });
    }

    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Verify assessment ownership
    const assessment = await (prisma as any).assessment.findFirst({
      where: {
        id: assessmentId,
        userId: user.id
      }
    });

    if (!assessment) {
      return NextResponse.json({ error: 'Assessment not found or access denied' }, { status: 404 });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const fileExtension = file.name.split('.').pop();
    const fileName = `evidence_${timestamp}_${Math.random().toString(36).substring(7)}.${fileExtension}`;
    
    // Create upload directory if it doesn't exist
    const uploadDir = join(process.cwd(), 'public', 'uploads', 'evidence');
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }

    // Save file to disk
    const uploadPath = join(uploadDir, fileName);
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(uploadPath, buffer);

    // Save file record to database
    const evidenceFile = await (prisma as any).evidenceFile.create({
      data: {
        fileName,
        originalName: file.name,
        fileSize: file.size,
        mimeType: file.type,
        uploadPath: `/uploads/evidence/${fileName}`,
        assessmentId,
        questionId: questionId ? parseInt(questionId) : null,
        sectionId: sectionId ? parseInt(sectionId) : null,
        uploadedBy: user.id
      }
    });

    return NextResponse.json({
      success: true,
      id: evidenceFile.id,
      fileName: evidenceFile.fileName,
      originalName: evidenceFile.originalName,
      fileSize: evidenceFile.fileSize,
      mimeType: evidenceFile.mimeType,
      uploadPath: evidenceFile.uploadPath,
      createdAt: evidenceFile.createdAt
    });

  } catch (error) {
    console.error('Error uploading evidence file:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const fileId = searchParams.get('id');

    if (!fileId) {
      return NextResponse.json({ error: 'File ID is required' }, { status: 400 });
    }

    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Verify file ownership through assessment
    const evidenceFile = await (prisma as any).evidenceFile.findFirst({
      where: {
        id: fileId,
        uploadedBy: user.id
      }
    });

    if (!evidenceFile) {
      return NextResponse.json({ error: 'File not found or access denied' }, { status: 404 });
    }

    // Delete file record from database
    await (prisma as any).evidenceFile.delete({
      where: { id: fileId }
    });

    // Note: In production, you might also want to delete the physical file
    // from the filesystem, but for this demo we'll keep it

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error deleting evidence file:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
