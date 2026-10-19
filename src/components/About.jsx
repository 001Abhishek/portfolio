import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personalInfo } = portfolioData;

  return (
    <section id="about" className="space-y-6">
      {/* Section Header */}
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
          Background
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          About Abhishek
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
          <p>{personalInfo.aboutBio}</p>
        </div>

        {/* Education */}
        <div className="p-4 rounded-xl card-surface space-y-1 self-start">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Education
          </div>
          <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            {personalInfo.education.degree}
          </div>
          <div className="text-xs text-zinc-600 dark:text-zinc-400">
            {personalInfo.education.institution} • {personalInfo.education.period}
          </div>
        </div>
      </div>
    </section>
  );
}