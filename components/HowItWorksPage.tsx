import React from 'react';
import { Reveal } from './Reveal';

const STEPS_DETAIL = [
  {
    phase: "PHASE 01",
    title: "Ingestion & Normalization",
    desc: "Raw data is ingested via secure API endpoints. Our proprietary engine normalizes disparate formats (JSON, XML, CSV, SWIFT) into a unified internal schema instantly.",
  },
  {
    phase: "PHASE 02",
    title: "Algorithmic Validation",
    desc: "140+ concurrent checks run against the normalized data. Any anomalies trigger automated quarantine protocols while valid data flows to the ledger.",
  },
  {
    phase: "PHASE 03",
    title: "Immutable Recording",
    desc: "Validated transactions are hashed and written to the private permissioned ledger, creating an audit trail that cannot be altered retroactively.",
  },
  {
    phase: "PHASE 04",
    title: "Reconciliation & Output",
    desc: "Final states are reconciled with external banking partners. Confirmation receipts are generated and pushed to your dashboard in real-time.",
  }
];

const HowItWorksPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen pt-20">
       <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
            
            {/* Left Sticky Title Area */}
            <div className="lg:col-span-5 bg-gray-100 dark:bg-zinc-900 p-12 lg:p-24 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center border-r border-gray-500  ">
                <Reveal>
                    <div className="w-20 h-2 bg-black dark:bg-white mb-8"></div>
                    <h1 className="text-5xl md:text-7xl font-serif font-black text-black dark:text-white leading-tight mb-8">
                        OPERATIONAL<br/> PROTOCOL
                    </h1>
                    <p className="text-lg font-sans text-gray-600 dark:text-gray-300">
                        A deep dive into the linear execution model that guarantees zero-error transaction processing.
                    </p>
                </Reveal>
            </div>

            {/* Right Scrollable Timeline Area */}
            <div className="lg:col-span-7 bg-white dark:bg-black">
                {STEPS_DETAIL.map((step, idx) => (
                    <div key={idx} className="group min-h-[50vh] flex flex-col justify-center p-12 lg:p-24 border-b border-gray-500   relative overflow-hidden">
                        <Reveal delay={200}>
                            <span className="absolute -right-4 -top-10 text-[12rem] font-serif font-black text-gray-50 dark:text-zinc-900 z-0 select-none group-hover:text-gray-100 dark:group-hover:text-zinc-800 transition-colors">
                                {idx + 1}
                            </span>
                            
                            <div className="relative z-10">
                                <span className="inline-block py-1 px-3 border border-gray-500   rounded-full text-xs font-bold uppercase tracking-widest mb-6 text-black dark:text-white">
                                    {step.phase}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold font-sans mb-6 text-black dark:text-white">
                                    {step.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg max-w-md font-serif">
                                    {step.desc}
                                </p>
                            </div>
                        </Reveal>
                    </div>
                ))}
                
                <div className="p-24 bg-brand-orange">
                    <Reveal>
                        <div className="text-center">
                            <h3 className="text-white text-2xl font-bold font-serif mb-6">Start the Protocol</h3>
                            <button className="bg-black text-white px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-black transition-colors">
                                Initialize
                            </button>
                        </div>
                    </Reveal>
                </div>
            </div>
       </div>
    </div>
  );
};

export default HowItWorksPage;