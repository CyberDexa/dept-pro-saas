'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  CheckIcon,
  XMarkIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const plans = [
  {
    name: 'Starter',
    id: 'starter',
    price: { monthly: 49, yearly: 490 },
    description: 'Perfect for small practices getting started with DSPT compliance',
    features: [
      'DSPT Assessment Tool',
      'Basic Compliance Dashboard',
      'Email Support',
      'Up to 2 practice locations',
      'Monthly compliance reports',
      'Policy templates (basic)',
      'Data breach notification',
      'Basic training resources',
    ],
    limitations: [
      'No phone support',
      'Limited integrations',
      'Basic reporting only',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    id: 'professional',
    price: { monthly: 99, yearly: 990 },
    description: 'Ideal for growing practices needing comprehensive compliance management',
    features: [
      'Everything in Starter',
      'Advanced Analytics & Reporting',
      'Policy Template Library (complete)',
      'Priority Email & Phone Support',
      'Up to 10 practice locations',
      'Custom compliance workflows',
      'Integration with practice systems',
      'Advanced training modules',
      'Risk assessment tools',
      'Incident management',
      'Audit trail & documentation',
      'Custom branding',
    ],
    limitations: [
      'Limited to 10 locations',
      'No dedicated account manager',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    price: { monthly: 199, yearly: 1990 },
    description: 'For large organizations with complex compliance requirements',
    features: [
      'Everything in Professional',
      'Unlimited practice locations',
      'Dedicated account manager',
      'Custom integrations & API access',
      'Advanced security features',
      'Multi-tenant management',
      'White-label options',
      'SLA guarantee (99.9% uptime)',
      'Priority support (24/7)',
      'Custom reporting & analytics',
      'Compliance consulting hours',
      'Staff training sessions',
    ],
    limitations: [],
    cta: 'Contact Sales',
    popular: false,
  },
];

const faqs = [
  {
    question: 'What is included in the free trial?',
    answer: 'The 14-day free trial includes full access to all features of your chosen plan. No credit card required to start, and you can cancel anytime during the trial period.',
  },
  {
    question: 'How does DSPT Pro help with NHS compliance?',
    answer: 'DSPT Pro automates the entire NHS Data Security and Protection Toolkit process, from initial assessment to evidence collection and submission. Our platform is regularly updated to reflect the latest NHS requirements.',
  },
  {
    question: 'Can I change plans after signing up?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use bank-level encryption, are ISO 27001 aligned, and fully GDPR compliant. Your data is stored in UK-based servers and never shared with third parties.',
  },
  {
    question: 'Do you offer support during implementation?',
    answer: 'Yes, all plans include implementation support. Professional and Enterprise plans include priority support and dedicated assistance for setup and training.',
  },
  {
    question: 'What happens if I need more locations than my plan allows?',
    answer: 'You can easily upgrade to a higher plan or contact us for custom pricing if you need more locations than the Enterprise plan offers.',
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your practice size and compliance needs. 
            All plans include a 14-day free trial with no commitment.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${!isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isYearly ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Save 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl shadow-lg relative ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    <StarIcon className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">
                      £{isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-gray-500 ml-1">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-green-600 mt-1">
                      Save £{(plan.price.monthly * 12) - plan.price.yearly} per year
                    </p>
                  )}
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Limitations:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, index) => (
                          <li key={index} className="flex items-start">
                            <XMarkIcon className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-500 text-sm">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
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
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Compare Plans</h2>
            <p className="text-gray-600 mt-1">See exactly what's included in each plan</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Features
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Starter
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Professional
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { feature: 'DSPT Assessment Tool', starter: true, professional: true, enterprise: true },
                  { feature: 'Practice Locations', starter: '2', professional: '10', enterprise: 'Unlimited' },
                  { feature: 'Email Support', starter: true, professional: true, enterprise: true },
                  { feature: 'Phone Support', starter: false, professional: true, enterprise: true },
                  { feature: 'Advanced Analytics', starter: false, professional: true, enterprise: true },
                  { feature: 'Custom Integrations', starter: false, professional: 'Basic', enterprise: 'Advanced' },
                  { feature: 'Dedicated Account Manager', starter: false, professional: false, enterprise: true },
                  { feature: 'SLA Guarantee', starter: false, professional: false, enterprise: '99.9%' },
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <XMarkIcon className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-900">{row.starter}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {typeof row.professional === 'boolean' ? (
                        row.professional ? (
                          <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <XMarkIcon className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-900">{row.professional}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? (
                          <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <XMarkIcon className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-900">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Got questions? We have answers. If you can't find what you're looking for, 
              feel free to contact our support team.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 mb-6 last:border-b-0">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {expandedFaq === index ? (
                        <XMarkIcon className="w-5 h-5 text-gray-500" />
                      ) : (
                        <div className="w-5 h-5 flex items-center justify-center">
                          <div className="w-4 h-0.5 bg-gray-500"></div>
                          <div className="w-0.5 h-4 bg-gray-500 absolute"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="mt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare practices who have streamlined their DSPT compliance with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Free 14-Day Trial
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
