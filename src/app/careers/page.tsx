import Link from 'next/link';
import { BriefcaseIcon, MapPinIcon, ClockIcon, CurrencyPoundIcon, UsersIcon, HeartIcon } from '@heroicons/react/24/outline';

const jobOpenings = [
  {
    title: 'Senior Healthcare Compliance Consultant',
    department: 'Consulting',
    location: 'London, UK',
    type: 'Full-time',
    salary: '£55,000 - £75,000',
    description: 'Lead DSPT compliance projects for healthcare organizations across the UK. Work directly with NHS trusts and private practices to implement robust data security frameworks.',
    requirements: [
      '5+ years experience in healthcare compliance',
      'DSPT certification or equivalent',
      'Strong understanding of NHS data standards',
      'Excellent client-facing communication skills',
    ],
    posted: '2024-09-01',
  },
  {
    title: 'Product Manager - Healthcare Technology',
    department: 'Product',
    location: 'Manchester, UK',
    type: 'Full-time',
    salary: '£50,000 - £70,000',
    description: 'Drive product strategy and development for our DSPT compliance platform. Work closely with healthcare professionals to understand their needs and translate them into product features.',
    requirements: [
      '3+ years product management experience',
      'Healthcare technology background preferred',
      'Strong analytical and strategic thinking',
      'Experience with SaaS platforms',
    ],
    posted: '2024-08-28',
  },
  {
    title: 'Senior Software Engineer - Security',
    department: 'Engineering',
    location: 'Edinburgh, UK',
    type: 'Full-time',
    salary: '£60,000 - £80,000',
    description: 'Build and maintain security features for our healthcare compliance platform. Focus on encryption, access controls, and audit systems that meet NHS security standards.',
    requirements: [
      '5+ years software development experience',
      'Strong background in security engineering',
      'Experience with Node.js, React, and cloud platforms',
      'Understanding of healthcare data security requirements',
    ],
    posted: '2024-08-25',
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Birmingham, UK',
    type: 'Full-time',
    salary: '£35,000 - £45,000',
    description: 'Help healthcare practices succeed with DSPT Pro. Provide onboarding, training, and ongoing support to ensure customers achieve their compliance goals.',
    requirements: [
      '2+ years customer success experience',
      'Healthcare industry knowledge preferred',
      'Strong communication and problem-solving skills',
      'Ability to explain technical concepts to non-technical users',
    ],
    posted: '2024-08-22',
  },
  {
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Remote, UK',
    type: 'Full-time',
    salary: '£30,000 - £40,000',
    description: 'Drive digital marketing initiatives to reach healthcare professionals. Manage content marketing, SEO, and digital campaigns targeting GP practices and healthcare organizations.',
    requirements: [
      '2+ years digital marketing experience',
      'Healthcare or B2B SaaS marketing preferred',
      'Strong analytical skills and data-driven approach',
      'Experience with marketing automation tools',
    ],
    posted: '2024-08-20',
  },
  {
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'London, UK',
    type: 'Full-time',
    salary: '£40,000 - £55,000',
    description: 'Design intuitive interfaces for healthcare professionals using our compliance platform. Focus on creating user experiences that simplify complex compliance processes.',
    requirements: [
      '3+ years UX/UI design experience',
      'Portfolio demonstrating complex B2B application design',
      'Experience with design systems and accessibility',
      'Understanding of healthcare workflows preferred',
    ],
    posted: '2024-08-18',
  },
];

const benefits = [
  {
    title: 'Competitive Salary & Equity',
    description: 'Competitive salary packages with equity participation in our growing company.',
    icon: CurrencyPoundIcon,
  },
  {
    title: 'Flexible Working',
    description: 'Flexible hours and remote working options to support work-life balance.',
    icon: ClockIcon,
  },
  {
    title: 'Health & Wellbeing',
    description: 'Comprehensive health insurance, mental health support, and wellness programs.',
    icon: HeartIcon,
  },
  {
    title: 'Learning & Development',
    description: 'Annual learning budget, conference attendance, and professional development opportunities.',
    icon: UsersIcon,
  },
];

const companyValues = [
  {
    title: 'Patient-Centric',
    description: 'Everything we do is ultimately about protecting patient data and improving healthcare outcomes.',
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in all our work, from code quality to customer service.',
  },
  {
    title: 'Innovation',
    description: 'We continuously innovate to solve complex healthcare compliance challenges.',
  },
  {
    title: 'Transparency',
    description: 'We believe in open communication and transparency in all our interactions.',
  },
  {
    title: 'Collaboration',
    description: 'We work together across disciplines to create the best solutions for our customers.',
  },
  {
    title: 'Impact',
    description: 'We measure our success by the positive impact we have on healthcare organizations.',
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BriefcaseIcon className="mx-auto h-16 w-16 text-white mb-6" />
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Join Our Mission
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
              Help us transform healthcare data security and compliance. Join a team dedicated to protecting patient data and empowering healthcare professionals across the UK.
            </p>
          </div>
        </div>
      </div>

      {/* Company Mission */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Making Healthcare Compliance Simple
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                At DSPT Pro, we believe that healthcare professionals should focus on patient care, not complex compliance paperwork. Our mission is to simplify NHS DSPT compliance through intelligent automation and expert guidance.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                We're a growing team of healthcare compliance experts, engineers, and designers passionate about improving healthcare data security across the UK.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Work With Us?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Direct impact on healthcare data security across the UK</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Work with cutting-edge technology in healthcare compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Collaborative culture with opportunities for growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Flexible working arrangements and excellent benefits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-xl text-gray-600">
              The principles that guide everything we do at DSPT Pro.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Benefits & Perks</h2>
            <p className="mt-4 text-xl text-gray-600">
              We take care of our team so they can take care of our customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Openings */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Open Positions</h2>
            <p className="mt-4 text-xl text-gray-600">
              Join our growing team and help shape the future of healthcare compliance.
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="lg:flex lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      <span className="ml-3 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3 gap-4">
                      <div className="flex items-center">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <CurrencyPoundIcon className="h-4 w-4 mr-1" />
                        {job.salary}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Key Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <p className="text-xs text-gray-500">Posted: {job.posted}</p>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Hiring Process</h2>
            <p className="mt-4 text-xl text-gray-600">
              We believe in a transparent and efficient hiring process that respects your time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 bg-blue-100 rounded-full mb-4">
                <span className="text-lg font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Application</h3>
              <p className="text-gray-600">Submit your application through our careers page or via email.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 bg-blue-100 rounded-full mb-4">
                <span className="text-lg font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Review</h3>
              <p className="text-gray-600">Our team reviews your application and experience within 3-5 business days.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 bg-blue-100 rounded-full mb-4">
                <span className="text-lg font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600">Meet with our team to discuss your experience and the role requirements.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 bg-blue-100 rounded-full mb-4">
                <span className="text-lg font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Decision</h3>
              <p className="text-gray-600">We'll make a decision quickly and provide feedback regardless of the outcome.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Don't See the Right Role?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our mission. Send us your CV and tell us how you'd like to contribute to improving healthcare data security.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
