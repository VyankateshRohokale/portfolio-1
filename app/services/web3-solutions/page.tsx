import React from 'react';
import Link from 'next/link';
import { Globe, CheckCircle, ArrowLeft, Wallet, Network, Cloud, Users, Zap, Clock, DollarSign } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Web3 Solutions - dApp Development & Blockchain Integration Services',
    description: 'Professional Web3 development services including dApps, wallet integration, IPFS, crypto payments, and DAO development. Connect your users to the decentralized web.',
    keywords: [
        'Web3 development',
        'dApp development',
        'wallet integration',
        'IPFS implementation',
        'crypto payment integration',
        'DAO development',
        'Web3 consulting',
        'decentralized applications'
    ],
    openGraph: {
        title: 'Web3 Solutions | Vyankatesh',
        description: 'Expert Web3 development services for decentralized applications and blockchain integration.',
        url: 'https://vyankatesh.dev/services/web3-solutions',
        type: 'website',
    },
    alternates: {
        canonical: 'https://vyankatesh.dev/services/web3-solutions',
    },
};

export default function Web3SolutionsPage() {
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
                            <Globe className="h-12 w-12 text-lime-400" />
                        </div>
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                                Web3 <span className="text-lime-400">Solutions</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl">
                                Connect your users to the decentralized web with cutting-edge Web3 applications.
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
                                Our Web3 development team specializes in creating decentralized applications that leverage blockchain
                                technology to provide trustless, transparent, and user-controlled experiences.
                            </p>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                From wallet integrations to fully decentralized autonomous organizations, we build Web3 solutions
                                that empower users and revolutionize how applications interact with blockchain networks.
                            </p>
                            <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300">
                                Start Your Web3 Project
                                <Zap className="ml-2 h-4 w-4" />
                            </Link>
                        </div>

                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Key Highlights</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <Network className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Decentralized Architecture</h4>
                                        <p className="text-gray-400 text-sm">Build truly decentralized applications with no single point of failure</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Wallet className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Seamless Wallet Integration</h4>
                                        <p className="text-gray-400 text-sm">Connect with MetaMask, WalletConnect, and other popular wallets</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Cloud className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">IPFS Integration</h4>
                                        <p className="text-gray-400 text-sm">Decentralized storage solutions for your application data</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Users className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Community-Driven</h4>
                                        <p className="text-gray-400 text-sm">Build DAOs and governance systems for decentralized decision-making</p>
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
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Web3 Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'dApp Development',
                                description: 'Build decentralized applications that run on blockchain networks with user-friendly interfaces.',
                                features: ['Frontend Integration', 'Smart Contract Connection', 'Real-time Updates', 'Multi-chain Support']
                            },
                            {
                                title: 'Wallet Integration',
                                description: 'Seamlessly connect your application with popular crypto wallets for secure transactions.',
                                features: ['MetaMask Integration', 'WalletConnect', 'Coinbase Wallet', 'Custom Wallet Support']
                            },
                            {
                                title: 'IPFS Implementation',
                                description: 'Decentralized file storage and content delivery using InterPlanetary File System.',
                                features: ['File Upload/Download', 'Content Addressing', 'Pinning Services', 'Gateway Integration']
                            },
                            {
                                title: 'Crypto Payment Systems',
                                description: 'Accept cryptocurrency payments in your application with real-time conversion and processing.',
                                features: ['Multi-token Support', 'Payment Processing', 'Invoice Generation', 'Transaction Tracking']
                            },
                            {
                                title: 'DAO Development',
                                description: 'Create decentralized autonomous organizations with on-chain governance and voting mechanisms.',
                                features: ['Governance Tokens', 'Voting Systems', 'Proposal Management', 'Treasury Management']
                            },
                            {
                                title: 'Web3 Consulting',
                                description: 'Strategic guidance on Web3 adoption, architecture, and best practices for your project.',
                                features: ['Strategy Planning', 'Technology Selection', 'Architecture Design', 'Migration Support']
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
                            <h3 className="text-xl font-bold text-white mb-4">Frontend & UI</h3>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Next.js', 'TypeScript', 'Web3.js', 'Ethers.js', 'RainbowKit', 'Wagmi'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Web3 Infrastructure</h3>
                            <div className="flex flex-wrap gap-2">
                                {['IPFS', 'The Graph', 'MetaMask', 'WalletConnect', 'Infura', 'Alchemy', 'Moralis'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Blockchain Networks</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Ethereum', 'Polygon', 'Arbitrum', 'Optimism', 'BSC', 'Avalanche', 'Base'].map((tech, idx) => (
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
                            { step: '01', title: 'Web3 Strategy', desc: 'Define blockchain requirements and user flows for decentralized features' },
                            { step: '02', title: 'Smart Contract Integration', desc: 'Connect frontend with smart contracts and implement wallet authentication' },
                            { step: '03', title: 'Testing & Security', desc: 'Comprehensive testing on testnets before mainnet deployment' },
                            { step: '04', title: 'Launch & Support', desc: 'Deploy to production and provide ongoing maintenance and updates' }
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
                                Typical Web3 development projects take 3-6 weeks depending on complexity.
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Wallet integration: 1-2 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Basic dApp: 3-4 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>DAO platform: 4-6 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Complex Web3 ecosystem: 6-10 weeks</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
                            <div className="flex items-center mb-4">
                                <DollarSign className="h-8 w-8 text-lime-400 mr-3" />
                                <h3 className="text-2xl font-bold text-white">Pricing</h3>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Flexible pricing models tailored to your Web3 project needs.
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Fixed-price for defined scope</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Hourly rate for ongoing development</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Retainer for continuous support</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Free Web3 consultation</span>
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
                        Ready to Build Your Web3 Application?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Let's create a decentralized solution that empowers your users and revolutionizes your industry.
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
