import React from 'react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="bg-paper dark:bg-charcoal border-b border-slate-200 dark:border-white/10 py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Problem */}
        <div>
          <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-signal mb-3">
            The problem
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-4 text-obsidian dark:text-white">
            Standing instructions live in too many places.
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-6 max-w-md">
            Trade date gets faster, but where positions should actually settle is still buried in
            emails, PDFs and internal systems that don&apos;t agree with each other.
          </p>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-signal" />
              <span>Ops teams chase breaks caused by stale or missing SSIs.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-signal" />
              <span>Counterparties each maintain their own versions of the truth.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-signal" />
              <span>Regulators expect T+1 resilience, not manual workarounds.</span>
            </li>
          </ul>
        </div>

        {/* Solution */}
        <div className="lg:pl-4">
          <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-emerald-500 mb-3">
            The Ssimple approach
          </p>
          <h3 className="font-serif text-2xl sm:text-3xl mb-4 text-obsidian dark:text-white">
            A governed SSI source, shared across counterparties.
          </h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-6 max-w-md">
            Ssimple hosts a single, governed library of Standing Settlement Instructions that
            upstream trading systems and downstream custodians can both trust.
          </p>

          <div className="grid gap-4 text-sm text-slate-700 dark:text-slate-300">
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-obsidian/90 p-4">
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 mb-2">
                Governed data
              </p>
              <p>Changes to SSIs are reviewed, approved and auditable.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-obsidian/90 p-4">
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 mb-2">
                Shared view
              </p>
              <p>Asset managers, brokers and custodians see the same instructions.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-obsidian/90 p-4">
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 mb-2">
                T+1 ready
              </p>
              <p>Instructions are aligned before trade date, not fixed after fails.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

