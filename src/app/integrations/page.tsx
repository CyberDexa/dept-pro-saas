import Link from 'next/link';
import { PuzzlePieceIcon, CloudIcon, ShieldCheckIcon, ChartBarIcon, DocumentTextIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const integrations = [
  {
    name: 'SystmOne (TPP)',
    description: 'Direct integration with SystmOne for automated data collection and compliance monitoring.',
    icon: DocumentTextIcon,
    category: 'Electronic Health Records',
    status: 'Available',
    features: ['Automated DSPT assessments', 'Patient data encryption', 'Audit trail generation'],
  },
  {
    name: 'EMIS Health',
    description: 'Seamless integration with EMIS Web and EMIS Health systems for comprehensive compliance.',
    icon: CloudIcon,
    category: 'Electronic Health Records',
    status: 'Available',
    features: ['Real-time compliance monitoring', 'Data flow mapping', 'Risk assessment automation'],
  },
  {
    name: 'Vision (Microtest)',
    description: 'Connect with Vision practice management system for streamlined DSPT compliance.',
    icon: ChartBarIcon,
    category: 'Practice Management',
    status: 'Available',
    features: ['Automated policy updates', 'Staff training tracking', 'Compliance reporting'],
  },
  {
    name: 'Microsoft 365',
    description: 'Integrate with Microsoft 365 to monitor email security and data protection compliance.',
    icon: ShieldCheckIcon,
    category: 'Cloud Services',
    status: 'Available',
    features: ['Email encryption monitoring', 'SharePoint security scanning', 'Teams compliance tracking'],
  },
  {
    name: 'NHS Mail',
    description: 'Monitor NHS Mail usage and ensure secure communication compliance.',
    icon: UserGroupIcon,
    category: 'Communication',
    status: 'Available',
    features: ['Secure messaging compliance', 'Encryption verification', 'Usage monitoring'],
  },
  {
    name: 'Docman',
    description: 'Integrate with Docman document management for complete document security oversight.',
    icon: DocumentTextIcon,
    category: 'Document Management',
    status: 'Coming Soon',
    features: ['Document classification', 'Access control monitoring', 'Retention policy enforcement'],
  },
];

const categories = [
  'All',
  'Electronic Health Records',
  'Practice Management',
  'Cloud Services',
  'Communication',
  'Document Management',
];

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <PuzzlePieceIcon className="mx-auto h-16 w-16 text-white mb-6" />
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Integrations
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
              Connect DSPT Pro with your existing healthcare systems for seamless compliance monitoring and automated DSPT assessments.
            </p>
          </div>
        </div>
      </div>

      {/* Integration Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Healthcare System Integrations
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              DSPT Pro integrates with the most popular healthcare systems used across the UK, ensuring comprehensive compliance coverage.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Integrations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration) => (
              <div key={integration.name} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <integration.icon className="h-8 w-8 text-blue-600" />
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    integration.status === 'Available' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {integration.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{integration.name}</h3>
                <p className="text-sm text-blue-600 mb-3">{integration.category}</p>
                <p className="text-gray-600 mb-4">{integration.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-900">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {integration.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* API & Custom Integrations */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Custom Integrations & API
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Don't see your system listed? Our flexible API and custom integration services can connect DSPT Pro with virtually any healthcare system.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-500 text-white">
                      <span className="text-sm font-bold">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">REST API</h3>
                    <p className="mt-2 text-gray-600">Comprehensive REST API for custom integrations and data exchange.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-500 text-white">
                      <span className="text-sm font-bold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Webhooks</h3>
                    <p className="mt-2 text-gray-600">Real-time notifications and data synchronization via secure webhooks.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-500 text-white">
                      <span className="text-sm font-bold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">FHIR Support</h3>
                    <p className="mt-2 text-gray-600">Full FHIR R4 compatibility for healthcare data interoperability.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-500 text-white">
                      <span className="text-sm font-bold">4</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Custom Development</h3>
                    <p className="mt-2 text-gray-600">Bespoke integration development for unique system requirements.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Integration Support</h3>
                <p className="mb-6">
                  Our technical team provides comprehensive support for all integrations, from initial setup to ongoing maintenance.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 mr-3" />
                    <span>Free integration consultation</span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 mr-3" />
                    <span>Dedicated technical support</span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 mr-3" />
                    <span>Comprehensive documentation</span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 mr-3" />
                    <span>Testing and validation</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
                  >
                    Request Integration
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Integration Benefits
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Seamless integrations provide immediate value and long-term compliance assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-4">
                <ChartBarIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Automated Compliance</h3>
              <p className="text-gray-600">
                Automatically collect compliance data from your existing systems, reducing manual effort by up to 80%.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Monitoring</h3>
              <p className="text-gray-600">
                Continuous monitoring of your systems ensures compliance issues are identified and resolved immediately.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-4">
                <DocumentTextIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unified Reporting</h3>
              <p className="text-gray-600">
                Generate comprehensive compliance reports that consolidate data from all your integrated systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Connect Your Systems?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Start integrating DSPT Pro with your healthcare systems today and experience automated compliance monitoring.
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
              Discuss Integrations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
