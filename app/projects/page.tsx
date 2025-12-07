import React from 'react';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio & Projects - Showcasing Our Software Development Work',
  description: 'Explore our portfolio of successful software development projects including blockchain applications, Web3 platforms, AI solutions, and full-stack applications.',
  keywords: [
    'software development portfolio',
    'blockchain projects',
    'Web3 applications',
    'DeFi platforms',
    'AI projects',
    'development case studies'
  ],
  openGraph: {
    title: 'Our Projects & Portfolio | Vyankatesh',
    description: 'Explore our portfolio of successful software development projects including blockchain, Web3, and AI solutions.',
    url: 'https://vyankatesh.dev/projects',
    type: 'website',
    images: [
      {
        url: '/image_full.jpeg',
        width: 1200,
        height: 630,
        alt: 'Vyankatesh Projects',
      },
    ],
  },
};

const projects:
  {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoUrl: string;
    githubUrl: string;
    category: string;
    duration: string;
    teamSize: string;
    features: string[];
  }[]
  = [
    // {
    //   id: 1,
    //   title: 'DeFiTracker Pro',
    //   description: 'A comprehensive DeFi portfolio management platform with real-time analytics, yield farming optimization, and cross-chain asset tracking. Features advanced charting, automated rebalancing, and risk assessment tools.',
    //   image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['React', 'Solidity', 'Web3.js', 'Node.js', 'PostgreSQL'],
    //   demoUrl: '#',
    //   githubUrl: '#',
    //   category: 'Blockchain',
    //   duration: '4 months',
    //   teamSize: '5 developers',
    //   features: ['Multi-chain support', 'Real-time analytics', 'Yield optimization', 'Risk assessment']
    // },
    // {
    //   id: 2,
    //   title: 'AI Content Studio',
    //   description: 'Next-generation content creation platform powered by advanced AI models, offering automated writing, image generation, and video editing with collaborative workspace features.',
    //   image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['Next.js', 'Python', 'TensorFlow', 'OpenAI API', 'Redis'],
    //   demoUrl: '#',
    //   githubUrl: '#',
    //   category: 'AI/ML',
    //   duration: '6 months',
    //   teamSize: '7 developers',
    //   features: ['AI text generation', 'Image synthesis', 'Video editing', 'Team collaboration']
    // },
    // {
    //   id: 3,
    //   title: 'CloudSync Enterprise',
    //   description: 'Enterprise-grade cloud synchronization and collaboration platform with end-to-end encryption, real-time collaborative editing, and advanced permission management.',
    //   image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['Node.js', 'React', 'AWS', 'WebRTC', 'MongoDB'],
    //   demoUrl: '#',
    //   githubUrl: '#',
    //   category: 'Full Stack',
    //   duration: '5 months',
    //   teamSize: '6 developers',
    //   features: ['Real-time sync', 'E2E encryption', 'Collaborative editing', 'Enterprise security']
    // },
    // {
    //   id: 4,
    //   title: 'NFT Marketplace Hub',
    //   description: 'Decentralized NFT marketplace with advanced filtering, auction mechanisms, and creator royalty management. Built on Ethereum with IPFS storage integration.',
    //   image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['Solidity', 'React', 'IPFS', 'Ethers.js', 'The Graph'],
    //   demoUrl: '#',
    //   githubUrl: '#',
    //   category: 'Web3',
    //   duration: '3 months',
    //   teamSize: '4 developers',
    //   features: ['NFT minting', 'Auction system', 'Creator royalties', 'IPFS integration']
    // },
    // {
    //   id: 5,
    //   title: 'Smart Analytics Dashboard',
    //   description: 'AI-powered business intelligence dashboard with predictive analytics, automated reporting, and custom visualization tools for enterprise data management.',
    //   image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['Vue.js', 'Python', 'FastAPI', 'Pandas', 'D3.js'],
    //   demoUrl: '#',
    //   githubUrl: '#',
    //   category: 'Data Analytics',
    //   duration: '4 months',
    //   teamSize: '5 developers',
    //   features: ['Predictive analytics', 'Custom reports', 'Data visualization', 'ML insights']
    // },
    // {
    //   id: 6,
    //   title: 'HealthTech Mobile App',
    //   description: 'Cross-platform mobile application for healthcare management with telemedicine features, appointment scheduling, and secure patient data management.',
    //   image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['React Native', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS'],
    //   demoUrl: '#',
    //   githubUrl: '#',
    //   category: 'Mobile Development',
    //   duration: '6 months',
    //   teamSize: '8 developers',
    //   features: ['Telemedicine', 'Appointment booking', 'Secure messaging', 'Health records']
    // }
  ];

const categories = ['All', 'Blockchain', 'AI/ML', 'Full Stack', 'Web3', 'Data Analytics', 'Mobile Development'];

export default function ProjectsPage() {

  if (projects.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-gray-400 font-mono ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl">
            We are in the process of updating our project portfolio.

          </h2>
          <p className="mt-4 text-lg">Please check back soon to see our latest work and innovations.</p>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-black pt-16 font-mono">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-lime-400">Project Portfolio</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive collection of successful projects across blockchain, AI, full-stack development, and more.
              Each project represents our commitment to innovation and excellence.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-gray-900 text-gray-300 rounded-full border border-gray-700 hover:border-lime-400 hover:text-lime-400 hover:bg-gray-800 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900/70 border border-gray-800 rounded-xl overflow-hidden hover:border-lime-400 transition-all duration-300 group hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-lime-400/10 text-lime-400 px-3 py-1 rounded-full text-sm border border-lime-400/30 font-mono">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                  {/* Project Info */}
                  <div className="flex items-center gap-6 mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {project.teamSize}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <div className="w-1 h-1 bg-lime-400 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md border border-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <a
                        href={project.demoUrl}
                        className="flex items-center text-lime-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}