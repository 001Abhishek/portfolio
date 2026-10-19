import React from 'react';
import { ChevronUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white tracking-tight">
              {personalInfo.name}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Software Engineer • Java, Spring Boot, React & Cloud
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 text-slate-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-indigo-400 hover:bg-slate-800 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg hover:text-cyan-400 hover:bg-slate-800 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl glass-panel border border-slate-800 hover:border-indigo-500/50 text-slate-400 hover:text-white text-xs transition-all"
            title="Scroll to Top"
          >
            <span>Back to top</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Abhishek Pathania. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Modernized with React 18, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}