import React from 'react';
import { Link } from '@tanstack/react-router';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian text-white border-t border-slate-200" id="footer">
      <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10 border-b border-white/10">
        
        {/* Brand Column */}
        <div className="p-12 lg:col-span-1">
          <Logo theme="light" />
          <p className="mt-8 font-mono text-xs text-white/50 leading-relaxed uppercase tracking-wide">
            SSImple Ltd.<br/>
            London, United Kingdom<br/>
            Reg: 10293847
          </p>
        </div>

        {/* Links Grid */}
        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 divide-x divide-white/10">
          <div className="p-12">
            <h4 className="font-mono text-xs text-signal uppercase tracking-widest mb-6">System</h4>
            <ul className="space-y-4 font-mono text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Protocol</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div className="p-12">
            <h4 className="font-mono text-xs text-signal uppercase tracking-widest mb-6">Corporate</h4>
            <ul className="space-y-4 font-mono text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Governance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li>
                <Link 
                  to="/contact" 
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="p-12 hidden md:block">
            <h4 className="font-mono text-xs text-signal uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 font-mono text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SLA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/30 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} SSImple Ltd. All Systems Operational.</p>
        <p>Legacy as a Service.</p>
      </div>
    </footer>
  );
};