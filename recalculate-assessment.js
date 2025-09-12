const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function recalculateAssessment() {
  try {
    console.log('=== RECALCULATING ASSESSMENT SCORES ===\n');
    
    // Get the latest assessment
    const assessment = await prisma.assessment.findFirst({
      orderBy: { updatedAt: 'desc' },
      include: {
        responses: {
          include: {
            dsptQuestion: {
              include: {
                section: true
              }
            }
          }
        }
      }
    });

    if (!assessment) {
      console.log('No assessment found');
      return;
    }

    console.log(`Recalculating assessment: ${assessment.id}`);
    
    // Get all DSPT questions
    const allQuestions = await prisma.dSPTQuestion.findMany({
      include: {
        section: true
      }
    });

    // Calculate scores
    const totalQuestions = allQuestions.length;
    const answeredQuestions = assessment.responses.length;
    const passedQuestions = assessment.responses.filter(r => r.isCompliant === true).length;
    
    console.log(`- Total Questions: ${totalQuestions}`);
    console.log(`- Answered Questions: ${answeredQuestions}`);
    console.log(`- Passed Questions: ${passedQuestions}`);
    
    // Calculate section scores
    const sectionScores = new Map();
    
    for (const response of assessment.responses) {
      if (response.dsptQuestion?.section) {
        const sectionId = response.dsptQuestion.section.id;
        const sectionTitle = response.dsptQuestion.section.title;
        
        if (!sectionScores.has(sectionId)) {
          sectionScores.set(sectionId, {
            sectionId,
            sectionTitle,
            totalQuestions: 0,
            answeredQuestions: 0,
            passedQuestions: 0
          });
        }
        
        const sectionData = sectionScores.get(sectionId);
        sectionData.answeredQuestions += 1;
        if (response.isCompliant === true) {
          sectionData.passedQuestions += 1;
        }
      }
    }

    // Count total questions per section
    const sectionsQuestionsCount = new Map();
    for (const question of allQuestions) {
      const sectionId = question.section.id;
      sectionsQuestionsCount.set(sectionId, (sectionsQuestionsCount.get(sectionId) || 0) + 1);
    }

    // Update section scores with total questions and calculate percentages
    const sectionEntriesArray = Array.from(sectionScores.entries());
    for (const [sectionId, sectionData] of sectionEntriesArray) {
      sectionData.totalQuestions = sectionsQuestionsCount.get(sectionId) || 0;
      sectionData.sectionScore = sectionData.totalQuestions > 0 
        ? (sectionData.passedQuestions / sectionData.totalQuestions) * 100 
        : 0;
    }

    // Calculate overall score
    const overallScore = totalQuestions > 0 ? (passedQuestions / totalQuestions) * 100 : 0;
    
    // Determine pass status
    const passStatus = overallScore >= 80 ? 'PASS' : 'FAIL';

    console.log(`- Overall Score: ${overallScore.toFixed(1)}%`);
    console.log(`- Pass Status: ${passStatus}\n`);

    // Update assessment with completion data
    const updatedAssessment = await prisma.assessment.update({
      where: { id: assessment.id },
      data: {
        overallScore,
        passStatus,
        totalQuestions,
        answeredQuestions,
        passedQuestions
      }
    });

    // Clear existing section scores
    await prisma.sectionScore.deleteMany({
      where: { assessmentId: assessment.id }
    });

    // Create new section score records
    console.log('Section Scores:');
    const sectionScoreArray = Array.from(sectionScores.entries());
    for (const [_, sectionData] of sectionScoreArray) {
      await prisma.sectionScore.create({
        data: {
          assessmentId: assessment.id,
          sectionId: sectionData.sectionId,
          sectionTitle: sectionData.sectionTitle,
          totalQuestions: sectionData.totalQuestions,
          answeredQuestions: sectionData.answeredQuestions,
          passedQuestions: sectionData.passedQuestions,
          sectionScore: sectionData.sectionScore
        }
      });
      
      console.log(`- ${sectionData.sectionTitle}: ${sectionData.passedQuestions}/${sectionData.totalQuestions} (${sectionData.sectionScore.toFixed(1)}%)`);
    }

    console.log('\n✅ Assessment scores recalculated successfully!');

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

recalculateAssessment();
