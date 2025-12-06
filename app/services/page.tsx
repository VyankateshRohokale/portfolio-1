import React from 'react';
import { Blocks, Globe, Cpu, Layers, Database, Shield, CheckCircle, ArrowRight, Smartphone } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Development Services - Blockchain, Web3, AI & Full-Stack',
  description: 'Professional software development services including blockchain development, Web3 solutions, AI/ML integration, and full-stack development. Expert team delivering scalable and secure solutions.',
  keywords: [
    'blockchain development services',
    'Web3 development',
    'smart contract development',
    'full-stack development',
    'AI development',
    'custom software development',
    'DeFi development',
    'NFT marketplace development'
  ],
  openGraph: {
    title: 'Software Development Services | byencrypt',
    description: 'Professional software development services including blockchain, Web3, AI, and full-stack development.',
    url: 'https://byencrypt.com/services',
    type: 'website',
    images: [
      {
        url: '/image_full.jpeg',
        width: 1200,
        height: 630,
        alt: 'byencrypt Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Services | byencrypt',
    description: 'Professional software development services including blockchain, Web3, AI, and full-stack development.',
  },
};

const services = [
  {
    icon: Blocks,
    title: 'Blockchain Development',
    slug: 'blockchain-development',
    description: 'Custom blockchain solutions, smart contracts, and DeFi protocols built for security and scalability.',
    features: [
      'Smart Contract Development',
      'DeFi Protocol Creation',
      'NFT Marketplace Development',
      'Tokenization Solutions',
      'Cross-chain Integration',
      'Blockchain Consulting'
    ],
    technologies: ['Solidity', 'Rust', 'Web3.js', 'Hardhat', 'Ethereum', 'Polygon'],
    pricing: 'Contact for Quote',
    deliveryTime: '4-8 weeks'
  },
  {
    icon: Layers,
    title: 'Full Stack Development',
    slug: 'full-stack-development',
    description: 'End-to-end web and mobile applications with modern frameworks and responsive design.',
    features: [
      'Frontend Development',
      'Backend API Development',
      'Database Design',
      'Mobile App Development',
      'Cloud Integration',
      'Performance Optimization'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
    pricing: 'Contact for Quote',
    deliveryTime: '6-12 weeks'
  },
  {
    icon: Smartphone,
    title: 'Application Development',
    slug: 'application-development',
    description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
    features: [
      'iOS App Development',
      'Android App Development',
      'Cross-Platform Solutions',
      'Custom Feature Development',
      'API Integration',
      'App Deployment & Maintenance'
    ],
    technologies: ['Swift', 'Kotlin', 'React Native', 'Firebase', 'Xcode', 'Android Studio'],
    pricing: 'Contact for Quote',
    deliveryTime: '8-12 weeks'
  },
  {
    icon: Globe,
    title: 'Web3 Solutions',
    slug: 'web3-solutions',
    description: 'Decentralized applications and Web3 integrations that connect users to the blockchain.',
    features: [
      'dApp Development',
      'Wallet Integration',
      'IPFS Implementation',
      'Crypto Payment Systems',
      'DAO Development',
      'Web3 Consulting'
    ],
    technologies: ['React', 'Web3.js', 'IPFS', 'MetaMask', 'WalletConnect', 'The Graph'],
    pricing: 'Contact for Quote',
    deliveryTime: '3-6 weeks'
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    slug: 'ai-machine-learning',
    description: 'Intelligent automation, predictive analytics, and AI-powered features for your applications.',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Integration',
      'Data Science Consulting'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Scikit-learn', 'Pandas'],
    pricing: 'Contact for Quote',
    deliveryTime: '8-16 weeks'
  },
  {
    icon: Database,
    title: 'Backend Architecture',
    slug: 'backend-architecture',
    description: 'Scalable server infrastructure, APIs, and database design for high-performance applications.',
    features: [
      'Microservices Architecture',
      'RESTful API Development',
      'Database Optimization',
      'Cloud Infrastructure',
      'DevOps Implementation',
      'System Integration'
    ],
    technologies: ['Node.js', 'Python', 'Docker', 'Kubernetes', 'AWS', 'MongoDB'],
    pricing: 'Contact for Quote',
    deliveryTime: '4-10 weeks'
  },
  {
    icon: Shield,
    title: 'Security & Auditing',
    slug: 'security-auditing',
    description: 'Comprehensive security assessments, smart contract audits, and vulnerability testing.',
    features: [
      'Smart Contract Auditing',
      'Penetration Testing',
      'Security Code Review',
      'Vulnerability Assessment',
      'Compliance Consulting',
      'Security Training'
    ],
    technologies: ['Mythril', 'Slither', 'OpenZeppelin', 'Burp Suite', 'OWASP', 'CertK'],
    pricing: 'Contact for Quote',
    deliveryTime: '2-4 weeks'
  },
  {
    icon: ArrowRight,
    title: 'Custom Solutions',
    slug: 'custom-solutions',
    description: 'Tailored software solutions designed specifically for your unique business needs and challenges.',
    features: [
      'Custom Software Development',
      'Legacy System Modernization',
      'Third-party Integration',
      'Scalable Architecture Design',
      'Technical Consulting',
      'Ongoing Support & Maintenance'
    ],
    technologies: ['Custom Stack', 'Best-fit Technologies', 'Industry Standards', 'Modern Frameworks', 'Cloud Solutions', 'Agile Methodologies'],
    pricing: 'Contact for Quote',
    deliveryTime: 'Project Dependent'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black pt-16 font-mono">
      {/* Hero Section */}
      <section className="py-10 lg:py-20 bg-black">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-lime-400">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              We deliver cutting-edge solutions across the entire technology spectrum. From blockchain innovation
              to AI-powered applications, our expert team transforms your vision into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5 lg:py-20">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900/70 border border-gray-800 rounded-xl p-2 sm:p-8 hover:border-lime-400 transition-all duration-300 group hover:scale-105"
              >
                {/* Service Header */}
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-0 items-center mb-6">
                  <div className="p-4 bg-lime-400/10 rounded-xl">
                    <service.icon className="h-8 w-8 text-lime-400" />
                  </div>
                  <div className="sm:ml-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white font-mono">{service.title}</h3>
                    <p className="text-gray-400 mt-1 font-mono">{service.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 font-mono">Whats Included:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-400 font-mono">
                        <CheckCircle className="h-4 w-4 text-lime-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 font-mono">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing & Timeline */}
                <div className="flex items-center flex-col sm:flex-row justify-between gap-3 mb-6 p-4 bg-gray-800/50 rounded-lg">
                  <div>
                    <div className="text-lime-400 font-semibold font-mono hidden sm:block">{service.pricing}</div>
                    {/* <div className="text-gray-500 text-sm font-mono">Delivery: {service.deliveryTime}</div> */}
                  </div>
                  <div className="flex gap-2 sm:text-right text-center">
                    {service.slug && (
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center px-2 py-1 sm:px-4 sm:py-2 border border-gray-700 text-gray-300 font-semibold rounded-full hover:border-lime-400 hover:text-lime-400 transition-all duration-300"
                      >
                        Learn More
                      </Link>
                    )}
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-2 py-1 sm:px-4 sm:py-2 border border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-4 sm:p-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 font-mono">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg lg:text-lg text-gray-400 mb-8 max-w-2xl mx-auto font-mono">
                Lets discuss your requirements and create a custom solution that perfectly fits your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 lg:px-8 lg:py-4 border border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}