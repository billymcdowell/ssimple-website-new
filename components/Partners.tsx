import React from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './Animators';

export const Partners: React.FC = () => {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-white dark:bg-charcoal border-b border-slate-200 dark:border-white/10 transition-colors duration-300"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70 dark:opacity-90"
      >
        <div className="absolute -top-40 -left-32 h-72 w-72 rounded-full bg-gradient-to-br from-signal/15 via-slate-200/40 to-transparent dark:from-signal/25 dark:via-slate-500/20 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-6rem] h-80 w-80 rounded-full bg-gradient-to-tr from-slate-900/5 via-signal/10 to-transparent dark:from-signal/35 dark:via-slate-700/30 blur-3xl" />
        <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent" />
        <div className="absolute inset-y-16 inset-x-6 rounded-[2.5rem] border border-dashed border-slate-200/60 dark:border-white/10" />
      </div>

      {/* Hero row */}
      <div className="relative border-b border-slate-200/70 dark:border-white/10 px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-end">
          <FadeIn className="flex-1 min-w-0">
            <div className="max-w-xl space-y-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                Network
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-medium text-obsidian dark:text-white leading-tight text-balance">
                The <span className="text-slate-400 dark:text-signal/80">Institutional Network</span> for real-world settlement
              </h2>
              <p className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Ssimple connects custodians, broker-dealers, and asset managers on a shared protocol so that every party
                sees the same state, at the same time, without rebuilding their core systems.
              </p>
            </div>
          </FadeIn>

          {/* Network snapshot card */}
          <FadeIn delay={0.1} className="w-full max-w-sm lg:max-w-md">
            <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-charcoal/80 backdrop-blur-xl shadow-[0_18px_60px_rgba(15,23,42,0.18)]">
              <div className="flex items-center justify-between border-b border-slate-200/70 dark:border-white/10 px-5 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  Live topology
                </p>
                <div className="flex gap-1.5">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-amber-400/70" />
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-slate-400/70" />
                </div>
              </div>
              <div className="relative px-5 pb-5 pt-4">
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_0_0,rgba(56,189,248,0.06),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.14),transparent_60%)] opacity-80 dark:opacity-100" />
                <div className="relative grid grid-cols-2 gap-3 pt-1">
                  <div className="col-span-2 flex items-center justify-between rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-slate-900/40 px-3.5 py-2.5">
                    <div className="flex flex-col">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        Connected domains
                      </span>
                      <span className="font-serif text-xl text-obsidian dark:text-white">
                        4<span className="text-slate-400 dark:text-slate-500">+</span>
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-mono text-[10px] text-emerald-500">Synchronized</span>
                      <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">
                        Custody · Lending · Trading · Collateral
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-slate-900/50 px-3 py-2.5 flex flex-col justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-1">
                      Participants
                    </span>
                    <p className="font-mono text-xs text-slate-700 dark:text-slate-200 leading-snug">
                      Custodians, agent lenders, broker-dealers, beneficial owners.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-slate-950 text-slate-50 px-3 py-2.5 flex flex-col justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-300 mb-1">
                      Workflows
                    </span>
                    <p className="font-mono text-xs text-slate-200 leading-snug">
                      Borrows, returns, recalls, substitutions, collateral moves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Logo constellation */}
      <div className="relative px-6 py-10 sm:px-8 lg:px-16 lg:py-14">
        <FadeInStagger className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center">
          <FadeInItem className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-950/70 px-3 py-1.5 mb-4">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">
                In market with
              </p>
            </div>
            <p className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-md">
              Ssimple works alongside leading market infrastructure providers and publications as they modernize
              securities finance infrastructure on a common protocol.
            </p>
          </FadeInItem>

          <FadeInItem className="flex-[1.4]">
            <div className="relative rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/90 dark:bg-slate-950/80 px-4 py-4 sm:px-6 sm:py-5">
              <div className="pointer-events-none absolute inset-2 rounded-3xl border border-dashed border-slate-200/70 dark:border-white/15" />
              <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">
                {/* EquiLend */}
                <div className="group flex h-24 items-center justify-center rounded-2xl bg-slate-50/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-white/10 hover:border-signal/60 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                  <span className="font-serif text-lg font-semibold tracking-tight text-slate-800 dark:text-white group-hover:text-signal">
                    EquiLend<span className="text-signal">.</span>
                  </span>
                </div>

                {/* S&P Global */}
                <div className="group flex h-24 items-center justify-center rounded-2xl bg-slate-50/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-white/10 hover:border-signal/60 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                  <span className="text-xs sm:text-sm font-sans font-semibold tracking-[0.22em] uppercase text-slate-700 dark:text-slate-200 group-hover:text-signal">
                    S&amp;P Global
                  </span>
                </div>

                {/* Global Custodian */}
                <div className="group flex h-24 items-center justify-center rounded-2xl bg-slate-50/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-white/10 hover:border-signal/60 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                  <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.26em] border border-slate-700/70 dark:border-slate-200 px-2 py-1 text-slate-700 dark:text-slate-200 group-hover:border-signal group-hover:text-signal">
                    Global Custodian
                  </span>
                </div>

                {/* Securities Finance Times */}
                <div className="group flex h-24 items-center justify-center rounded-2xl bg-slate-50/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-white/10 hover:border-signal/60 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                  <span className="font-serif text-base sm:text-lg italic font-semibold text-slate-600 dark:text-slate-300 group-hover:text-signal">
                    Securities Finance
                  </span>
                </div>

                {/* Institutional placeholders */}
                <div className="group flex h-24 items-center justify-center rounded-2xl bg-slate-900 text-slate-200 border border-slate-700/70 hover:border-signal/70 transition-colors">
                  <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase">
                    J.P. Morgan
                  </span>
                </div>

                <div className="group flex h-24 items-center justify-center rounded-2xl bg-slate-900 text-slate-200 border border-slate-700/70 hover:border-signal/70 transition-colors">
                  <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase">
                    State Street
                  </span>
                </div>

                <div className="group flex h-24 items-center justify-center rounded-2xl bg-slate-900 text-slate-200 border border-slate-700/70 hover:border-signal/70 transition-colors">
                  <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase">
                    BNY Mellon
                  </span>
                </div>

                <div className="group flex h-24 items-center justify-center rounded-2xl bg-slate-900 text-slate-200 border border-slate-700/70 hover:border-signal/70 transition-colors">
                  <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase">
                    Citigroup
                  </span>
                </div>
              </div>
            </div>
          </FadeInItem>
        </FadeInStagger>
      </div>

      {/* Network explanation sections */}
      <div className="relative border-t border-slate-200/80 dark:border-white/10 bg-white/95 dark:bg-charcoal">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
          {/* What the network is */}
          <FadeIn>
            <div className="max-w-3xl space-y-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                Architecture
              </p>
              <h3 className="font-serif text-2xl lg:text-3xl text-obsidian dark:text-white leading-tight text-balance">
                A shared protocol that sits underneath existing infrastructure.
              </h3>
              <p className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                The Ssimple Network is a permissioned transaction layer for securities finance. Institutions map existing
                events to protocol primitives, so allocations, recalls, and collateral moves are represented once and
                reflected consistently across desks, systems, and counterparties.
              </p>
            </div>
          </FadeIn>

          {/* Pillars */}
          <FadeInStagger className="grid gap-8 lg:grid-cols-3">
            <FadeInItem className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-slate-950/70 px-5 py-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(56,189,248,0.14),transparent_55%)] opacity-70 dark:opacity-90" />
              <div className="relative space-y-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300">
                  Layer 1
                </p>
                <h4 className="font-serif text-lg text-obsidian dark:text-white">
                  Shared transaction graph
                </h4>
                <p className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Trades and lifecycle events live on a single, auditable graph instead of being re-keyed across
                  multiple proprietary ledgers, while preserving each institution&apos;s visibility and controls.
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-slate-950/70 px-5 py-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0,rgba(148,163,184,0.2),transparent_55%)] opacity-70 dark:opacity-90" />
              <div className="relative space-y-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300">
                  Layer 2
                </p>
                <h4 className="font-serif text-lg text-obsidian dark:text-white">
                  Standardized workflows
                </h4>
                <p className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Common events&mdash;borrows, returns, substitutions, collateral upgrades&mdash;are expressed using a
                  small, interoperable set of protocol building blocks instead of bespoke bilateral logic.
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-slate-950/70 px-5 py-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(15,23,42,0.4),transparent_60%)] opacity-70 dark:opacity-90" />
              <div className="relative space-y-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300">
                  Layer 3
                </p>
                <h4 className="font-serif text-lg text-obsidian dark:text-white">
                  Real-time reconciliation
                </h4>
                <p className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Participants converge on a single view of positions and obligations, collapsing T+1 breaks into
                  intraday monitoring and reducing downstream manual clean-up.
                </p>
              </div>
            </FadeInItem>
          </FadeInStagger>

          {/* Who participates */}
          <FadeInStagger className="grid gap-8 lg:grid-cols-[1.1fr,1.3fr]">
            <FadeInItem className="space-y-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                Participants
              </p>
              <h3 className="font-serif text-2xl lg:text-3xl text-obsidian dark:text-white leading-tight text-balance">
                Built for the full securities finance ecosystem.
              </h3>
              <p className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Each institution connects once to the network and can interact with many counterparties, utilities, and
                venues through a single, coherent protocol&mdash;rather than a patchwork of point-to-point links.
              </p>
            </FadeInItem>

            <FadeInItem className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-slate-950/70 px-4 py-5 space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  Custodians &amp; administrators
                </p>
                <p className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Embed the protocol into custody and fund accounting platforms to streamline allocations, settlements,
                  and collateral movements across clients and counterparties.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-slate-950/70 px-4 py-5 space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  Agent lenders &amp; beneficial owners
                </p>
                <p className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Manage supply, mandates, and constraints on shared rails that keep lenders, agents, and downstream
                  service providers synchronized on the same set of positions.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-slate-950/70 px-4 py-5 space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  Borrowers &amp; broker-dealers
                </p>
                <p className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Connect front-office trading tools and middle-office operations to a network that reflects agreed
                  trades, recalls, and substitutions in near real time.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-slate-950/70 px-4 py-5 space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  Market utilities &amp; venues
                </p>
                <p className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Integrate order books, matching engines, and post-trade utilities with a standardized representation
                  of positions and obligations, reducing bespoke bilateral connectivity.
                </p>
              </div>
            </FadeInItem>
          </FadeInStagger>

          {/* How it fits into the stack */}
          <FadeInStagger className="grid gap-8 lg:grid-cols-[1.1fr,1.3fr]">
            <FadeInItem className="space-y-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                Adoption path
              </p>
              <h3 className="font-serif text-2xl lg:text-3xl text-obsidian dark:text-white leading-tight text-balance">
                Slot the network under a single domain, then expand.
              </h3>
              <p className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Institutions connect through lightweight adapters, mapping existing messages and workflows to protocol
                objects. From there, they can add counterparties and new products without restarting the integration.
              </p>
            </FadeInItem>

            <FadeInItem className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/85 dark:bg-slate-950/80 px-4 py-4 space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                  Step&nbsp;1
                </p>
                <h4 className="font-serif text-base text-obsidian dark:text-white">
                  Connect a single domain
                </h4>
                <p className="font-mono text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Start with one desk, region, or asset class and map its events to protocol primitives without
                  re-platforming core systems.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/85 dark:bg-slate-950/80 px-4 py-4 space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                  Step&nbsp;2
                </p>
                <h4 className="font-serif text-base text-obsidian dark:text-white">
                  Onboard counterparties
                </h4>
                <p className="font-mono text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Extend the same integration to multiple trading partners, reducing bespoke connections and keeping
                  everyone aligned to a single source of truth.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/85 dark:bg-slate-950/80 px-4 py-4 space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                  Step&nbsp;3
                </p>
                <h4 className="font-serif text-base text-obsidian dark:text-white">
                  Expand use cases
                </h4>
                <p className="font-mono text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Layer on additional books and workflows&mdash;from term lending to collateral upgrades&mdash;once
                  the shared infrastructure is in place.
                </p>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
};