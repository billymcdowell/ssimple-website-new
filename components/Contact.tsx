import React from 'react';
import { FadeIn } from './Animators';
import { Button } from './Button';

export const Contact: React.FC = () => {
  return (
    <section className="pt-24 pb-32 bg-paper dark:bg-charcoal min-h-[70vh] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-xs text-signal uppercase tracking-[0.3em] mb-4">
            Contact
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-obsidian dark:text-white mb-6">
            Request institutional access. <br className="hidden md:block" />
            <span className="font-bold border-b-4 border-signal pb-1">
              Connect directly to the protocol.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-mono text-sm md:text-base text-obsidian/70 dark:text-white/60 max-w-2xl mb-12 leading-relaxed">
            Ssimple works with regulated institutions, market infrastructures, and supervisors.
            Share your details to initiate due diligence, documentation access, and integration planning.
          </p>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-[2fr,1.2fr] items-start">
          <FadeIn delay={0.15}>
            <form
              className="flex flex-col gap-5 bg-white dark:bg-obsidian border border-obsidian/10 dark:border-white/15 p-6 md:p-8 shadow-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] text-obsidian/60 dark:text-white/50 uppercase tracking-[0.25em]">
                  Institution
                </label>
                <input
                  type="text"
                  placeholder="LEGAL ENTITY NAME"
                  className="w-full px-4 py-3 bg-paper dark:bg-charcoal border border-obsidian/15 dark:border-white/15 text-obsidian dark:text-white placeholder:text-obsidian/30 dark:placeholder:text-white/30 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-obsidian dark:focus:ring-white focus:border-obsidian dark:focus:border-white transition-all duration-300"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] text-obsidian/60 dark:text-white/50 uppercase tracking-[0.25em]">
                  Institutional Email
                </label>
                <input
                  type="email"
                  placeholder="NAME@INSTITUTION.DOMAIN"
                  className="w-full px-4 py-3 bg-paper dark:bg-charcoal border border-obsidian/15 dark:border-white/15 text-obsidian dark:text-white placeholder:text-obsidian/30 dark:placeholder:text-white/30 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-obsidian dark:focus:ring-white focus:border-obsidian dark:focus:border-white transition-all duration-300"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] text-obsidian/60 dark:text-white/50 uppercase tracking-[0.25em]">
                  Role
                </label>
                <input
                  type="text"
                  placeholder="RISK / OPERATIONS / CTO / SUPERVISOR"
                  className="w-full px-4 py-3 bg-paper dark:bg-charcoal border border-obsidian/15 dark:border-white/15 text-obsidian dark:text-white placeholder:text-obsidian/30 dark:placeholder:text-white/30 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-obsidian dark:focus:ring-white focus:border-obsidian dark:focus:border-white transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] text-obsidian/60 dark:text-white/50 uppercase tracking-[0.25em]">
                  Context
                </label>
                <textarea
                  placeholder="BRIEF DESCRIPTION OF YOUR USE-CASE, MARKET AND EXPECTED TIMELINES."
                  className="w-full min-h-[120px] px-4 py-3 bg-paper dark:bg-charcoal border border-obsidian/15 dark:border-white/15 text-obsidian dark:text-white placeholder:text-obsidian/30 dark:placeholder:text-white/30 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-obsidian dark:focus:ring-white focus:border-obsidian dark:focus:border-white transition-all duration-300 resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="mt-2">
                Send institutional request
              </Button>

              <p className="font-mono text-[10px] text-obsidian/40 dark:text-white/30 uppercase tracking-[0.3em] mt-3">
                Verification required. Retail enquiries are not processed.
              </p>
            </form>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="space-y-8 font-mono text-xs text-obsidian/70 dark:text-white/60">
              <div>
                <p className="text-[11px] text-signal uppercase tracking-[0.3em] mb-3">
                  Integration scope
                </p>
                <p className="leading-relaxed">
                  Securities post‑trade infrastructure, collateral workflows, supervisory connectivity, and legacy coexistence.
                </p>
              </div>
              <div>
                <p className="text-[11px] text-signal uppercase tracking-[0.3em] mb-3">
                  Response window
                </p>
                <p className="leading-relaxed">
                  Qualified institutional requests are typically reviewed within 2–3 business days.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

