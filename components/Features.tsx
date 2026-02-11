import React from 'react';
import { ASSETS } from '../constants';
import { Reveal } from './Reveal';

const FEATURES = [
  {
    id: 'automate',
    title: 'Intelligent Automation',
    description: 'Eliminate manual reconciliation with our event-driven architecture that syncs data across your entire stack in real-time.',
    icon: ASSETS.icons.automate.black,
    iconWhite: ASSETS.icons.automate.orange,
  },
  {
    id: 'comply',
    title: 'Adaptive Compliance',
    description: 'Stay ahead of regulatory changes with dynamic rule engines that automatically adjust to new jurisdictional requirements.',
    icon: ASSETS.icons.comply.black,
    iconWhite: ASSETS.icons.comply.orange,
  },
  {
    id: 'verify',
    title: 'Instant Verification',
    description: 'Secure, cryptographic proof of assets and transactions, ensuring complete transparency and auditability at any scale.',
    icon: ASSETS.icons.verify.black,
    iconWhite: ASSETS.icons.verify.orange,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="bg-white dark:bg-black border-b border-gray-500   transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Header Section */}
        <div className="lg:col-span-4 p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-500   bg-black dark:bg-white text-white dark:text-black flex flex-col justify-between transition-colors duration-300">
          <Reveal>
            <div>
                <span className="block text-brand-orange text-xs font-bold uppercase tracking-[0.2em] mb-8">
                    Capabilities
                </span>
                <h2 className="text-4xl lg:text-5xl font-serif font-bold leading-tight mb-8">
                INSTITUTIONAL <br/> GRADE <br/> INFRASTRUCTURE
                </h2>
                <p className="text-gray-300 dark:text-gray-600 font-sans leading-relaxed text-sm lg:text-base max-w-sm">
                Built for the demands of modern finance. We unify fragmented processes into a single, cohesive operating system with zero latency.
                </p>
            </div>
          </Reveal>
          <div className="mt-12">
             <div className="w-12 h-1 bg-brand-orange"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2">
          {FEATURES.map((feature, idx) => (
            <div 
                key={feature.id} 
                className={`p-12 lg:p-16 border-b border-gray-500   ${
                    idx % 2 === 0 ? 'md:border-r' : ''
                } hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group relative`}
            >
              <Reveal delay={idx * 100}>
                <div className="absolute top-6 right-6 text-xs font-mono text-gray-300 dark:text-gray-600">0{idx + 1}</div>
                
                <div className="w-12 h-12 mb-8 opacity-100 grayscale group-hover:grayscale-0 transition-all">
                    <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-contain dark:invert"
                    />
                </div>
                <h3 className="text-2xl font-serif font-bold text-black dark:text-white mb-6 group-hover:text-brand-orange transition-colors">
                    {feature.title}
                </h3>
                <p className="text-sm font-sans text-black dark:text-gray-300 leading-relaxed">
                    {feature.description}
                </p>
              </Reveal>
            </div>
          ))}
          
          {/* Empty filler block / CTA */}
          <div className="p-12 lg:p-16 border-b border-gray-500   flex items-center justify-center bg-gray-50 dark:bg-gray-900/50">
             <Reveal delay={300}>
                <div className="text-center">
                    <h4 className="text-xl font-serif font-bold mb-4 text-black dark:text-white">Explore API</h4>
                    <a href="#" className="inline-block border-b border-gray-500   text-black dark:text-white text-xs font-bold uppercase tracking-widest pb-1 hover:text-brand-orange hover:border-brand-orange dark:hover:text-brand-orange dark:hover:border-brand-orange transition-colors">
                        Read Documentation
                    </a>
                </div>
             </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;