import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ArrowLeft, Settings, Lightbulb, Target, Users, Zap, Clock, DollarSign } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Custom Solutions - Tailored Software Development for Unique Business Needs',
    description: 'Custom software development services tailored to your unique business requirements. From legacy modernization to bespoke solutions, we build exactly what you need.',
    keywords: [
        'custom software development',
        'bespoke software solutions',
        'legacy system modernization',
        'custom web applications',
        'tailored solutions',
        'third-party integration',
        'technical consulting',
        'custom development'
    ],
    openGraph: {
        title: 'Custom Solutions | byencrypt',
        description: 'Tailored software development services for your unique business challenges.',
        url: 'https://byencrypt.com/services/custom-solutions',
        type: 'website',
    },
    alternates: {
        canonical: 'https://byencrypt.com/services/custom-solutions',
    },
};

export default function CustomSolutionsPage() {
    return (
        <div className="min-h-screen bg-black pt-16 font-mono">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/services" className="inline-flex items-center text-lime-400 hover:text-lime-300 mb-8 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Services
                    </Link>

                    <div className="flex items-center mb-6">
                        <div className="p-4 bg-lime-400/10 rounded-xl mr-6">
                            <ArrowRight className="h-12 w-12 text-lime-400" />
                        </div>
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                                Custom <span className="text-lime-400">Solutions</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl">
                                Tailored software solutions designed specifically for your unique business needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">What We Offer</h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Every business has unique challenges that off-the-shelf solutions can't address. Our custom development
                                team builds bespoke software tailored to your specific requirements, workflows, and business objectives.
                            </p>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                From modernizing legacy systems to creating entirely new applications, we work closely with you
                                to understand your needs and deliver solutions that drive real business value.
                            </p>
                            <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300">
                                Discuss Your Project
                                <Zap className="ml-2 h-4 w-4" />
                            </Link>
                        </div>

                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Custom</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <Target className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Perfect Fit</h4>
                                        <p className="text-gray-400 text-sm">Built exactly for your business processes and requirements</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Lightbulb className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Innovation</h4>
                                        <p className="text-gray-400 text-sm">Implement unique features that give you competitive advantage</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Settings className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Full Control</h4>
                                        <p className="text-gray-400 text-sm">Own your solution with complete customization freedom</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Users className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Dedicated Team</h4>
                                        <p className="text-gray-400 text-sm">Expert developers focused on your project success</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Offered */}
            <section className="py-16 bg-gray-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Custom Development Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Custom Software Development',
                                description: 'Build bespoke applications from scratch, tailored to your exact specifications and business goals.',
                                features: ['Requirements Analysis', 'Custom Architecture', 'Agile Development', 'Quality Assurance']
                            },
                            {
                                title: 'Legacy System Modernization',
                                description: 'Upgrade outdated systems with modern technologies while preserving critical business logic.',
                                features: ['System Assessment', 'Migration Planning', 'Data Migration', 'User Training']
                            },
                            {
                                title: 'Third-party Integration',
                                description: 'Connect your systems with external APIs, services, and platforms for seamless operations.',
                                features: ['API Integration', 'Data Synchronization', 'Middleware Development', 'Automation']
                            },
                            {
                                title: 'Scalable Architecture Design',
                                description: 'Design systems that grow with your business, handling increased load and complexity.',
                                features: ['System Design', 'Performance Planning', 'Cloud Strategy', 'Future-proofing']
                            },
                            {
                                title: 'Technical Consulting',
                                description: 'Expert guidance on technology selection, architecture decisions, and development strategy.',
                                features: ['Technology Assessment', 'Best Practices', 'Code Review', 'Strategic Planning']
                            },
                            {
                                title: 'Ongoing Support & Maintenance',
                                description: 'Continuous monitoring, updates, and improvements to keep your systems running smoothly.',
                                features: ['Bug Fixes', 'Feature Updates', 'Performance Monitoring', '24/7 Support']
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-gray-900/70 border border-gray-800 rounded-xl p-6 hover:border-lime-400 transition-all duration-300">
                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                                            <CheckCircle className="h-4 w-4 text-lime-400 mr-2 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-16 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Technology Expertise</h2>
                    <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
                        <p className="text-gray-400 text-center mb-8">
                            We work with the best technologies for your specific needs, not limited to any particular stack.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'Vue', 'Angular', 'Next.js', 'Svelte'].map((tech, idx) => (
                                        <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Node.js', 'Python', 'Java', 'Go', '.NET'].map((tech, idx) => (
                                        <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-4">Mobile</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['React Native', 'Flutter', 'iOS', 'Android', 'Ionic'].map((tech, idx) => (
                                        <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-4">Cloud</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['AWS', 'Azure', 'Google Cloud', 'Heroku', 'DigitalOcean'].map((tech, idx) => (
                                        <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 bg-gray-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Custom Development Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: 'Discovery & Planning', desc: 'Deep dive into your requirements, challenges, and goals' },
                            { step: '02', title: 'Design & Architecture', desc: 'Create technical architecture and user experience design' },
                            { step: '03', title: 'Development & Testing', desc: 'Agile development with continuous testing and feedback' },
                            { step: '04', title: 'Deployment & Support', desc: 'Launch your solution and provide ongoing support' }
                        ].map((phase, index) => (
                            <div key={index} className="bg-gray-900/70 border border-gray-800 rounded-xl p-6 hover:border-lime-400 transition-all duration-300">
                                <div className="text-4xl font-bold text-lime-400/20 mb-4">{phase.step}</div>
                                <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                                <p className="text-gray-400 text-sm">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing & Timeline */}
            <section className="py-16 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
                            <div className="flex items-center mb-4">
                                <Clock className="h-8 w-8 text-lime-400 mr-3" />
                                <h3 className="text-2xl font-bold text-white">Timeline</h3>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Project timelines are highly dependent on scope, complexity, and requirements.
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Small tools & integrations: 2-4 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Custom web applications: 8-12 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Legacy modernization: 12-16 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Enterprise solutions: 16+ weeks</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
                            <div className="flex items-center mb-4">
                                <DollarSign className="h-8 w-8 text-lime-400 mr-3" />
                                <h3 className="text-2xl font-bold text-white">Pricing</h3>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Flexible engagement models designed to fit your budget and project needs.
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Fixed-price for well-defined projects</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Time & materials for evolving requirements</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Dedicated team for long-term projects</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Free discovery session & estimate</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-16 bg-gray-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Industries We Serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {['Finance', 'Healthcare', 'E-commerce', 'Education', 'Real Estate', 'Manufacturing', 'Logistics', 'Entertainment', 'SaaS', 'Government'].map((industry, idx) => (
                            <div key={idx} className="bg-gray-900/70 border border-gray-800 rounded-xl p-4 text-center hover:border-lime-400 transition-all duration-300">
                                <p className="text-white font-semibold">{industry}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-t from-black to-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Ready to Build Your Custom Solution?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Let's discuss your unique challenges and create a solution that's perfectly tailored to your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300">
                            Start Your Project
                            <Zap className="ml-2 h-5 w-5" />
                        </Link>
                        <Link href="/projects" className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-gray-300 font-semibold rounded-full hover:border-lime-400 hover:text-lime-400 transition-all duration-300">
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
