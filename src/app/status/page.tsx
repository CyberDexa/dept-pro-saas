import Link from 'next/link';
import { ChartBarIcon, CheckCircleIcon, ExclamationTriangleIcon, ClockIcon, ServerIcon, SignalIcon } from '@heroicons/react/24/outline';

const systemStatus = {
  overall: 'operational',
  lastUpdated: '2024-09-06 14:30 UTC',
  uptime: '99.98%',
};

const services = [
  {
    name: 'DSPT Pro Platform',
    status: 'operational',
    uptime: '99.99%',
    description: 'Main application and user interface',
    lastIncident: 'None in the last 30 days',
  },
  {
    name: 'Authentication Service',
    status: 'operational',
    uptime: '99.97%',
    description: 'User login and access management',
    lastIncident: 'None in the last 30 days',
  },
  {
    name: 'Compliance Engine',
    status: 'operational',
    uptime: '99.98%',
    description: 'DSPT assessment and monitoring system',
    lastIncident: 'None in the last 30 days',
  },
  {
    name: 'Reporting Service',
    status: 'operational',
    uptime: '99.96%',
    description: 'Report generation and export functionality',
    lastIncident: 'None in the last 30 days',
  },
  {
    name: 'Integration APIs',
    status: 'operational',
    uptime: '99.95%',
    description: 'Third-party system integrations',
    lastIncident: 'None in the last 30 days',
  },
  {
    name: 'Email Notifications',
    status: 'operational',
    uptime: '99.92%',
    description: 'System notifications and alerts',
    lastIncident: 'None in the last 30 days',
  },
];

const incidents = [
  {
    date: '2024-08-15',
    title: 'Scheduled Maintenance - Database Optimization',
    status: 'resolved',
    duration: '2 hours',
    description: 'Planned maintenance to optimize database performance and implement security updates.',
    impact: 'Low - Some reports generated slowly during maintenance window',
    resolution: 'Maintenance completed successfully. All services returned to normal operation.',
  },
  {
    date: '2024-07-28',
    title: 'Email Notification Delays',
    status: 'resolved',
    duration: '45 minutes',
    description: 'Some users experienced delays in receiving email notifications.',
    impact: 'Low - Email notifications delayed by up to 30 minutes',
    resolution: 'Email service provider issue resolved. All pending notifications delivered.',
  },
  {
    date: '2024-07-10',
    title: 'API Rate Limiting Issues',
    status: 'resolved',
    duration: '1 hour 20 minutes',
    description: 'Some third-party integrations experienced rate limiting errors.',
    impact: 'Medium - Affected automated data sync for some customers',
    resolution: 'Rate limits adjusted and caching improved. Integration performance restored.',
  },
];

const metrics = [
  {
    name: 'API Response Time',
    value: '185ms',
    trend: 'stable',
    description: 'Average response time over last 24 hours',
  },
  {
    name: 'System Uptime',
    value: '99.98%',
    trend: 'up',
    description: '30-day uptime percentage',
  },
  {
    name: 'Active Monitoring',
    value: '24/7',
    trend: 'stable',
    description: 'Continuous system monitoring',
  },
  {
    name: 'Data Centers',
    value: '3',
    trend: 'stable',
    description: 'UK-based redundant data centers',
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'operational':
      return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
    case 'degraded':
      return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />;
    case 'outage':
      return <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />;
    default:
      return <CheckCircleIcon className="h-5 w-5 text-gray-500" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'operational':
      return 'text-green-600 bg-green-100';
    case 'degraded':
      return 'text-yellow-600 bg-yellow-100';
    case 'outage':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ChartBarIcon className="mx-auto h-16 w-16 text-white mb-6" />
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              System Status
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
              Real-time status and performance monitoring for all DSPT Pro services. We're committed to transparency about our system health and availability.
            </p>
          </div>
        </div>
      </div>

      {/* Overall Status */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              {getStatusIcon(systemStatus.overall)}
              <h2 className="ml-3 text-2xl font-bold text-gray-900">
                All Systems Operational
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              All DSPT Pro services are currently running normally with no known issues.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{systemStatus.uptime}</div>
                <div className="text-sm text-gray-500">30-Day Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">&lt; 200ms</div>
                <div className="text-sm text-gray-500">Average Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-500">Monitoring</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Last updated: {systemStatus.lastUpdated}
            </p>
          </div>
        </div>
      </div>

      {/* Service Status */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Service Status</h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {getStatusIcon(service.status)}
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                      {service.status === 'operational' ? 'Operational' : 
                       service.status === 'degraded' ? 'Degraded Performance' : 'Service Outage'}
                    </span>
                    <div className="text-sm text-gray-500 mt-1">
                      {service.uptime} uptime (30 days)
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  Last incident: {service.lastIncident}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <ServerIcon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-lg font-medium text-gray-900 mb-1">{metric.name}</div>
                <div className="text-sm text-gray-500">{metric.description}</div>
                <div className="mt-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    metric.trend === 'up' ? 'bg-green-100 text-green-800' :
                    metric.trend === 'down' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {metric.trend === 'up' ? '↗ Improving' :
                     metric.trend === 'down' ? '↘ Declining' :
                     '→ Stable'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Incidents */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Incidents</h2>
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-500">{incident.date}</span>
                      <span className="ml-4 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Resolved
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{incident.title}</h3>
                    <p className="text-gray-600 mb-3">{incident.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">Duration:</span>
                        <span className="text-gray-600 ml-2">{incident.duration}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Impact:</span>
                        <span className="text-gray-600 ml-2">{incident.impact}</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="font-medium text-gray-900 text-sm">Resolution:</span>
                      <p className="text-gray-600 text-sm mt-1">{incident.resolution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status Subscribe */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Stay Informed About Service Status
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Subscribe to status updates and be the first to know about any service issues or planned maintenance.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Subscribe to Updates</h3>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="incidents"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="incidents" className="text-sm text-gray-700">
                      Notify me of incidents and outages
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="maintenance"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="maintenance" className="text-sm text-gray-700">
                      Notify me of scheduled maintenance
                    </label>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-8">
              If you're experiencing issues not reflected on this status page, please contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/support"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/help"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Visit Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
