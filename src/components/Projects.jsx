import React, { useState } from 'react';
import { 
  Server, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Activity, 
  CheckCircle2, 
  ArrowUpRight, 
  Lock,
  Layers,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Distributed Systems', 'Cloud & Infrastructure', 'Enterprise Systems'];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  const getSystemIcon = (id) => {
    switch (id) {
      case 'sec-migration':
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      case 'ai-telemetry':
        return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'data-migration-engine':
        return <Database className="w-5 h-5 text-purple-400" />;
      case 'banking-dxp':
        return <Layers className="w-5 h-5 text-emerald-400" />;
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
            <span>Production Architectures</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Featured Engineering Systems
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-impact distributed architectures, cloud migrations, and enterprise platforms engineered for global scale and mission-critical reliability.
          </p>
        </div>

        {/* NDA / Confidentiality Notice */}
        <div className="max-w-2xl mx-auto mb-10 px-4 py-2.5 rounded-xl glass-panel border border-slate-800 text-center flex items-center justify-center gap-2 text-xs text-slate-400">
          <Lock className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
          <span>Architectural summaries presented with respect to proprietary IP and NDA considerations.</span>
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

        {/* Architecture Systems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 hover:border-indigo-500/40 glow-card flex flex-col justify-between group"
            >
              <div>
                {/* System Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                      {getSystemIcon(project.id)}
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-medium">
                        {project.context}
                      </span>
                      <div className="text-[11px] text-slate-400 font-mono">
                        {project.type}
                      </div>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {project.metricHighlight}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                {/* Overview Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                {/* Architectural Challenge Callout */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>Engineering Challenge</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {/* Architecture Highlights */}
                <div className="mb-6">
                  <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-3">
                    Key Architectural Solutions:
                  </div>
                  <ul className="space-y-2.5">
                    {project.architectureHighlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <ChevronRight className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Scale & Impact Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-4 border-t border-slate-800/80 my-4 bg-slate-950/40 rounded-xl px-3">
                  {project.impactMetrics.map((metric, mIdx) => (
                    <div key={mIdx} className="text-center sm:text-left">
                      <div className="text-xs font-bold text-white">
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
      </div>
    </section>
  );
}
