import React from 'react';
import { useNavigation } from './NavigationContext';

export const Logo: React.FC<{ theme?: 'light' | 'dark' | 'auto' }> = ({ theme = 'auto' }) => {
  const { navigateTo } = useNavigation();
  
  // If auto, we use dark: modifier classes. If explicit, we force colors.
  let containerBorderClass = "border-obsidian dark:border-white";
  let textColorClass = "text-obsidian dark:text-white";

  if (theme === 'light') {
    containerBorderClass = "border-obsidian";
    textColorClass = "text-obsidian";
  } else if (theme === 'dark') {
    containerBorderClass = "border-white";
    textColorClass = "text-white";
  }
  
  return (
    <div 
      onClick={() => navigateTo('home')} 
      className="flex items-center gap-2 select-none group cursor-pointer"
    >
      {/* Abstract Heraldic Square */}
      <div className={`w-8 h-8 flex items-center justify-center border transition-colors duration-300 ${containerBorderClass}`}>
        <div className="w-3 h-3 bg-signal"></div>
      </div>
      
      <div className={`font-serif font-bold text-2xl tracking-tighter transition-colors duration-300 ${textColorClass}`}>
        SSImple<span className="text-signal">.</span>
      </div>
    </div>
  );
};