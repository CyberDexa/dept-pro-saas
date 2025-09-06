import Link from 'next/link';
import { InformationCircleIcon } from '@heroicons/react/24/solid';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <InformationCircleIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900">About DSPT Pro</h1>
            <p className="text-gray-600 mt-2">Simplifying NHS compliance for UK healthcare providers</p>
          </div>

          <div className="prose max-w-none">
            <h2>Our Mission</h2>
            <p>DSPT Pro was created to simplify the complex process of achieving and maintaining NHS Data Security and Protection Toolkit (DSPT) compliance for UK healthcare practices.</p>

            <h2>The Problem</h2>
            <p>Healthcare practices across the UK struggle with the complexity and time requirements of DSPT compliance. The manual process is overwhelming, leading to delayed submissions and potential non-compliance.</p>

            <h2>Our Solution</h2>
            <p>We provide an automated, intelligent platform that guides healthcare practices through the entire DSPT compliance process, from initial assessment to ongoing monitoring and reporting.</p>

            <h2>Key Benefits</h2>
            <ul>
              <li><strong>Time Savings:</strong> Reduce compliance work from weeks to hours</li>
              <li><strong>Expert Guidance:</strong> Built-in intelligence based on NHS requirements</li>
              <li><strong>Continuous Monitoring:</strong> Stay compliant year-round, not just at submission time</li>
              <li><strong>Professional Support:</strong> Access to compliance experts when you need help</li>
            </ul>

            <h2>Who We Serve</h2>
            <p>Our platform is designed for all types of UK healthcare providers:</p>
            <ul>
              <li>GP Practices</li>
              <li>Dental Practices</li>
              <li>Care Homes</li>
              <li>Mental Health Services</li>
              <li>Physiotherapy Clinics</li>
              <li>And more...</li>
            </ul>

            <h2>Security & Trust</h2>
            <p>We understand the critical importance of data security in healthcare. Our platform is built with bank-level encryption and follows the highest security standards to protect your sensitive information.</p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 mr-4">
              Get in Touch
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
