import React from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './Animators';

export const Partners: React.FC = () => {
  return (
    <section className="bg-white dark:bg-charcoal border-b border-slate-200 dark:border-white/10 transition-colors duration-300" id="partners">
      <div className="border-b border-slate-200 dark:border-white/10 p-8 lg:p-12 bg-slate-50 dark:bg-white/5 transition-colors duration-300">
         <div className="max-w-3xl">
            <FadeIn>
              <h2 className="font-serif text-4xl lg:text-5xl font-medium text-obsidian dark:text-white mb-6">
                The <span className="text-slate-400 dark:text-slate-500">Network.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-mono text-sm text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                 SSImple is integrated with the world's leading financial institutions. Our protocol connects custodians, broker-dealers, and asset managers in a unified settlement ecosystem.
              </p>
            </FadeIn>
         </div>
      </div>

      <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 dark:divide-white/10 divide-y md:divide-y-0 dark:border-white/10">
        
        {/* EquiLend */}
        <FadeInItem className="group h-40 flex items-center justify-center p-8 bg-white dark:bg-charcoal hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-default">
          <div className="text-xl font-serif font-bold tracking-tight text-slate-800 dark:text-white transition-transform duration-300 group-hover:scale-105">
            EquiLend<span className="text-signal">.</span>
          </div>
        </FadeInItem>

        {/* S&P Global */}
        <FadeInItem className="group h-40 flex items-center justify-center p-8 bg-white dark:bg-charcoal hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-default">
           <div className="text-xl font-sans font-bold tracking-tighter uppercase text-slate-700 dark:text-slate-200 transition-transform duration-300 group-hover:scale-105">
             S&P Global
           </div>
        </FadeInItem>

        {/* Global Custodian */}
        <FadeInItem className="group h-40 flex items-center justify-center p-8 bg-white dark:bg-charcoal hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-default">
          <div className="font-mono text-sm font-bold uppercase tracking-widest border-2 border-slate-700 dark:border-slate-300 text-slate-700 dark:text-slate-300 px-2 py-1 transition-transform duration-300 group-hover:scale-105">
            Global Custodian
          </div>
        </FadeInItem>

        {/* Securities Finance Times */}
        <FadeInItem className="group h-40 flex items-center justify-center p-8 bg-white dark:bg-charcoal hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-default">
          <div className="font-serif text-lg italic font-bold text-slate-600 dark:text-slate-400 transition-transform duration-300 group-hover:scale-105">
            Securities Finance
          </div>
        </FadeInItem>

        {/* New Placeholders for Full Page Grid */}
        <FadeInItem className="group h-40 flex items-center justify-center p-8 bg-white dark:bg-charcoal hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-default">
          <div className="text-lg font-bold text-slate-300 dark:text-slate-700 font-mono transition-colors duration-300 group-hover:text-obsidian dark:group-hover:text-white">
            J.P. Morgan
          </div>
        </FadeInItem>

         <FadeInItem className="group h-40 flex items-center justify-center p-8 bg-white dark:bg-charcoal hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-default">
          <div className="text-lg font-bold text-slate-300 dark:text-slate-700 font-mono transition-colors duration-300 group-hover:text-obsidian dark:group-hover:text-white">
            State Street
          </div>
        </FadeInItem>

         <FadeInItem className="group h-40 flex items-center justify-center p-8 bg-white dark:bg-charcoal hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-default">
          <div className="text-lg font-bold text-slate-300 dark:text-slate-700 font-mono transition-colors duration-300 group-hover:text-obsidian dark:group-hover:text-white">
            BNY Mellon
          </div>
        </FadeInItem>

         <FadeInItem className="group h-40 flex items-center justify-center p-8 bg-white dark:bg-charcoal hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-default">
          <div className="text-lg font-bold text-slate-300 dark:text-slate-700 font-mono transition-colors duration-300 group-hover:text-obsidian dark:group-hover:text-white">
            Citigroup
          </div>
        </FadeInItem>

      </FadeInStagger>
    </section>
  );
};