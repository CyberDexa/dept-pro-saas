'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { 
  ChartBarIcon,
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const stats = [
  {
    title: 'Compliance Score',
    value: '87%',
    change: '+5%',
    changeType: 'positive',
    icon: ChartBarIcon,
    color: 'bg-green-500',
  },
  {
    title: 'DSPT Status',
    value: 'In Progress',
    change: '12 items remaining',
    changeType: 'neutral',
    icon: DocumentCheckIcon,
    color: 'bg-blue-500',
  },
  {
    title: 'Action Items',
    value: '3',
    change: '2 high priority',
    changeType: 'negative',
    icon: ExclamationTriangleIcon,
    color: 'bg-red-500',
  },
  {
    title: 'Last Review',
    value: '7 days ago',
    change: 'Next: 23 days',
    changeType: 'neutral',
    icon: ClockIcon,
    color: 'bg-purple-500',
  },
];

const recentActivity = [
  {
    action: 'DSPT Section 1.1 completed',
    time: '2 hours ago',
    status: 'completed',
  },
  {
    action: 'Policy template updated',
    time: '1 day ago',
    status: 'completed',
  },
  {
    action: 'Evidence uploaded for 2.3',
    time: '2 days ago',
    status: 'completed',
  },
  {
    action: 'Action required: Staff training',
    time: '3 days ago',
    status: 'pending',
  },
];

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {session.user?.name?.split(' ')[0] || 'there'}!
          </h1>
          <p className="text-gray-600">
            Here's an overview of your DSPT compliance progress
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
              <div className="mt-4">
                <span className={`text-sm ${
                  stat.changeType === 'positive' ? 'text-green-600' :
                  stat.changeType === 'negative' ? 'text-red-600' :
                  'text-gray-600'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* DSPT Progress */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                DSPT Progress Overview
              </h2>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Overall Completion</span>
                  <span>87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>

              {/* Section Status */}
              <div className="space-y-4">
                {[
                  { section: '1. Data Security', status: 'Completed', progress: 100 },
                  { section: '2. Staff Responsibilities', status: 'In Progress', progress: 75 },
                  { section: '3. Training', status: 'Action Required', progress: 60 },
                  { section: '4. Managing Data Access', status: 'Not Started', progress: 0 },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      {item.progress === 100 ? (
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                      ) : item.progress > 0 ? (
                        <ClockIcon className="w-5 h-5 text-blue-500 mr-3" />
                      ) : (
                        <ExclamationTriangleIcon className="w-5 h-5 text-gray-400 mr-3" />
                      )}
                      <div>
                        <p className="font-medium text-gray-900">{item.section}</p>
                        <p className="text-sm text-gray-600">{item.status}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{item.progress}%</p>
                      <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <DocumentCheckIcon className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="font-medium">Continue DSPT Assessment</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <BuildingOfficeIcon className="w-5 h-5 text-green-600 mr-3" />
                    <span className="font-medium">Add Practice Location</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <ChartBarIcon className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="font-medium">View Reports</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                      activity.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
