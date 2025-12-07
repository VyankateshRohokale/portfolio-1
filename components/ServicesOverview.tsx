import React from 'react';
import { Blocks, Globe, Cpu, Layers, Database, Shield, Smartphone } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Blocks,
    title: 'Blockchain Development',
    description: 'Smart contracts, DeFi protocols, and custom blockchain solutions built for security and scalability.',
    features: ['Smart Contracts', 'DeFi Protocols', 'NFT Platforms', 'Tokenization'],
    slug: 'blockchain-development'
  },
  {
    icon: Layers,
    title: 'Full Stack Development',
    description: 'End-to-end web and mobile applications with modern frameworks and responsive design.',
    features: ['React/Next.js', 'Node.js/Python', 'Mobile Apps', 'Cloud Integration'],
    slug: 'full-stack-development'
  },
  {
    icon: Smartphone,
    title: 'Application Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
    features: ['Android/iOS', 'Custom Features', 'API Integration', 'App Deployment'],
    slug: 'application-development'
  },
  {
    icon: Globe,
    title: 'Web3 Solutions',
    description: 'Decentralized applications and Web3 integrations that connect users to the blockchain.',
    features: ['dApps', 'Wallet Integration', 'IPFS Storage', 'Crypto Payments'],
    slug: 'web3-solutions'
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Intelligent automation, predictive analytics, and AI-powered features for your applications.',
    features: ['ML Models', 'NLP Processing', 'Computer Vision', 'Automation'],
    slug: 'ai-machine-learning'
  },
  {
    icon: Database,
    title: 'Backend Architecture',
    description: 'Scalable server infrastructure, APIs, and database design for high-performance applications.',
    features: ['Microservices', 'API Development', 'Database Design', 'DevOps'],
    slug: 'backend-architecture'
  },
  {
    icon: Shield,
    title: 'Security & Auditing',
    description: 'Comprehensive security assessments, smart contract audits, and vulnerability testing.',
    features: ['Security Audits', 'Penetration Testing', 'Code Review', 'Compliance'],
    slug: 'security-auditing'
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-mono">
            <span className="text-lime-400">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            We deliver cutting-edge solutions across the entire technology spectrum,
            from blockchain innovation to AI-powered applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="bg-gray-900/70 border border-gray-800 rounded-xl p-6 hover:border-lime-400 transition-all duration-300 group hover:scale-105 block"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-lime-400/10 rounded-lg">
                  <service.icon className="h-6 w-6 text-lime-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-3 font-mono">{service.title}</h3>
              </div>

              <p className="text-gray-400 mb-4 leading-relaxed font-mono">{service.description}</p>

              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center font-mono">
                    <div className="w-1 h-1 bg-lime-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-lime-400 font-mono text-sm flex items-center group-hover:text-white transition-colors">
                Learn More →
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 border border-lime-400 text-lime-400 font-mono font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;