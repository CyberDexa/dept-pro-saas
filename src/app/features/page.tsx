'use client';

import React, { useState } from 'react';
import { 
  DocumentCheckIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
  ClockIcon,
  UserGroupIcon,
  CloudArrowUpIcon,
  BellAlertIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const mainFeatures = [
  {
    icon: DocumentCheckIcon,
    title: 'Automated DSPT Assessment',
    description: 'Complete your NHS Data Security and Protection Toolkit assessment with our intelligent questionnaire that guides you through each requirement.',
    details: [
      'Step-by-step guided questionnaire',
      'Automatic progress tracking',
      'Evidence collection assistance',
      'Smart recommendations',
      'Validation and error checking'
    ],
    image: '/api/placeholder/600/400'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Real-time Compliance Monitoring',
    description: 'Stay on top of your compliance status with live dashboards that track your progress and alert you to any issues.',
    details: [
      'Live compliance dashboard',
      'Risk assessment scoring',
      'Automated alerts and notifications',
      'Trend analysis and reporting',
      'Deadline tracking and reminders'
    ],
    image: '/api/placeholder/600/400'
  },
  {
    icon: ChartBarIcon,
    title: 'Advanced Analytics & Reporting',
    description: 'Gain insights into your compliance posture with comprehensive analytics and customizable reports.',
    details: [
      'Compliance score tracking',
      'Historical trend analysis',
      'Custom report generation',
      'Benchmark comparisons',
      'Executive summaries'
    ],
    image: '/api/placeholder/600/400'
  },
  {
    icon: CogIcon,
    title: 'Policy & Procedure Management',
    description: 'Access a comprehensive library of customizable policies and procedures tailored for UK healthcare.',
    details: [
      'NHS-compliant policy templates',
      'Customizable procedures',
      'Version control and updates',
      'Approval workflows',
      'Staff acknowledgment tracking'
    ],
    image: '/api/placeholder/600/400'
  },
];

const additionalFeatures = [
  {
    icon: ClockIcon,
    title: 'Deadline Management',
    description: 'Never miss a compliance deadline with automated reminders and renewal notifications.',
  },
  {
    icon: UserGroupIcon,
    title: 'Staff Training Management',
    description: 'Track training completion and ensure all staff meet compliance requirements.',
  },
  {
    icon: CloudArrowUpIcon,
    title: 'Evidence Management',
    description: 'Securely store and organize all compliance evidence in one centralized location.',
  },
  {
    icon: BellAlertIcon,
    title: 'Incident Reporting',
    description: 'Streamlined incident reporting and management with automated workflows.',
  },
  {
    icon: DocumentTextIcon,
    title: 'Audit Trail',
    description: 'Complete audit trail of all compliance activities for regulatory inspections.',
  },
  {
    icon: AcademicCapIcon,
    title: 'Training Resources',
    description: 'Access to comprehensive training materials and certification programs.',
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Multi-location Support',
    description: 'Manage compliance across multiple practice locations from a single dashboard.',
  },
  {
    icon: PhoneIcon,
    title: '24/7 Support',
    description: 'Expert support when you need it, with priority assistance for urgent issues.',
  },
];

const integrations = [
  { name: 'SystmOne', logo: '/api/placeholder/120/60', description: 'Full integration with TPP SystmOne' },
  { name: 'EMIS', logo: '/api/placeholder/120/60', description: 'Seamless EMIS Web integration' },
  { name: 'Vision', logo: '/api/placeholder/120/60', description: 'Connect with In Practice Vision' },
  { name: 'Microsoft 365', logo: '/api/placeholder/120/60', description: 'Office 365 and Teams integration' },
  { name: 'Google Workspace', logo: '/api/placeholder/120/60', description: 'Gmail and Drive connectivity' },
  { name: 'Slack', logo: '/api/placeholder/120/60', description: 'Team communication alerts' },
];

export default function FeaturesPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive DSPT Compliance
              <span className="block text-blue-600">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to achieve and maintain NHS Data Security and Protection Toolkit compliance, 
              from assessment to ongoing monitoring and reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides everything you need for complete DSPT compliance management
            </p>
          </div>

          {mainFeatures.map((feature, index) => (
            <div key={index} className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex lg:items-center lg:gap-16`}>
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center">
                      <ShieldCheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-100 rounded-xl p-8 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <feature.icon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600">Feature Screenshot</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools to support every aspect of your compliance journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Feature Demo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore how our features work together to streamline your compliance process
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex border-b border-gray-200">
              {mainFeatures.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`flex-1 px-4 py-6 text-center transition-colors ${
                    activeFeature === index
                      ? 'bg-blue-50 border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <feature.icon className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">{feature.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {mainFeatures[activeFeature].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {mainFeatures[activeFeature].description}
                  </p>
                  <ul className="space-y-3">
                    {mainFeatures[activeFeature].details.map((detail, index) => (
                      <li key={index} className="flex items-center">
                        <ShieldCheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-100 rounded-xl p-8 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    {React.createElement(mainFeatures[activeFeature].icon, { 
                      className: "w-16 h-16 text-blue-600 mx-auto mb-4" 
                    })}
                    <p className="text-gray-600">Interactive Demo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your existing practice management systems and workflow tools
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow text-center">
                <div className="bg-gray-100 rounded-lg h-16 flex items-center justify-center mb-4">
                  <span className="text-gray-500 text-sm">{integration.name}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{integration.name}</h3>
                <p className="text-xs text-gray-600">{integration.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Don't see your system? We can build custom integrations.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Request Integration
            </button>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your data is protected with the highest levels of security and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheckIcon, title: 'ISO 27001 Aligned', description: 'Information security management standards' },
              { icon: DocumentCheckIcon, title: 'GDPR Compliant', description: 'Full compliance with data protection regulations' },
              { icon: CloudArrowUpIcon, title: 'UK Data Centers', description: 'Data stored securely in UK-based facilities' },
              { icon: BellAlertIcon, title: '99.9% Uptime SLA', description: 'Guaranteed availability and reliability' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Streamline Your Compliance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            See how DSPT Pro can transform your compliance process with a free 14-day trial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
