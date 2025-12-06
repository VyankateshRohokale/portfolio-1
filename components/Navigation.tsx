'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo / Centered Name */}
          <div className="hidden md:flex absolute inset-y-0 left-1/2 transform -translate-x-1/2 items-center pointer-events-none">
            <Link href="/" className="inline-flex items-center pointer-events-auto">
              <span className="text-lg md:text-2xl font-semibold text-white">
                Vyankatesh <span className="text-lime-400">Rohokale</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation (anchored to the right of centered title) */}
          <div className="hidden md:flex absolute right-6 inset-y-0 items-center space-x-8 font-mono">
            {/* <Link href="/projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Projects
            </Link> */}
            <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Services
            </Link>
            <Link href="/contact">
              <button className="px-5 py-2 rounded-full border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition-colors text-sm font-semibold">
                Contact
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            {/* <Link href="/projects" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Projects
            </Link> */}
            <Link href="/services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Services
            </Link>
            {/* Blog removed per user request */}
            {/* Careers removed per user request */}
            <Link href="/contact" className="block px-3 py-2">
              <button className="w-full px-5 py-2 rounded-full border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition-colors text-base font-semibold">
                Contact
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;