import Link from 'next/link';
import { AcademicCapIcon, BookOpenIcon, VideoCameraIcon, UsersIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';

const trainingPrograms = [
  {
    title: 'DSPT Fundamentals',
    description: 'Essential training for healthcare staff on data security and protection basics.',
    duration: '2 hours',
    format: 'Online',
    level: 'Beginner',
    price: 'Free',
    modules: [
      'Introduction to DSPT',
      'Data security principles',
      'Common threats and risks',
      'Basic protection measures',
    ],
  },
  {
    title: 'Advanced DSPT Compliance',
    description: 'Comprehensive training for practice managers and IT administrators.',
    duration: '6 hours',
    format: 'Online + Workshop',
    level: 'Intermediate',
    price: '£299',
    modules: [
      'Technical security controls',
      'Risk assessment methodologies',
      'Incident response procedures',
      'Audit and reporting',
    ],
  },
  {
    title: 'DSPT Assessor Certification',
    description: 'Professional certification program for compliance consultants.',
    duration: '3 days',
    format: 'In-person',
    level: 'Expert',
    price: '£1,299',
    modules: [
      'Assessment framework mastery',
      'Client consultation skills',
      'Implementation strategies',
      'Certification exam',
    ],
  },
];

const learningPaths = [
  {
    title: 'Practice Manager Track',
    description: 'Complete learning path for healthcare practice managers',
    courses: 5,
    duration: '12 hours',
    certification: true,
    topics: ['DSPT fundamentals', 'Risk management', 'Staff training', 'Policy development', 'Audit preparation'],
  },
  {
    title: 'IT Administrator Track',
    description: 'Technical training for healthcare IT professionals',
    courses: 7,
    duration: '18 hours',
    certification: true,
    topics: ['Technical controls', 'System security', 'Access management', 'Monitoring', 'Incident response', 'Backup strategies', 'Integration security'],
  },
  {
    title: 'Healthcare Staff Track',
    description: 'Essential data protection training for all healthcare workers',
    courses: 3,
    duration: '4 hours',
    certification: false,
    topics: ['Data handling', 'Password security', 'Phishing awareness'],
  },
];

const features = [
  {
    title: 'Interactive Learning',
    description: 'Engaging, interactive content with real-world scenarios and case studies.',
    icon: BookOpenIcon,
  },
  {
    title: 'Video Content',
    description: 'High-quality video lessons from industry experts and practitioners.',
    icon: VideoCameraIcon,
  },
  {
    title: 'Live Workshops',
    description: 'Regular live workshops and Q&A sessions with DSPT specialists.',
    icon: UsersIcon,
  },
  {
    title: 'Flexible Scheduling',
    description: 'Learn at your own pace with 24/7 access to training materials.',
    icon: ClockIcon,
  },
];

const testimonials = [
  {
    quote: "The DSPT training program helped our entire practice understand our compliance obligations. The practical examples made complex concepts easy to grasp.",
    author: "Dr. Sarah Johnson",
    role: "Practice Manager",
    location: "Manchester",
    rating: 5,
  },
  {
    quote: "Excellent technical content that gave me the skills to implement proper security controls. The certification is now recognized by our clients.",
    author: "Mark Thompson",
    role: "IT Consultant",
    location: "London",
    rating: 5,
  },
  {
    quote: "The staff training modules are perfect for our team. Short, focused sessions that fit into busy schedules while covering all essential topics.",
    author: "Emma Wilson",
    role: "Nursing Manager",
    location: "Birmingham",
    rating: 5,
  },
];

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AcademicCapIcon className="mx-auto h-16 w-16 text-white mb-6" />
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              DSPT Training
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
              Comprehensive training programs to build DSPT compliance expertise across your healthcare organization. From basic awareness to expert certification.
            </p>
          </div>
        </div>
      </div>

      {/* Training Programs */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Training Programs
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Choose the right training level for your role and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      program.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      program.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {program.level}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Duration:</span>
                      <p className="text-gray-600">{program.duration}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Format:</span>
                      <p className="text-gray-600">{program.format}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">What you'll learn:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {program.modules.map((module, moduleIndex) => (
                        <li key={moduleIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {module}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">{program.price}</span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Paths */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Learning Paths
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Structured learning journeys designed for specific roles in healthcare.
            </p>
          </div>

          <div className="space-y-8">
            {learningPaths.map((path, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{path.title}</h3>
                    <p className="text-gray-600 mb-4">{path.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">{path.courses} courses</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">{path.duration} total</span>
                      </div>
                      <div>
                        <span className={`font-medium ${path.certification ? 'text-green-600' : 'text-gray-600'}`}>
                          {path.certification ? 'Certificate included' : 'No certificate'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {path.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 text-center lg:text-right">
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                      Start Learning Path
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Our Training?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Designed by experts for real-world healthcare compliance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What Our Students Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Real feedback from healthcare professionals who've completed our training.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to Build Your DSPT Expertise?
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Start with our free fundamentals course or speak to our training team about custom programs for your organization.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
              >
                Start Free Course
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors"
              >
                Contact Training Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
