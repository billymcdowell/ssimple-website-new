import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { Button } from './Button';
import { FadeIn, FadeInStagger, FadeInItem } from './Animators';

const SolutionRow: React.FC<{ 
  title: string; 
  role: string;
  description: string; 
  metrics: string;
}> = ({ title, role, description, metrics }) => (
  <div className="grid md:grid-cols-12 gap-6 p-8 border-b border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group">
    <div className="md:col-span-3">
       <span className="font-mono text-xs uppercase tracking-widest text-signal mb-2 block">{role}</span>
       <h3 className="text-2xl font-serif font-bold text-obsidian dark:text-white">{title}</h3>
    </div>
    <div className="md:col-span-5">
      <p className="font-mono text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
    <div className="md:col-span-2 flex items-center">
       <div className="text-xs font-mono border-l-2 border-slate-200 dark:border-white/10 pl-3">
          <div className="uppercase text-slate-400 dark:text-slate-500 mb-1">Impact</div>
          <div className="font-bold text-obsidian dark:text-white">{metrics}</div>
       </div>
    </div>
    <div className="md:col-span-2 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity">
       <Button variant="outline" size="sm" icon={<ArrowDownRight size={14} />}>Details</Button>
    </div>
  </div>
);

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="bg-white dark:bg-charcoal border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="border-b border-slate-200 dark:border-white/10 p-8 lg:p-12 bg-paper dark:bg-charcoal transition-colors duration-300">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-obsidian dark:text-white mb-6">
              Role‑specific <span className="text-slate-400 dark:text-slate-500">implementations.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-mono text-sm text-slate-500 dark:text-slate-400 max-w-xl">
               Configured for each participant in the settlement lifecycle so every desk uses the same protocol.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="flex flex-col">
        <FadeIn delay={0.2}>
          <SolutionRow 
            role="Buy Side"
            title="Asset Managers"
            description="Centralize SSIs so trading and operations share the same data, removing spreadsheet maintenance and static‑data trade breaks."
            metrics="100% Audit Trail"
          />
        </FadeIn>
        <FadeIn delay={0.3}>
          <SolutionRow 
            role="Servicing"
            title="Global Custodians"
            description="Distribute SSI updates instantly across your client network with automated notifications."
            metrics="0ms Latency"
          />
        </FadeIn>
        <FadeIn delay={0.4}>
          <SolutionRow 
            role="Sell Side"
            title="Broker-Dealers"
            description="Use pre‑trade validation APIs to verify counterparty SSIs before execution and cut repair cycles."
            metrics="-40% Fail Rate"
          />
        </FadeIn>
      </div>
      
      <div className="grid lg:grid-cols-2 border-b border-slate-200 dark:border-white/10">
         <div className="p-12 bg-obsidian text-white border-r border-white/10">
            <FadeIn delay={0.2} direction="up">
              <div className="font-mono text-xs text-signal mb-4 uppercase">Developer Resources</div>
              <h3 className="font-serif text-3xl mb-6">API access</h3>
              <p className="font-mono text-sm text-white/70 mb-8 leading-relaxed">
                 Connect directly to the settlement engine via RESTful endpoints to validate instructions and pull real‑time status.
              </p>
              <div className="font-mono text-xs p-6 bg-white/5 border border-white/10 rounded-sm mb-8">
                 <span className="text-purple-400">POST</span> /v1/settlement/validate<br/>
                 Authorization: Bearer <span className="text-white">sk_live_...</span><br/><br/>
                 <span className="text-emerald-400">{'{ "bic": "CITIGB2L", "ccy": "USD" }'}</span>
              </div>
              <Button variant="secondary" className="border-white/20 hover:bg-white hover:text-obsidian text-white bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-obsidian">View API Docs</Button>
            </FadeIn>
         </div>
         <div className="p-12 bg-slate-50 dark:bg-white/5 flex items-center justify-center transition-colors duration-300">
            <FadeIn delay={0.4} className="w-full max-w-md">
              <div className="border border-slate-200 dark:border-white/10 p-8 bg-white dark:bg-charcoal shadow-lg shadow-slate-200/50 dark:shadow-black/50 rounded-lg transition-colors duration-300">
                 <h4 className="font-serif text-xl font-bold mb-4 text-obsidian dark:text-white">Migration Assistance</h4>
                 <p className="font-mono text-sm text-slate-500 dark:text-slate-400 mb-6">
                    Legacy system data extraction and sanitization services included with Enterprise licenses.
                 </p>
                 <ul className="space-y-3 font-mono text-xs border-t border-slate-100 dark:border-white/10 pt-4 text-slate-600 dark:text-slate-400">
                    <li className="flex justify-between">
                       <span>Data Mapping</span>
                       <span className="font-bold text-signal">INCLUDED</span>
                    </li>
                    <li className="flex justify-between">
                       <span>Schema Validation</span>
                       <span className="font-bold text-signal">INCLUDED</span>
                    </li>
                    <li className="flex justify-between">
                       <span>Parallel Run</span>
                       <span className="font-bold text-signal">INCLUDED</span>
                    </li>
                 </ul>
              </div>
            </FadeIn>
         </div>
      </div>
    </section>
  );
};