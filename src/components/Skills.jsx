import React from 'react';
import { Cpu, Server, Layout, Database, Wrench, ShieldCheck, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillCategories } = portfolioData;

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Backend & Core':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Frontend & Web':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Databases & Storage':
        return <Database className="w-5 h-5 text-purple-400" />;
      case 'DevOps, Tools & Methods':
        return <Wrench className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Skills & Competencies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Broad spectrum technical proficiency across enterprise backend architectures, modern client-side libraries, relational databases, and automated delivery pipelines.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((group, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 glow-card"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/60">
                  {getCategoryIcon(group.category)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {group.category}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    {group.skills.length} Core Capabilities
                  </span>
                </div>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs sm:text-sm hover:border-indigo-500/40 hover:bg-slate-800/90 transition-all"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono bg-slate-800 px-1.5 py-0.5 rounded">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Principles Banner */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-slate-900 to-cyan-950/40 text-center">
          <div className="flex items-center justify-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Engineering Discipline</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
            SOLID Principles • Clean Architecture • Test-Driven Development • RESTful Standards
          </h4>
          <p className="max-w-2xl mx-auto text-slate-400 text-xs sm:text-sm">
            Committed to writing robust, testable, and self-documenting code with comprehensive unit test coverage and high performance under production load.
          </p>
        </div>
      </div>
    </section>
  );
}
