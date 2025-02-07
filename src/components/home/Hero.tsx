import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { Dumbbell, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    const handleScroll = () => {
      const position = window.scrollY;
      const maxScroll = 500; // Maximum scroll effect threshold
      const scrollPercentage = Math.min(position / maxScroll, 1);
      setScrolled(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxStyle = {
    transform: `scale(${1 + scrolled * 0.1}) translateY(${scrolled * 50}px)`,
    filter: `brightness(${1 - scrolled * 0.3})`,
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 transition-transform duration-300 bg-cover bg-center bg-no-repeat"
        style={{
          ...parallaxStyle,
          backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>
      
      <div className={`relative z-10 container mx-auto px-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-3xl">
          {/* 3D Floating Logo */}
          <div className="mb-8 transform-3d floating">
            <Dumbbell className="w-20 h-20 text-red-500 filter drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in transform-3d hover-tilt leading-tight">
            Transform Your Body,<br />
            <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
              Transform Your Life
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 animate-fade-in animate-delay-200 leading-relaxed">
            Join our state-of-the-art facility and start your fitness journey today.
            Expert trainers, modern equipment, and a supportive community await.
          </p>
          
          <div className="flex gap-4 animate-fade-in animate-delay-300 transform-3d">
            <Button 
              size="lg" 
              to="/classes" 
              className="hover-bounce group relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              to="/membership" 
              className="hover-bounce backdrop-blur-sm"
            >
              View Pricing
            </Button>
          </div>

          {/* Animated Decorative Elements */}
          <div className="absolute top-20 right-20 transform-3d floating" style={{ animationDelay: '0.5s' }}>
            <div className="w-16 h-16 border-4 border-red-500 rounded-full opacity-50 blur-sm" />
          </div>
          <div className="absolute bottom-20 right-40 transform-3d floating" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 border-4 border-white rounded-lg opacity-30 blur-sm" />
          </div>
          <div className="absolute top-40 right-60 transform-3d floating" style={{ animationDelay: '1.5s' }}>
            <div className="w-8 h-8 bg-red-500 rounded-full opacity-40 blur-sm" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white opacity-50" />
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 animate-pulse" />
      </div>
    </section>
  );
}