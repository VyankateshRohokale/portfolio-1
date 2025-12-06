import React from 'react';
import Link from 'next/link';
import { FileText, AlertTriangle, Gavel, Users, CreditCard, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Service Agreement',
  description: 'Read Vyankatesh\'s terms and conditions for using the portfolio and any offered services.',
  openGraph: {
    title: 'Terms & Conditions | Vyankatesh',
    description: 'Terms and conditions for using Vyankatesh services.',
    url: '/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black pt-16 font-mono">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FileText className="h-16 w-16 text-lime-400 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Terms & <span className="text-lime-400">Conditions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: August 1, 2025</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Acceptance of Terms */}
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Gavel className="h-6 w-6 text-lime-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                  <p className="text-gray-400">
                  By accessing and using these services, you accept and agree to be bound by the
                  terms and provision of this agreement. These Terms and Conditions constitute a legally
                  binding agreement between you and Vyankatesh.
                </p>
                <p className="text-gray-400">
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </div>

            {/* Services Description */}
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Users className="h-6 w-6 text-lime-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Services Description</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="text-gray-400">byencrypt provides the following services:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Blockchain development and smart contract creation</li>
                  <li>Web3 and decentralized application (dApp) development</li>
                  <li>Full-stack web and mobile application development</li>
                  <li>AI and machine learning integration</li>
                  <li>Backend architecture and API development</li>
                  <li>Security auditing and consulting services</li>
                </ul>
                <p className="text-gray-400">
                  All services are provided subject to these terms and any additional agreements
                  specific to individual projects.
                </p>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <CreditCard className="h-6 w-6 text-lime-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Payment Terms</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <h3 className="text-lg font-semibold text-white">Project-Based Services</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Payment schedules are defined in individual project contracts</li>
                  <li>Typically require 50% upfront payment before project commencement</li>
                  <li>Remaining balance due upon project completion and delivery</li>
                  <li>Late payments may incur additional fees as specified in contracts</li>
                </ul>
                <h3 className="text-lg font-semibold text-white mt-6">Refund Policy</h3>
                <p className="text-gray-400">
                  Refunds are considered on a case-by-case basis. Work completed cannot be refunded.
                  Any refund requests must be submitted within 30 days of project initiation.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 text-lime-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Intellectual Property</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <h3 className="text-lg font-semibold text-white">Client Ownership</h3>
                <p className="text-gray-400">
                  Upon full payment, clients retain ownership of custom developed software,
                  applications, and related deliverables created specifically for their project.
                </p>
                <h3 className="text-lg font-semibold text-white mt-4">byencrypt Rights</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>We retain rights to our methodologies, frameworks, and pre-existing tools</li>
                  <li>We may showcase completed projects in our portfolio (with client consent)</li>
                  <li>We retain rights to general knowledge and experience gained</li>
                </ul>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-6 w-6 text-lime-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="text-gray-400">
                  byencrypt provides services `as is`` and makes no warranties, express or implied,
                  including but not limited to warranties of merchantability, fitness for a particular purpose,
                  or non-infringement.
                </p>
                <p className="text-gray-400">
                  Our liability is limited to the amount paid for the specific service. We are not liable
                  for indirect, incidental, special, consequential, or punitive damages.
                </p>
                <h3 className="text-lg font-semibold text-white mt-4">Client Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Provide accurate project requirements and timely feedback</li>
                  <li>Ensure legal compliance of requested features</li>
                  <li>Perform adequate testing before deployment</li>
                  <li>Maintain backups of important data</li>
                </ul>
              </div>
            </div>

            {/* Confidentiality */}
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Confidentiality</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-gray-400">
                  We understand the importance of confidentiality in business relationships.
                  byencrypt commits to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Keep all client information strictly confidential</li>
                  <li>Use client information only for the purposes of providing services</li>
                  <li>Implement appropriate security measures to protect sensitive data</li>
                  <li>Not disclose any proprietary information to third parties</li>
                </ul>
              </div>
            </div>

            {/* Termination */}
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Termination</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-gray-400">
                  Either party may terminate services with 30 days written notice.
                  In case of termination:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Client pays for all completed work and expenses incurred</li>
                  <li>All deliverables completed to date will be provided</li>
                  <li>Confidentiality obligations remain in effect</li>
                  <li>Both parties return any confidential materials</li>
                </ul>
              </div>
            </div>

            {/* Governing Law */}
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Governing Law</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-gray-400">
                  These terms shall be interpreted and governed in accordance with the laws of
                  the State of California, United States. Any disputes shall be resolved through
                  binding arbitration in San Francisco, CA.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Changes to Terms</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-gray-400">
                  byencrypt reserves the right to modify these terms at any time.
                  Changes will be effective immediately upon posting on our website.
                  Continued use of our services constitutes acceptance of modified terms.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-gray-400">
                  If you have any questions about these Terms & Conditions, please contact us:
                </p>
                  <div className="space-y-2 text-gray-400 ml-4">
                  <p>Email: <a href="mailto:realpiyush2525@gmail.com" className="text-lime-400 hover:text-white">realpiyush2525@gmail.com</a></p>
                  <p>Business: <a href="mailto:realpiyush2525@gmail.com" className="text-lime-400 hover:text-white">realpiyush2525@gmail.com</a></p>
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