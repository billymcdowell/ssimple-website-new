import React from 'react';
import { Reveal } from './Reveal';
import { ArrowUpRight } from 'lucide-react';

const TEAM = [
  {
    name: "ALEXANDER VANE",
    role: "FOUNDER & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "SARAH CHEN",
    role: "CHIEF TECHNOLOGY OFFICER",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
  },
  {
    name: "MARCUS WEBER",
    role: "HEAD OF COMPLIANCE",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "ELENA ROSSI",
    role: "VP OF ENGINEERING",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  }
];

const JOBS = [
  {
    title: "Senior Rust Engineer",
    department: "ENGINEERING",
    location: "REMOTE / SF"
  },
  {
    title: "Compliance Officer",
    department: "LEGAL",
    location: "NEW YORK"
  },
  {
    title: "Enterprise Sales Lead",
    department: "GROWTH",
    location: "LONDON"
  },
  {
    title: "Product Designer",
    department: "PRODUCT",
    location: "BERLIN"
  }
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen pt-20 transition-colors duration-300">
      
      {/* 1. Company Section */}
      <section className="border-b border-gray-500  ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-gray-500   flex flex-col justify-center">
                 <Reveal>
                    <span className="font-mono text-xs tracking-widest uppercase mb-6 block text-brand-orange">Our Mission</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-black mb-8 leading-[0.9] text-black dark:text-white">
                        THE TRUST <br/> LAYER OF <br/> FINANCE
                    </h1>
                 </Reveal>
            </div>
            <div className="p-12 lg:p-24 flex flex-col justify-center bg-gray-50 dark:bg-zinc-900">
                <Reveal delay={200}>
                    <p className="text-xl md:text-2xl font-serif leading-relaxed text-black dark:text-white mb-8">
                        We exist to eliminate the friction of trust. In a world of fragmented ledgers and opaque processes, SSimple provides the single, immutable source of truth for institutional assets.
                    </p>
                    <p className="font-sans text-gray-600 dark:text-gray-400 max-w-md">
                        Founded in 2024, we are a team of engineers, cryptographers, and bankers building the rails for the next century of capital markets.
                    </p>
                </Reveal>
            </div>
        </div>
      </section>

      {/* 2. People Section */}
      <section className="border-b border-gray-500  ">
        <div className="bg-black text-white dark:bg-white dark:text-black p-12 border-b border-gray-500  ">
            <Reveal>
                <h2 className="text-4xl font-serif font-bold">LEADERSHIP</h2>
            </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, idx) => (
                <div key={idx} className="group border-b lg:border-b-0 border-gray-500   lg:border-r last:border-r-0 relative overflow-hidden">
                    <Reveal delay={idx * 100}>
                        <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-sm p-6 border-t border-gray-500   transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-bold font-serif text-lg text-black dark:text-white">{member.name}</h3>
                            <span className="text-xs font-mono uppercase tracking-widest text-brand-orange">{member.role}</span>
                        </div>
                    </Reveal>
                </div>
            ))}
        </div>
      </section>

      {/* 3. Careers Section */}
      <section className="bg-white dark:bg-black text-black dark:text-white pb-24">
        <div className="p-12 lg:p-24 max-w-5xl mx-auto">
            <Reveal>
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-gray-500   pb-6">
                    <h2 className="text-5xl font-serif font-black">OPEN POSITIONS</h2>
                    <span className="font-mono text-sm mb-2 md:mb-0">JOIN THE PROTOCOL</span>
                </div>
            </Reveal>

            <div className="space-y-0">
                {JOBS.map((job, idx) => (
                    <Reveal key={idx} delay={idx * 100}>
                        <div className="group flex flex-col md:flex-row items-center justify-between py-8 border-b border-gray-200 dark:border-zinc-800 hover:border-gray-500 dark:hover:border-white transition-colors cursor-pointer">
                            <div className="mb-4 md:mb-0 text-center md:text-left">
                                <h3 className="text-2xl font-bold font-serif mb-2 group-hover:text-brand-orange transition-colors">{job.title}</h3>
                                <div className="flex gap-4 justify-center md:justify-start">
                                    <span className="text-xs font-mono uppercase bg-gray-100 dark:bg-zinc-800 px-2 py-1">{job.department}</span>
                                    <span className="text-xs font-mono uppercase text-gray-500">{job.location}</span>
                                </div>
                            </div>
                            <button className="px-6 py-2 border border-gray-500   hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors uppercase text-xs font-bold tracking-widest flex items-center gap-2">
                                Apply <ArrowUpRight className="w-3 h-3"/>
                            </button>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;