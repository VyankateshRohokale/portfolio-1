import React from 'react';
import Link from 'next/link';
import { Shield, CheckCircle, ArrowLeft, Lock, Bug, FileSearch, AlertTriangle, Zap, Clock, DollarSign } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Security & Auditing Services - Smart Contract Audits & Penetration Testing',
    description: 'Professional security and auditing services including smart contract audits, penetration testing, security code reviews, and vulnerability assessments. Protect your applications and blockchain projects.',
    keywords: [
        'smart contract audit',
        'security audit',
        'penetration testing',
        'vulnerability assessment',
        'security code review',
        'blockchain security',
        'cybersecurity services',
        'compliance consulting'
    ],
    openGraph: {
        title: 'Security & Auditing Services | Vyankatesh',
        description: 'Expert security auditing and penetration testing for blockchain and web applications.',
        url: 'https://vyankatesh.dev/services/security-auditing',
        type: 'website',
    },
    alternates: {
        canonical: 'https://vyankatesh.dev/services/security-auditing',
    },
};

export default function SecurityAuditingPage() {
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
                            <Shield className="h-12 w-12 text-lime-400" />
                        </div>
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                                Security & <span className="text-lime-400">Auditing</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl">
                                Comprehensive security assessments to protect your applications and smart contracts.
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
                            <h2 className="text-3xl font-bold text-white mb-6">What I Offer</h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                I conduct thorough audits and penetration testing to identify vulnerabilities
                                before they can be exploited. We specialize in both blockchain security and traditional application security.
                            </p>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                From smart contract audits to comprehensive penetration testing, we help you build secure,
                                trustworthy applications that protect your users and your business.
                            </p>
                            <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300">
                                Request Security Audit
                                <Zap className="ml-2 h-4 w-4" />
                            </Link>
                        </div>

                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Why Security Matters</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <Lock className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Prevent Exploits</h4>
                                        <p className="text-gray-400 text-sm">Identify and fix vulnerabilities before hackers can exploit them</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Bug className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Find Hidden Bugs</h4>
                                        <p className="text-gray-400 text-sm">Discover critical security flaws that automated tools miss</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <FileSearch className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Detailed Reports</h4>
                                        <p className="text-gray-400 text-sm">Comprehensive audit reports with actionable recommendations</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <AlertTriangle className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Compliance Ready</h4>
                                        <p className="text-gray-400 text-sm">Meet industry standards and regulatory requirements</p>
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
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Security Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Smart Contract Auditing',
                                description: 'Comprehensive security audits of smart contracts to identify vulnerabilities and logic flaws.',
                                features: ['Code Review', 'Vulnerability Analysis', 'Gas Optimization', 'Audit Report']
                            },
                            {
                                title: 'Penetration Testing',
                                description: 'Simulate real-world attacks to identify security weaknesses in your applications.',
                                features: ['Web App Testing', 'API Testing', 'Network Testing', 'Social Engineering']
                            },
                            {
                                title: 'Security Code Review',
                                description: 'Line-by-line code analysis to identify security vulnerabilities and coding best practices.',
                                features: ['Manual Code Review', 'Automated Scanning', 'Best Practices', 'Security Patterns']
                            },
                            {
                                title: 'Vulnerability Assessment',
                                description: 'Systematic examination of security weaknesses in your infrastructure and applications.',
                                features: ['Infrastructure Scan', 'Configuration Review', 'Patch Management', 'Risk Assessment']
                            },
                            {
                                title: 'Compliance Consulting',
                                description: 'Ensure your applications meet regulatory requirements and industry standards.',
                                features: ['GDPR Compliance', 'SOC 2 Preparation', 'ISO 27001', 'PCI DSS']
                            },
                            {
                                title: 'Security Training',
                                description: 'Educate your development team on secure coding practices and security awareness.',
                                features: ['Secure Coding', 'Threat Modeling', 'Security Workshops', 'Best Practices']
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
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Security Tools & Frameworks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Smart Contract Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Mythril', 'Slither', 'OpenZeppelin', 'Echidna', 'MythX', 'Securify', 'Manticore'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Penetration Testing</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Burp Suite', 'OWASP ZAP', 'Metasploit', 'Nmap', 'Wireshark', 'Kali Linux', 'Nessus'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Code Analysis</h3>
                            <div className="flex flex-wrap gap-2">
                                {['SonarQube', 'Snyk', 'Checkmarx', 'Veracode', 'GitGuardian', 'Semgrep', 'CodeQL'].map((tech, idx) => (
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
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Security Audit Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: 'Scope Definition', desc: 'Define audit scope, objectives, and assessment criteria' },
                            { step: '02', title: 'Security Analysis', desc: 'Comprehensive testing using automated tools and manual review' },
                            { step: '03', title: 'Vulnerability Report', desc: 'Detailed report with findings, severity ratings, and recommendations' },
                            { step: '04', title: 'Remediation Support', desc: 'Help implement fixes and conduct re-testing verification' }
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
                                Security audits typically take 2-4 weeks depending on project complexity.
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Smart contract audit: 1-2 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Web app penetration test: 2-3 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Comprehensive security audit: 3-4 weeks</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Re-audit after fixes: 3-5 days</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
                            <div className="flex items-center mb-4">
                                <DollarSign className="h-8 w-8 text-lime-400 mr-3" />
                                <h3 className="text-2xl font-bold text-white">Pricing</h3>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Competitive pricing based on project scope and audit depth.
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Fixed-price for smart contract audits</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Project-based for penetration testing</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Retainer for ongoing security monitoring</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-lime-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Free initial security consultation</span>
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
                        Secure Your Application Today
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Don't wait for a security breach. Get a comprehensive security audit from our expert team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300">
                            Request Audit
                            <Zap className="ml-2 h-5 w-5" />
                        </Link>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}
