import React from 'react';
import { FadeIn } from './Animators';

export const Campaign: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-obsidian border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        <FadeIn direction="left" className="order-2 lg:order-1">
          <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-slate-500 dark:text-slate-400 mb-4">
            CEO Perspective
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-obsidian dark:text-white mb-6 leading-tight">
            &ldquo;Settlement is not a back-office problem. It is core market infrastructure.&rdquo;
          </h2>
          <p className="font-mono text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            &ldquo;Ssimple exists so that institutional firms can reason about settlement with the same confidence they
            apply to execution. When Standing Settlement Instructions are governed by protocol rather than by inboxes,
            every team&mdash;from trading to operations to risk&mdash;can build on a single, verifiable source of
            truth.&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-signal to-obsidian text-white flex items-center justify-center font-mono text-xs tracking-widest">
              AM
            </div>
            <div>
              <div className="font-serif text-sm text-obsidian dark:text-white">Alex Morgan</div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Chief Executive Officer, Ssimple
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right" className="order-1 lg:order-2">
          <figure className="relative overflow-hidden rounded-lg border border-slate-200 dark:border-white/10 bg-slate-950/90">
            {/* Image placeholder */}
            <div className="aspect-[4/3] w-full bg-gradient-to-br from-slate-900 via-obsidian to-signal/60 relative flex items-end">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
              <div className="absolute inset-0 bg-grid-paper dark:bg-grid-paper-dark opacity-20" />
              <div className="p-6 md:p-8 relative z-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-slate-300/80 mb-2">
                  Campaign Visual
                </p>
                <p className="font-serif text-lg md:text-xl text-slate-50 max-w-xs">
                  A single, sovereign source of Standing Settlement Instructions.
                </p>
              </div>
            </div>
            <figcaption className="px-4 py-3 border-t border-slate-800/80 bg-black/60 text-slate-400 font-mono text-[10px] uppercase tracking-[0.22em] flex items-center justify-between">
              <span>T+1 Mandate &mdash; SSI Protocol</span>
              <span className="text-slate-500">LDN / NYC / TYO</span>
            </figcaption>
          </figure>
        </FadeIn>
      </div>
    </section>
  );
};

