import Link from 'next/link';
import { NewspaperIcon, CalendarDaysIcon, UserIcon, TagIcon, ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline';

const pressReleases = [
  {
    title: 'DSPT Pro Raises £2.5M Series A to Accelerate Healthcare Compliance Innovation',
    date: '2024-08-15',
    category: 'Funding',
    excerpt: 'Leading healthcare compliance platform secures funding from top UK healthcare investors to expand platform capabilities and accelerate growth across NHS organizations.',
    readTime: '3 min read',
    featured: true,
  },
  {
    title: 'DSPT Pro Partners with NHS Digital to Streamline Compliance Processes',
    date: '2024-07-22',
    category: 'Partnership',
    excerpt: 'Strategic partnership aims to simplify DSPT compliance for thousands of healthcare practices across England through integrated automation and expert guidance.',
    readTime: '4 min read',
    featured: true,
  },
  {
    title: 'New Research: 78% of Healthcare Practices Struggle with DSPT Compliance',
    date: '2024-06-30',
    category: 'Research',
    excerpt: 'Comprehensive study reveals significant challenges in healthcare data security compliance, highlighting the urgent need for automated solutions.',
    readTime: '5 min read',
    featured: false,
  },
  {
    title: 'DSPT Pro Wins \'Healthcare Innovation of the Year\' at UK Health Tech Awards',
    date: '2024-06-10',
    category: 'Award',
    excerpt: 'Platform recognized for outstanding contribution to healthcare data security and compliance automation across the UK healthcare sector.',
    readTime: '2 min read',
    featured: false,
  },
  {
    title: 'DSPT Pro Expands to Scotland and Wales Following England Success',
    date: '2024-05-18',
    category: 'Expansion',
    excerpt: 'Following successful deployment across English healthcare practices, DSPT Pro extends compliance platform to Scotland and Wales healthcare systems.',
    readTime: '3 min read',
    featured: false,
  },
  {
    title: 'CEO Interview: The Future of Healthcare Compliance Automation',
    date: '2024-04-25',
    category: 'Interview',
    excerpt: 'DSPT Pro CEO discusses the evolving landscape of healthcare data security and the role of automation in protecting patient information.',
    readTime: '6 min read',
    featured: false,
  },
];

const mediaKit = {
  companyLogo: '/api/placeholder/200/80',
  pressPhotos: [
    { title: 'CEO Headshot', url: '/api/placeholder/300/300' },
    { title: 'Company Office', url: '/api/placeholder/400/300' },
    { title: 'Platform Screenshot', url: '/api/placeholder/500/300' },
    { title: 'Team Photo', url: '/api/placeholder/600/400' },
  ],
  factSheet: {
    founded: '2022',
    headquarters: 'London, UK',
    employees: '45+',
    customers: '500+ healthcare organizations',
    funding: '£2.5M Series A',
    compliance: 'SOC 2, ISO 27001, NHS DSPT',
  },
};

const awards = [
  {
    title: 'Healthcare Innovation of the Year',
    organization: 'UK Health Tech Awards',
    year: '2024',
    description: 'Recognized for outstanding innovation in healthcare compliance automation',
  },
  {
    title: 'Best B2B SaaS Platform',
    organization: 'SaaS Awards UK',
    year: '2024',
    description: 'Awarded for excellence in B2B software design and functionality',
  },
  {
    title: 'Cyber Security Excellence Award',
    organization: 'Cyber Defense Magazine',
    year: '2023',
    description: 'Honored for advancing cybersecurity in the healthcare sector',
  },
  {
    title: 'Startup of the Year',
    organization: 'London Tech Week',
    year: '2023',
    description: 'Recognized as the most promising healthcare technology startup',
  },
];

const mediaContact = {
  name: 'Sarah Mitchell',
  title: 'Head of Communications',
  email: 'press@dsptpro.com',
  phone: '+44 20 7123 4567',
  photo: '/api/placeholder/150/150',
};

const executiveTeam = [
  {
    name: 'Dr. James Wilson',
    title: 'CEO & Co-Founder',
    bio: 'Former NHS Digital executive with 15+ years experience in healthcare IT and compliance. Led digital transformation initiatives across 50+ NHS trusts.',
    photo: '/api/placeholder/150/150',
  },
  {
    name: 'Sarah Mitchell',
    title: 'CTO & Co-Founder',
    bio: 'Former senior engineer at leading healthcare security firm. Expert in healthcare data protection and compliance automation systems.',
    photo: '/api/placeholder/150/150',
  },
  {
    name: 'Dr. Emily Chen',
    title: 'Chief Medical Officer',
    bio: 'Practicing GP and healthcare informatics specialist. Provides clinical insight to ensure DSPT Pro meets real-world healthcare needs.',
    photo: '/api/placeholder/150/150',
  },
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <NewspaperIcon className="mx-auto h-16 w-16 text-white mb-6" />
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Press & Media
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
              Latest news, press releases, and media resources about DSPT Pro's mission to transform healthcare data security and compliance across the UK.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Press Releases */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Latest News
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Recent press releases and company announcements.
            </p>
          </div>

          {/* Featured Stories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {pressReleases.filter(release => release.featured).map((release, index) => (
              <article key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                      {release.category}
                    </span>
                    <span className="ml-3 text-sm text-gray-500">{release.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link href="#">{release.title}</Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{release.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <CalendarDaysIcon className="h-4 w-4 mr-1" />
                      <span>{release.date}</span>
                    </div>
                    <Link href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      Read More
                      <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* All Press Releases */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">All Press Releases</h3>
            {pressReleases.filter(release => !release.featured).map((release, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                        {release.category}
                      </span>
                      <span className="ml-3 text-sm text-gray-500">{release.date}</span>
                      <span className="ml-3 text-sm text-gray-500">{release.readTime}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      <Link href="#">{release.title}</Link>
                    </h4>
                    <p className="text-gray-600">{release.excerpt}</p>
                  </div>
                  <div className="ml-6">
                    <Link href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      Read →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Awards & Recognition
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Industry recognition for our innovation and impact in healthcare compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <TagIcon className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{award.title}</h3>
                    <p className="text-blue-600 font-medium">{award.organization} • {award.year}</p>
                    <p className="text-gray-600 mt-2">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Executive Team */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Executive Team
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Leadership team available for interviews and commentary.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {executiveTeam.map((executive, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <UserIcon className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{executive.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{executive.title}</p>
                <p className="text-gray-600 text-sm">{executive.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Kit & Resources */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Media Kit */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Media Kit</h2>
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Fact Sheet</h3>
                <dl className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="font-medium text-gray-900">Founded:</dt>
                    <dd className="text-gray-600">{mediaKit.factSheet.founded}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Headquarters:</dt>
                    <dd className="text-gray-600">{mediaKit.factSheet.headquarters}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Employees:</dt>
                    <dd className="text-gray-600">{mediaKit.factSheet.employees}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Customers:</dt>
                    <dd className="text-gray-600">{mediaKit.factSheet.customers}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Funding:</dt>
                    <dd className="text-gray-600">{mediaKit.factSheet.funding}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Compliance:</dt>
                    <dd className="text-gray-600">{mediaKit.factSheet.compliance}</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Press Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-blue-600 hover:text-blue-700">
                      Download Company Logo (High Resolution)
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-600 hover:text-blue-700">
                      Executive Headshots & Bios
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-600 hover:text-blue-700">
                      Product Screenshots & Demo Videos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-600 hover:text-blue-700">
                      Company Background & History
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Media Contact */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Media Contact</h2>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-20 w-20 bg-gray-200 rounded-full flex items-center justify-center">
                    <UserIcon className="h-10 w-10 text-gray-400" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-900">{mediaContact.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{mediaContact.title}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <UserIcon className="h-4 w-4 text-gray-400 mr-2" />
                        <a href={`mailto:${mediaContact.email}`} className="text-blue-600 hover:text-blue-700">
                          {mediaContact.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <PhoneIcon className="h-4 w-4 text-gray-400 mr-2" />
                        <a href={`tel:${mediaContact.phone}`} className="text-blue-600 hover:text-blue-700">
                          {mediaContact.phone}
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mt-4">
                      Available for interviews, expert commentary, and press inquiries. Response within 24 hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Expert Commentary Available</h3>
                <p className="text-gray-600 mb-4">
                  Our executives are available to provide expert commentary on:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Healthcare data security trends</li>
                  <li>• NHS compliance requirements</li>
                  <li>• Healthcare technology innovation</li>
                  <li>• Data protection regulations</li>
                  <li>• Healthcare cybersecurity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Media Inquiries Welcome
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            For press inquiries, interview requests, or expert commentary, contact our media team. We respond to all legitimate media requests within 24 hours.
          </p>
          <div className="mt-8">
            <Link
              href={`mailto:${mediaContact.email}`}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Contact Media Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
