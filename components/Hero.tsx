import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { ArrowDownRight, ShieldCheck, Activity, CheckCircle2 } from 'lucide-react';
import { useNavigation } from './NavigationContext';
import { FadeIn } from './Animators';

export const Hero: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [settlementRate, setSettlementRate] = useState(99.98);
  const [activeBarIndex, setActiveBarIndex] = useState(6);

  // Simulate live market data
  useEffect(() => {
    const interval = setInterval(() => {
      // Fluctuate settlement rate slightly
      setSettlementRate(prev => {
        const change = (Math.random() - 0.5) * 0.01;
        const newVal = prev + change;
        return Math.min(Math.max(newVal, 99.95), 99.99); // Clamp between 99.95 and 99.99
      });

      // Randomize active chart bar visual
      setActiveBarIndex(Math.floor(Math.random() * 7));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-20 bg-paper dark:bg-charcoal border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="grid lg:grid-cols-2 min-h-[90vh]">
        
        {/* Content Column */}
        <div className="flex flex-col justify-center px-6 py-20 lg:px-12 lg:py-32 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/10 relative bg-white dark:bg-charcoal transition-colors duration-300">
          <div className="max-w-xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 border border-slate-200 dark:border-white/10 rounded-sm px-3 py-1.5 text-xs font-mono font-medium mb-8 uppercase tracking-widest bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300">
                <span className="w-2 h-2 rounded-full bg-signal animate-pulse"></span> T+1 Mandate Active
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-obsidian dark:text-white leading-[1.1] tracking-tight mb-8">
                The Standard <br/>
                Protocol for <span className="text-slate-500 dark:text-slate-400">Settlement.</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="font-mono text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-md">
                Establish a sovereign golden source for Standing Settlement Instructions. Eliminate operational liability. Enforce FMSB compliance.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" icon={<ArrowDownRight size={18} />} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
                  System Integration
                </Button>
                <Button variant="secondary" size="lg" onClick={() => navigateTo('infrastructure')}>
                  View Documentation
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="absolute bottom-0 left-0 w-full border-t border-slate-200 dark:border-white/10 p-6 flex justify-between items-center text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
             <FadeIn delay={0.6} direction="none"><span>v2.4.0 Stable</span></FadeIn>
             <FadeIn delay={0.6} direction="none"><span>LDN / NYC / TYO</span></FadeIn>
          </div>
        </div>

        {/* Visual Column - Refined Dashboard */}
        <div className="relative bg-slate-50/50 dark:bg-black/40 flex items-center justify-center p-8 lg:p-16 overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 bg-grid-paper dark:bg-grid-paper-dark opacity-60 dark:opacity-20"></div>
          
          <FadeIn delay={0.4} direction="up" className="relative w-full max-w-md">
            <div className="bg-white dark:bg-obsidian rounded-lg border border-slate-200 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 overflow-hidden transform transition-all hover:scale-[1.01] duration-500">
              {/* Window Header */}
              <div className="border-b border-slate-100 dark:border-white/5 bg-white dark:bg-obsidian p-4 flex justify-between items-center transition-colors duration-300">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-md bg-obsidian dark:bg-white text-white dark:text-obsidian flex items-center justify-center">
                      <Activity size={16} />
                   </div>
                   <div>
                      <div className="font-serif font-bold text-sm text-obsidian dark:text-white">Live Monitor</div>
                      <div className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        System Operational
                      </div>
                   </div>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-white/10"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-white/10"></div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-end justify-between mb-8">
                   <div>
                      <div className="text-xs font-mono text-slate-500 uppercase mb-1">Settlement Rate</div>
                      <div className="text-3xl font-serif font-medium text-obsidian dark:text-white tabular-nums">
                        {settlementRate.toFixed(2)}%
                      </div>
                   </div>
                   <div className="h-8 flex items-end gap-1">
                      {[40, 65, 50, 85, 70, 95, 80].map((h, i) => (
                         <div 
                           key={i} 
                           style={{ height: `${h}%`}} 
                           className={`w-2 rounded-sm transition-colors duration-300 ${i === activeBarIndex ? 'bg-signal' : 'bg-slate-200 dark:bg-white/10'}`}
                         ></div>
                      ))}
                   </div>
                </div>

                <div className="space-y-3">
                   <div className="flex items-center justify-between text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100 dark:border-white/5">
                      <span>Transaction ID</span>
                      <span>Status</span>
                   </div>
                   
                   {[
                      { id: "SSI-8921-10", status: "Matched", time: "10:42:01" },
                      { id: "SSI-8921-20", status: "Matched", time: "10:42:05" },
                      { id: "SSI-8921-30", status: "Pending", time: "10:42:12" }
                   ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 dark:border-white/5 last:border-0 group cursor-default">
                         <div className="flex flex-col">
                            <span className="font-mono text-xs text-obsidian dark:text-white group-hover:text-signal transition-colors">{item.id}</span>
                            <span className="text-[10px] text-slate-400 dark:text-slate-500">{item.time}</span>
                         </div>
                         <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium border ${item.status === 'Matched' ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30' : 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-900/30'}`}>
                            {item.status === 'Matched' ? <CheckCircle2 size={10} /> : <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>}
                            {item.status.toUpperCase()}
                         </div>
                      </div>
                   ))}
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-slate-500">
                  <div className="flex items-center gap-2">
                     <ShieldCheck size={14} className="text-slate-400" />
                     <span className="text-[10px] font-mono uppercase tracking-wide">FMSB Verified</span>
                  </div>
                  <div className="text-[10px] font-mono">SEC-15c6-1</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};