import React from 'react';
import { 
  Server, 
  Cpu, 
  Layout, 
  Database, 
  Wrench, 
  Bot, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillCategories } = portfolioData;

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Distributed Systems & Cloud':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Backend & Core Engineering':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'AI & LLM Engineering':
        return <Bot className="w-5 h-5 text-purple-400" />;
      case 'Databases & Search':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'DevOps, CI/CD & Observability':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'Frontend & Web':
        return <Layout className="w-5 h-5 text-pink-400" />;
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
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Skills & Competencies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering depth across high-scale distributed systems, resilient AWS primitives, typed backends, and reliable production LLM pipelines.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((group, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 glow-card flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex-shrink-0">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-4 font-light leading-relaxed">
                  {group.summary}
                </p>

                {/* Specific Detailed Competencies */}
                <div className="space-y-3.5">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="text-xs">
                      <div className="font-semibold text-slate-200 mb-0.5 flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
                        <span className="text-indigo-300 font-medium">{skill.name}</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed pl-3 font-light">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-slate-900 to-cyan-950/40 text-center">
          <div className="flex items-center justify-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Operational & Architectural Philosophy</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
            One Retry Owner Per Failure Class • Bounded Concurrency • Fail-Closed Evaluations • Progressive Safe Rollouts
          </h4>
          <p className="max-w-2xl mx-auto text-slate-400 text-xs sm:text-sm font-light">
            Building systems that fail gracefully, recover automatically, and keep human on-call fatigue to an absolute minimum.
          </p>
        </div>
      </div>
    </section>
  );
}
