import React from 'react';
import Link from 'next/link';
import { Shield, Eye, Lock, Database, UserCheck, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - How We Protect Your Data',
  description: 'Read Vyankatesh\'s privacy policy to understand how we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy | Vyankatesh',
    description: 'Learn how we protect your data and respect your privacy.',
    url: '/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black pt-16 font-mono">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Shield className="h-16 w-16 text-lime-400 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Privacy <span className="text-lime-400">Policy</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: August 1, 2025</p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="max-w-4xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Information We Collect */}
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Database className="h-6 w-6 text-lime-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                  <p className="text-gray-400">When you contact us or use our services, we may collect:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400 ml-4">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Company name and job title</li>
                    <li>Project requirements and specifications</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Technical Information</h3>
                  <p className="text-gray-400">We automatically collect certain technical information:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400 ml-4">
                    <li>Pages visited and time spent on our website</li>
                    <li>Referral sources</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Eye className="h-6 w-6 text-lime-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="text-gray-400">We use collected information to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Provide and improve our software development services</li>
                  <li>Respond to inquiries and provide customer support</li>
                  <li>Send project updates and important communications</li>
                  <li>Analyze website usage to enhance user experience</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </div>
            </div>

            {/* Data Protection */}
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Lock className="h-6 w-6 text-lime-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Data Protection & Security</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="text-gray-400">We implement industry-standard security measures:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>SSL encryption for all data transmission</li>
                  <li>Secure servers with regular security updates</li>
                  <li>Limited access to personal information</li>
                  <li>Regular security audits and assessments</li>
                  <li>Data backup and recovery procedures</li>
                </ul>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <UserCheck className="h-6 w-6 text-lime-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Third-Party Services</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="text-gray-400">We may use third-party services for:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Analytics (Google Analytics)</li>
                  <li>Communication tools (email services)</li>
                  <li>Payment processing (when applicable)</li>
                  <li>Cloud hosting and storage</li>
                </ul>
                <p className="text-gray-400 mt-4">
                  These services have their own privacy policies and we encourage you to review them.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-lime-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Your Rights</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="text-gray-400">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability (receive your data in a structured format)</li>
                </ul>
                <p className="text-gray-400 mt-4">
                  To exercise these rights, please contact us at{' '}
                  <a href="mailto:realpiyush2525@gmail.com" className="text-lime-400 hover:text-white">
                    realpiyush2525@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Contact & Updates */}
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Policy Updates & Contact</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-gray-400">
                  We may update this privacy policy from time to time. We will notify you of any significant
                  changes by email or through our website.
                </p>
                <p className="text-gray-400">
                  If you have any questions about this privacy policy, please contact us:
                </p>
                <div className="space-y-2 text-gray-400 ml-4">
                  <p>Email: <a href="mailto:realpiyush2525@gmail.com" className="text-lime-400 hover:text-white">realpiyush2525@gmail.com</a></p>
                  {/* <p>Support: <a href="mailto:support@byencrypt.com" className="text-lime-400 hover:text-white">support@byencrypt.com</a></p> */}
                </div>
              </div>
            </div>

            {/* AI & Content Information */}
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">AI & Content Transparency</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-gray-400">
                  Some content on our website is created with the assistance of AI technology. We believe in
                  transparency about our content creation process.
                </p>
                <p className="text-gray-400">
                  Our website is optimized for AI crawlers and search engines to ensure accurate representation
                  of our services and capabilities. Learn more about our AI indexing approach:
                </p>
                <div className="mt-4">
                  <Link
                    href="/ai-info"
                    className="inline-flex items-center text-lime-400 hover:text-white transition-colors"
                  >
                    View AI Information & Indexing Policy →
                  </Link>
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center pt-8">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}