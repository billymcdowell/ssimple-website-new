import React from 'react';
import { ASSETS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-20 border-b border-gray-500   bg-white dark:bg-black transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 flex-grow h-full">
        
        {/* Left Column - Content */}
        <div className="flex flex-col justify-center px-12 lg:px-20 py-20 border-r border-gray-500   relative">
           {/* Decorative horizontal line top */}
           <div className="absolute top-0 left-0 w-full h-px bg-black dark:bg-white"></div>
           
           <div className="max-w-xl">
             <Reveal>
                <div className="inline-block border border-gray-500   px-4 py-2 mb-12 bg-white dark:bg-black">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-black dark:text-white">
                        System Status: Operational
                    </span>
                </div>
             </Reveal>

             <Reveal delay={200}>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-black dark:text-white mb-12 leading-[0.9]">
                STABILITY <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange dark:text-white dark:bg-none">AUTOMATED</span>
                </h1>
            </Reveal>

            <Reveal delay={400}>
                <p className="text-lg font-sans text-black dark:text-gray-300 mb-16 leading-relaxed border-l-2 border-brand-orange pl-6 text-left">
                The digital infrastructure for modern institutions. We automate compliance and verify assets with absolute, permanent reliability.
                </p>
            </Reveal>

            <Reveal delay={600}>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                <a
                    href="#contact"
                    className="w-full sm:w-auto px-10 py-5 bg-brand-orange text-white text-sm font-bold uppercase tracking-widest hover:bg-black dark:hover:bg-white dark:hover:text-black transition-colors duration-200 border border-transparent"
                >
                    Start Integration
                </a>
                <a
                    href="#how-it-works"
                    className="w-full sm:w-auto px-10 py-5 bg-transparent text-black dark:text-white border border-gray-500   text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200 group flex items-center justify-center"
                >
                    Documentation
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                </div>
            </Reveal>
           </div>

           {/* Decorative footer in left col */}
           <div className="absolute bottom-0 left-0 w-full p-6 border-t border-gray-500   hidden md:block">
               <span className="text-xs font-mono uppercase tracking-widest text-black dark:text-white">Est. 2024 — SSimple Inc.</span>
           </div>
        </div>

        {/* Right Column - Image Placeholder */}
        <div className="relative h-full min-h-[50vh] md:min-h-auto bg-gray-100 dark:bg-gray-900 border-b md:border-b-0 border-gray-500   overflow-hidden group">
            <Reveal className="h-full w-full" delay={800}>
                {/* Image Placeholder */}
                <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                    alt="Institutional Architecture" 
                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
            </Reveal>
            {/* Overlay to ensure text readability if needed, or just aesthetic tint */}
            <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
            
            {/* Placeholder Label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white px-6 py-3 bg-black/50 backdrop-blur-sm">
                <span className="text-white text-sm font-bold uppercase tracking-[0.2em]">
                    Institutional Scale
                </span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;