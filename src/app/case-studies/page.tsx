import Link from 'next/link';
import { DocumentTextIcon, ChartBarIcon, UsersIcon, ClockIcon, CheckCircleIcon, StarIcon } from '@heroicons/react/24/outline';

const caseStudies = [
  {
    title: 'Manchester GP Practice Achieves 100% DSPT Compliance',
    client: 'Riverside Medical Centre',
    size: '12,000 patients, 15 staff',
    challenge: 'Failed previous DSPT assessment due to inadequate technical controls and staff training gaps.',
    solution: 'Implemented DSPT Pro automated monitoring with comprehensive staff training program.',
    results: [
      '100% DSPT compliance achieved in 6 weeks',
      '80% reduction in manual compliance work',
      'Zero data security incidents in 12 months',
      'Staff confidence in data handling increased by 95%',
    ],
    timeframe: '6 weeks implementation',
    category: 'GP Practice',
    featured: true,
  },
  {
    title: 'Multi-Site Dental Practice Streamlines Compliance',
    client: 'SmileHealth Dental Group',
    size: '8 locations, 45 staff',
    challenge: 'Struggling to maintain consistent DSPT compliance across multiple locations with different systems.',
    solution: 'Centralized compliance monitoring with DSPT Pro integration across all practice management systems.',
    results: [
      'Unified compliance dashboard for all sites',
      '60% faster policy updates across locations',
      'Standardized security controls implementation',
      '90% improvement in audit preparation time',
    ],
    timeframe: '8 weeks rollout',
    category: 'Dental Practice',
    featured: false,
  },
  {
    title: 'Care Home Chain Automates Data Protection',
    client: 'Golden Years Care Group',
    size: '12 care homes, 200+ staff',
    challenge: 'Complex data flows between care homes, NHS systems, and family communications requiring robust protection.',
    solution: 'Custom DSPT Pro integration with specialized care home workflows and family portal security.',
    results: [
      'Automated data flow monitoring',
      '70% reduction in compliance officer workload',
      'Enhanced family communication security',
      'Improved CQC inspection outcomes',
    ],
    timeframe: '12 weeks implementation',
    category: 'Care Home',
    featured: false,
  },
  {
    title: 'NHS Trust Improves Third-Party Risk Management',
    client: 'Confidential NHS Trust',
    size: '5,000+ staff, 50+ suppliers',
    challenge: 'Managing DSPT compliance across numerous third-party suppliers and ensuring consistent standards.',
    solution: 'Enterprise DSPT Pro deployment with supplier onboarding and monitoring capabilities.',
    results: [
      'Centralized supplier compliance tracking',
      '85% faster supplier risk assessments',
      'Automated compliance monitoring for 50+ suppliers',
      'Reduced third-party data breaches to zero',
    ],
    timeframe: '16 weeks rollout',
    category: 'NHS Trust',
    featured: true,
  },
];

const metrics = [
  {
    value: '500+',
    label: 'Healthcare Organizations',
    description: 'Successfully achieving DSPT compliance',
  },
  {
    value: '98%',
    label: 'Success Rate',
    description: 'Organizations passing DSPT on first attempt',
  },
  {
    value: '75%',
    label: 'Time Savings',
    description: 'Average reduction in compliance workload',
  },
  {
    value: '6 weeks',
    label: 'Average Implementation',
    description: 'Time to full DSPT compliance',
  },
];

const industries = [
  {
    name: 'GP Practices',
    count: '200+',
    description: 'Primary care practices across England, Scotland, and Wales',
  },
  {
    name: 'Dental Practices',
    count: '75+',
    description: 'NHS and private dental practices of all sizes',
  },
  {
    name: 'Care Homes',
    count: '50+',
    description: 'Residential and nursing care facilities',
  },
  {
    name: 'NHS Trusts',
    count: '25+',
    description: 'Acute, mental health, and community trusts',
  },
  {
    name: 'Pharmacies',
    count: '100+',
    description: 'Independent and chain pharmacies',
  },
  {
    name: 'Allied Health',
    count: '50+',
    description: 'Physiotherapy, optometry, and other healthcare services',
  },
];

const testimonial = {
  quote: "DSPT Pro transformed our approach to data security. What used to take our practice manager 2 days every month now happens automatically. We can focus on patient care knowing our compliance is always up to date.",
  author: "Dr. Sarah Mitchell",
  role: "Senior Partner",
  practice: "Riverside Medical Centre",
  rating: 5,
  image: "/api/placeholder/80/80",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ChartBarIcon className="mx-auto h-16 w-16 text-white mb-6" />
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Success Stories
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
              Real results from healthcare organizations that have transformed their DSPT compliance with DSPT Pro. See how we've helped practices like yours achieve and maintain compliance.
            </p>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-gray-600 text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Case Studies */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured Case Studies
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              In-depth stories of transformation and success.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.filter(study => study.featured).map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="lg:grid lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                        {study.category}
                      </span>
                      <span className="ml-3 text-sm text-gray-500">{study.timeframe}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Client Profile:</h4>
                      <p className="text-gray-600">{study.client} - {study.size}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-8 lg:p-12">
                    <h4 className="font-semibold text-gray-900 mb-4">Results Achieved:</h4>
                    <ul className="space-y-3">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8 pt-8 border-t border-blue-200">
                      <Link
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                      >
                        Get Similar Results
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Case Studies */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              More Success Stories
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Additional case studies across different healthcare sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.filter(study => !study.featured).map((study, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded">
                    {study.category}
                  </span>
                  <span className="text-sm text-gray-500">{study.timeframe}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.size}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 2).map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start text-sm">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Read Full Case Study →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Served */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Industries We Serve
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              DSPT Pro works across all healthcare sectors in the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{industry.count}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-lg p-8 lg:p-12 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <StarIcon key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl text-gray-700 mb-8">
              "{testimonial.quote}"
            </blockquote>
            
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0 h-16 w-16 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                <UsersIcon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-gray-600">{testimonial.role}</div>
                <div className="text-blue-600">{testimonial.practice}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Write Your Success Story?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Join hundreds of healthcare organizations that have simplified their DSPT compliance with DSPT Pro. See how we can help your practice achieve similar results.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors"
            >
              Request Case Study Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
