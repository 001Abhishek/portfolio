import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects, alsoBuilt } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Distributed & Serverless',
    'Resilience & Workflows',
    'Data & Storage',
    'Delivery & Safety'
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="space-y-8">
      {/* Section Header */}
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
          Architecture & Scale
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Selected Projects
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl font-light">
          Production systems engineered for high throughput, predictable failure domains, and safe continuous deployment on AWS.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-1.5 border-b border-zinc-200 dark:border-zinc-800 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
              activeCategory === cat
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Projects List / Cards */}
      <div className="space-y-6">
        {filteredProjects.map((project, idx) => (
          <article
            key={project.id}
            className="p-6 sm:p-8 rounded-xl card-surface card-hover space-y-5"
          >
            {/* Title & Metric Highlight */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800/60 pb-4">
              <div>
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mr-2">0{idx + 1}.</span>
                <h3 className="inline text-lg sm:text-xl font-bold text-zinc-950 dark:text-zinc-50 tracking-tight">
                  {project.title}
                </h3>
              </div>
              <span className="inline-flex self-start sm:self-auto px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                {project.metricHighlight}
              </span>
            </div>

            {/* Problem */}
            <div className="text-sm">
              <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-1">
                Problem
              </span>
              <p className="text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Role & Solution */}
            <div className="text-sm">
              <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-1">
                Role & Architecture
              </span>
              <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed">
                {project.role}
              </p>
            </div>

            {/* Impact */}
            <div className="text-sm">
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                Impact
              </span>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
                {project.impact}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-700/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Also Built */}
      <div className="pt-8">
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
          Additional Initiatives
        </div>
        <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-4">
          Also Built
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {alsoBuilt.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl card-surface card-hover flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                    {item.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                    {item.metric}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-1.5 py-0.5 text-[10px] font-mono rounded text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
