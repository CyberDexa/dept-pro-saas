import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const dsptSections = [
  {
    sectionNum: 1,
    title: "Asset management",
    description: "Managing data, equipment and software assets to protect information and maintain service delivery"
  },
  {
    sectionNum: 2,
    title: "Data protection and privacy",
    description: "Ensuring personal data is protected and privacy rights are respected"
  },
  {
    sectionNum: 3,
    title: "Data lifecycle",
    description: "Managing data throughout its lifecycle from creation to disposal"
  },
  {
    sectionNum: 4,
    title: "Access control",
    description: "Controlling who has access to data and systems"
  },
  {
    sectionNum: 5,
    title: "Vulnerability management",
    description: "Identifying and managing security vulnerabilities"
  },
  {
    sectionNum: 6,
    title: "Protective monitoring",
    description: "Monitoring systems and networks for security threats"
  },
  {
    sectionNum: 7,
    title: "Incident management",
    description: "Responding to and managing security incidents"
  },
  {
    sectionNum: 8,
    title: "Network security",
    description: "Securing network infrastructure and communications"
  },
  {
    sectionNum: 9,
    title: "User education and awareness",
    description: "Ensuring staff understand their security responsibilities"
  },
  {
    sectionNum: 10,
    title: "Home and mobile working",
    description: "Securing remote and mobile access to systems and data"
  }
];

const dsptQuestions = [
  // Section 1: Asset management
  {
    sectionNum: 1,
    questionNum: "1.1.1",
    question: "Do you have an up-to-date inventory of all devices that process personal data?",
    description: "This includes all computers, servers, mobile devices, and other equipment that handles personal data.",
    evidenceHint: "Provide an asset register or inventory list showing all devices that process personal data, including their locations and responsible users.",
    weight: 2,
    questionType: "YESNO"
  },
  {
    sectionNum: 1,
    questionNum: "1.1.2", 
    question: "Are all devices that process personal data configured securely?",
    description: "Devices should be hardened according to security best practices.",
    evidenceHint: "Provide evidence of security configuration standards and how they are applied to devices.",
    weight: 2,
    questionType: "YESNO"
  },
  {
    sectionNum: 1,
    questionNum: "1.2.1",
    question: "Do you have an up-to-date inventory of all software that processes personal data?",
    description: "This includes operating systems, applications, and cloud services.",
    evidenceHint: "Provide a software inventory showing all applications and services that process personal data.",
    weight: 2,
    questionType: "YESNO"
  },

  // Section 2: Data protection and privacy
  {
    sectionNum: 2,
    questionNum: "2.1.1",
    question: "Do you have a documented data protection policy?",
    description: "The policy should cover how personal data is handled throughout your organization.",
    evidenceHint: "Provide a copy of your data protection policy document.",
    weight: 3,
    questionType: "YESNO"
  },
  {
    sectionNum: 2,
    questionNum: "2.1.2",
    question: "Do you maintain a record of processing activities (ROPA)?",
    description: "GDPR requires organizations to document their data processing activities.",
    evidenceHint: "Provide your ROPA document or data processing register.",
    weight: 3,
    questionType: "YESNO"
  },
  {
    sectionNum: 2,
    questionNum: "2.2.1",
    question: "Do you have processes for handling data subject rights requests?",
    description: "This includes rights to access, rectification, erasure, and portability.",
    evidenceHint: "Provide procedures for handling subject access requests and other rights.",
    weight: 2,
    questionType: "YESNO"
  },

  // Section 3: Data lifecycle
  {
    sectionNum: 3,
    questionNum: "3.1.1",
    question: "Do you have documented retention schedules for personal data?",
    description: "Data should only be kept for as long as necessary for its intended purpose.",
    evidenceHint: "Provide retention schedules showing how long different types of data are kept.",
    weight: 2,
    questionType: "YESNO"
  },
  {
    sectionNum: 3,
    questionNum: "3.1.2",
    question: "Do you have secure processes for disposing of personal data?",
    description: "Data disposal should ensure information cannot be recovered.",
    evidenceHint: "Provide procedures for secure data disposal and evidence of implementation.",
    weight: 2,
    questionType: "YESNO"
  },

  // Section 4: Access control  
  {
    sectionNum: 4,
    questionNum: "4.1.1",
    question: "Do you have documented access control policies and procedures?",
    description: "Access to systems and data should be controlled based on business need.",
    evidenceHint: "Provide access control policies and procedures documentation.",
    weight: 3,
    questionType: "YESNO"
  },
  {
    sectionNum: 4,
    questionNum: "4.1.2",
    question: "Do you regularly review user access rights?",
    description: "Access rights should be reviewed to ensure they remain appropriate.",
    evidenceHint: "Provide evidence of regular access reviews, such as review logs or reports.",
    weight: 2,
    questionType: "YESNO"
  },
  {
    sectionNum: 4,
    questionNum: "4.2.1",
    question: "Do you use multi-factor authentication for administrative access?",
    description: "Administrative accounts should have additional protection through MFA.",
    evidenceHint: "Provide evidence that MFA is configured for administrative accounts.",
    weight: 3,
    questionType: "YESNO"
  },

  // Section 5: Vulnerability management
  {
    sectionNum: 5,
    questionNum: "5.1.1",
    question: "Do you have processes for identifying security vulnerabilities?",
    description: "Regular vulnerability assessments should be conducted.",
    evidenceHint: "Provide vulnerability assessment reports or scanning procedures.",
    weight: 2,
    questionType: "YESNO"
  },
  {
    sectionNum: 5,
    questionNum: "5.1.2",
    question: "Do you have processes for remediating identified vulnerabilities?",
    description: "Vulnerabilities should be addressed in a timely manner based on risk.",
    evidenceHint: "Provide evidence of vulnerability remediation processes and timelines.",
    weight: 2,
    questionType: "YESNO"
  }
];

async function main() {
  console.log('Starting DSPT data seeding...');

  // Create sections
  for (const section of dsptSections) {
    await prisma.dSPTSection.upsert({
      where: { sectionNum: section.sectionNum },
      update: {
        title: section.title,
        description: section.description
      },
      create: section
    });
  }

  console.log('Created DSPT sections...');

  // Create questions
  for (const question of dsptQuestions) {
    const section = await prisma.dSPTSection.findUnique({
      where: { sectionNum: question.sectionNum }
    });

    if (section) {
      await prisma.dSPTQuestion.create({
        data: {
          sectionId: section.id,
          questionNum: question.questionNum,
          question: question.question,
          description: question.description,
          evidenceHint: question.evidenceHint,
          weight: question.weight || 1.0,
          questionType: question.questionType || 'YESNO',
          isRequired: true
        }
      });
    }
  }

  console.log('Created DSPT questions...');
  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
