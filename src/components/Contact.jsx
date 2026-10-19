import React, { useState } from 'react';
import { Mail, Linkedin, Github, FileDown, Copy, Check, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="space-y-8">
      {/* Section Header */}
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
          Connect
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Get in Touch
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl font-light">
          Whether you want to discuss distributed systems architecture, AWS serverless scaling, or connect—feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Email */}
        <div className="p-5 rounded-xl card-surface card-hover flex flex-col justify-between space-y-3">
          <div>
            <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Email</span>
            </div>
            <div className="text-xs font-mono text-zinc-900 dark:text-zinc-100 truncate">
              {personalInfo.email}
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex-1 text-center py-1.5 px-2 text-xs font-mono rounded bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium hover:opacity-90 transition-opacity"
            >
              Write Email
            </a>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 rounded border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              title="Copy to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* LinkedIn */}
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-xl card-surface card-hover flex flex-col justify-between space-y-3 group"
        >
          <div>
            <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1 flex items-center gap-1.5">
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Professional Profile
            </div>
          </div>
          <div className="inline-flex items-center gap-1 text-xs font-mono text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-zinc-100">
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </div>
        </a>

        {/* GitHub */}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-xl card-surface card-hover flex flex-col justify-between space-y-3 group"
        >
          <div>
            <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1 flex items-center gap-1.5">
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              @001Abhishek
            </div>
          </div>
          <div className="inline-flex items-center gap-1 text-xs font-mono text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-zinc-100">
            <span>Repositories</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </div>
        </a>

        {/* Resume */}
        <a
          href={personalInfo.resumeUrl}
          download="AbhishekResume.pdf"
          className="p-5 rounded-xl card-surface card-hover flex flex-col justify-between space-y-3 group"
        >
          <div>
            <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1 flex items-center gap-1.5">
              <FileDown className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Resume PDF
            </div>
          </div>
          <div className="inline-flex items-center gap-1 text-xs font-mono text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-zinc-100">
            <span>Download</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </div>
        </a>
      </div>
    </section>
  );
}
