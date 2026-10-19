import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="space-y-8">
      {/* Section Header */}
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
          Technical Depth
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Skills & Competencies
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl font-light">
          Architectural paradigms, AWS services, backend concurrency controls, and operational patterns applied in production.
        </p>
      </div>

      {/* Grid of categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((group, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl card-surface card-hover flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="border-b border-zinc-100 dark:border-zinc-800 pb-3 mb-4">
                <h3 className="text-base font-bold text-zinc-950 dark:text-zinc-50 tracking-tight">
                  {group.category}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-light">
                  {group.summary}
                </p>
              </div>

              <div className="space-y-3.5">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="text-xs">
                    <span className="font-mono font-medium text-zinc-900 dark:text-zinc-200">
                      {skill.name}:
                    </span>{' '}
                    <span className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                      {skill.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Philosophy Callout */}
      <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
          Operational Principles
        </div>
        <div className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
          One retry owner per failure class • Bounded concurrency & memory caps • Fail-closed evaluations • Gradual traffic shifting with auto-rollback
        </div>
      </div>
    </section>
  );
}
