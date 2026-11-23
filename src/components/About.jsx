import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personalInfo } = portfolioData;

  return (
    <section id="about" className="space-y-5">
      <div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Background
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <p className="md:col-span-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {personalInfo.aboutBio}
        </p>

        <div className="space-y-1 md:border-l md:border-zinc-200 md:dark:border-zinc-800 md:pl-5">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Education
          </div>
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {personalInfo.education.degree}
          </div>
          <div className="text-xs text-zinc-600 dark:text-zinc-400">
            {personalInfo.education.institution} · {personalInfo.education.period}
          </div>
        </div>
      </div>
    </section>
  );
}
