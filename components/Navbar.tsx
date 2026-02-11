import React, { useState } from 'react';
import { ASSETS } from '../constants';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { ViewState } from '../App';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, view: ViewState, href?: string) => {
    e.preventDefault();
    onNavigate(view);
    setIsMobileMenuOpen(false);
    
    // If it's the home page and has a hash, scroll to it after navigation
    if (view === 'home' && href && href.includes('#')) {
        setTimeout(() => {
            const id = href.split('#')[1];
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-500   transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <a href="#" onClick={(e) => handleLinkClick(e, 'home')} className="block w-32 relative z-50">
          <img
            src={isDarkMode ? ASSETS.logo.white : ASSETS.logo.black}
            alt="SSimple"
            className="w-full h-auto object-contain"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center h-full">
            <button
              onClick={() => onNavigate('solutions')}
              className={`h-full flex items-center px-6 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors border-l border-transparent hover:border-gray-500 dark:hover:border-white ${currentView === 'solutions' ? 'bg-black text-white dark:bg-white dark:text-black' : 'text-black dark:text-white'}`}
            >
              Solutions
            </button>
            <button
              onClick={() => onNavigate('how-it-works')}
              className={`h-full flex items-center px-6 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors border-l border-transparent hover:border-gray-500 dark:hover:border-white ${currentView === 'how-it-works' ? 'bg-black text-white dark:bg-white dark:text-black' : 'text-black dark:text-white'}`}
            >
              How It Works
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`h-full flex items-center px-6 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors border-l border-transparent hover:border-gray-500 dark:hover:border-white ${currentView === 'about' ? 'bg-black text-white dark:bg-white dark:text-black' : 'text-black dark:text-white'}`}
            >
              About
            </button>
            
            {/* Theme Toggle */}
            <button 
                onClick={toggleDarkMode}
                className="h-full flex items-center px-6 border-l border-transparent hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
                {isDarkMode ? (
                <Sun className="w-5 h-5 text-white" />
                ) : (
                <Moon className="w-5 h-5 text-black" />
                )}
            </button>

            {/* Desktop CTA */}
            <div className="h-full flex items-center ml-6">
                <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'home', '#contact')}
                className="flex items-center justify-center h-12 px-8 bg-brand-orange text-white text-sm font-bold uppercase tracking-widest hover:bg-black dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
                >
                Request Access
                </a>
            </div>
        </div>


        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-4">
             <button 
                onClick={toggleDarkMode}
                className="p-2 border border-gray-500   rounded-none"
            >
                {isDarkMode ? (
                <Sun className="w-5 h-5 text-white" />
                ) : (
                <Moon className="w-5 h-5 text-black" />
                )}
            </button>
            <button
            className="relative z-50 p-2 border border-gray-500  "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
            {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-black dark:text-white" />
            ) : (
                <Menu className="w-6 h-6 text-black dark:text-white" />
            )}
            </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white dark:bg-black z-40 flex flex-col pt-24 border-l border-gray-500   md:hidden animate-fade-in">
             <button
                onClick={() => { onNavigate('solutions'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left py-6 px-8 text-2xl font-serif font-bold text-black dark:text-white border-b border-gray-100 dark:border-gray-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                Solutions
              </button>
              <button
                onClick={() => { onNavigate('how-it-works'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left py-6 px-8 text-2xl font-serif font-bold text-black dark:text-white border-b border-gray-100 dark:border-gray-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                How It Works
              </button>
              <button
                onClick={() => { onNavigate('about'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left py-6 px-8 text-2xl font-serif font-bold text-black dark:text-white border-b border-gray-100 dark:border-gray-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                About
              </button>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'home', '#contact')}
              className="block py-6 px-8 text-2xl font-serif font-bold bg-brand-orange text-white hover:bg-black dark:hover:bg-white dark:hover:text-black"
            >
              Request Access
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;