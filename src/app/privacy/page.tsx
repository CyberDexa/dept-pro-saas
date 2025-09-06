import Link from 'next/link';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <ShieldCheckIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-gray-600 mt-2">Last updated: September 6, 2025</p>
          </div>

          <div className="prose max-w-none">
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including when you create an account, subscribe to our service, or contact us for support.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our DSPT compliance services, process transactions, and communicate with you.</p>

            <h2>3. Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>

            <h2>4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

            <h2>5. GDPR Compliance</h2>
            <p>As a UK-based service, we comply with GDPR requirements and provide you with rights to access, rectify, and delete your personal data.</p>

            <h2>6. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at privacy@dsptpro.com</p>
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
