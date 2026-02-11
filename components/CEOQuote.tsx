import React from 'react';
import { Reveal } from './Reveal';

const CEOQuote: React.FC = () => {
  return (
    <section className="bg-white dark:bg-black border-b border-gray-500   transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Quote Side */}
        <div className="p-12 lg:p-24 flex flex-col justify-center order-2 lg:order-1">
            <Reveal>
                <div className="w-16 h-1 bg-black dark:bg-white mb-12"></div>
                <blockquote className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-12 text-black dark:text-white">
                    "Complexity is the enemy of security. We strip it away to reveal the pure, unalterable truth of every transaction."
                </blockquote>
                <div>
                    <cite className="not-italic text-sm font-bold uppercase tracking-widest text-brand-orange block mb-2">
                        Alexander Vane
                    </cite>
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                        Founder & CEO, SSimple
                    </span>
                </div>
            </Reveal>
        </div>

        {/* Image Side */}
        <div className="relative min-h-[500px] border-b lg:border-b-0 lg:border-l border-gray-500   order-1 lg:order-2 group overflow-hidden">
             <Reveal className="h-full w-full">
                <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" 
                    alt="Alexander Vane CEO" 
                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50"></div>
             </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CEOQuote;