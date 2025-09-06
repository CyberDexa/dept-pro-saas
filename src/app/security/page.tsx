import Link from 'next/link';
import { ShieldCheckIcon, LockClosedIcon, ServerIcon, EyeIcon, DocumentCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const securityFeatures = [
  {
    name: 'End-to-End Encryption',
    description: 'All data is encrypted in transit and at rest using AES-256 encryption, ensuring your sensitive healthcare data remains protected.',
    icon: LockClosedIcon,
  },
  {
    name: 'SOC 2 Type II Compliance',
    description: 'Our infrastructure undergoes regular SOC 2 Type II audits to ensure the highest security standards are maintained.',
    icon: DocumentCheckIcon,
  },
  {
    name: 'ISO 27001 Certified',
    description: 'We maintain ISO 27001 certification, demonstrating our commitment to information security management.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'UK Data Centers',
    description: 'Your data stays within UK borders, hosted in secure, certified data centers that meet NHS requirements.',
    icon: ServerIcon,
  },
  {
    name: 'Regular Penetration Testing',
    description: 'Third-party security experts regularly test our systems to identify and address potential vulnerabilities.',
    icon: EyeIcon,
  },
  {
    name: 'Role-Based Access Control',
    description: 'Granular permissions ensure users only access the data they need, with full audit trails of all activities.',
    icon: UserGroupIcon,
  },
];

const complianceStandards = [
  {
    name: 'HIPAA Compliant',
    description: 'Full compliance with US healthcare data protection requirements',
    badge: 'HIPAA',
  },
  {
    name: 'GDPR Compliant',
    description: 'Meets all European data protection and privacy regulations',
    badge: 'GDPR',
  },
  {
    name: 'ISO 27001 Certified',
    description: 'International standard for information security management systems',
    badge: 'ISO 27001',
  },
  {
    name: 'SOC 2 Type II',
    description: 'Annual audits of security, availability, and confidentiality controls',
    badge: 'SOC 2',
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShieldCheckIcon className="mx-auto h-16 w-16 text-white mb-6" />
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Enterprise Security
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
              Bank-grade security designed specifically for healthcare. Your data is protected by multiple layers of security controls and industry-leading certifications.
            </p>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Security at Every Layer
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive security measures protecting your most sensitive data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Standards */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Compliance & Certifications
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Meeting the highest standards for healthcare data protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <span className="text-blue-600 font-bold text-sm">{standard.badge}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{standard.name}</h3>
                <p className="text-gray-600 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Contact */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Security Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Our security team is available to discuss your specific requirements and answer any questions about our security measures.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Security Team
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Security Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
