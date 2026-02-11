import React from 'react';
import { Reveal } from './Reveal';
import { ArrowRight, Database, Shield, Zap, Globe, Lock, Cpu } from 'lucide-react';

const SOLUTIONS_DATA = [
  {
    title: "LIQUIDITY ENGINE",
    code: "LE-01",
    desc: "Real-time cross-border settlement harmonization.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "ASSET TOKENIZATION",
    code: "AT-04",
    desc: "Fractional ownership ledgers with cryptographic proofs.",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "KYC/AML MATRIX",
    code: "KA-99",
    desc: "Automated identity verification pipelines.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "SMART CONTRACTS",
    code: "SC-X2",
    desc: "Self-executing logic for complex derivative trades.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "ZERO KNOWLEDGE",
    code: "ZK-00",
    desc: "Privacy-preserving verification protocols.",
    icon: <Lock className="w-6 h-6" />
  },
  {
    title: "HIGH FREQUENCY",
    code: "HF-MAX",
    desc: "Sub-millisecond latency execution environments.",
    icon: <Zap className="w-6 h-6" />
  }
];

const SolutionsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-zinc-900 min-h-screen pt-20">
      {/* Header */}
      <section className="bg-brand-orange text-white py-24 px-6 md:px-12 border-b border-gray-500  ">
        <Reveal>
            <div className="max-w-7xl mx-auto">
                <span className="font-mono text-sm tracking-widest uppercase mb-4 block">System Architecture</span>
                <h1 className="text-6xl md:text-8xl font-serif font-black mb-8 leading-none">
                    MODULAR <br/> INTELLIGENCE
                </h1>
                <p className="max-w-xl text-xl font-sans opacity-90">
                    Our platform is composed of six interoperable cores designed for infinite scalability and absolute resilience.
                </p>
            </div>
        </Reveal>
      </section>

      {/* Unique Grid Layout - distinct from homepage */}
      <section className="max-w-[1600px] mx-auto p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {SOLUTIONS_DATA.map((item, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                    <div className="bg-white dark:bg-black p-8 h-96 flex flex-col justify-between border border-gray-200 dark:border-zinc-800 hover:border-gray-500 dark:hover:border-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] group cursor-pointer">
                        <div className="flex justify-between items-start">
                            <span className="font-mono text-xs text-brand-orange bg-brand-orange/10 px-2 py-1">
                                {item.code}
                            </span>
                            <div className="text-black dark:text-white group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-2xl font-bold font-sans uppercase mb-4 text-black dark:text-white group-hover:text-brand-orange transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono leading-relaxed">
                                {item.desc}
                            </p>
                        </div>

                        <div className="w-full h-px bg-gray-100 dark:bg-zinc-800 group-hover:bg-black dark:group-hover:bg-white transition-colors mt-6" />
                    </div>
                </Reveal>
            ))}
        </div>
      </section>

      {/* Bottom CTA Area */}
      <section className="bg-black dark:bg-white text-white dark:text-black py-24 px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Ready to deploy?</h2>
            <button className="px-12 py-4 border-2 border-white dark:border-gray-500 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors uppercase font-bold tracking-widest text-sm flex items-center gap-4 mx-auto">
                Access Documentation <ArrowRight className="w-4 h-4"/>
            </button>
          </Reveal>
      </section>
    </div>
  );
};

export default SolutionsPage;