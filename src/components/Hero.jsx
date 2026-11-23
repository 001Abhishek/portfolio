import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileDown, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personalInfo } = portfolioData;

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-8 pb-4">
      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/80 mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        <span>{personalInfo.role} @ {personalInfo.currentCompany}</span>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-4 leading-[1.15] max-w-2xl">
        {personalInfo.headline}
      </h1>

      <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-2xl mb-7">
        {personalInfo.subtitle}
      </p>

      <div className="flex flex-wrap items-center gap-2.5">
        <a
          href="#projects"
          onClick={(e) => scrollTo(e, '#projects')}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-mono font-medium hover:bg-zinc-800 dark:hover:bg-white transition-colors"
        >
          <span>Selected Work</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>

        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub</span>
          <ArrowUpRight className="w-3 h-3 opacity-60" />
        </a>

        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono transition-colors"
        >
          <Linkedin className="w-3.5 h-3.5" />
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3 h-3 opacity-60" />
        </a>

        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono transition-colors"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Email</span>
        </a>

        <a
          href={personalInfo.resumeUrl}
          download="AbhishekResume.pdf"
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono transition-colors"
        >
          <FileDown className="w-3.5 h-3.5" />
          <span>Resume</span>
        </a>
      </div>
    </section>
  );
}
