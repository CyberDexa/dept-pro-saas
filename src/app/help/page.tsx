import Link from 'next/link';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <QuestionMarkCircleIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>
            <p className="text-gray-600 mt-2">Get the help you need to succeed with DSPT compliance</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-2">What is DSPT?</h3>
                <p className="text-gray-600">The Data Security and Protection Toolkit (DSPT) is an online self-assessment tool that allows organizations to measure their performance against the National Data Guardian's 10 data security standards.</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">How long does the setup take?</h3>
                <p className="text-gray-600">Most practices can complete their initial setup within 30 minutes. Our guided onboarding process makes it quick and easy.</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">Do you provide compliance support?</h3>
                <p className="text-gray-600">Yes! Professional and Enterprise plans include priority support from our compliance experts.</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">Is my data secure?</h3>
                <p className="text-gray-600">Absolutely. We use bank-level encryption and follow all GDPR requirements to keep your data safe and secure.</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Contact Support</h2>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">Email Support</h3>
                <p className="text-blue-700">support@dsptpro.com</p>
                <p className="text-sm text-blue-600 mt-1">Response within 24 hours</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-medium text-green-900 mb-2">Priority Support</h3>
                <p className="text-green-700">Available with Professional & Enterprise plans</p>
                <p className="text-sm text-green-600 mt-1">Response within 4 hours</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-medium text-purple-900 mb-2">Schedule a Demo</h3>
                <p className="text-purple-700">Book a personalized demo with our team</p>
                <Link href="/contact" className="text-sm text-purple-600 hover:underline mt-1 inline-block">
                  Contact us to schedule →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 mr-4">
              Contact Support
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
