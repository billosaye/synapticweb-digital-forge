
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-synaptic-gray relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-bl from-synaptic-indigo/5 to-transparent transform -translate-x-1/4" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-synaptic-charcoal leading-tight animate-fade-in">
              Designing Digital Experiences That Inspire
            </h1>
            
            <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              At SynapticWeb, we create high-impact websites that are fast, functional, and beautiful — engineered for growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="#work" className="btn-primary flex items-center gap-2">
                View Our Work
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-secondary">
                Get a Free Quote
              </a>
            </div>
            
            <div className="text-sm text-gray-500 border-l-2 border-synaptic-teal pl-3 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Trusted by 50+ startups and tech brands
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-synaptic-indigo to-synaptic-teal opacity-20 blur-xl rounded-xl" />
              <div className="relative bg-white p-4 rounded-xl shadow-xl animate-scale-in">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Website Design Showcase"
                  className="w-full h-auto rounded-lg object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-lg animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500 h-2 w-2 rounded-full"></div>
                    <span className="text-sm font-medium">Performance Optimized</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-3 rounded-lg shadow-lg animate-slide-in-right" style={{ animationDelay: '0.7s' }}>
                <div className="flex items-center gap-2">
                  <div className="bg-synaptic-coral h-2 w-2 rounded-full"></div>
                  <span className="text-sm font-medium">Conversion Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
};

export default HeroSection;
