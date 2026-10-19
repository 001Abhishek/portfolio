import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true; // Default to dark
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Tactile Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if typing in input or textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 't' || e.key === 'T') {
        setDarkMode((prev) => !prev);
      } else if (e.key === 'r' || e.key === 'R') {
        window.open(portfolioData.personalInfo.resumeUrl, '_blank');
      } else if (e.key === 'p' || e.key === 'P') {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 's' || e.key === 'S') {
        document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'e' || e.key === 'E') {
        document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 dark:bg-[#0b0c0e] dark:text-zinc-100 bg-tech-grid transition-colors duration-150">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 space-y-24">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />

      {/* Understated tactile shortcut indicator */}
      <aside aria-label="Keyboard shortcuts" className="hidden lg:flex fixed bottom-4 right-4 z-40 items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/80 backdrop-blur text-[11px] font-mono text-zinc-500 dark:text-zinc-400 select-none shadow-sm">
        <span>Hotkeys:</span>
        <kbd className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">T</kbd>
        <span>theme</span>
        <span className="text-zinc-300 dark:text-zinc-700">•</span>
        <kbd className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">P</kbd>
        <span>projects</span>
        <span className="text-zinc-300 dark:text-zinc-700">•</span>
        <kbd className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">R</kbd>
        <span>resume</span>
      </aside>
    </div>
  );
}
