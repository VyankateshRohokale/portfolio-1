import { Users, Globe, Shield, BookOpen, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Work - Our Development Process & Methodology | byencrypt Careers',
  description: 'Learn about byencrypt\'s agile development process, collaborative culture, remote work practices, and innovative methodologies for blockchain and Web3 projects.',
  keywords: [
    'agile development process',
    'blockchain development methodology',
    'remote work culture',
    'collaborative development',
    'byencrypt work process',
    'Web3 development practices',
    'software development workflow'
  ],
  openGraph: {
    title: 'How We Work | byencrypt Careers',
    description: 'Discover our agile, collaborative, and innovative development process.',
    url: 'https://byencrypt.com/career/how-we-work',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How We Work at byencrypt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How We Work | byencrypt Careers',
    description: 'Discover our agile, collaborative, and innovative development process.',
  },
  alternates: {
    canonical: 'https://byencrypt.com/career/how-we-work',
  },
};

export default function CareerHowWeWorkPage() {

  // <div className="flex flex-col items-center">
  //                 <Zap className="h-6 w-6 md:h-10 md:w-10 text-lime-400 mb-2" />
  //                 <span className="text-sm text-white font-bold">Agile</span>
  //               </div>
  //               <div className="flex flex-col items-center">
  //                 <Globe className="h-6 w-6 md:h-10 md:w-10 text-lime-400 mb-2" />
  //                 <span className="text-sm text-white font-bold">Global</span>
  //               </div>
  //               <div className="flex flex-col items-center">
  //                 <Shield className="h-6 w-6 md:h-10 md:w-10 text-lime-400 mb-2" />
  //                 <span className="text-sm text-white font-bold">Secure</span>
  //               </div>
  //               <div className="flex flex-col items-center">
  //                 <BookOpen className="h-6 w-6 md:h-10 md:w-10 text-lime-400 mb-2" />
  //                 <span className="text-sm text-white font-bold">Learning</span>
  //               </div>
  //               <div className="flex flex-col items-center">
  //                 <Users className="h-6 w-6 md:h-10 md:w-10 text-lime-400 mb-2" />
  //                 <span className="text-sm text-white font-bold">Empowered</span>
  //               </div>

  const steps = [
    { icon: Zap, label: 'Iterate' },
    { icon: Globe, label: 'Global' },
    { icon: Shield, label: 'Secure' },
    { icon: Users, label: 'Collaborate' },
    { icon: BookOpen, label: 'Learn' },
  ]
  return (
    <div className="min-h-screen bg-black pt-24 px-4 font-mono">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-8 leading-tight">
          How <span className="text-lime-400 italic">We Work</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-10">
          At byencrypt, we believe that great teams build great technology. Our remote-first culture, agile processes, and commitment to transparency empower us to deliver world-class software for blockchain, Web3, and AI.
        </p>
        <blockquote className="text-xl sm:text-2xl italic text-lime-400 mb-10">
          “Collaboration and ownership are at the heart of everything we do.”
        </blockquote>

        {/* Graphical Our Approach Section */}
        <div className="mb-14 mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-lime-400 mb-8 text-center">Our Approach</h2>
          {/* Process Flow */}
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center justify-center gap-8 w-full mb-8 relative">
              {/* Connecting line */}
              <div className="absolute top-1/2 left-8 right-8 h-1 bg-lime-400/30 z-0" style={{ transform: 'translateY(-50%)' }} />
              {/* Steps */}
              <div className="relative z-10 flex flex-row gap-1 md:gap-8 w-full justify-between max-w-full">
                {
                  steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <step.icon className="h-4 w-4 min-[375px]:h-6 min-[375px]:w-6 md:h-10 md:w-10 text-lime-400 mb-2" />
                      <span className="text-[10px] min-[375px]:text-xs md:text-sm text-white font-bold">{step.label}</span>
                    </div>
                  ))
                }
              </div>
            </div>
            {/* Simple Chart: Team Strengths */}
            <div className="w-full mt-8">
              <h3 className="text-lg font-semibold text-white mb-4 text-left">Team Strengths</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm">Collaboration</span>
                    <span className="text-lime-400 text-sm font-bold">95%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3">
                    <div className="bg-lime-400 h-3 rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm">Innovation</span>
                    <span className="text-lime-400 text-sm font-bold">90%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3">
                    <div className="bg-lime-400 h-3 rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm">Remote Productivity</span>
                    <span className="text-lime-400 text-sm font-bold">92%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3">
                    <div className="bg-lime-400 h-3 rounded-full" style={{ width: '92%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm">Security Focus</span>
                    <span className="text-lime-400 text-sm font-bold">97%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3">
                    <div className="bg-lime-400 h-3 rounded-full" style={{ width: '97%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <blockquote className="text-lg sm:text-xl italic text-gray-400 mb-10">
          “Remote work isn’t just a policy—it’s our way of life. Flexibility and trust fuel our creativity.”
        </blockquote>
        <div className="text-base sm:text-lg text-gray-400 mb-10">
          We use tools like Slack, Notion, and GitHub to stay connected and productive. Our culture values asynchronous communication, deep work, and respect for everyone’s time.
        </div>
        <blockquote className="text-base sm:text-xl italic text-lime-400 mb-10">
          “We build together, learn together, and celebrate our wins together.”
        </blockquote>
        <div className="text-base sm:text-lg text-gray-400">
          If you’re passionate about building the future of technology in a supportive, high-impact environment, byencrypt is the place for you.
        </div>
      </div>
    </div>
  );
}