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
    description: 'All data is stored in UK-based data centers, ensuring compliance with UK data sovereignty requirements.',
    icon: ServerIcon,
  },
  {
    name: 'Access Controls',
    description: 'Role-based access controls and multi-factor authentication protect against unauthorized access.',
    icon: UserGroupIcon,
  },
  {
    name: 'Audit Logging',
    description: 'Comprehensive audit trails track all system activities for complete visibility and compliance reporting.',
    icon: EyeIcon,
  },
];

const certifications = [
  {
    name: 'NHS Data Security Standards',
    description: 'Fully compliant with NHS Data Security and Protection Toolkit requirements',
    badge: 'NHS DSPT',
  },
  {
    name: 'Cyber Essentials Plus',
    description: 'Government-backed cybersecurity certification demonstrating robust security controls',
    badge: 'CE+',
  },
  {
    name: 'ISO 27001:2013',
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
              Security by Design
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Every aspect of DSPT Pro is built with security as the foundation, ensuring your healthcare data remains protected at all times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature) => (
              <div key={feature.name} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">{feature.name}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Industry Certifications
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We maintain the highest security standards through continuous auditing and certification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-4">
                  <span className="text-sm font-bold text-blue-600">{cert.badge}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Practices */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Comprehensive Security Practices
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our security program encompasses every aspect of data protection, from infrastructure security to employee training.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-500 text-white">
                      <span className="text-sm font-bold">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Data Encryption</h3>
                    <p className="mt-2 text-gray-600">All data encrypted at rest and in transit using industry-standard AES-256 encryption.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-500 text-white">
                      <span className="text-sm font-bold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Access Management</h3>
                    <p className="mt-2 text-gray-600">Role-based access controls with multi-factor authentication and regular access reviews.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-500 text-white">
                      <span className="text-sm font-bold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Continuous Monitoring</h3>
                    <p className="mt-2 text-gray-600">24/7 security monitoring with automated threat detection and incident response.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-500 text-white">
                      <span className="text-sm font-bold">4</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Regular Audits</h3>
                    <p className="mt-2 text-gray-600">Independent security audits and penetration testing conducted quarterly.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Security Incident Response</h3>
                <p className="mb-6">
                  Our dedicated security team monitors your data 24/7, with automated incident response and immediate notification of any security events.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 mr-3" />
                    <span>< 5 minute incident detection</span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 mr-3" />
                    <span>Immediate automated response</span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 mr-3" />
                    <span>24/7 security operations center</span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 mr-3" />
                    <span>Detailed incident reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Secure Your Healthcare Data?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Join hundreds of healthcare practices already protecting their data with DSPT Pro's enterprise security platform.
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
              Contact Security Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
