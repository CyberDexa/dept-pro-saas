import Link from 'next/link';
import { LifebuoyIcon } from '@heroicons/react/24/solid';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <LifebuoyIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
            <p className="text-gray-600 mt-2">We're here to help you succeed</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Email Support</h3>
              <p className="text-blue-700 mb-3">support@dsptpro.com</p>
              <p className="text-sm text-blue-600">Response within 24 hours</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Priority Support</h3>
              <p className="text-green-700 mb-3">Professional & Enterprise</p>
              <p className="text-sm text-green-600">Response within 4 hours</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Phone Support</h3>
              <p className="text-purple-700 mb-3">Enterprise plans only</p>
              <p className="text-sm text-purple-600">Dedicated account manager</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Form</h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="text-center">
            <Link href="/help" className="text-blue-600 hover:underline mr-6">
              View Help Documentation
            </Link>
            <Link href="/" className="text-blue-600 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
