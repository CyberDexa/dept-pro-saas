import Link from 'next/link';
import { DocumentTextIcon } from '@heroicons/react/24/solid';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <DocumentTextIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
            <p className="text-gray-600 mt-2">Last updated: September 6, 2025</p>
          </div>

          <div className="prose max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using DSPT Pro, you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h2>2. Service Description</h2>
            <p>DSPT Pro provides healthcare compliance automation tools specifically designed for UK healthcare practices to achieve NHS DSPT compliance.</p>

            <h2>3. User Accounts</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

            <h2>4. Payment Terms</h2>
            <p>Subscription fees are billed in advance on a monthly basis. All fees are non-refundable except where required by law.</p>

            <h2>5. Free Trial</h2>
            <p>We offer a 14-day free trial with full access to all features. No credit card is required for the trial period.</p>

            <h2>6. Intellectual Property</h2>
            <p>The service and its original content, features, and functionality are owned by DSPT Pro and are protected by copyright and other laws.</p>

            <h2>7. Limitation of Liability</h2>
            <p>DSPT Pro shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>

            <h2>8. Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us at legal@dsptpro.com</p>
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
