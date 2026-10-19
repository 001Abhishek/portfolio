import React, { useState } from 'react';
import { 
  Server, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Activity, 
  ChevronRight, 
  Sparkles,
  Bot,
  Zap,
  TrendingDown,
  Clock,
  Layers,
  AlertCircle,
  Wrench,
  CheckCircle2
} from 'lucide-react';
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

  const getSystemIcon = (id) => {
    switch (id) {
      case 'zero-trust-access':
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      case 'serverless-fanout':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'self-healing-workflows':
        return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'scalable-data-access':
        return <Database className="w-5 h-5 text-purple-400" />;
      case 'progressive-delivery':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Server className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Server className="w-3.5 h-3.5" />
            <span>Production Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Selected Projects
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            I build and run distributed, event-driven systems on AWS, with a focus on architecture, scale, failure recovery and safe delivery.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold'
                  : 'glass-panel text-slate-400 hover:text-white hover:border-indigo-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Selected Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 hover:border-indigo-500/40 glow-card flex flex-col justify-between group"
            >
              <div>
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                      {getSystemIcon(project.id)}
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-medium">
                        {project.badge}
                      </span>
                      <div className="text-[11px] text-slate-400 font-mono">
                        {project.category}
                      </div>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono">
                    {project.metricHighlight}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                {/* Problem Statement Box */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-4">
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Problem</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {project.problem}
                  </p>
                </div>

                {/* Engineering Role & Solution */}
                <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 mb-6">
                  <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Role & Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {project.role}
                  </p>
                </div>

                {/* Concrete Impact */}
                <div className="mb-6">
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Impact</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              </div>

              <div>
                {/* Scale & Impact Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-3 border-t border-slate-800/80 my-3 bg-slate-950/50 rounded-xl px-3">
                  {project.impactMetrics.map((metric, mIdx) => (
                    <div key={mIdx} className="text-center sm:text-left">
                      <div className="text-xs font-bold text-white truncate">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Also Built / Additional High-Impact Initiatives */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full glass-panel border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>High-Impact Initiatives</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Also Built
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alsoBuilt.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-purple-500/40 glow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {item.metric}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
