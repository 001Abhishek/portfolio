import React from 'react';
import { User, GraduationCap, Award, BookOpen, Rocket, HeartHandshake } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personalInfo } = portfolioData;

  return (
    <section id="about" className="py-24 relative bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4">
            <User className="w-3.5 h-3.5" />
            <span>Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            About Abhishek
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A software engineer dedicated to building scalable backend services and impactful digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg font-light">
              {personalInfo.aboutBio.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Education Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex-shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                  Academic Background
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {personalInfo.education.degree}
                </h3>
                <div className="text-sm text-slate-300 font-medium">
                  {personalInfo.education.institution} • <span className="font-mono text-slate-400">{personalInfo.education.period}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  {personalInfo.education.description}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Pillars & Values */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/40 glow-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Rocket className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Scalable Architecture</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Designing resilient, modular microservices and database structures built for high concurrent traffic and low operational friction.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/40 glow-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Continuous Evolution</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Always eager to embrace cutting-edge tools, deep dive into performance profiling, write technical blogs, and experiment with new ideas.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/40 glow-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Collaborative Spirit</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Thriving in agile cross-functional environments, mentoring peers, and driving projects forward with clear communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}