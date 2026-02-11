import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Reveal } from './Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-brand-black dark:bg-white text-white dark:text-black border-b border-gray-500   transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Text Side */}
        <div className="p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-gray-800 dark:border-gray-200 flex flex-col justify-center">
            <Reveal>
                <div className="w-12 h-1 bg-brand-orange mb-12"></div>
                <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-none">
                    READY TO <br />
                    SIMPLIFY?
                </h2>
                <p className="text-gray-400 dark:text-gray-600 text-lg mb-12 max-w-md font-sans">
                    Join the institutions that are already redefining their operational efficiency with SSimple.
                </p>
                <ul className="space-y-4 font-mono text-sm tracking-wide text-gray-300 dark:text-gray-600">
                    <li className="flex items-center">
                        <span className="w-2 h-2 bg-brand-orange mr-4"></span>
                        ENTERPRISE-GRADE SECURITY
                    </li>
                    <li className="flex items-center">
                        <span className="w-2 h-2 bg-brand-orange mr-4"></span>
                        24/7 DEDICATED SUPPORT
                    </li>
                    <li className="flex items-center">
                        <span className="w-2 h-2 bg-brand-orange mr-4"></span>
                        CUSTOM INTEGRATION ROADMAP
                    </li>
                </ul>
            </Reveal>
        </div>

        {/* Form Side */}
        <div className="p-12 lg:p-24 bg-white dark:bg-black text-black dark:text-white flex flex-col justify-center transition-colors duration-300">
            <Reveal delay={200}>
                <form className="max-w-md w-full mx-auto space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest mb-4">Work Email</label>
                        <input 
                        type="email" 
                        className="w-full bg-transparent border-b-2 border-gray-500   py-4 text-xl font-serif placeholder-gray-300 dark:placeholder-gray-700 focus:outline-none focus:border-brand-orange transition-colors"
                        placeholder="name@company.com"
                        />
                    </div>
                    
                    <button type="submit" className="w-full py-6 bg-brand-orange text-white text-sm font-bold uppercase tracking-widest hover:bg-black dark:hover:bg-white dark:hover:text-black transition-colors flex items-center justify-center group">
                        Schedule Demo
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="text-center border-t border-gray-100 dark:border-gray-800 pt-8 mt-8">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-4">Alternative Method</span>
                        <button className="text-sm font-bold border border-gray-500   px-6 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors inline-flex items-center uppercase tracking-wider">
                        <Calendar className="w-4 h-4 mr-2" /> Book via Calendly
                        </button>
                    </div>
                </form>
            </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;