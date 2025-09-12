const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function debugAssessment() {
  try {
    console.log('=== DEBUGGING ASSESSMENT DATA ===\n');
    
    // Get latest assessment
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
      console.log('No assessments found');
      return;
    }

    console.log('Latest Assessment:');
    console.log(`- ID: ${assessment.id}`);
    console.log(`- Status: ${assessment.status}`);
    console.log(`- Total Responses: ${assessment.responses.length}`);
    console.log(`- Overall Score: ${assessment.overallScore}`);
    console.log(`- Pass Status: ${assessment.passStatus}\n`);

    console.log('Responses Detail:');
    assessment.responses.forEach((response, index) => {
      console.log(`${index + 1}. Question ${response.questionId}:`);
      console.log(`   Response: ${response.response}`);
      console.log(`   isCompliant: ${response.isCompliant}`);
      console.log(`   Section: ${response.dsptQuestion?.section?.title || 'Unknown'}`);
      console.log('');
    });

    // Count compliant responses
    const compliantCount = assessment.responses.filter(r => r.isCompliant === true).length;
    const yesCount = assessment.responses.filter(r => r.response === 'YES').length;
    
    console.log(`\nCompliance Analysis:`);
    console.log(`- Responses with isCompliant=true: ${compliantCount}`);
    console.log(`- Responses with response='YES': ${yesCount}`);
    console.log(`- Should match: ${compliantCount === yesCount ? 'YES' : 'NO'}`);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

debugAssessment();
