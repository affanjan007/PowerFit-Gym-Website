import React from 'react';
import Hero from '@/components/home/Hero';
import Benefits from '@/components/home/Benefits';
import Pricing from '@/components/home/Pricing';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Benefits />
      <Pricing />
      <Contact />
    </div>
  );
}