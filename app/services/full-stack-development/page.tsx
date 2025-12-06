import React from 'react';
import Link from 'next/link';
import { Layers, CheckCircle, ArrowLeft, Code2, Smartphone, Zap, Users, TrendingUp, Clock, DollarSign } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Full Stack Development Services - Web & Mobile App Development',
    description: 'Professional full stack development services for web and mobile applications. Expert team delivering scalable, responsive, and high-performance solutions.',
    keywords: [
        'full stack development',
        'web app development',
        'mobile app development',
        'React development',
        'Next.js development',
        'Node.js development',
        'responsive web design'
    ],
    openGraph: {
        title: 'Full Stack Development Services | byencrypt',
        description: 'Expert full stack development services for web and mobile applications.',
        url: 'https://byencrypt.com/services/full-stack-development',
        type: 'website',
    },
    alternates: {
        canonical: 'https://byencrypt.com/services/full-stack-development',
    },
};

export default function FullStackDevelopmentPage() {
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
                            <Layers className="h-12 w-12 text-lime-400" />
                        </div>
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                                Full Stack <span className="text-lime-400">Development</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl">
                                Complete end-to-end development solutions for web and mobile applications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-16 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">What We Offer</h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Our full stack development team builds complete, scalable applications from database to user interface.
                                We handle everything from concept to deployment, ensuring seamless integration across all layers of your application.
                            </p>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Whether you need a responsive web application, mobile app, or both, our experienced developers
                                create solutions that deliver exceptional user experiences and drive business growth.
                            </p>
                            <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300">
                                Start Your Project
                                <Zap className="ml-2 h-4 w-4" />
                            </Link>
                        </div>

                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <Code2 className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Modern Technologies</h4>
                                        <p className="text-gray-400 text-sm">Latest frameworks and best practices for optimal performance</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Smartphone className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Responsive Design</h4>
                                        <p className="text-gray-400 text-sm">Seamless experience across all devices and screen sizes</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <TrendingUp className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Scalable Architecture</h4>
                                        <p className="text-gray-400 text-sm">Built to grow with your business and user base</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Users className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Agile Development</h4>
                                        <p className="text-gray-400 text-sm">Iterative process with regular updates and feedback</p>
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
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Full Stack Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Frontend Development',
                                description: 'Beautiful, responsive user interfaces built with React, Next.js, and modern CSS frameworks.',
                                features: ['React/Next.js Apps', 'Responsive Design', 'UI/UX Implementation', 'Performance Optimization']
                            },
                            {
                                title: 'Backend API Development',
                                description: 'Robust RESTful and GraphQL APIs with authentication, authorization, and data management.',
                                features: ['REST & GraphQL APIs', 'Authentication Systems', 'Business Logic', 'Third-party Integration']
                            },
                            {
                                title: 'Database Design',
                                description: 'Efficient database architecture with SQL and NoSQL solutions optimized for your use case.',
                                features: ['Schema Design', 'Query Optimization', 'Data Migration', 'Backup Strategies']
                            },
                            {
                                title: 'Mobile App Development',
                                description: 'Cross-platform mobile applications using React Native for iOS and Android.',
                                features: ['React Native Apps', 'Native Features', 'Push Notifications', 'App Store Deployment']
                            },
                            {
                                title: 'Cloud Integration',
                                description: 'Deploy and scale your applications on AWS, Google Cloud, or Azure infrastructure.',
                                features: ['Cloud Deployment', 'Auto-scaling', 'CDN Setup', 'Monitoring & Logging']
                            },
                            {
                                title: 'Performance Optimization',
                                description: 'Speed and efficiency improvements for faster load times and better user experience.',
                                features: ['Code Optimization', 'Caching Strategies', 'Image Optimization', 'Lazy Loading']
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
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Technology Stack</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'React Query', 'Framer Motion'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Redis'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">DevOps & Cloud</h3>
                            <div className="flex flex-wrap gap-2">
                                {['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Vercel', 'Nginx', 'Cloudflare'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 bg-gray-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Development Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: 'Discovery & Planning', desc: 'Requirements gathering, wireframing, and technical architecture design' },
                            { step: '02', title: 'Design & Development', desc: 'UI/UX design implementation and feature development in sprints' },
                            { step: '03', title: 'Testing & QA', desc: 'Comprehensive testing across devices, browsers, and use cases' },
                            { step: '04', title: 'Deployment & Support', desc: 'Production deployment with ongoing monitoring and maintenance' }
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
                                Project timelines vary based on scope and complexity.
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Landing pages: 1-2 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Web applications: 6-8 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Mobile apps: 8-10 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Enterprise solutions: 12+ weeks</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
                            <div className="flex items-center mb-4">
                                <DollarSign className="h-8 w-8 text-lime-400 mr-3" />
                                <h3 className="text-2xl font-bold text-white">Pricing</h3>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Transparent pricing tailored to your project requirements.
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Fixed-price for defined scope</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Time & materials for flexibility</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Dedicated team for long-term projects</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Free consultation & estimate</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-t from-black to-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Ready to Build Your Application?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Let's create a powerful, scalable solution that brings your vision to life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300">
                            Get Started
                            <Zap className="ml-2 h-5 w-5" />
                        </Link>
                        <Link href="/projects" className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-gray-300 font-semibold rounded-full hover:border-lime-400 hover:text-lime-400 transition-all duration-300">
                            View Portfolio
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
