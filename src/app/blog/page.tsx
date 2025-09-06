import Link from 'next/link';
import { NewspaperIcon, CalendarDaysIcon, UserIcon, TagIcon, ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const featuredPost = {
  title: 'NHS DSPT 2024: What\'s New and How to Prepare',
  excerpt: 'The latest updates to the NHS Data Security and Protection Toolkit bring new requirements and opportunities. Learn what\'s changed and how to ensure your practice stays compliant.',
  author: 'Dr. Sarah Mitchell',
  date: '2024-09-01',
  readTime: '8 min read',
  category: 'Compliance Updates',
  image: '/api/placeholder/600/300',
  featured: true,
};

const blogPosts = [
  {
    title: 'Top 10 Common DSPT Compliance Mistakes to Avoid',
    excerpt: 'Learn from the most frequent compliance errors we see and how to prevent them in your practice.',
    author: 'Mark Thompson',
    date: '2024-08-28',
    readTime: '6 min read',
    category: 'Best Practices',
    image: '/api/placeholder/400/200',
  },
  {
    title: 'Data Encryption in Healthcare: A Complete Guide',
    excerpt: 'Understanding encryption requirements for NHS patient data and implementing robust security measures.',
    author: 'Dr. Emily Chen',
    date: '2024-08-25',
    readTime: '12 min read',
    category: 'Security',
    image: '/api/placeholder/400/200',
  },
  {
    title: 'Automating DSPT Compliance: ROI and Benefits',
    excerpt: 'Calculate the return on investment of automated compliance tools and understand the long-term benefits.',
    author: 'James Wilson',
    date: '2024-08-22',
    readTime: '10 min read',
    category: 'Business',
    image: '/api/placeholder/400/200',
  },
  {
    title: 'Staff Training for Data Protection: Best Practices',
    excerpt: 'Effective strategies for training healthcare staff on data protection and building a culture of compliance.',
    author: 'Dr. Sarah Mitchell',
    date: '2024-08-20',
    readTime: '7 min read',
    category: 'Training',
    image: '/api/placeholder/400/200',
  },
  {
    title: 'Incident Response in Healthcare: A Step-by-Step Guide',
    excerpt: 'How to prepare for and respond to data security incidents to minimize impact and maintain compliance.',
    author: 'Michael Rodriguez',
    date: '2024-08-18',
    readTime: '15 min read',
    category: 'Security',
    image: '/api/placeholder/400/200',
  },
  {
    title: 'Understanding Risk Assessments for Small Practices',
    excerpt: 'Simplified approach to conducting effective risk assessments that meet DSPT requirements.',
    author: 'Dr. Emily Chen',
    date: '2024-08-15',
    readTime: '9 min read',
    category: 'Risk Management',
    image: '/api/placeholder/400/200',
  },
];

const categories = [
  'All Posts',
  'Compliance Updates',
  'Security',
  'Best Practices',
  'Training',
  'Business',
  'Risk Management',
  'Technology',
];

const recentPosts = [
  { title: 'DSPT Deadline Reminders for 2024', date: '2024-09-05' },
  { title: 'New Cyber Security Guidelines', date: '2024-09-03' },
  { title: 'Patient Data Rights Update', date: '2024-09-01' },
  { title: 'Small Practice Compliance Tips', date: '2024-08-30' },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <NewspaperIcon className="mx-auto h-16 w-16 text-white mb-6" />
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              DSPT Pro Blog
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
              Expert insights, compliance updates, and practical guidance to help you master NHS DSPT requirements and maintain healthcare data security.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search articles..."
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm font-medium rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="aspect-video lg:aspect-square bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <NewspaperIcon className="h-16 w-16 text-gray-400" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:flex lg:flex-col lg:justify-center">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <UserIcon className="h-4 w-4 mr-1" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <CalendarDaysIcon className="h-4 w-4 mr-1" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read full article
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <article key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="aspect-video bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <NewspaperIcon className="h-12 w-12 text-gray-400" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                        <Link href="#">{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <UserIcon className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-md">
                    1
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="mt-12 lg:mt-0">
              <div className="space-y-8">
                {/* Recent Posts */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post, index) => (
                      <div key={index}>
                        <Link href="#" className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                          {post.title}
                        </Link>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Updated</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Get the latest DSPT updates and compliance insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['DSPT', 'Compliance', 'Security', 'NHS', 'Healthcare', 'Data Protection', 'Training', 'Audit'].map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        <TagIcon className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Simplify Your DSPT Compliance?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Stop struggling with manual compliance processes. Let DSPT Pro automate your healthcare data security requirements.
          </p>
          <div className="mt-8">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
