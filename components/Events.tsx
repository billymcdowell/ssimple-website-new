import React from 'react';

type EventItem = {
  date: string;
  title: string;
  description: string;
  location: string;
};

const events: EventItem[] = [
  {
    date: '01/09/25',
    title: 'Automation of SSIs and T+1 Operational Challenges',
    description:
      "Bill Meenaghan, SSImple Founder & CEO, took part in this webinar with S&P Global Market Intelligence. The discussion explored how automated standing settlement instructions (SSIs) can remove manual bottlenecks, reduce settlement risk and support firms as markets accelerate to T+1.",
    location: 'Virtual Event',
  },
  {
    date: '03/09/25 – 04/09/25',
    title: 'PostTrade 360°',
    description:
      'Bill Meenaghan, SSImple Founder & CEO, attended this leading post‑trade industry conference to share insights on operational resilience, data standardisation and how interoperable SSI infrastructure can simplify complex settlement chains.',
    location: 'Stockholm Waterfront Congress Centre',
  },
  {
    date: '17/07/25',
    title:
      'The T+1 Transition: Priorities and Preparation for Accelerated Settlement in the UK and Europe',
    description:
      'SSImple and EquiLend hosted a joint webinar focused on how market participants can prepare for T+1 settlement. The session covered readiness priorities across people, processes and technology, with a particular emphasis on making SSI data reliable and real‑time.',
    location: 'Virtual Event',
  },
  {
    date: '10/07/25',
    title: 'Securities Finance Times Industry Excellence Awards',
    description:
      'Bill Meenaghan, SSImple Founder & CEO, attended the Securities Finance Times Industry Excellence Awards, recognising firms and individuals who are driving innovation across the securities finance ecosystem. SSImple’s participation reflects our commitment to raising the bar for post‑trade infrastructure.',
    location: "Plaisterers' Hall, London",
  },
  {
    date: '05/05/25 – 08/05/25',
    title: "SIFMA's Operations Conference & Exhibition 2025",
    description:
      "Keith Tippell, SSImple's Chief Commercial Officer, took part in this flagship operations event, joining conversations on settlement automation, operational resilience and how modern SSI infrastructure can help firms meet new regulatory and client expectations.",
    location: 'Grande Lakes Orlando, U.S.',
  },
];

export const Events: React.FC = () => {
  return (
    <section className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-obsidian">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-signal mb-3">
            Events
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-obsidian dark:text-white mb-4">
            Where we are sharing the future of settlement.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
            SSImple regularly participates in industry conferences, webinars and awards that
            focus on the operational challenges of T+1, automation of SSIs and the modernisation
            of post‑trade infrastructure. Explore recent and upcoming engagements below.
          </p>
        </header>

        <div className="space-y-8">
          {events.map((event) => (
            <article
              key={event.title + event.date}
              className="grid grid-cols-1 md:grid-cols-[140px,1fr,160px] gap-4 md:gap-8 items-start border-t border-slate-200 dark:border-white/10 pt-6"
            >
              <div className="text-sm font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                {event.date}
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-obsidian dark:text-white mb-2">
                  {event.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {event.description}
                </p>
              </div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-300 md:text-right">
                {event.location}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

