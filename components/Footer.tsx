import React from 'react';
import { ASSETS } from '../constants';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-500   border-b border-gray-500  ">
        {/* Brand Column */}
        <div className="p-12 flex flex-col justify-between min-h-[300px]">
          <img src={ASSETS.logo.black} alt="SSimple" className="h-6 w-auto self-start dark:invert" />
          <p className="text-xs font-bold uppercase tracking-widest text-black dark:text-white mt-auto">
            The institutional standard for automated compliance.
          </p>
        </div>
        
        {/* Platform Column */}
        <div className="p-12 text-black dark:text-white">
            <h4 className="font-serif font-bold text-xl mb-8">Platform</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
              <li><a href="#" className="hover:text-brand-orange transition-colors block py-1">Automation</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors block py-1">Compliance</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors block py-1">Verification</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors block py-1">API Docs</a></li>
            </ul>
        </div>

        {/* Company Column */}
        <div className="p-12 text-black dark:text-white">
            <h4 className="font-serif font-bold text-xl mb-8">Company</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
              <li><a href="#" className="hover:text-brand-orange transition-colors block py-1">About Us</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors block py-1">Careers</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors block py-1">Contact</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors block py-1">Press</a></li>
            </ul>
        </div>

        {/* Connect Column */}
        <div className="p-12 flex flex-col justify-between text-black dark:text-white">
             <div>
                <h4 className="font-serif font-bold text-xl mb-8">Connect</h4>
                <div className="flex space-x-6">
                <a href="#" className="hover:text-brand-orange transition-colors">
                    <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-brand-orange transition-colors">
                    <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-brand-orange transition-colors">
                    <Github className="w-6 h-6" />
                </a>
                </div>
            </div>
            <div className="mt-auto pt-12">
                <p className="text-xs font-mono text-gray-400">
                    SAN FRANCISCO, CA <br/>
                    EST. 2024
                </p>
            </div>
        </div>
      </div>

      <div className="p-6 flex flex-col md:flex-row justify-between items-center text-xs font-mono uppercase text-gray-500 bg-white dark:bg-black dark:text-gray-400 transition-colors duration-300">
        <p>&copy; {new Date().getFullYear()} SSimple Inc. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Security</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;