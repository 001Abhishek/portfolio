import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, FileDown, Sparkles, Code2, Server, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personalInfo } = portfolioData;

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background glowing gradients & blur orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-8 hover:border-indigo-400/50 transition-colors">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>{personalInfo.role} @ {personalInfo.currentCompany}</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">{personalInfo.name}</span>
        </h1>

        {/* Hero Description */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed font-light">
          {personalInfo.shortBio} Specializing in <span className="text-white font-medium">Java</span>, <span className="text-white font-medium">Spring Boot</span>, <span className="text-white font-medium">React</span>, and <span className="text-white font-medium">enterprise cloud integrations</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            onClick={(e) => scrollTo(e, '#projects')}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all transform hover:-translate-y-0.5"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel border border-slate-700/80 hover:border-indigo-500/50 text-slate-200 hover:text-white font-semibold transition-all transform hover:-translate-y-0.5"
          >
            <span>Contact Me</span>
          </a>

          <a
            href={personalInfo.resumeUrl}
            download="AbhishekResume.pdf"
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl glass-panel border border-slate-700/80 hover:border-indigo-500/50 text-indigo-300 hover:text-indigo-200 font-semibold transition-all transform hover:-translate-y-0.5"
          >
            <FileDown className="w-4 h-4 text-indigo-400" />
            <span>Resume</span>
          </a>
        </div>

        {/* Social Icons Bar */}
        <div className="flex items-center justify-center gap-4 mb-16 text-slate-400">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-panel hover:text-white hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all hover:-translate-y-1"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-panel hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all hover:-translate-y-1"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-xl glass-panel hover:text-cyan-400 hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all hover:-translate-y-1"
            title="Email Abhishek"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="glass-panel p-4 rounded-2xl border border-slate-800 text-left hover:border-indigo-500/30 transition-colors">
            <div className="flex items-center gap-2 text-indigo-400 mb-1">
              <Server className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-wider">Current Role</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white">Amazon SDE 2</div>
            <div className="text-xs text-slate-400 mt-1">India Development Center</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-800 text-left hover:border-indigo-500/30 transition-colors">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <Code2 className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-wider">Architecture</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white">Distributed</div>
            <div className="text-xs text-slate-400 mt-1">High-Throughput Systems</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-800 text-left hover:border-indigo-500/30 transition-colors">
            <div className="flex items-center gap-2 text-purple-400 mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-wider">Tech Stack</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white">Java & AWS</div>
            <div className="text-xs text-slate-400 mt-1">Microservices & AI Backends</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-800 text-left hover:border-indigo-500/30 transition-colors">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-wider">Focus</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white">Security & Scale</div>
            <div className="text-xs text-slate-400 mt-1">Zero-Downtime Migrations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
