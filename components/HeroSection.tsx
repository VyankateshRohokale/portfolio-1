'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-black pt-20">
      {/* Subtle mesh gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-lime-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gray-300/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-mono tracking-tight mb-8">
            <span className="block text-lime-400 font-clock text-5xl sm:text-7xl lg:text-8xl">
              <Typewriter
                words={['Ambitious.', 'Curious.', 'Focused.', 'Creative.', 'Dynamic.']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1200}
              />
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-12 leading-relaxed font-mono">
            Blockchain, full-stack, and AI expertise for next-gen digital experiences. 
            Build, scale, and innovate with our professional team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-lime-400 text-lime-400 font-mono font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-lime-400/25"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-gray-300 font-mono font-semibold rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 border border-gray-700"
            >
              What I Can Do
            </Link>
          </div>
        </div>
      </div>

      {/* Fade bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default HeroSection;