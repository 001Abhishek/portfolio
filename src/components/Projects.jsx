import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Terminal, Layers, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ArchitectureVisualizer from './ArchitectureVisualizer';
import InteractiveCli from './InteractiveCli';
import ContractViewer from './ContractViewer';

const DEMO_ICONS = {
  visualizer: Layers,
  cli: Terminal,
  contract: Code2,
};

export default function Projects() {
  const { projects, alsoBuilt } = portfolioData;
  const [expandedId, setExpandedId] = useState(null);

  const toggleProjectDemo = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="space-y-8">
      <div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Selected Work
        </h2>
        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
          AWS Production Systems
        </span>
      </div>

      {/* Editorial row list instead of heavy stacked cards */}
      <div className="divide-y divide-zinc-200/80 dark:divide-zinc-800/80">
        {projects.map((project, idx) => {
          const isOpen = expandedId === project.id;
          const DemoIcon = project.demoType ? DEMO_ICONS[project.demoType] : null;

          return (
            <article key={project.id} className="py-5 first:pt-1 last:pb-1 space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-950 dark:text-zinc-50 tracking-tight">
                    {project.title}
                  </h3>
                </div>
                <span className="inline-flex self-start sm:self-auto text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400">
                  {project.metricHighlight}
                </span>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed sm:pl-6">
                {project.summary}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-2 sm:pl-6 pt-0.5">
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-500">
                  {project.stack.join(' · ')}
                </span>

                {project.demoType && DemoIcon && (
                  <button
                    onClick={() => toggleProjectDemo(project.id)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md border transition-colors ${
                      isOpen
                        ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 border-transparent font-medium'
                        : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                    }`}
                  >
                    <DemoIcon className="w-3 h-3" />
                    <span>{project.demoLabel}</span>
                    {isOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                )}
              </div>

              {/* Inline contextual interactive demo */}
              {isOpen && (
                <div className="sm:pl-6 pt-3 animate-fadeIn">
                  {project.demoType === 'visualizer' && <ArchitectureVisualizer />}
                  {project.demoType === 'cli' && <InteractiveCli />}
                  {project.demoType === 'contract' && <ContractViewer />}
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* Compact Also Built strip */}
      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Also Built
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {alsoBuilt.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-baseline justify-between gap-2">
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h4>
                <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 shrink-0">
                  {item.metric}
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
