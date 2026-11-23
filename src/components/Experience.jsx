import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="space-y-6">
      <div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Experience
        </h2>
        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
          2019 — Present
        </span>
      </div>

      <div className="divide-y divide-zinc-200/80 dark:divide-zinc-800/80">
        {experience.map((item) => (
          <div key={item.id} className="py-5 first:pt-1 last:pb-1 space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-zinc-950 dark:text-zinc-50 tracking-tight">
                  {item.role} · <span className="text-zinc-600 dark:text-zinc-400 font-normal">{item.company}</span>
                </h3>
              </div>
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                {item.period} · {item.location}
              </div>
            </div>

            <ul className="space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {item.highlights.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-zinc-400 dark:text-zinc-600 select-none">–</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
