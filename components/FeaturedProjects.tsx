import React from 'react';
import Link from 'next/link';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects: {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  category: string;
}[]
 = [
  // {
  //   id: 1,
  //   title: 'DeFiTracker Pro',
  //   description: 'A comprehensive DeFi portfolio management platform with real-time analytics, yield farming optimization, and cross-chain asset tracking.',
  //   image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   tags: ['React', 'Solidity', 'Web3', 'DeFi'],
  //   demoUrl: '#',
  //   githubUrl: '#',
  //   category: 'Blockchain'
  // },
  // {
  //   id: 2,
  //   title: 'AI Content Studio',
  //   description: 'Next-generation content creation platform powered by advanced AI models, offering automated writing, image generation, and video editing.',
  //   image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   tags: ['Next.js', 'Python', 'TensorFlow', 'AI'],
  //   demoUrl: '#',
  //   githubUrl: '#',
  //   category: 'AI/ML'
  // },
  // {
  //   id: 3,
  //   title: 'CloudSync Enterprise',
  //   description: 'Enterprise-grade cloud synchronization and collaboration platform with end-to-end encryption and real-time collaborative editing.',
  //   image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   tags: ['Node.js', 'React', 'AWS', 'WebRTC'],
  //   demoUrl: '#',
  //   githubUrl: '#',
  //   category: 'Full Stack'
  // }
];

const FeaturedProjects = () => {

  if (projects.length === 0) {
    return null; // Don't render the section if there are no projects
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-mono">
            Featured <span className="text-lime-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            Showcasing our latest innovations and successful implementations across various industries and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-900/70 border border-gray-800 rounded-xl overflow-hidden hover:border-lime-400 transition-all duration-300 group hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-lime-400/10 text-lime-400 px-3 py-1 rounded-full text-sm border border-lime-400/30 font-mono">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 font-mono">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed font-mono">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoUrl}
                      className="flex items-center text-lime-400 hover:text-white transition-colors font-mono"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span className="text-sm">Demo</span>
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center text-gray-400 hover:text-white transition-colors font-mono"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-lime-400 text-lime-400 font-mono font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;