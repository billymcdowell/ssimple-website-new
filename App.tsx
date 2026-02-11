import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CEOQuote from './components/CEOQuote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SolutionsPage from './components/SolutionsPage';
import HowItWorksPage from './components/HowItWorksPage';
import AboutPage from './components/AboutPage';

export type ViewState = 'home' | 'solutions' | 'how-it-works' | 'about';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('home');

  useEffect(() => {
    // Trigger the fade-in animation after mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'solutions':
        return <SolutionsPage />;
      case 'how-it-works':
        return <HowItWorksPage />;
      case 'about':
        return <AboutPage />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Stats />
            <Features />
            <CEOQuote />
            <HowItWorks />
            <Testimonials />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className={`min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar 
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode} 
            currentView={currentView}
            onNavigate={handleNavigate}
        />
        <main className="flex-grow">
            {renderContent()}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;