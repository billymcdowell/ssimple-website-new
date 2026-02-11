import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const STEPS = [
  {
    number: '01',
    title: 'Connect',
    description: 'Integrate your existing data sources via our secure, unified API gateway.'
  },
  {
    number: '02',
    title: 'Configure',
    description: 'Define your compliance rules and workflow logic using our visual engine.'
  },
  {
    number: '03',
    title: 'Deploy',
    description: 'Launch automated processes that scale instantly with your operational needs.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white dark:bg-black text-black dark:text-white border-b border-gray-500   transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
        
        {/* Side Label */}
        <div className="hidden lg:flex lg:col-span-1 border-r border-gray-500   items-center justify-center">
            <span className="writing-vertical-rl text-xs font-bold uppercase tracking-[0.3em] rotate-90 text-black dark:text-white">
                Integration Protocol
            </span>
        </div>

        <div className="lg:col-span-11">
             <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                {STEPS.map((step, index) => (
                    <div key={step.number} className={`
                        relative p-12 lg:p-16 flex flex-col justify-between border-b md:border-b-0 border-gray-500  
                        ${index !== STEPS.length - 1 ? 'md:border-r' : ''}
                        hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 group
                    `}>
                        <Reveal delay={index * 200}>
                            <div>
                                <div className="text-8xl font-serif font-black text-gray-100 dark:text-gray-900 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors mb-8 -ml-2">
                                    {step.number}
                                </div>
                                <h3 className="text-3xl font-serif font-bold mb-6">
                                    {step.title}
                                </h3>
                                <p className="text-sm font-sans leading-relaxed opacity-80 max-w-xs">
                                    {step.description}
                                </p>
                            </div>

                            <div className="mt-12">
                                <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-brand-orange" />
                            </div>
                        </Reveal>
                    </div>
                ))}
             </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;