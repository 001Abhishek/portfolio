import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="space-y-6">
      {/* Section Header */}
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
          Technical Depth
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Skills & Competencies
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl font-light">
          Core competencies across AWS distributed architectures, typed backends, and reliable LLM pipelines.
        </p>
      </div>

      {/* Compact 2-column or 3-column index */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((group, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 rounded-xl card-surface space-y-2.5"
          >
            <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-900 dark:text-zinc-100">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item, iIdx) => (
                <span
                  key={iIdx}
                  className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Understated Principle Callout */}
      <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 text-xs font-mono text-zinc-600 dark:text-zinc-400">
        <strong className="text-zinc-900 dark:text-zinc-200">Core Principles:</strong> One retry owner per failure class • Bounded concurrency & memory caps • Fail-closed evaluations • Gradual canary shifting
      </div>
    </section>
  );
}
