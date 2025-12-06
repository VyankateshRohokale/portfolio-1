import { ArrowRight, Globe, Users, Rocket, Shield, Heart, Laptop2, Home } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - Join Our Team of Expert Developers',
  description: 'Join byencrypt and work on cutting-edge blockchain, Web3, and AI projects. Remote-first team with competitive compensation and growth opportunities.',
  keywords: [
    'blockchain developer jobs',
    'Web3 careers',
    'remote developer jobs',
    'smart contract developer',
    'full-stack developer jobs',
    'AI developer careers'
  ],
  openGraph: {
    title: 'Careers at byencrypt',
    description: 'Join our remote-first team working on blockchain, Web3, and AI projects.',
    url: 'https://byencrypt.com/career/overview',
  },
};

export default function CareerOverviewPage() {
  return (
    <div className="min-h-screen bg-black font-mono">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Tech mesh gradients */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-300/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl font-semibold sm:text-6xl lg:text-7xl sm:font-bold mb-6 leading-tight">
            Help us <span className="font-clock text-lime-400  text-5xl sm:text-7xl lg:text-8xl font-semibold">build</span> a world<br />
            powered by <span className="font-clock text-lime-400  text-5xl sm:text-7xl lg:text-8xl font-semibold">innovation</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-8">
            Join a remote-first team shaping the future of blockchain, Web3, and AI.
            We empower bold thinkers to create global impact.
          </p>
          <a
            href="/career/apply"
            className="inline-flex items-center px-8 py-4 rounded-full hover:bg-lime-400 hover:text-black font-semibold text-sm sm:text-lg shadow-lg border border-lime-400 transition-all duration-200"
          >
            View Open Roles <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Rocket className="h-12 w-12 text-lime-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-base sm:text-lg text-gray-400 mb-4">
            At byencrypt, we’re building the digital infrastructure for tomorrow.
            Our software powers decentralized finance, secure data, and intelligent automation for clients worldwide.
          </p>
          <p className="text-base sm:text-lg text-gray-400">
            We believe in remote work, radical transparency, and a culture where every voice matters.
            Join us to solve real-world problems and shape the future of technology.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-900/60">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Our Principles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-800 rounded-2xl p-8 text-center hover:border-lime-400 transition-all duration-200">
              <Shield className="mx-auto mb-4 h-10 w-10 text-lime-400" />
              <h3 className="text-xl font-semibold text-white mb-2">Ownership</h3>
              <p className="text-gray-400">We take responsibility for our work and drive projects from idea to impact.</p>
            </div>
            <div className="bg-black border border-gray-800 rounded-2xl p-8 text-center hover:border-lime-400 transition-all duration-200">
              <Globe className="mx-auto mb-4 h-10 w-10 text-lime-400" />
              <h3 className="text-xl font-semibold text-white mb-2">Global Focus</h3>
              <p className="text-gray-400">Our solutions connect people and businesses across borders and cultures.</p>
            </div>
            <div className="bg-black border border-gray-800 rounded-2xl p-8 text-center hover:border-lime-400 transition-all duration-200">
              <Users className="mx-auto mb-4 h-10 w-10 text-lime-400" />
              <h3 className="text-xl font-semibold text-white mb-2">Dialogue</h3>
              <p className="text-gray-400">We value open communication, feedback, and collaboration at every level.</p>
            </div>
            <div className="bg-black border border-gray-800 rounded-2xl p-8 text-center hover:border-lime-400 transition-all duration-200">
              <Heart className="mx-auto mb-4 h-10 w-10 text-lime-400" />
              <h3 className="text-xl font-semibold text-white mb-2">Inclusivity</h3>
              <p className="text-gray-400">We celebrate diversity and foster a welcoming, supportive environment.</p>
            </div>
            <div className="bg-black border border-gray-800 rounded-2xl p-8 text-center hover:border-lime-400 transition-all duration-200">
              <Laptop2 className="mx-auto mb-4 h-10 w-10 text-lime-400" />
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-400">We experiment, learn, and push boundaries in blockchain, Web3, and AI.</p>
            </div>
            <div className="bg-black border border-gray-800 rounded-2xl p-8 text-center hover:border-lime-400 transition-all duration-200">
              <Home className="mx-auto mb-4 h-10 w-10 text-lime-400" />
              <h3 className="text-xl font-semibold text-white mb-2">Remote-First</h3>
              <p className="text-gray-400">Work from anywhere, collaborate globally, and enjoy true flexibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Life at byencrypt Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Life at byencrypt</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
              <Laptop2 className="mx-auto mb-4 h-8 w-8 text-lime-400" />
              <h4 className="text-lg font-semibold text-white mb-2">Remote Work Support</h4>
              <p className="text-gray-400">Stipends for home office, flexible hours, and async collaboration.</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
              <Rocket className="mx-auto mb-4 h-8 w-8 text-lime-400" />
              <h4 className="text-lg font-semibold text-white mb-2">Growth & Learning</h4>
              <p className="text-gray-400">Access to courses, conferences, and mentorship from industry leaders.</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
              <Heart className="mx-auto mb-4 h-8 w-8 text-lime-400" />
              <h4 className="text-lg font-semibold text-white mb-2">Wellbeing & Perks</h4>
              <p className="text-gray-400">Health benefits, paid time off, and regular team events—virtual and in-person.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}