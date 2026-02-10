import React from 'react';
import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Features } from './components/Features';
import { Solutions } from './components/Solutions';
import { Compliance } from './components/Compliance';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Campaign } from './components/Campaign';
import { Events } from './components/Events';

// Page Wrappers
const HomePage = () => (
  <>
    <Hero />
    <Partners />
    <Features />
    <Solutions />
    <Compliance />
    <CTA />
    <Campaign />
  </>
);

const ProtocolPage = () => (
  <div className="pt-20">
    <Solutions />
    <CTA />
  </div>
);

const MandatePage = () => (
  <div className="pt-20">
    <Compliance />
    <CTA />
  </div>
);

const InfrastructurePage = () => (
  <div className="pt-20">
    <Features />
    <CTA />
  </div>
);

const AboutPage = () => (
  <div className="pt-20">
    <About />
  </div>
);

const NetworkPage = () => (
  <div className="pt-20">
    <Partners />
    <CTA />
  </div>
);

const ContactPage = () => (
  <div className="pt-20">
    <Contact />
  </div>
);

const EventsPage = () => (
  <div className="pt-20">
    <Events />
  </div>
);

const RootLayout: React.FC = () => (
  <ThemeProvider>
    <div className="min-h-screen bg-white dark:bg-charcoal font-sans text-navy-900 overflow-x-hidden selection:bg-signal selection:text-white flex flex-col transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  </ThemeProvider>
);

const rootRoute = createRootRoute({
  component: RootLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const protocolRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/protocol',
  component: ProtocolPage,
});

const mandateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/mandate',
  component: MandatePage,
});

const infrastructureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/infrastructure',
  component: InfrastructurePage,
});

const networkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/network',
  component: NetworkPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const eventsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/events',
  component: EventsPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  protocolRoute,
  mandateRoute,
  infrastructureRoute,
  networkRoute,
  aboutRoute,
  contactRoute,
  eventsRoute,
]);

export const router = createRouter({
  routeTree,
  // Ensure links and routes include the GitHub Pages subpath,
  // which Vite exposes as import.meta.env.BASE_URL when built.
  basepath: import.meta.env.BASE_URL,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

