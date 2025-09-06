import Link from 'next/link';
import { UsersIcon, GlobeEuropeAfricaIcon, UserGroupIcon, ShieldCheckIcon, AcademicCapIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const partnerTypes = [
  {
    title: 'Technology Partners',
    description: 'Leading healthcare technology companies that integrate with DSPT Pro',
    icon: GlobeEuropeAfricaIcon,
    partners: [
      { name: 'SystmOne (TPP)', logo: '/api/placeholder/150/60', description: 'Official integration partner for SystmOne EHR systems' },
      { name: 'EMIS Health', logo: '/api/placeholder/150/60', description: 'Certified integration with EMIS Web and EMIS Health platforms' },
      { name: 'Vision (Microtest)', logo: '/api/placeholder/150/60', description: 'Comprehensive integration with Vision practice management' },
      { name: 'Microsoft', logo: '/api/placeholder/150/60', description: 'Microsoft 365 security and compliance monitoring' },
    ]
  },
  {
    title: 'Consulting Partners',
    description: 'Expert consultants who deliver DSPT Pro implementations',
    icon: UserGroupIcon,
    partners: [
      { name: 'Healthcare IT Solutions Ltd', logo: '/api/placeholder/150/60', description: 'Specialist healthcare IT consultancy with 15+ years experience' },
      { name: 'NHS Digital Consultants', logo: '/api/placeholder/150/60', description: 'Former NHS Digital staff providing expert DSPT guidance' },
      { name: 'Secure Health Partners', logo: '/api/placeholder/150/60', description: 'Cybersecurity specialists focused on healthcare sector' },
      { name: 'Compliance First', logo: '/api/placeholder/150/60', description: 'Healthcare compliance consultancy serving 200+ practices' },
    ]
  },
  {
    title: 'Training Partners',
    description: 'Educational institutions and training providers',
    icon: AcademicCapIcon,
    partners: [
      { name: 'NHS Education England', logo: '/api/placeholder/150/60', description: 'Official NHS training partner for data security education' },
      { name: 'Royal College of GPs', logo: '/api/placeholder/150/60', description: 'Continuing professional development programs' },
      { name: 'Health Informatics Society', logo: '/api/placeholder/150/60', description: 'Professional development and certification programs' },
      { name: 'Cyber Security Academy', logo: '/api/placeholder/150/60', description: 'Specialized cybersecurity training for healthcare' },
    ]
  },
];

const partnerBenefits = [
  {
    title: 'Revenue Share',
    description: 'Competitive revenue sharing for successful customer referrals and implementations.',
    icon: BuildingOfficeIcon,
  },
  {
    title: 'Joint Marketing',
    description: 'Co-marketing opportunities including case studies, webinars, and conference presentations.',
    icon: GlobeEuropeAfricaIcon,
  },
  {
    title: 'Technical Support',
    description: 'Dedicated technical support and training for partner teams.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Certification Program',
    description: 'Comprehensive certification program to become a DSPT Pro specialist.',
    icon: AcademicCapIcon,
  },
];

const partnerRequirements = [
  'Demonstrated experience in healthcare technology or compliance',
  'Active customer base in the UK healthcare sector',
  'Commitment to customer success and service excellence',
  'Technical expertise in healthcare IT systems',
  'Strong reputation and financial stability',
  'Alignment with DSPT Pro values and mission',
];

const testimonials = [
  {
    quote: "Partnering with DSPT Pro has transformed our ability to deliver comprehensive compliance solutions. Their platform is intuitive and their support is exceptional.",
    author: "Sarah Mitchell",
    role: "Director of Healthcare Solutions",
    company: "Healthcare IT Solutions Ltd",
  },
  {
    quote: "The DSPT Pro partnership program has opened new revenue streams for our consultancy. The joint training and certification program ensures we deliver consistent, high-quality implementations.",
    author: "Dr. James Wilson",
    role: "Principal Consultant",
    company: "NHS Digital Consultants",
  },
  {
    quote: "As a technology partner, the integration process was seamless. DSPT Pro's APIs are well-documented and their technical team is incredibly responsive.",
    author: "Michael Rodriguez",
    role: "Technical Director",
    company: "Secure Health Partners",
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <UsersIcon className="mx-auto h-16 w-16 text-white mb-6" />
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Partner Ecosystem
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
              Join our growing network of technology partners, consultants, and training providers committed to improving healthcare data security across the UK.
            </p>
          </div>
        </div>
      </div>

      {/* Partner Types */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Partner Network
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Working together to deliver comprehensive DSPT compliance solutions.
            </p>
          </div>

          <div className="space-y-16">
            {partnerTypes.map((category, index) => (
              <div key={index}>
                <div className="flex items-center mb-8">
                  <category.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-center h-16 mb-4 bg-gray-50 rounded">
                        <div className="text-gray-400 text-sm font-medium">
                          {partner.name}
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h4>
                      <p className="text-gray-600 text-sm">{partner.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Benefits */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Partnership Benefits
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive support to help you succeed with DSPT Pro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What Our Partners Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Hear from our trusted partners about their experience working with DSPT Pro.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-8">
                <blockquote className="text-gray-600 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <UserGroupIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-lg font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Become a Partner */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Become a DSPT Pro Partner
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Join our partner ecosystem and help healthcare organizations across the UK achieve DSPT compliance while growing your business.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Partner Requirements</h3>
                <ul className="space-y-2 text-blue-100">
                  {partnerRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Partner Application</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      id="contact"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="partnership" className="block text-sm font-medium text-gray-700 mb-1">
                      Partnership Type
                    </label>
                    <select
                      id="partnership"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select partnership type</option>
                      <option value="technology">Technology Partner</option>
                      <option value="consulting">Consulting Partner</option>
                      <option value="training">Training Partner</option>
                      <option value="reseller">Reseller Partner</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Tell us about your company
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Describe your company, experience, and why you want to partner with DSPT Pro..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Resources */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Partner Resources
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to succeed as a DSPT Pro partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <AcademicCapIcon className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Training Portal</h3>
              <p className="text-gray-600 mb-4">
                Access comprehensive training materials, certification programs, and ongoing education resources.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Access Portal →
              </Link>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <GlobeEuropeAfricaIcon className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Resources</h3>
              <p className="text-gray-600 mb-4">
                Download marketing materials, case studies, and co-branded content to support your sales efforts.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Download Materials →
              </Link>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <ShieldCheckIcon className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Documentation</h3>
              <p className="text-gray-600 mb-4">
                Access API documentation, integration guides, and technical support resources.
              </p>
              <Link
                href="/docs"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                View Docs →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
