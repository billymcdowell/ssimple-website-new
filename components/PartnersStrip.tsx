import React from 'react';
import { FadeInStagger, FadeInItem } from './Animators';

// Compact logo strip used under the homepage hero
export const PartnersStrip: React.FC = () => {
  return (
    <section className="bg-black dark:bg-black border-b border-slate-900/60 dark:border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400 mb-5">
          As seen in
        </p>

        <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-900/80 rounded-lg overflow-hidden">
          {/* EquiLend */}
          <FadeInItem className="h-24 sm:h-28 flex items-center justify-center bg-black">
            <div className="text-lg sm:text-xl font-serif font-bold tracking-tight text-slate-50">
              EquiLend<span className="text-signal">.</span>
            </div>
          </FadeInItem>

          {/* S&P Global */}
          <FadeInItem className="h-24 sm:h-28 flex items-center justify-center bg-black">
            <div className="text-base sm:text-lg font-sans font-bold tracking-tight uppercase text-slate-100">
              S&amp;P Global
            </div>
          </FadeInItem>

          {/* Global Custodian */}
          <FadeInItem className="h-24 sm:h-28 flex items-center justify-center bg-black">
            <div className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] border border-slate-200/80 text-slate-50 px-3 py-1">
              Global Custodian
            </div>
          </FadeInItem>

          {/* Securities Finance Times */}
          <FadeInItem className="h-24 sm:h-28 flex items-center justify-center bg-black">
            <div className="font-serif text-base sm:text-lg italic font-semibold text-slate-200">
              Securities Finance
            </div>
          </FadeInItem>
        </FadeInStagger>
      </div>
    </section>
  );
};

