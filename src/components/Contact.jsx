import React, { useState } from 'react';
import { Mail, Linkedin, Github, FileDown, Copy, Check, Send, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you have a technical question, an open opportunity, or just want to connect—my inbox is always open!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {/* Email Card */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 glow-card flex flex-col justify-between text-center group">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Direct Email</h3>
              <p className="text-xs text-slate-400 mb-4 font-mono truncate max-w-full">
                {personalInfo.email}
              </p>
            </div>

            <div className="flex gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl glass-panel border border-slate-700/80 hover:border-indigo-500/50 text-slate-300 hover:text-white text-xs font-medium transition-all"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 glow-card flex flex-col justify-between text-center group">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">LinkedIn</h3>
              <p className="text-xs text-slate-400 mb-4">
                Professional network & endorsements
              </p>
            </div>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl glass-panel border border-slate-700/80 hover:border-cyan-500/50 text-cyan-300 hover:text-white text-xs font-semibold transition-all"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          {/* GitHub Card */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 glow-card flex flex-col justify-between text-center group">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">GitHub</h3>
              <p className="text-xs text-slate-400 mb-4">
                Open source repositories & contributions
              </p>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl glass-panel border border-slate-700/80 hover:border-purple-500/50 text-purple-300 hover:text-white text-xs font-semibold transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View GitHub Repos</span>
            </a>
          </div>
        </div>

        {/* Resume Download CTA Banner */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-xl font-bold text-white mb-1">
              Want a comprehensive overview?
            </h4>
            <p className="text-sm text-slate-400">
              Download Abhishek's updated official resume in PDF format.
            </p>
          </div>

          <a
            href={personalInfo.resumeUrl}
            download="AbhishekResume.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex-shrink-0"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Official Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
