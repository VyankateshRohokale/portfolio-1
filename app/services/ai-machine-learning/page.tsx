import React from 'react';
import Link from 'next/link';
import { Cpu, CheckCircle, ArrowLeft, Brain, Eye, TrendingUp, Users, Zap, Clock, DollarSign } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI & Machine Learning Services - Intelligent Solutions & Predictive Analytics',
    description: 'Professional AI and machine learning services including ML models, NLP, computer vision, predictive analytics, and AI integration. Transform your business with intelligent automation.',
    keywords: [
        'AI development',
        'machine learning services',
        'natural language processing',
        'computer vision',
        'predictive analytics',
        'AI integration',
        'deep learning',
        'data science consulting'
    ],
    openGraph: {
        title: 'AI & Machine Learning Services | byencrypt',
        description: 'Expert AI and machine learning development services for intelligent automation and data-driven insights.',
        url: 'https://byencrypt.com/services/ai-machine-learning',
        type: 'website',
    },
    alternates: {
        canonical: 'https://byencrypt.com/services/ai-machine-learning',
    },
};

export default function AIMachineLearningPage() {
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
                            <Cpu className="h-12 w-12 text-lime-400" />
                        </div>
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                                AI & <span className="text-lime-400">Machine Learning</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl">
                                Transform your business with intelligent automation and data-driven insights.
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
                                Our AI and machine learning team develops intelligent solutions that automate processes,
                                extract insights from data, and create adaptive systems that learn and improve over time.
                            </p>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                From natural language processing to computer vision, we leverage cutting-edge AI technologies
                                to solve complex business challenges and unlock new opportunities for innovation and growth.
                            </p>
                            <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300">
                                Start Your AI Project
                                <Zap className="ml-2 h-4 w-4" />
                            </Link>
                        </div>

                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Key Highlights</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <Brain className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Advanced Algorithms</h4>
                                        <p className="text-gray-400 text-sm">State-of-the-art ML models and deep learning architectures</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <TrendingUp className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Predictive Analytics</h4>
                                        <p className="text-gray-400 text-sm">Data-driven forecasting and trend analysis for informed decisions</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Eye className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Computer Vision</h4>
                                        <p className="text-gray-400 text-sm">Image recognition, object detection, and visual analysis capabilities</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Users className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Expert Team</h4>
                                        <p className="text-gray-400 text-sm">Experienced data scientists and ML engineers</p>
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
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our AI & ML Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Machine Learning Models',
                                description: 'Custom ML models trained on your data for classification, regression, and clustering tasks.',
                                features: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Model Optimization']
                            },
                            {
                                title: 'Natural Language Processing',
                                description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
                                features: ['Text Classification', 'Sentiment Analysis', 'Named Entity Recognition', 'Chatbots & Virtual Assistants']
                            },
                            {
                                title: 'Computer Vision',
                                description: 'Visual recognition systems for image classification, object detection, and facial recognition.',
                                features: ['Image Classification', 'Object Detection', 'Facial Recognition', 'Video Analysis']
                            },
                            {
                                title: 'Predictive Analytics',
                                description: 'Forecast future trends and behaviors using historical data and statistical algorithms.',
                                features: ['Time Series Forecasting', 'Demand Prediction', 'Risk Assessment', 'Anomaly Detection']
                            },
                            {
                                title: 'AI Integration',
                                description: 'Seamlessly integrate AI capabilities into your existing applications and workflows.',
                                features: ['API Integration', 'OpenAI Integration', 'Custom AI Features', 'Legacy System Enhancement']
                            },
                            {
                                title: 'Data Science Consulting',
                                description: 'Strategic guidance on AI adoption, data strategy, and ML implementation roadmaps.',
                                features: ['Data Strategy', 'Use Case Identification', 'POC Development', 'Model Deployment']
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
                            <h3 className="text-xl font-bold text-white mb-4">Frameworks & Libraries</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Python', 'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'XGBoost', 'LightGBM'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">NLP & AI Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {['OpenAI API', 'Hugging Face', 'spaCy', 'NLTK', 'LangChain', 'GPT-4', 'BERT'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Data & Deployment</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Pandas', 'NumPy', 'Jupyter', 'MLflow', 'Docker', 'AWS SageMaker', 'Google Cloud AI'].map((tech, idx) => (
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
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our AI Development Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: 'Data Analysis & Strategy', desc: 'Analyze your data and define AI objectives and success metrics' },
                            { step: '02', title: 'Model Development', desc: 'Build and train ML models using best practices and algorithms' },
                            { step: '03', title: 'Testing & Validation', desc: 'Rigorous testing and validation to ensure accuracy and reliability' },
                            { step: '04', title: 'Deployment & Monitoring', desc: 'Deploy to production with continuous monitoring and improvement' }
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
                                AI/ML projects typically take 8-16 weeks depending on complexity and data availability.
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>POC/MVP: 4-6 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Custom ML model: 8-12 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>NLP/Computer Vision: 10-14 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Enterprise AI solution: 12-16 weeks</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
                            <div className="flex items-center mb-4">
                                <DollarSign className="h-8 w-8 text-lime-400 mr-3" />
                                <h3 className="text-2xl font-bold text-white">Pricing</h3>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Flexible pricing based on project scope, data complexity, and deployment needs.
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Project-based for defined outcomes</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Hourly for R&D and experimentation</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Retainer for ongoing model improvement</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Free initial data assessment</span>
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
                        Ready to Leverage AI for Your Business?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Let's unlock the power of artificial intelligence and machine learning for your organization.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300">
                            Get Started
                            <Zap className="ml-2 h-5 w-5" />
                        </Link>
                        <Link href="/projects" className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-gray-300 font-semibold rounded-full hover:border-lime-400 hover:text-lime-400 transition-all duration-300">
                            View Case Studies
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
