import React from 'react';
import { ArrowDownRight, ShieldCheck, Activity } from 'lucide-react';
import { Button } from './Button';

export const SimpleHome: React.FC = () => {
  return (
    <div className="bg-paper dark:bg-charcoal text-obsidian dark:text-white">
      {/* Hero */}
      <section className="pt-24 lg:pt-28 pb-16 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[3fr,2fr] gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              T+1 Settlement Infrastructure
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
              Standing instructions,{' '}
              <span className="text-slate-500 dark:text-slate-300">made simple.</span>
            </h1>

            <p className="max-w-xl text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Ssimple keeps counterparties on the same page about where cash and securities
              should settle, so your team spends less time chasing breaks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                icon={<ArrowDownRight size={18} />}
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                Talk to our team
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  window.location.href = `${import.meta.env.BASE_URL}protocol`;
                }}
              >
                View the protocol
              </Button>
            </div>
          </div>

          {/* Visual panel */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-signal/15 via-emerald-400/8 to-sky-500/10 blur-2xl opacity-80 dark:opacity-60 pointer-events-none" />

            <div className="relative rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-obsidian/95 shadow-2xl shadow-slate-300/40 dark:shadow-black/60 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-white/5 bg-slate-50/80 dark:bg-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-obsidian dark:bg-white text-white dark:text-obsidian flex items-center justify-center">
                    <Activity size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold">Settlement Overview</div>
                    <div className="text-[10px] font-mono uppercase tracking-wide text-slate-500">
                      Live T+1 Readiness
                    </div>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-white/20" />
                  <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-white/20" />
                  <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-white/20" />
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-6">
                {/* Big metric */}
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-slate-500">
                      Same-day match rate
                    </div>
                    <div className="mt-1 text-3xl sm:text-4xl font-serif tabular-nums">
                      99.9%
                    </div>
                  </div>
                  <div className="h-14 flex items-end gap-1.5">
                    {[32, 55, 42, 68, 80, 92, 76, 88].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className="w-1.5 rounded-sm bg-gradient-to-t from-signal/20 to-signal"
                      />
                    ))}
                  </div>
                </div>

                {/* Simple rows */}
                <div className="grid gap-3 text-xs">
                  <div className="flex items-center justify-between rounded-xl border border-slate-100 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 px-3 py-2.5">
                    <div className="flex flex-col">
                      <span className="font-mono text-[11px] text-slate-700 dark:text-slate-100">
                        SSI Library
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        Single governed source of truth
                      </span>
                    </div>
                    <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30 font-mono text-[10px] uppercase tracking-wide">
                      Synced
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-slate-100 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 px-3 py-2.5">
                    <div className="flex flex-col">
                      <span className="font-mono text-[11px] text-slate-700 dark:text-slate-100">
                        Counterparties
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        Investment banks, custodians, prime brokers
                      </span>
                    </div>
                    <span className="px-2 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-300 border border-sky-500/30 font-mono text-[10px] uppercase tracking-wide">
                      Connected
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-white/5 text-[10px] font-mono uppercase tracking-[0.16em] text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={12} />
                    <span>Operational controls built-in</span>
                  </div>
                  <span>T+1 / FMSB aligned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple highlights */}
      <section className="pb-18 lg:pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              label: 'For asset managers',
              title: 'Fewer settlement breaks',
              copy: 'Reduce manual follow-up by aligning instructions before trade date.',
            },
            {
              label: 'For brokers',
              title: 'Operational resilience',
              copy: 'Lower fails and prove controls around where positions settle.',
            },
            {
              label: 'For custodians',
              title: 'Cleaner downstream data',
              copy: 'Keep SSI changes synchronized with upstream trading desks.',
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-obsidian/90 backdrop-blur-sm p-5 flex flex-col justify-between"
            >
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 mb-3">
                {item.label}
              </span>
              <h2 className="font-serif text-xl mb-2">{item.title}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Slim CTA */}
      <section className="border-t border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-obsidian/95">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500">
              Ready for T+1
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-200">
              Share your current SSI process and we&apos;ll show you where Ssimple fits.
            </p>
          </div>
          <Button
            variant="ghost"
            size="md"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Schedule a conversation
          </Button>
        </div>
      </section>
    </div>
  );
};

