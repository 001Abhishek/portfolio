import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillIndex } = portfolioData;

  return (
    <section id="skills" className="space-y-6">
      <div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Skills
        </h2>
        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
          Core Stack
        </span>
      </div>

      <dl className="divide-y divide-zinc-200/80 dark:divide-zinc-800/80">
        {skillIndex.map((row, idx) => (
          <div
            key={idx}
            className="py-3 first:pt-1 last:pb-1 grid grid-cols-1 sm:grid-cols-4 gap-1 sm:gap-4 items-baseline"
          >
            <dt className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {row.label}
            </dt>
            <dd className="sm:col-span-3 text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
