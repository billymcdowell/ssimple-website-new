import React from 'react';
import { Reveal } from './Reveal';

const FEEDBACK = [
  {
    quote: "SSimple replaced three legacy systems and reduced our settlement times by 94%. The ROI was evident within the first quarter of deployment.",
    author: "JONATHAN REED",
    role: "CIO, STERLING CAPITAL",
    company: "STERLING"
  },
  {
    quote: "The regulatory compliance engine is a masterpiece. It adapts to jurisdictional changes faster than our legal team can draft memos.",
    author: "AMANDA WU",
    role: "HEAD OF OPS, APEX GLOBAL",
    company: "APEX"
  },
  {
    quote: "Finally, infrastructure that feels like modern software. No more clunky interfaces or overnight batch processing. Just pure, real-time data.",
    author: "DAVID VANCE",
    role: "VP TRADING, OMEGA CORP",
    company: "OMEGA"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white dark:bg-black border-b border-gray-500   transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Header */}
          <div className="lg:col-span-3 bg-black dark:bg-white text-white dark:text-black p-12 lg:p-16 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-500  ">
              <Reveal>
                <h2 className="text-4xl font-serif font-black leading-tight text-center lg:text-left">
                    CLIENT <br/> INTELLIGENCE
                </h2>
              </Reveal>
          </div>

          {/* Testimonials Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-500  ">
              {FEEDBACK.map((item, idx) => (
                  <div key={idx} className="p-12 flex flex-col justify-between hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors">
                      <Reveal delay={idx * 150}>
                        <div className="mb-8">
                            <span className="text-4xl font-serif text-brand-orange leading-none">“</span>
                            <p className="text-lg font-serif italic leading-relaxed text-black dark:text-white mt-[-1rem] pl-4">
                                {item.quote}
                            </p>
                        </div>
                        
                        <div className="mt-auto border-t border-gray-200 dark:border-zinc-800 pt-6">
                            <p className="text-xs font-bold uppercase tracking-widest text-black dark:text-white mb-1">
                                {item.author}
                            </p>
                            <p className="text-[10px] font-mono uppercase text-gray-500 dark:text-gray-400">
                                {item.role}
                            </p>
                        </div>
                      </Reveal>
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default Testimonials;