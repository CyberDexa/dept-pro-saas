import Link from 'next/link';
import { BookOpenIcon } from '@heroicons/react/24/solid';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <BookOpenIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900">Documentation</h1>
            <p className="text-gray-600 mt-2">Complete guide to using DSPT Pro</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Getting Started</h2>
              <div className="space-y-3">
                <Link href="#" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100">
                  <h3 className="font-medium text-blue-900">Quick Start Guide</h3>
                  <p className="text-sm text-blue-700">Get up and running in 30 minutes</p>
                </Link>
                <Link href="#" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100">
                  <h3 className="font-medium text-blue-900">Account Setup</h3>
                  <p className="text-sm text-blue-700">Configure your practice details</p>
                </Link>
                <Link href="#" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100">
                  <h3 className="font-medium text-blue-900">DSPT Assessment</h3>
                  <p className="text-sm text-blue-700">Complete your first assessment</p>
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Advanced Features</h2>
              <div className="space-y-3">
                <Link href="#" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100">
                  <h3 className="font-medium text-green-900">Policy Management</h3>
                  <p className="text-sm text-green-700">Create and manage compliance policies</p>
                </Link>
                <Link href="#" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100">
                  <h3 className="font-medium text-green-900">Analytics & Reporting</h3>
                  <p className="text-sm text-green-700">Track compliance progress</p>
                </Link>
                <Link href="#" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100">
                  <h3 className="font-medium text-green-900">Team Management</h3>
                  <p className="text-sm text-green-700">Add and manage team members</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">Need More Help?</h3>
            <p className="text-yellow-800 mb-4">Our documentation is constantly growing. Can't find what you're looking for?</p>
            <Link href="/contact" className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700">
              Contact Support
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="text-blue-600 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
