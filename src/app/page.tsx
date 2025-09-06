'use client';

import Link from 'next/link';
import { useState } from 'react';
import { 
  CheckCircleIcon, 
  ShieldCheckIcon, 
  CogIcon, 
  ChartBarIcon,
  ArrowRightIcon,
  PlayIcon,
  DocumentCheckIcon,
  ClockIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: DocumentCheckIcon,
    title: 'Automated DSPT Submission',
    description: 'Complete your NHS DSPT assessment with our guided questionnaire and automated evidence collection.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Real-time Compliance Monitoring',
    description: 'Track your compliance status with live dashboards and get alerts when action is required.'
  },
  {
    icon: CogIcon,
    title: 'Policy & Procedure Templates',
    description: 'Access customizable templates for all required NHS cybersecurity policies and procedures.'
  },
  {
    icon: ChartBarIcon,
    title: 'Compliance Analytics',
    description: 'Visualize your compliance journey with detailed reports and improvement recommendations.'
  },
  {
    icon: ClockIcon,
    title: 'Deadline Management',
    description: 'Never miss a compliance deadline with automated reminders and renewal notifications.'
  },
  {
    icon: BanknotesIcon,
    title: 'Cost-Effective Solution',
    description: 'Save thousands compared to hiring consultants while ensuring complete compliance coverage.'
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '£49',
    period: '/month',
    description: 'Perfect for small practices getting started with DSPT compliance',
    features: [
      'DSPT Assessment Tool',
      'Basic Compliance Dashboard',
      'Email Support',
      'Up to 2 practice locations',
      'Monthly compliance reports'
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Professional',
    price: '£99',
    period: '/month',
    description: 'Ideal for growing practices needing comprehensive compliance management',
    features: [
      'Everything in Starter',
      'Advanced Analytics & Reporting',
      'Policy Template Library',
      'Priority Support',
      'Up to 10 practice locations',
      'Custom compliance workflows',
      'Integration with practice systems'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '£199',
    period: '/month',
    description: 'For large organizations with complex compliance requirements',
    features: [
      'Everything in Professional',
      'Unlimited practice locations',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced security features',
      'Multi-tenant management',
      'SLA guarantee'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

const testimonials = [
  {
    quote: "DSPT Pro transformed our compliance process. What used to take weeks now takes hours.",
    author: "Dr. Sarah Mitchell",
    role: "Practice Manager, Central Medical Centre",
    rating: 5
  },
  {
    quote: "The automated evidence collection saved us countless hours and eliminated errors.",
    author: "James Thompson",
    role: "IT Manager, Healthcare Group Ltd",
    rating: 5
  },
  {
    quote: "Finally, a solution that understands UK healthcare compliance requirements.",
    author: "Lisa Chen",
    role: "Compliance Officer, Regional Dental Practice",
    rating: 5
  }
];

export default function HomePage() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              NHS DSPT Compliance
              <span className="block text-blue-600">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Automate your NHS Data Security and Protection Toolkit compliance with our comprehensive platform. 
              Save time, reduce costs, and ensure continuous compliance for your healthcare practice.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                href="/signup" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Start Free 14-Day Trial
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <button 
                onClick={() => setShowVideoModal(true)}
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors flex items-center gap-2"
              >
                <PlayIcon className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-5 h-5 text-green-500" />
                NHS Approved Framework
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                GDPR Compliant
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                ISO 27001 Aligned
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for DSPT Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform handles every aspect of NHS DSPT compliance, 
              from initial assessment to ongoing monitoring and reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your practice size and compliance needs. 
              All plans include a 14-day free trial with no commitment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg p-8 relative ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.cta === 'Contact Sales' ? '/contact' : '/signup'}
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-center block transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of healthcare practices across the UK who trust DSPT Pro 
              for their compliance needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Simplify Your DSPT Compliance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of healthcare practices who have streamlined their compliance process with DSPT Pro. 
            Start your free trial today and see the difference automation makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
            >
              Start Free 14-Day Trial
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">DSPT Pro Demo</h3>
              <button 
                onClick={() => setShowVideoModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <p className="text-gray-600">Demo video would be embedded here</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
