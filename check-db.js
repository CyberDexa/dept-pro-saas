const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://neondb_owner:npg_SJFiDhtU3CN7@ep-fancy-frog-abd4wmgp-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require"
    }
  }
});

async function checkData() {
  try {
    const sections = await prisma.dSPTSection.findMany({
      include: {
        questions: true
      }
    });
    
    console.log('Sections found:', sections.length);
    
    if (sections.length > 0) {
      console.log('First section:', sections[0]);
      console.log('Questions in first section:', sections[0].questions.length);
      if (sections[0].questions.length > 0) {
        console.log('First question:', sections[0].questions[0]);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkData();
