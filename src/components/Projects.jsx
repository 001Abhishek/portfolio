import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Terminal, Layers, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ArchitectureVisualizer from './ArchitectureVisualizer';
import InteractiveCli from './InteractiveCli';
import ContractViewer from './ContractViewer';

export default function Projects() {
  const { projects, alsoBuilt } = portfolioData;
  const [activeTool, setActiveTool] = useState(null); // null | 'visualizer' | 'cli' | 'contract'

  const toggleTool = (toolName) => {
    setActiveTool((prev) => (prev === toolName ? null : toolName));
  };

  return (
    <section id="projects" className="space-y-8">
      {/* Section Header */}
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
          Production Systems
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Selected Projects
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl font-light">
          Architecture, scale, failure recovery, and safe delivery on AWS.
        </p>
      </div>

      {/* Projects List - Lean, high-density editorial format */}
      <div className="space-y-4">
        {projects.map((project, idx) => (
          <article
            key={project.id}
            className="p-5 sm:p-6 rounded-xl card-surface card-hover space-y-3"
          >
            {/* Header: Title & Metric */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
              <div>
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mr-2">0{idx + 1}.</span>
                <h3 className="inline text-base sm:text-lg font-bold text-zinc-950 dark:text-zinc-50 tracking-tight">
                  {project.title}
                </h3>
              </div>
              <span className="inline-flex self-start sm:self-auto px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-emerald-700 dark:text-emerald-400 border border-zinc-200 dark:border-zinc-700">
                {project.metricHighlight}
              </span>
            </div>

            {/* Concise 2-line summary */}
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
              {project.summary}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-700/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Tooling Drawer (Expandable on-demand, keeping the main page lean) */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 p-4 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
            Interactive Engineering Inspection:
          </span>

          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => toggleTool('visualizer')}
              className={`px-2.5 py-1 text-xs font-mono rounded-md border transition-colors flex items-center gap-1.5 ${
                activeTool === 'visualizer'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-transparent font-medium'
                  : 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>Topology Visualizer</span>
              {activeTool === 'visualizer' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            <button
              onClick={() => toggleTool('cli')}
              className={`px-2.5 py-1 text-xs font-mono rounded-md border transition-colors flex items-center gap-1.5 ${
                activeTool === 'cli'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-transparent font-medium'
                  : 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100'
              }`}
            >
              <Terminal className="w-3 h-3" />
              <span>Recovery CLI Console</span>
              {activeTool === 'cli' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            <button
              onClick={() => toggleTool('contract')}
              className={`px-2.5 py-1 text-xs font-mono rounded-md border transition-colors flex items-center gap-1.5 ${
                activeTool === 'contract'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-transparent font-medium'
                  : 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100'
              }`}
            >
              <Code2 className="w-3 h-3" />
              <span>Smithy & CDK Contracts</span>
              {activeTool === 'contract' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* Dynamic Tool Content */}
        {activeTool === 'visualizer' && (
          <div className="pt-2 animate-fadeIn">
            <ArchitectureVisualizer />
          </div>
        )}
        {activeTool === 'cli' && (
          <div className="pt-2 animate-fadeIn">
            <InteractiveCli />
          </div>
        )}
        {activeTool === 'contract' && (
          <div className="pt-2 animate-fadeIn">
            <ContractViewer />
          </div>
        )}
      </div>

      {/* Also Built */}
      <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
          High-Impact Initiatives
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {alsoBuilt.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl card-surface card-hover flex flex-col justify-between space-y-2"
            >
              <div>
                <div className="flex items-center justify-between gap-1.5 mb-1.5">
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                    {item.title}
                  </h4>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {item.metric}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  {item.summary}
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
