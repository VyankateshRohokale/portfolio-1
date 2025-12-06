import React from 'react';
import Link from 'next/link';
import { Smartphone, CheckCircle, ArrowLeft, Code2, Globe, Zap, Users, TrendingUp, Clock, DollarSign } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Application Development Services - iOS & Android Apps',
    description: 'Professional mobile app development services for iOS and Android. Custom features, API integration, and deployment support for native and cross-platform applications.',
    keywords: [
        'mobile app development',
        'iOS development',
        'Android development',
        'cross-platform apps',
        'React Native',
        'app deployment',
        'custom app features'
    ],
    openGraph: {
        title: 'Application Development Services | Vyankatesh',
        description: 'Expert mobile app development for iOS and Android with seamless user experiences.',
        url: 'https://vyankatesh.dev/services/application-development',
        type: 'website',
    },
    alternates: {
        canonical: 'https://vyankatesh.dev/services/application-development',
    },
};

export default function ApplicationDevelopmentPage() {
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
                            <Smartphone className="h-12 w-12 text-lime-400" />
                        </div>
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                                Application <span className="text-lime-400">Development</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl">
                                Native and cross-platform mobile applications designed for iOS and Android users.
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
                                Our application development team creates powerful, user-friendly mobile applications for both iOS and Android platforms.
                                We leverage modern frameworks and best practices to deliver apps that perform seamlessly across all devices.
                            </p>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                From concept to deployment and maintenance, we handle every aspect of mobile app development.
                                Whether you need a native app for optimal performance or a cross-platform solution for faster time-to-market, we've got you covered.
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
                                        <h4 className="text-white font-semibold mb-1">Expert Developers</h4>
                                        <p className="text-gray-400 text-sm">Experienced team with proven track record in iOS and Android development</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Smartphone className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Multi-Platform Support</h4>
                                        <p className="text-gray-400 text-sm">Native and cross-platform solutions tailored to your needs</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <TrendingUp className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Performance First</h4>
                                        <p className="text-gray-400 text-sm">Optimized for speed, efficiency, and seamless user experience</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Users className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">End-to-End Support</h4>
                                        <p className="text-gray-400 text-sm">From development through deployment and ongoing maintenance</p>
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
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Application Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'iOS App Development',
                                description: 'Native iOS applications built with Swift and SwiftUI for optimal performance and Apple ecosystem integration.',
                                features: ['Swift Development', 'SwiftUI Interfaces', 'App Store Deployment', 'Push Notifications']
                            },
                            {
                                title: 'Android App Development',
                                description: 'Robust Android applications using Kotlin and Jetpack for seamless functionality across devices.',
                                features: ['Kotlin Development', 'Material Design', 'Play Store Deployment', 'Firebase Integration']
                            },
                            {
                                title: 'Cross-Platform Apps',
                                description: 'React Native applications delivering iOS and Android functionality with a single codebase.',
                                features: ['React Native', 'Code Reusability', 'Faster Development', 'Both App Stores']
                            },
                            {
                                title: 'Custom Feature Development',
                                description: 'Tailored features and functionality to meet your unique business requirements and user needs.',
                                features: ['Feature Design', 'Complex Logic', 'Real-time Features', 'User Analytics']
                            },
                            {
                                title: 'API Integration',
                                description: 'Seamless backend integration connecting your app to servers, databases, and third-party services.',
                                features: ['REST APIs', 'GraphQL', 'Authentication', 'Data Synchronization']
                            },
                            {
                                title: 'App Deployment & Maintenance',
                                description: 'Complete deployment process and ongoing support including updates, bug fixes, and performance monitoring.',
                                features: ['Store Submission', 'Version Updates', 'Bug Fixes', 'Performance Monitoring']
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
                            <h3 className="text-xl font-bold text-white mb-4">iOS Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Swift', 'SwiftUI', 'UIKit', 'Xcode', 'Core Data', 'AVFoundation', 'CloudKit'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Android Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Kotlin', 'Jetpack', 'Android Studio', 'Material Design', 'Firebase', 'Room', 'Retrofit'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Cross-Platform</h3>
                            <div className="flex flex-wrap gap-2">
                                {['React Native', 'Expo', 'Redux', 'Firebase', 'Testing Library', 'TypeScript', 'Fastlane'].map((tech, idx) => (
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
                            { step: '01', title: 'Discovery & Design', desc: 'Understanding your vision, user needs, and creating wireframes and mockups' },
                            { step: '02', title: 'Development', desc: 'Building robust application architecture with clean, maintainable code' },
                            { step: '03', title: 'Testing & QA', desc: 'Comprehensive testing on real devices, performance optimization, and debugging' },
                            { step: '04', title: 'Launch & Support', desc: 'App store submission, launch management, and ongoing maintenance' }
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
                                Project timelines depend on complexity and features.
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Simple apps: 4-6 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Medium apps: 8-12 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Complex apps: 12-16 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Enterprise apps: 16+ weeks</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
                            <div className="flex items-center mb-4">
                                <DollarSign className="h-8 w-8 text-lime-400 mr-3" />
                                <h3 className="text-2xl font-bold text-white">Pricing</h3>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Flexible pricing models tailored to your project.
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
                                    <span>Dedicated team options</span>
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
                        Ready to Build Your App?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Let's create a powerful mobile application that engages your users.
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
