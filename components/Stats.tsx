import React from 'react';
import { CLIENT_LOGOS } from '../constants';
import { Reveal } from './Reveal';

const Stats: React.FC = () => {
  return (
    <section className="bg-white dark:bg-black border-b border-gray-500   transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-500   border-b border-gray-500  ">
         {/* Title Block */}
        <div className="p-12 flex items-center justify-center md:justify-start bg-black dark:bg-white text-white dark:text-black transition-colors duration-300">
            <Reveal>
                <h3 className="text-2xl font-serif font-bold leading-tight">
                    TRUSTED BY <br/>
                    MARKET LEADERS
                </h3>
            </Reveal>
        </div>

        {/* Logos */}
        <div className="col-span-1 md:col-span-3 p-12 flex flex-wrap items-center justify-around gap-8 bg-white dark:bg-black transition-colors duration-300">
            {CLIENT_LOGOS.map((client, idx) => (
             <Reveal key={client} delay={idx * 100}>
                <div className="text-xl font-serif font-bold text-black dark:text-white uppercase transition-colors duration-300">
                {client}
                </div>
             </Reveal>
           ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-500  ">
          <div className="p-12 md:p-16 text-center group hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            <Reveal>
                <div className="text-6xl md:text-7xl font-serif font-black text-black dark:text-white mb-4 group-hover:text-brand-orange transition-colors">$50B+</div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-black dark:text-white">Assets Verified</div>
            </Reveal>
          </div>
          <div className="p-12 md:p-16 text-center group hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            <Reveal delay={200}>
                <div className="text-6xl md:text-7xl font-serif font-black text-black dark:text-white mb-4 group-hover:text-brand-orange transition-colors">99.9%</div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-black dark:text-white">Uptime Reliability</div>
            </Reveal>
          </div>
          <div className="p-12 md:p-16 text-center group hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            <Reveal delay={400}>
                <div className="text-6xl md:text-7xl font-serif font-black text-black dark:text-white mb-4 group-hover:text-brand-orange transition-colors">2x</div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-black dark:text-white">Efficiency Gain</div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;