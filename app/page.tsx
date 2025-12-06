import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import FeaturedProjects from '@/components/FeaturedProjects';
import TestimonialsSection from '@/components/TestimonialsSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vyankatesh Rohokale - Software Development & Portfolio',
  description: 'Personal portfolio and software development services specializing in blockchain, full-stack, Web3, mobile apps, and AI solutions.',
  openGraph: {
    title: 'Vyankatesh Rohokale - Software Development & Portfolio',
    description: 'Personal portfolio showcasing software development projects in blockchain, Web3, mobile and AI.',
    url: '/',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <FeaturedProjects />
      <TestimonialsSection />
    </div>
  );
}