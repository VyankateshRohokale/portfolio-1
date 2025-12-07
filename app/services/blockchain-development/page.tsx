import React from 'react';
import Link from 'next/link';
import { Blocks, CheckCircle, ArrowLeft, Code2, Shield, Zap, Users, TrendingUp, Clock, DollarSign } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blockchain Development Services - Smart Contracts, DeFi & NFT Solutions',
    description: 'Expert blockchain development services including smart contract development, DeFi protocols, NFT marketplaces, and tokenization solutions. Secure, scalable blockchain solutions.',
    keywords: [
        'blockchain development',
        'smart contract development',
        'DeFi development',
        'NFT marketplace',
        'Ethereum development',
        'Solidity programming',
        'blockchain consulting'
    ],
    openGraph: {
        title: 'Blockchain Development Services | Vyankatesh',
        description: 'Expert blockchain development services for DeFi, NFTs, and smart contracts.',
        url: 'https://vyankatesh.dev/services/blockchain-development',
        type: 'website',
    },
    alternates: {
        canonical: 'https://vyankatesh.dev/services/blockchain-development',
    },
};

export default function BlockchainDevelopmentPage() {
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
                            <Blocks className="h-12 w-12 text-lime-400" />
                        </div>
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                                Blockchain <span className="text-lime-400">Development</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl">
                                Build the future of decentralized technology with our expert blockchain development services.
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
                                Our blockchain development team specializes in creating secure, scalable, and innovative blockchain solutions.
                                From smart contracts to full-scale DeFi platforms, we bring your decentralized vision to life.
                            </p>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                With expertise across multiple blockchain platforms including Ethereum, Polygon, Binance Smart Chain, and more,
                                we deliver solutions that are not only technically robust but also aligned with your business objectives.
                            </p>
                            <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300">
                                Get Started
                                <Zap className="ml-2 h-4 w-4" />
                            </Link>
                        </div>

                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Key Highlights</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <Shield className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Security First</h4>
                                        <p className="text-gray-400 text-sm">Rigorous security audits and best practices to protect your assets</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Code2 className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Expert Developers</h4>
                                        <p className="text-gray-400 text-sm">Team of certified blockchain developers with proven track record</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <TrendingUp className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Scalable Solutions</h4>
                                        <p className="text-gray-400 text-sm">Built to handle growth and adapt to changing requirements</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Users className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Full Support</h4>
                                        <p className="text-gray-400 text-sm">Ongoing maintenance and technical support post-deployment</p>
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
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Blockchain Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Smart Contract Development',
                                description: 'Custom smart contracts built with Solidity and Rust. Automated, trustless, and secure execution of business logic on the blockchain.',
                                features: ['ERC-20/721/1155 Tokens', 'Upgradeable Contracts', 'Gas Optimization', 'Security Audits']
                            },
                            {
                                title: 'DeFi Protocol Creation',
                                description: 'Build decentralized finance protocols including lending platforms, DEXs, yield farming, and staking mechanisms.',
                                features: ['AMM Development', 'Liquidity Pools', 'Governance Systems', 'Oracle Integration']
                            },
                            {
                                title: 'NFT Marketplace Development',
                                description: 'Full-featured NFT marketplaces with minting, trading, auctions, and royalty management capabilities.',
                                features: ['Custom Minting', 'Lazy Minting', 'Auction System', 'Royalty Distribution']
                            },
                            {
                                title: 'Tokenization Solutions',
                                description: 'Convert real-world assets into blockchain tokens. Enable fractional ownership and global accessibility.',
                                features: ['Asset Tokenization', 'Compliance Integration', 'Custodian Solutions', 'Trading Infrastructure']
                            },
                            {
                                title: 'Cross-chain Integration',
                                description: 'Enable interoperability between different blockchain networks. Bridge assets and data across chains.',
                                features: ['Bridge Development', 'Multi-chain Support', 'Chain Agnostic Design', 'Wrapped Tokens']
                            },
                            {
                                title: 'Blockchain Consulting',
                                description: 'Strategic guidance on blockchain adoption, architecture design, and technology selection for your project.',
                                features: ['Technology Assessment', 'Architecture Design', 'Cost Analysis', 'Implementation Roadmap']
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
                                {['Solidity', 'Rust', 'Web3.js', 'Ethers.js', 'Hardhat', 'Truffle', 'Foundry'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Blockchain Platforms</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Ethereum', 'Polygon', 'BSC', 'Solana', 'Avalanche', 'Arbitrum', 'Optimism'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Tools & Infrastructure</h3>
                            <div className="flex flex-wrap gap-2">
                                {['IPFS', 'The Graph', 'Chainlink', 'OpenZeppelin', 'Infura', 'Alchemy', 'MetaMask'].map((tech, idx) => (
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
                            { step: '01', title: 'Discovery & Planning', desc: 'Understand requirements, define scope, and create technical architecture' },
                            { step: '02', title: 'Smart Contract Development', desc: 'Write, test, and optimize smart contracts with security in mind' },
                            { step: '03', title: 'Security Audit', desc: 'Comprehensive security review and penetration testing' },
                            { step: '04', title: 'Deployment & Support', desc: 'Deploy to mainnet and provide ongoing maintenance and updates' }
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
                                Typical blockchain development projects take 4-8 weeks depending on complexity.
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Simple smart contracts: 1-2 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>NFT marketplace: 4-6 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>DeFi protocol: 6-8 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Custom blockchain solution: 8-12 weeks</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
                            <div className="flex items-center mb-4">
                                <DollarSign className="h-8 w-8 text-lime-400 mr-3" />
                                <h3 className="text-2xl font-bold text-white">Pricing</h3>
                            </div>
                            <p className="text-gray-400 mb-4">
                                We offer flexible pricing models tailored to your project needs and budget.
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
                                    <span>Retainer for ongoing development & support</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Free initial consultation & quote</span>
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
                        Ready to Build on the Blockchain?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Let's discuss your blockchain project and create a solution that drives real value.
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
