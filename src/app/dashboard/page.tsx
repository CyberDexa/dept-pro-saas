'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { 
  ChartBarIcon,
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

interface DashboardStats {
  complianceScore: number;
  dsptStatus: string;
  itemsRemaining: number;
  actionItems: number;
  highPriorityItems: number;
  lastReview: string;
  nextReview: string;
}

interface Activity {
  action: string;
  time: string;
  status: string;
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [activity, setActivity] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (session) {
      fetchDashboardData();
    }
  }, [session]);

  const fetchDashboardData = async () => {
    try {
      const [statsResponse, activityResponse] = await Promise.all([
        fetch('/api/dashboard/stats'),
        fetch('/api/dashboard/activity')
      ]);

      if (statsResponse.ok) {
        const statsData = await statsResponse.json();
        setStats(statsData);
      }

      if (activityResponse.ok) {
        const activityData = await activityResponse.json();
        setActivity(activityData);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const dashboardStats = stats ? [
    {
      title: 'Compliance Score',
      value: `${stats.complianceScore}%`,
      change: stats.complianceScore >= 80 ? 'Good standing' : 'Needs improvement',
      changeType: stats.complianceScore >= 80 ? 'positive' : 'negative',
      icon: ChartBarIcon,
      color: 'bg-green-500',
    },
    {
      title: 'DSPT Status',
      value: stats.dsptStatus,
      change: `${stats.itemsRemaining} items remaining`,
      changeType: 'neutral',
      icon: DocumentCheckIcon,
      color: 'bg-blue-500',
    },
    {
      title: 'Action Items',
      value: stats.actionItems.toString(),
      change: `${stats.highPriorityItems} high priority`,
      changeType: stats.actionItems > 0 ? 'negative' : 'positive',
      icon: ExclamationTriangleIcon,
      color: stats.actionItems > 0 ? 'bg-red-500' : 'bg-green-500',
    },
    {
      title: 'Last Review',
      value: new Date(stats.lastReview).toLocaleDateString(),
      change: `Next: ${new Date(stats.nextReview).toLocaleDateString()}`,
      changeType: 'neutral',
      icon: ClockIcon,
      color: 'bg-purple-500',
    },
  ] : [];

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

        {stats ? (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {dashboardStats.map((stat, index) => (
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
                      <span>{stats.complianceScore}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${stats.complianceScore}%` }}></div>
                    </div>
                  </div>

                  {/* Section Status */}
                  <div className="space-y-4">
                    {[
                      { section: '1. Data Security', status: stats.complianceScore >= 90 ? 'Completed' : 'In Progress', progress: Math.min(100, stats.complianceScore + 10) },
                      { section: '2. Staff Responsibilities', status: stats.complianceScore >= 75 ? 'Completed' : 'In Progress', progress: Math.max(0, stats.complianceScore - 5) },
                      { section: '3. Training', status: stats.complianceScore >= 60 ? 'In Progress' : 'Action Required', progress: Math.max(0, stats.complianceScore - 15) },
                      { section: '4. Managing Data Access', status: stats.complianceScore >= 30 ? 'In Progress' : 'Not Started', progress: Math.max(0, stats.complianceScore - 30) },
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
                    <button 
                      onClick={() => router.push('/assessment')}
                      className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center">
                        <DocumentCheckIcon className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="font-medium">Start DSPT Assessment</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => router.push('/analytics')}
                      className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center">
                        <ChartBarIcon className="w-5 h-5 text-purple-600 mr-3" />
                        <span className="font-medium">View Analytics Dashboard</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => router.push('/practices')}
                      className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center">
                        <BuildingOfficeIcon className="w-5 h-5 text-green-600 mr-3" />
                        <span className="font-medium">Manage Practice Settings</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {activity.length > 0 ? activity.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                          item.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {item.action}
                          </p>
                          <p className="text-sm text-gray-500">{item.time}</p>
                        </div>
                      </div>
                    )) : (
                      <p className="text-sm text-gray-500">No recent activity</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No practice data found. Please complete your registration.</p>
          </div>
        )}
      </div>
    </div>
  );
}
