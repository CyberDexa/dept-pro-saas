import Link from 'next/link';
import { ShieldCheckIcon, DocumentTextIcon, UserGroupIcon, ClockIcon, ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const dataTypes = [
  {
    category: 'Personal Data',
    description: 'Information that can identify an individual person',
    examples: [
      'Patient names, addresses, and contact details',
      'NHS numbers and other unique identifiers',
      'Date of birth and demographic information',
      'Emergency contact information',
    ],
    protection: 'Encrypted at rest and in transit, access controlled by role-based permissions',
  },
  {
    category: 'Health Data',
    description: 'Sensitive medical and health-related information',
    examples: [
      'Medical records and treatment history',
      'Diagnostic results and test data',
      'Prescription and medication information',
      'Mental health and care notes',
    ],
    protection: 'Highest level encryption, audit logging, restricted access with medical necessity',
  },
  {
    category: 'Administrative Data',
    description: 'Operational and business-related information',
    examples: [
      'Appointment schedules and booking data',
      'Billing and payment information',
      'Staff records and access logs',
      'System performance and usage data',
    ],
    protection: 'Standard encryption, regular access reviews, automated backup procedures',
  },
];

const processingPurposes = [
  {
    purpose: 'Healthcare Service Delivery',
    legalBasis: 'Vital interests and public task (Article 6(1)(d) and 6(1)(e) UK GDPR)',
    description: 'Processing patient data to provide medical care, treatment, and health services.',
    dataSubjects: 'Patients, healthcare staff',
    retention: '8 years after last treatment (or longer if required by law)',
  },
  {
    purpose: 'DSPT Compliance Monitoring',
    legalBasis: 'Legal obligation (Article 6(1)(c) UK GDPR)',
    description: 'Automated monitoring and reporting to ensure NHS DSPT compliance requirements are met.',
    dataSubjects: 'Healthcare organizations, staff members',
    retention: '6 years after compliance period ends',
  },
  {
    purpose: 'Platform Operation & Security',
    legalBasis: 'Legitimate interests (Article 6(1)(f) UK GDPR)',
    description: 'Maintaining system security, performance monitoring, and technical support.',
    dataSubjects: 'All platform users',
    retention: '3 years for security logs, 1 year for performance data',
  },
  {
    purpose: 'Service Improvement',
    legalBasis: 'Consent (Article 6(1)(a) UK GDPR)',
    description: 'Anonymous analytics to improve platform features and user experience.',
    dataSubjects: 'Consenting users only',
    retention: '2 years or until consent withdrawn',
  },
];

const dataFlow = [
  {
    step: '1. Collection',
    title: 'Data Input',
    description: 'Data is collected directly from healthcare systems or manually input by authorized users.',
    security: 'TLS 1.3 encryption, authentication required',
  },
  {
    step: '2. Processing',
    title: 'Compliance Analysis',
    description: 'Automated systems analyze data for DSPT compliance requirements and generate reports.',
    security: 'Processing in secure UK data centers, access logging',
  },
  {
    step: '3. Storage',
    title: 'Secure Storage',
    description: 'Data stored in encrypted databases with multiple backup systems and redundancy.',
    security: 'AES-256 encryption, geographic redundancy, access controls',
  },
  {
    step: '4. Access',
    title: 'Controlled Access',
    description: 'Authorized users access data through role-based permissions and audit trails.',
    security: 'Multi-factor authentication, session management, activity monitoring',
  },
  {
    step: '5. Retention',
    title: 'Lifecycle Management',
    description: 'Data automatically archived or deleted according to retention policies.',
    security: 'Secure deletion processes, compliance with retention schedules',
  },
];

const thirdParties = [
  {
    name: 'Cloud Infrastructure Providers',
    purpose: 'Hosting and infrastructure services',
    dataShared: 'Encrypted system data, performance metrics',
    location: 'United Kingdom',
    safeguards: 'Data Processing Agreements, SOC 2 certification, UK data residency',
  },
  {
    name: 'NHS Digital',
    purpose: 'DSPT compliance verification and reporting',
    dataShared: 'Anonymized compliance status data',
    location: 'United Kingdom',
    safeguards: 'Official NHS data sharing agreements, secure API connections',
  },
  {
    name: 'Authentication Services',
    purpose: 'User identity verification and access management',
    dataShared: 'User identifiers, authentication tokens',
    location: 'United Kingdom',
    safeguards: 'ISO 27001 certification, encrypted data transmission',
  },
  {
    name: 'Payment Processors',
    purpose: 'Billing and subscription management',
    dataShared: 'Billing information, payment details (tokenized)',
    location: 'United Kingdom',
    safeguards: 'PCI DSS compliance, data minimization, secure tokenization',
  },
];

const rights = [
  {
    right: 'Right of Access',
    description: 'Request a copy of your personal data we hold',
    howToExercise: 'Submit request via email or contact form',
    timeframe: '1 month',
  },
  {
    right: 'Right to Rectification',
    description: 'Correct inaccurate or incomplete personal data',
    howToExercise: 'Contact our support team with corrections',
    timeframe: '1 month',
  },
  {
    right: 'Right to Erasure',
    description: 'Request deletion of your personal data (where legally permissible)',
    howToExercise: 'Submit erasure request with verification',
    timeframe: '1 month',
  },
  {
    right: 'Right to Restrict Processing',
    description: 'Limit how we process your personal data',
    howToExercise: 'Specify restrictions in written request',
    timeframe: '1 month',
  },
  {
    right: 'Right to Data Portability',
    description: 'Receive your data in a structured, machine-readable format',
    howToExercise: 'Submit portability request with identity verification',
    timeframe: '1 month',
  },
  {
    right: 'Right to Object',
    description: 'Object to processing based on legitimate interests',
    howToExercise: 'Submit objection with specific grounds',
    timeframe: '1 month',
  },
];

export default function DataProcessingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <DocumentTextIcon className="mx-auto h-16 w-16 text-white mb-6" />
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Data Processing Information
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
              Comprehensive information about how DSPT Pro collects, processes, and protects personal data in compliance with UK GDPR and healthcare regulations.
            </p>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="bg-blue-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-blue-800">
            <strong>Last updated:</strong> 6 September 2024 | <strong>Version:</strong> 2.1
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Document</h2>
            <p className="text-gray-600 mb-6">
              This Data Processing Information document provides detailed transparency about how DSPT Pro 
              processes personal data as part of our healthcare compliance platform. As both a data controller 
              and data processor, we are committed to the highest standards of data protection.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <div className="flex">
                <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-yellow-800 text-sm">
                    <strong>Important:</strong> This document contains detailed technical information about our data processing activities. 
                    For a more accessible overview, please see our <Link href="/privacy" className="text-yellow-900 underline">Privacy Policy</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Categories of Personal Data
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Types of personal data we process and how we protect them.
            </p>
          </div>

          <div className="space-y-8">
            {dataTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.category}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Examples include:</h4>
                    <ul className="space-y-2">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Protection measures:</h4>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-green-800 text-sm">{type.protection}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Processing Purposes */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Purposes of Processing
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Why we process personal data and our legal basis for each purpose.
            </p>
          </div>

          <div className="space-y-6">
            {processingPurposes.map((purpose, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{purpose.purpose}</h3>
                <p className="text-gray-600 mb-4">{purpose.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Legal Basis:</span>
                    <p className="text-gray-600 mt-1">{purpose.legalBasis}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Data Subjects:</span>
                    <p className="text-gray-600 mt-1">{purpose.dataSubjects}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Retention Period:</span>
                    <p className="text-gray-600 mt-1">{purpose.retention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Flow */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Data Processing Flow
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              How personal data moves through our systems with security at every step.
            </p>
          </div>

          <div className="space-y-8">
            {dataFlow.map((flow, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-6">
                  {flow.step}
                </div>
                <div className="flex-1 bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{flow.title}</h3>
                  <p className="text-gray-600 mb-3">{flow.description}</p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex items-center">
                      <ShieldCheckIcon className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-blue-800 text-sm font-medium">Security: {flow.security}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third Party Sharing */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Third Party Data Sharing
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              When and how we share data with trusted third parties.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {thirdParties.map((party, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{party.name}</h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Purpose:</span>
                    <p className="text-gray-600">{party.purpose}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Data Shared:</span>
                    <p className="text-gray-600">{party.dataShared}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Location:</span>
                    <p className="text-gray-600">{party.location}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Safeguards:</span>
                    <p className="text-gray-600">{party.safeguards}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Subject Rights */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Your Rights as a Data Subject
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              How to exercise your rights under UK GDPR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rights.map((right, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{right.right}</h3>
                <p className="text-gray-600 mb-4 text-sm">{right.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">How to exercise:</span>
                    <p className="text-gray-600">{right.howToExercise}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Response time:</span>
                    <p className="text-gray-600">{right.timeframe}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Data Protection Contacts
          </h2>
          <p className="mt-4 text-xl text-blue-100 mb-8">
            For any questions about our data processing activities or to exercise your rights.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Protection Officer</h3>
              <div className="text-left space-y-2 text-sm text-gray-600">
                <p><strong>Email:</strong> dpo@dsptpro.com</p>
                <p><strong>Phone:</strong> +44 20 7123 4567</p>
                <p><strong>Address:</strong> DSPT Pro Ltd, 123 Healthcare St, London EC1A 1AA</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Supervisory Authority</h3>
              <div className="text-left space-y-2 text-sm text-gray-600">
                <p><strong>ICO (Information Commissioner's Office)</strong></p>
                <p><strong>Website:</strong> ico.org.uk</p>
                <p><strong>Phone:</strong> 0303 123 1113</p>
                <p>Right to lodge complaints about our data processing</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              <UserGroupIcon className="h-5 w-5 mr-2" />
              Contact Data Protection Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
