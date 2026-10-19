import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering robust enterprise solutions, optimizing distributed microservices, and modernizing architectures for industry leaders.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-indigo-500/20 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {experience.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:bg-indigo-500 group-hover:scale-125 transition-all shadow-sm shadow-indigo-500/50"></div>

              {/* Experience Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 glow-card">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-2">
                      {item.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-indigo-400 font-semibold text-lg">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs sm:text-sm text-slate-400 gap-1 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-indigo-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-3 mb-6 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-indigo-500/30 transition-colors"
                    >
                      {skill}
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