import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-mono font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-obsidian dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-obsidian disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide border rounded-sm";
  
  const variants = {
    primary: "bg-obsidian border-obsidian text-white hover:bg-signal hover:border-signal hover:text-white shadow-sm dark:bg-white dark:border-white dark:text-obsidian dark:hover:bg-signal dark:hover:border-signal dark:hover:text-white",
    secondary: "bg-white border-slate-200 text-obsidian hover:border-obsidian hover:text-obsidian shadow-sm dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:border-white dark:hover:bg-white/10",
    outline: "bg-transparent border-slate-200 text-obsidian hover:border-obsidian hover:text-obsidian dark:border-white/20 dark:text-white dark:hover:border-white",
    ghost: "border-transparent text-obsidian hover:bg-slate-100 dark:text-white dark:hover:bg-white/10"
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-2 h-9",
    md: "text-sm px-6 py-3 gap-3 h-12",
    lg: "text-sm px-8 py-4 gap-4 h-14"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};