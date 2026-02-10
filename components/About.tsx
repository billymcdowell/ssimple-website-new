import React from 'react';
import { FadeIn } from './Animators';

const executives = [
  {
    name: 'Alex Morgan',
    title: 'Chief Executive Officer',
    bio: 'Leads strategy and institutional relationships, with two decades of experience in post-trade infrastructure and market structure reform.',
    initials: 'AM',
  },
  {
    name: 'Jordan Lee',
    title: 'Chief Technology Officer',
    bio: 'Architects the protocol, with a background in critical financial market utilities, low-latency systems, and cryptographic security.',
    initials: 'JL',
  },
  {
    name: 'Riley Chen',
    title: 'Chief Risk & Compliance Officer',
    bio: 'Owns the mandate, mapping global regulatory expectations into enforceable operational standards across custody and execution venues.',
    initials: 'RC',
  },
  {
    name: 'Taylor Singh',
    title: 'Chief Product Officer',
    bio: 'Designs the settlement experience, aligning protocol primitives with the workflows of operations, risk, and front-office teams.',
    initials: 'TS',
  },
];

const roles = [
  {
    title: 'Protocol Engineer',
    location: 'London / New York (Hybrid)',
    level: 'Senior / Staff',
    description:
      'Design and implement core settlement primitives, API surfaces, and integration tooling for custodians, brokers, and buy-side OMS/EMS platforms.',
    tags: ['TypeScript', 'Rust or Go', 'Post-trade', 'Distributed Systems'],
  },
  {
    title: 'Market Structure Lead',
    location: 'London (Hybrid)',
    level: 'Director',
    description:
      'Translate regulatory change and industry standards into protocol features, reference playbooks, and implementation patterns for global clients.',
    tags: ['T+1', 'FMSB', 'Reg Reform', 'Institutional'],
  },
  {
    title: 'Implementation Specialist',
    location: 'Remote (US / UK)',
    level: 'Senior',
    description:
      'Own the deployment of the protocol into client environments, coordinating with operations, technology, and counterparties to reach production.',
    tags: ['Client Delivery', 'Post-trade Ops', 'Solution Design'],
  },
];

export const About: React.FC = () => {
  return (
    <section className="pt-24 pb-24 bg-paper dark:bg-charcoal min-h-screen border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-20">
        {/* Company Overview */}
        <FadeIn>
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-start">
            <div>
              <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-slate-500 dark:text-slate-400 mb-4">
                About / Ssimple
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-obsidian dark:text-white leading-tight mb-6">
                Institutional <span className="text-slate-500 dark:text-slate-400">settlement</span> as a governed
                protocol.
              </h1>
              <p className="font-mono text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Ssimple is an institutional settlement company building a single, sovereign source of truth for Standing
                Settlement Instructions. We operate at the intersection of market structure, infrastructure, and
                regulation, ensuring that every booking, every instruction, and every leg of a transaction lands
                correctly the first time.
              </p>
              <p className="font-mono text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                The protocol is designed for firms who cannot outsource operational liability: global asset managers,
                custodians, prime brokers, and execution venues that need deterministic, auditable settlement flows
                under a T+1 mandate.
              </p>
              <p className="font-mono text-xs sm:text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
                We abstract the complexity of fragmented SSI data, bilateral coordination, and legacy infrastructure
                into a governed, upgradeable protocol that can be integrated once and relied on across markets.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-obsidian p-6 shadow-xl shadow-slate-200/40 dark:shadow-black/40">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                      Operating Principles
                    </p>
                    <p className="font-serif text-lg text-obsidian dark:text-white mt-2">
                      Deterministic settlement, by construction.
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-md bg-obsidian dark:bg-white text-white dark:text-obsidian flex items-center justify-center font-mono text-xs tracking-widest">
                    SSI
                  </div>
                </div>
                <ul className="space-y-3 font-mono text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                  <li className="flex gap-2">
                    <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-signal flex-shrink-0" />
                    T+1 and beyond by design, not by operational heroics.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-signal flex-shrink-0" />
                    A golden source for SSIs with explicit versioning, entitlements, and audit.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-signal flex-shrink-0" />
                    Neutral infrastructure: protocol-first, venue-agnostic, client-controlled.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-signal flex-shrink-0" />
                    Clear ownership boundaries between protocol, client systems, and counterparties.
                  </li>
                </ul>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">
                  FMSB-aligned / Infrastructure-native / Mandate-aware
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Leadership */}
        <FadeIn delay={0.1}>
          <section aria-labelledby="leadership">
            <div className="flex items-baseline justify-between mb-8">
              <div>
                <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-slate-500 dark:text-slate-400 mb-2">
                  Leadership
                </p>
                <h2
                  id="leadership"
                  className="font-serif text-2xl sm:text-3xl text-obsidian dark:text-white tracking-tight"
                >
                  C‑suite operating the protocol.
                </h2>
              </div>
              <p className="hidden md:block font-mono text-[11px] text-slate-500 dark:text-slate-400 max-w-xs text-right">
                A compact team of operators, technologists, and market-structure specialists accountable for the safety
                of institutional settlement.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {executives.map((exec) => (
                <article
                  key={exec.name}
                  className="group rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-obsidian p-5 flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1 hover:border-signal/70"
                >
                  <div className="flex items-center gap-5">
                    {/* Headshot placeholder */}
                    <div className="relative">
                      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-signal to-obsidian text-white flex items-center justify-center font-mono text-sm tracking-widest">
                        {exec.initials}
                      </div>
                      <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-400 border border-white dark:border-obsidian" />
                    </div>
                    <div>
                      <p className="font-serif text-sm text-obsidian dark:text-white">{exec.name}</p>
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400 mt-1">
                        {exec.title}
                      </p>
                    </div>
                  </div>
                  <p className="font-mono text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    {exec.bio}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Careers */}
        <FadeIn delay={0.15}>
          <section id="careers" aria-labelledby="careers-heading" className="pt-6 border-t border-slate-200/70 dark:border-white/10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-signal mb-2">
                  Careers
                </p>
                <h2
                  id="careers-heading"
                  className="font-serif text-2xl sm:text-3xl text-obsidian dark:text-white tracking-tight mb-3"
                >
                  Build the standard for settlement.
                </h2>
                <p className="font-mono text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 max-w-xl">
                  We hire people who are comfortable at the boundary between infrastructure and regulation: protocol
                  engineers, market-structure specialists, and operators who have lived through settlement incidents and
                  want to design them out of the system.
                </p>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500 dark:text-slate-500">
                All roles are permanent. No speculative internships. Institutional experience required.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {roles.map((role) => (
                <article
                  key={role.title}
                  className="rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-obsidian p-5 flex flex-col justify-between gap-4"
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400 mb-2">
                      {role.level}
                    </p>
                    <h3 className="font-serif text-lg text-obsidian dark:text-white mb-1">
                      {role.title}
                    </h3>
                    <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400 mb-3">
                      {role.location}
                    </p>
                    <p className="font-mono text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-slate-200 dark:border-white/15 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.16em] text-slate-600 dark:text-slate-300 bg-slate-50/60 dark:bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 font-mono text-[10px] text-slate-500 dark:text-slate-400">
                    To express interest, email{' '}
                    <a
                      href="mailto:careers@ssimple.io"
                      className="underline decoration-signal/70 underline-offset-4 hover:text-signal transition-colors"
                    >
                      careers@ssimple.io
                    </a>{' '}
                    with your background and the role you are most aligned with.
                  </p>
                </article>
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </section>
  );
};

