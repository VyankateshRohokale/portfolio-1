import React from 'react';
import Link from 'next/link';
import { Database, CheckCircle, ArrowLeft, Server, Cloud, Gauge, Shield, Zap, Clock, DollarSign } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Backend Architecture Services - Scalable APIs & Cloud Infrastructure',
    description: 'Professional backend architecture services including microservices, RESTful APIs, database optimization, cloud infrastructure, and DevOps. Build scalable, high-performance systems.',
    keywords: [
        'backend development',
        'API development',
        'microservices architecture',
        'cloud infrastructure',
        'DevOps services',
        'database optimization',
        'scalable architecture',
        'system integration'
    ],
    openGraph: {
        title: 'Backend Architecture Services | Vyankatesh',
        description: 'Expert backend architecture and infrastructure services for scalable, high-performance applications.',
        url: 'https://vyankatesh.dev/services/backend-architecture',
        type: 'website',
    },
    alternates: {
        canonical: 'https://vyankatesh.dev/services/backend-architecture',
    },
};

export default function BackendArchitecturePage() {
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
                            <Database className="h-12 w-12 text-lime-400" />
                        </div>
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                                Backend <span className="text-lime-400">Architecture</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl">
                                Build robust, scalable server infrastructure that powers your applications.
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
                                Our backend architecture team designs and builds scalable server-side solutions that handle high traffic,
                                process data efficiently, and integrate seamlessly with your frontend applications.
                            </p>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                From microservices architecture to cloud infrastructure, we create backend systems that are
                                reliable, maintainable, and ready to scale with your business growth.
                            </p>
                            <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300">
                                Discuss Your Backend Needs
                                <Zap className="ml-2 h-4 w-4" />
                            </Link>
                        </div>

                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Key Highlights</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <Server className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Microservices Architecture</h4>
                                        <p className="text-gray-400 text-sm">Modular, independent services for flexibility and scalability</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Cloud className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Cloud-Native Solutions</h4>
                                        <p className="text-gray-400 text-sm">Built for AWS, Google Cloud, and Azure platforms</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Gauge className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">High Performance</h4>
                                        <p className="text-gray-400 text-sm">Optimized for speed, efficiency, and low latency</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Shield className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Security First</h4>
                                        <p className="text-gray-400 text-sm">Enterprise-grade security and data protection</p>
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
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Backend Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Microservices Architecture',
                                description: 'Design and implement scalable microservices-based systems with proper service boundaries.',
                                features: ['Service Decomposition', 'API Gateway', 'Service Discovery', 'Load Balancing']
                            },
                            {
                                title: 'RESTful API Development',
                                description: 'Build robust, well-documented APIs that power your applications and integrations.',
                                features: ['RESTful Design', 'GraphQL APIs', 'API Documentation', 'Rate Limiting & Security']
                            },
                            {
                                title: 'Database Optimization',
                                description: 'Design efficient database schemas and optimize queries for maximum performance.',
                                features: ['Schema Design', 'Query Optimization', 'Indexing Strategy', 'Data Migration']
                            },
                            {
                                title: 'Cloud Infrastructure',
                                description: 'Set up and manage scalable cloud infrastructure on AWS, GCP, or Azure.',
                                features: ['Infrastructure as Code', 'Auto-scaling', 'Load Balancers', 'CDN Integration']
                            },
                            {
                                title: 'DevOps Implementation',
                                description: 'Automate deployment, monitoring, and maintenance with modern DevOps practices.',
                                features: ['CI/CD Pipelines', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing']
                            },
                            {
                                title: 'System Integration',
                                description: 'Connect your backend with third-party services, APIs, and legacy systems.',
                                features: ['Third-party APIs', 'Legacy Integration', 'Message Queues', 'Event-Driven Architecture']
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
                            <h3 className="text-xl font-bold text-white mb-4">Languages & Frameworks</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Node.js', 'Python', 'Go', 'Express', 'FastAPI', 'NestJS', 'Django'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Databases</h3>
                            <div className="flex flex-wrap gap-2">
                                {['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch', 'DynamoDB', 'Cassandra'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">DevOps & Cloud</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Terraform', 'Nginx', 'RabbitMQ'].map((tech, idx) => (
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
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Development Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: 'Architecture Design', desc: 'Design scalable system architecture and define technology stack' },
                            { step: '02', title: 'API Development', desc: 'Build RESTful APIs and implement business logic' },
                            { step: '03', title: 'Infrastructure Setup', desc: 'Configure cloud infrastructure and deployment pipelines' },
                            { step: '04', title: 'Monitoring & Support', desc: 'Implement monitoring and provide ongoing maintenance' }
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
                                Backend architecture projects typically take 4-10 weeks based on requirements.
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Simple API: 2-3 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Microservices setup: 4-6 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Cloud infrastructure: 3-5 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Enterprise backend: 8-10 weeks</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
                            <div className="flex items-center mb-4">
                                <DollarSign className="h-8 w-8 text-lime-400 mr-3" />
                                <h3 className="text-2xl font-bold text-white">Pricing</h3>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Flexible pricing models based on infrastructure complexity and scale.
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Fixed-price for defined architecture</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Time & materials for complex systems</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Managed services for ongoing support</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Free architecture consultation</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-t from-black to-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Ready to Build Scalable Backend Infrastructure?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Let's create a robust backend architecture that powers your application and scales with your growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300">
                            Get Started
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
