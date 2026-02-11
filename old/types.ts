import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Partner {
  name: string;
  logo: string; // URL placeholder
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}
