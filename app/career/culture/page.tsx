import { Users, Heart, Globe, MessageCircle, Award, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company Culture - Remote-First, Innovation-Driven Team',
  description: 'Discover the Vyankatesh culture: remote-first, collaborative, and focused on innovation. Learn about our values, work environment, and team dynamics.',
  openGraph: {
    title: 'Our Culture | Vyankatesh Careers',
    description: 'Discover our remote-first, innovation-driven culture.',
    url: 'https://vyankatesh.dev/career/culture',
  },
};

export default function CareerCulturePage() {
  return (
    <div className="min-h-screen bg-black pt-24 px-4 font-mono">
      {/* Split Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 mb-16 px-4">
        <div className="flex-1">
          <div className="text-lime-400 text-lg font-semibold mb-2">
            Our principles-driven culture
          </div>
          <h1 className="text-xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Our culture is the foundation<br className="hidden sm:block" />
            for how every team member<br className="hidden sm:block" />
            <span className="font-clock text-lime-400 text-4xl sm:text-5xl lg:text-6xl font-semibold">
              thrives
            </span> and connects with our <span className="font-clock text-lime-400 text-4xl sm:text-5xl lg:text-6xl font-semibold">vision</span><br />
            and <span className=" font-clock text-lime-400 text-4xl sm:text-5xl lg:text-6xl font-semibold">values</span>
          </h1>
        </div>
        <div className="flex-1 md:pt-10">
          <p className="text-base sm:text-lg text-gray-400">
            At Vyankatesh, our culture is more than words its a shared commitment to growth, collaboration, and impact.
            We empower every individual to contribute, innovate, and succeed together, creating an environment where diverse perspectives drive our mission forward.
            <br /><br />
            We foster open dialogue and encourage creative problem-solving, ensuring every team member feels valued and heard. Our remote-first approach allows us to attract top talent globally, while flexible work arrangements support a healthy work-life balance.
            <br /><br />
            At Vyankatesh, you’ll find a team that’s passionate about making a difference—where your ideas matter, your growth is supported, and your impact is recognized.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-black border border-gray-800 rounded-2xl p-8 text-center hover:border-lime-400 transition-all duration-200">
            <Heart className="mx-auto mb-4 h-10 w-10 text-lime-400" />
            <h3 className="text-xl font-semibold text-white mb-2">Inclusivity</h3>
            <p className="text-gray-400">We welcome diverse backgrounds and ideas, fostering a supportive environment for all.</p>
          </div>
          <div className="bg-black border border-gray-800 rounded-2xl p-8 text-center hover:border-lime-400 transition-all duration-200">
            <Users className="mx-auto mb-4 h-10 w-10 text-lime-400" />
            <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
            <p className="text-gray-400">We work together, share knowledge, and celebrate team achievements.</p>
          </div>
          <div className="bg-black border border-gray-800 rounded-2xl p-8 text-center hover:border-lime-400 transition-all duration-200">
            <MessageCircle className="mx-auto mb-4 h-10 w-10 text-lime-400" />
            <h3 className="text-xl font-semibold text-white mb-2">Transparency</h3>
            <p className="text-gray-400">Open communication and honest feedback are at the heart of our process.</p>
          </div>
          <div className="bg-black border border-gray-800 rounded-2xl p-8 text-center hover:border-lime-400 transition-all duration-200">
            <Award className="mx-auto mb-4 h-10 w-10 text-lime-400" />
            <h3 className="text-xl font-semibold text-white mb-2">Growth</h3>
            <p className="text-gray-400">Continuous learning and personal development are encouraged and supported.</p>
          </div>
          <div className="bg-black border border-gray-800 rounded-2xl p-8 text-center hover:border-lime-400 transition-all duration-200">
            <Lightbulb className="mx-auto mb-4 h-10 w-10 text-lime-400" />
            <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
            <p className="text-gray-400">We experiment, challenge norms, and drive change in blockchain, Web3, and AI.</p>
          </div>
          <div className="bg-black border border-gray-800 rounded-2xl p-8 text-center hover:border-lime-400 transition-all duration-200">
            <Globe className="mx-auto mb-4 h-10 w-10 text-lime-400" />
            <h3 className="text-xl font-semibold text-white mb-2">Global Impact</h3>
            <p className="text-gray-400">Our work connects people and businesses worldwide, making a real difference.</p>
          </div>
        </div>
      </section>

      {/* Culture Highlights */}
      <section className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Life at Vyankatesh</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
            <Users className="mx-auto mb-4 h-8 w-8 text-lime-400" />
            <h4 className="text-lg font-semibold text-white mb-2">Remote-First Team</h4>
            <p className="text-gray-400">Work from anywhere, collaborate globally, and enjoy flexible hours.</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
            <Award className="mx-auto mb-4 h-8 w-8 text-lime-400" />
            <h4 className="text-lg font-semibold text-white mb-2">Recognition & Support</h4>
            <p className="text-gray-400">We celebrate achievements and provide mentorship for your growth.</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
            <Heart className="mx-auto mb-4 h-8 w-8 text-lime-400" />
            <h4 className="text-lg font-semibold text-white mb-2">Wellbeing & Balance</h4>
            <p className="text-gray-400">Health benefits, paid time off, and a culture that values your wellbeing.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-10 sm:py-16 text-center">
        <Link
          href="/career/apply"
          className="inline-flex items-center px-6 sm:px-10 py-3 sm:py-5 rounded-full hover:bg-lime-400 border-lime-400 border-solid border hover:text-black font-bold text-base sm:text-xl shadow-lg text-lime-400 transition-all duration-200"
        >
          Explore Open Roles
        </Link>
      </div>
    </div>
  );
}