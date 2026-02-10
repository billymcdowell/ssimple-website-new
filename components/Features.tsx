import React from 'react';
import { Clock, CheckSquare, Globe, Database, Shield, Cable } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './Animators';

const FeatureCard: React.FC<{ title: string; desc: string; icon: React.ReactNode; index: string }> = ({ title, desc, icon, index }) => (
  <div className="flex flex-col p-8 border-b border-r border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors h-full group">
    <div className="flex justify-between items-start mb-6">
      <div className="p-2.5 rounded-sm bg-slate-100 dark:bg-white/10 text-obsidian dark:text-white group-hover:bg-white dark:group-hover:bg-charcoal group-hover:shadow-sm transition-all duration-300">
        {icon}
      </div>
      <span className="font-mono text-xs text-slate-300 dark:text-slate-600">{index}</span>
    </div>
    <h3 className="text-xl font-serif font-bold text-obsidian dark:text-white mb-3">{title}</h3>
    <p className="font-mono text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-auto">{desc}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section className="bg-white dark:bg-charcoal border-b border-slate-200 dark:border-white/10 transition-colors duration-300" id="features">
      
      <div className="grid lg:grid-cols-4 border-b border-slate-200 dark:border-white/10">
        <div className="col-span-1 lg:col-span-1 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 transition-colors duration-300">
           <FadeIn>
             <div className="h-1 w-12 bg-signal mb-8"></div>
             <h2 className="font-serif text-3xl lg:text-4xl font-medium text-obsidian dark:text-white mb-6">
               Core <br/>Settlement Infrastructure
             </h2>
             <p className="font-mono text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
               Move beyond spreadsheets and ad‑hoc fixes. Deploy a governed system for managing Standing Settlement Instructions at scale.
             </p>
           </FadeIn>
        </div>
        
        <div className="col-span-1 lg:col-span-3">
          <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-3 h-full">
            <FadeInItem className="h-full">
              <FeatureCard 
                index="01"
                icon={<Clock size={20} strokeWidth={1.5} />}
                title="T+1 Mandate"
                desc="Accelerated settlement logic hardcoded into the core. Zero latency between trade and instruction."
              />
            </FadeInItem>
            <FadeInItem className="h-full">
              <FeatureCard 
                index="02"
                icon={<CheckSquare size={20} strokeWidth={1.5} />}
                title="FMSB Standard"
                desc="Strict adherence to Standards Board recommendations. Compliance is binary, not optional."
              />
            </FadeInItem>
            <FadeInItem className="h-full">
              <FeatureCard 
                index="03"
                icon={<Globe size={20} strokeWidth={1.5} />}
                title="Global Network"
                desc="Connected to all major custodians and settlement venues. A unified protocol for global markets."
              />
            </FadeInItem>
            <FadeInItem className="h-full">
              <FeatureCard 
                index="04"
                icon={<Database size={20} strokeWidth={1.5} />}
                title="Golden Source"
                desc="Single-tenant architecture ensuring data sovereignty. Convert disparate data into a unified schema."
              />
            </FadeInItem>
            <FadeInItem className="h-full">
              <FeatureCard 
                index="05"
                icon={<Shield size={20} strokeWidth={1.5} />}
                title="Risk Mitigation"
                desc="Algorithmic validation prevents erroneous instructions from entering the settlement chain."
              />
            </FadeInItem>
            <FadeInItem className="h-full">
               <FeatureCard 
                index="06"
                icon={<Cable size={20} strokeWidth={1.5} />}
                title="API Integration"
                desc="RESTful architecture for seamless connection to OMS/EMS and custodial portals."
              />
            </FadeInItem>
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
};