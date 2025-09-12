const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function fixComplianceData() {
  try {
    console.log('=== FIXING COMPLIANCE DATA ===\n');
    
    // Get all assessment responses
    const responses = await prisma.assessmentResponse.findMany();
    
    console.log(`Found ${responses.length} assessment responses`);
    
    let updatedCount = 0;
    
    for (const response of responses) {
      const shouldBeCompliant = response.response?.toLowerCase() === 'yes';
      
      if (response.isCompliant !== shouldBeCompliant) {
        await prisma.assessmentResponse.update({
          where: { id: response.id },
          data: { isCompliant: shouldBeCompliant }
        });
        updatedCount++;
        console.log(`Updated response ${response.id}: "${response.response}" -> isCompliant: ${shouldBeCompliant}`);
      }
    }
    
    console.log(`\nFixed ${updatedCount} compliance records`);
    
    // Now let's check the latest assessment again
    const assessment = await prisma.assessment.findFirst({
      orderBy: { updatedAt: 'desc' },
      include: {
        responses: true
      }
    });
    
    if (assessment) {
      const compliantCount = assessment.responses.filter(r => r.isCompliant === true).length;
      console.log(`\nLatest assessment now has ${compliantCount} compliant responses out of ${assessment.responses.length} total`);
    }
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

fixComplianceData();
