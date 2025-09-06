import Link from 'next/link';
import { BookOpenIcon, VideoCameraIcon, DocumentTextIcon, QuestionMarkCircleIcon, AcademicCapIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const guideCategories = [
  {
    title: 'Getting Started',
    description: 'Essential steps for DSPT compliance',
    icon: BookOpenIcon,
    guides: [
      { title: 'DSPT Overview & Requirements', duration: '10 min read', difficulty: 'Beginner' },
      { title: 'Setting Up Your First Assessment', duration: '15 min read', difficulty: 'Beginner' },
      { title: 'Understanding DSPT Standards', duration: '20 min read', difficulty: 'Intermediate' },
      { title: 'Compliance Timeline Planning', duration: '12 min read', difficulty: 'Beginner' },
    ]
  },
  {
    title: 'Technical Implementation',
    description: 'Step-by-step technical guidance',
    icon: DocumentTextIcon,
    guides: [
      { title: 'Data Encryption Best Practices', duration: '25 min read', difficulty: 'Advanced' },
      { title: 'Access Control Configuration', duration: '18 min read', difficulty: 'Intermediate' },
      { title: 'Audit Trail Implementation', duration: '22 min read', difficulty: 'Advanced' },
      { title: 'Backup & Recovery Procedures', duration: '30 min read', difficulty: 'Intermediate' },
    ]
  },
  {
    title: 'Policy & Procedures',
    description: 'Creating compliant policies',
    icon: AcademicCapIcon,
    guides: [
      { title: 'Data Protection Policy Templates', duration: '15 min read', difficulty: 'Beginner' },
      { title: 'Staff Training Programs', duration: '20 min read', difficulty: 'Intermediate' },
      { title: 'Incident Response Procedures', duration: '25 min read', difficulty: 'Intermediate' },
      { title: 'Risk Assessment Frameworks', duration: '35 min read', difficulty: 'Advanced' },
    ]
  },
];

const videoTutorials = [
  {
    title: 'DSPT Pro Platform Overview',
    description: 'Complete walkthrough of the DSPT Pro platform and its features',
    duration: '12:45',
    category: 'Getting Started',
    thumbnail: '/api/placeholder/300/200',
  },
  {
    title: 'Completing Your First Assessment',
    description: 'Step-by-step guide to completing your initial DSPT assessment',
    duration: '18:30',
    category: 'Assessment',
    thumbnail: '/api/placeholder/300/200',
  },
  {
    title: 'Setting Up Automated Monitoring',
    description: 'Configure automated compliance monitoring for your practice',
    duration: '15:20',
    category: 'Monitoring',
    thumbnail: '/api/placeholder/300/200',
  },
  {
    title: 'Generating Compliance Reports',
    description: 'Create comprehensive reports for stakeholders and auditors',
    duration: '10:15',
    category: 'Reporting',
    thumbnail: '/api/placeholder/300/200',
  },
];

const faqs = [
  {
    question: 'What is the NHS Data Security and Protection Toolkit (DSPT)?',
    answer: 'The DSPT is an online self-assessment tool that allows organizations to measure their performance against the National Data Guardian\'s 10 data security standards. It\'s mandatory for all organizations that have access to NHS patient data and systems.',
  },
  {
    question: 'Who needs to complete the DSPT?',
    answer: 'Any organization that processes NHS patient data must complete the DSPT annually. This includes GP practices, hospitals, social care providers, and third-party suppliers with access to NHS systems.',
  },
  {
    question: 'How long does DSPT compliance take?',
    answer: 'With DSPT Pro, most organizations can complete their initial assessment in 2-4 weeks, compared to 3-6 months manually. Our automation reduces ongoing compliance maintenance to just a few hours per month.',
  },
  {
    question: 'What happens if we fail the DSPT assessment?',
    answer: 'Organizations that don\'t meet the required standards may face restrictions on accessing NHS systems and patient data. DSPT Pro helps ensure you meet all requirements before submission.',
  },
  {
    question: 'How often do we need to update our DSPT submission?',
    answer: 'The DSPT must be submitted annually, but compliance should be maintained continuously. DSPT Pro provides ongoing monitoring to ensure you remain compliant throughout the year.',
  },
  {
    question: 'Can DSPT Pro integrate with our existing systems?',
    answer: 'Yes, DSPT Pro integrates with major healthcare systems including SystmOne, EMIS, and Vision. We also offer custom integrations for other systems through our API.',
  },
];

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpenIcon className="mx-auto h-16 w-16 text-white mb-6" />
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              DSPT Compliance Guide
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
              Comprehensive guides, tutorials, and resources to help you achieve and maintain NHS DSPT compliance with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Guide Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Step-by-Step Guides
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Expert-crafted guides to help you navigate every aspect of DSPT compliance.
            </p>
          </div>

          <div className="space-y-12">
            {guideCategories.map((category) => (
              <div key={category.title} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <category.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.guides.map((guide, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{guide.title}</h4>
                          <div className="flex items-center mt-1 text-sm text-gray-500 space-x-4">
                            <span>{guide.duration}</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                              guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {guide.difficulty}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <DocumentTextIcon className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Tutorials */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <VideoCameraIcon className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Video Tutorials
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Watch our expert-led video tutorials for visual learning and quick reference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTutorials.map((video, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <VideoCameraIcon className="h-12 w-12 text-gray-400" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                      {video.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <QuestionMarkCircleIcon className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Common questions about DSPT compliance and how DSPT Pro can help.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Additional Resources
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Access comprehensive resources to support your DSPT compliance journey.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center text-white">
                  <DocumentTextIcon className="h-6 w-6 mr-3" />
                  <span>Downloadable policy templates</span>
                </div>
                <div className="flex items-center text-white">
                  <AcademicCapIcon className="h-6 w-6 mr-3" />
                  <span>Staff training materials</span>
                </div>
                <div className="flex items-center text-white">
                  <UserGroupIcon className="h-6 w-6 mr-3" />
                  <span>Expert consultation sessions</span>
                </div>
                <div className="flex items-center text-white">
                  <BookOpenIcon className="h-6 w-6 mr-3" />
                  <span>Compliance checklists</span>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Personal Guidance?</h3>
                <p className="text-gray-600 mb-6">
                  Our DSPT experts are available to provide personalized guidance and answer your specific compliance questions.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Book a Consultation
                  </Link>
                  <Link
                    href="/support"
                    className="block w-full text-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
