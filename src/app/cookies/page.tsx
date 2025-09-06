import Link from 'next/link';
import { CakeIcon, ShieldCheckIcon, DocumentTextIcon, EyeIcon, UserGroupIcon, CogIcon } from '@heroicons/react/24/outline';

const cookieTypes = [
  {
    name: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
    purpose: 'Authentication, security, and basic website functionality',
    examples: ['Login session', 'Security tokens', 'Load balancing'],
    required: true,
    icon: ShieldCheckIcon,
  },
  {
    name: 'Performance Cookies',
    description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
    purpose: 'Website analytics and performance monitoring',
    examples: ['Page load times', 'Error tracking', 'Usage statistics'],
    required: false,
    icon: DocumentTextIcon,
  },
  {
    name: 'Functional Cookies',
    description: 'These cookies enable the website to provide enhanced functionality and personalisation.',
    purpose: 'Enhanced user experience and personalisation features',
    examples: ['Language preferences', 'Theme settings', 'Form data'],
    required: false,
    icon: CogIcon,
  },
];

const dataProcessing = [
  {
    title: 'What data we collect',
    items: [
      'Cookie identifiers and values',
      'Browser type and version',
      'Operating system information',
      'IP address (anonymized)',
      'Pages visited and time spent',
      'Referring website information',
    ]
  },
  {
    title: 'How we use cookie data',
    items: [
      'Maintain your login session',
      'Remember your preferences',
      'Analyze website performance',
      'Improve user experience',
      'Ensure website security',
      'Comply with legal requirements',
    ]
  },
  {
    title: 'Data retention',
    items: [
      'Session cookies: Deleted when you close your browser',
      'Persistent cookies: Retained for up to 12 months',
      'Analytics data: Retained for up to 24 months',
      'Security logs: Retained for up to 36 months',
    ]
  },
];

const thirdPartyServices = [
  {
    name: 'Google Analytics',
    purpose: 'Website analytics and user behavior tracking',
    dataShared: 'Anonymized usage data, page views, session duration',
    retention: '24 months',
    privacyPolicy: 'https://policies.google.com/privacy',
  },
  {
    name: 'Stripe',
    purpose: 'Payment processing and billing management',
    dataShared: 'Payment information, billing details (encrypted)',
    retention: '7 years (regulatory requirement)',
    privacyPolicy: 'https://stripe.com/privacy',
  },
  {
    name: 'Vercel',
    purpose: 'Website hosting and performance monitoring',
    dataShared: 'Access logs, performance metrics',
    retention: '12 months',
    privacyPolicy: 'https://vercel.com/legal/privacy-policy',
  },
];

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CakeIcon className="mx-auto h-16 w-16 text-white mb-6" />
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Cookie Policy
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
              How DSPT Pro uses cookies and similar technologies to enhance your experience while protecting your privacy and maintaining compliance with data protection regulations.
            </p>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="bg-blue-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-blue-800">
            <strong>Last updated:</strong> 6 September 2024
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
            <p className="text-gray-600 mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
            <p className="text-gray-600 mb-8">
              At DSPT Pro, we use cookies responsibly and in compliance with UK data protection laws, including the Privacy 
              and Electronic Communications Regulations (PECR) and the UK GDPR. This policy explains what cookies we use, 
              why we use them, and how you can manage your cookie preferences.
            </p>
          </div>
        </div>
      </div>

      {/* Cookie Types */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Types of Cookies We Use
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We categorize our cookies based on their purpose and functionality.
            </p>
          </div>

          <div className="space-y-8">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 bg-blue-100 rounded-lg">
                      <type.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{type.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        type.required 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {type.required ? 'Required' : 'Optional'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Purpose:</h4>
                        <p className="text-gray-600 text-sm">{type.purpose}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          {type.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Processing */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              How We Process Cookie Data
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Transparency about our data collection and processing practices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dataProcessing.map((section, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third Party Services */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Third-Party Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              External services that may place cookies when you use our website.
            </p>
          </div>

          <div className="space-y-6">
            {thirdPartyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm">{service.purpose}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Data Shared:</h4>
                    <p className="text-gray-600 text-sm">{service.dataShared}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Retention:</h4>
                    <p className="text-gray-600 text-sm">{service.retention}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Privacy Policy:</h4>
                    <a 
                      href={service.privacyPolicy} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm"
                    >
                      View Policy →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cookie Management */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Managing Your Cookie Preferences
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              You have control over which cookies we use on your device.
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookie Consent Manager</h3>
              <p className="text-gray-600 mb-6">
                Use our cookie consent manager to control which categories of cookies you allow. 
                You can change your preferences at any time by clicking the "Cookie Settings" 
                link in our website footer.
              </p>
              <button className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 hover:bg-blue-50 transition-colors">
                <CogIcon className="h-5 w-5 mr-2" />
                Manage Cookie Preferences
              </button>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Browser Settings</h3>
              <p className="text-gray-600 mb-4">
                You can also control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Block all cookies
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Block third-party cookies only
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Clear all cookies when you close the browser
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Open a 'private browsing' / 'incognito' session
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Basis */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Basis for Cookie Processing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Essential Cookies</h3>
              <p className="text-gray-600 text-sm">
                <strong>Legal basis:</strong> Legitimate interest (Article 6(1)(f) UK GDPR)<br/>
                These cookies are necessary for the website to function properly and provide the service you have requested.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Optional Cookies</h3>
              <p className="text-gray-600 text-sm">
                <strong>Legal basis:</strong> Consent (Article 6(1)(a) UK GDPR)<br/>
                We only use non-essential cookies with your explicit consent, which you can withdraw at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Cookie Policy?</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about our use of cookies or this policy, please contact our Data Protection Officer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <UserGroupIcon className="h-5 w-5 mr-2" />
                Contact Us
              </Link>
              <Link
                href="/privacy"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <EyeIcon className="h-5 w-5 mr-2" />
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
