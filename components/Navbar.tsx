import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { useTheme } from './ThemeContext';
import { Link, useRouterState } from '@tanstack/react-router';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; to: string }[] = [
    { name: 'Protocol', to: '/protocol' },
    { name: 'Mandate', to: '/mandate' },
    { name: 'Infrastructure', to: '/infrastructure' },
    { name: 'Network', to: '/network' },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-charcoal/90 backdrop-blur-sm border-b border-slate-200 dark:border-white/10 transition-all duration-300`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center h-full gap-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.to;
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`h-full flex items-center text-xs font-mono font-medium uppercase tracking-widest transition-colors ${
                    isActive ? 'text-signal' : 'text-slate-600 dark:text-slate-400 hover:text-signal dark:hover:text-signal'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-obsidian dark:text-slate-400 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <Link 
              to="/"
              className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400 uppercase hover:text-obsidian dark:hover:text-white transition-colors"
            >
              Client Access
            </Link>
            <Button variant="primary" size="sm" onClick={scrollToContact}>
              Initialize
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 text-obsidian dark:text-white"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              className="p-2 text-obsidian dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-charcoal border-b border-slate-200 dark:border-white/10 md:hidden flex flex-col shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-mono font-medium text-obsidian dark:text-white uppercase py-4 px-6 border-b border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-left"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-sm font-mono font-medium text-obsidian dark:text-white uppercase py-4 px-6 border-b border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-left"
          >
            Client Access
          </Link>
          <div className="p-6">
            <Button className="w-full" onClick={() => {
              setIsMobileMenuOpen(false);
              scrollToContact();
            }}>
              Initialize Integration
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};