import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="space-y-8">
      {/* Section Header */}
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
          Career Path
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Work Experience
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl font-light">
          Track record operating distributed AWS fleets, modernizing enterprise architectures, and driving reliability.
        </p>
      </div>

      {/* Experience items */}
      <div className="space-y-6">
        {experience.map((item) => (
          <div
            key={item.id}
            className="p-6 sm:p-8 rounded-xl card-surface card-hover space-y-4"
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-zinc-100 dark:border-zinc-800/80 pb-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-zinc-50 tracking-tight">
                  {item.role}
                </h3>
                <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {item.company}
                </div>
              </div>
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                {item.period} • {item.location}
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
              {item.highlights.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-zinc-400 dark:text-zinc-600 select-none mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {item.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-700/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}