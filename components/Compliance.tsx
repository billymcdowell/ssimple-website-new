import React from 'react';
import { ShieldCheck, Scale, FileSignature, Lock } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './Animators';

export const Compliance: React.FC = () => {
  return (
    <section id="compliance" className="bg-obsidian text-white py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="inline-block border border-white/20 px-3 py-1 text-xs font-mono mb-8 uppercase text-white/60">
                 Regulatory Framework
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 leading-tight">
                Liability <span className="text-signal">Nullified.</span><br/>
                Compliance <span className="font-bold">Enforced.</span>
              </h2>
              <p className="font-mono text-sm text-white/60 leading-relaxed mb-12">
                The regulatory landscape is binary: compliant or liable. SSImple codifies the rules of the SEC, FMSB, and CSDR into the logic of the platform.
              </p>
            </FadeIn>
            
            <FadeInStagger className="space-y-8">
              <FadeInItem className="flex gap-6 border-l border-signal pl-6">
                <Scale className="text-white shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-xl mb-2">T+1 Mandate</h4>
                  <p className="font-mono text-xs text-white/50">
                    SEC Rule 15c6-1 compliant. Automated workflows designed to meet the compressed settlement cycle without manual intervention.
                  </p>
                </div>
              </FadeInItem>

              <FadeInItem className="flex gap-6 border-l border-white/20 pl-6">
                <FileSignature className="text-white shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-xl mb-2">FMSB Standard</h4>
                  <p className="font-mono text-xs text-white/50">
                    Hardcoded adherence to the Recommendation for Standing Settlement Instructions.
                  </p>
                </div>
              </FadeInItem>
            </FadeInStagger>
          </div>

          <div className="lg:col-span-7">
            {/* The Manifesto/List */}
            <FadeIn delay={0.2} className="bg-white/5 border border-white/10 p-8 lg:p-12">
               <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-white/40">Compliance Manifest</span>
                  <ShieldCheck className="text-signal" size={20} />
               </div>

               <FadeInStagger faster className="space-y-0">
                  {[
                    { code: "REG-01", name: "SEC Rule 15c6-1 (T+1)", status: "COMPLIANT" },
                    { code: "REG-02", name: "FMSB SSI Standard", status: "COMPLIANT" },
                    { code: "REG-03", name: "CSDR Discipline", status: "COMPLIANT" },
                    { code: "ISO-22", name: "ISO 20022 Migration", status: "READY" },
                    { code: "SEC-01", name: "SOC 2 Type II", status: "AUDITED" }
                  ].map((item, i) => (
                    <FadeInItem key={i} className="flex items-center justify-between py-4 border-b border-white/10 font-mono text-sm group cursor-default hover:bg-white/5 transition-colors px-2 -mx-2 rounded-sm">
                       <div className="flex items-center gap-4">
                          <span className="text-white/30 text-xs">{item.code}</span>
                          <span className="group-hover:text-white transition-colors text-white/90">{item.name}</span>
                       </div>
                       <div className="flex items-center gap-2 text-signal text-xs">
                          <div className="w-1.5 h-1.5 bg-signal"></div>
                          {item.status}
                       </div>
                    </FadeInItem>
                  ))}
               </FadeInStagger>
               
               <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-4">
                  <Lock size={16} className="text-white/40 mt-1" />
                  <p className="font-mono text-xs text-white/40 leading-relaxed">
                     All data is encrypted at rest and in transit using AES-256 standards. Ledger-based audit trails provide immutable history for all instruction changes.
                  </p>
               </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};