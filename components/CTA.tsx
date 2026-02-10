import React from 'react';
import { Button } from './Button';
import { FadeIn } from './Animators';

export const CTA: React.FC = () => {
  return (
    <section className="py-32 bg-paper dark:bg-charcoal relative border-b border-obsidian dark:border-white/10 transition-colors duration-300" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="font-serif text-5xl md:text-6xl font-medium text-obsidian dark:text-white mb-8">
            Initialize <br/>
            <span className="font-bold border-b-4 border-signal">Protocol Integration.</span>
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <p className="font-mono text-base text-obsidian/70 dark:text-white/60 mb-12 max-w-xl mx-auto">
            Join the network of institutional players securing their settlement infrastructure. T+1 ready. FMSB compliant.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <form className="max-w-md mx-auto flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input 
                type="email" 
                placeholder="INSTITUTIONAL EMAIL" 
                className="w-full px-6 py-4 bg-white dark:bg-obsidian border border-obsidian dark:border-white/20 text-obsidian dark:text-white placeholder:text-obsidian/30 dark:placeholder:text-white/30 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-obsidian dark:focus:ring-white focus:border-obsidian dark:focus:border-white transition-all duration-300"
                required
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Request Access
            </Button>
          </form>
          <p className="font-mono text-xs text-obsidian/40 dark:text-white/30 mt-6 uppercase tracking-widest">
             Verification Required for Access
          </p>
        </FadeIn>
      </div>
    </section>
  );
};