import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personalInfo } = portfolioData;

  return (
    <section id="about" className="space-y-8">
      {/* Section Header */}
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
          Background
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          About Abhishek
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
          <p>
            I am a System Development Engineer 2 (SDE 2) at Amazon based in India, with a Bachelor's degree in Computer Science & Engineering from Gujarat Technological University.
          </p>
          <p>
            My engineering work centers on building and operating high-throughput, event-driven architectures on AWS. I spend my time on JVM/Kotlin performance tuning, Step Functions workflow orchestration, bounded concurrency controls, single-retry ownership per failure class, and zero-trust identity and storage migrations.
          </p>
          <p>
            Beyond core infrastructure, I build reliable AI and LLM workflows using Amazon Bedrock (Knowledge Bases, Converse API, structured output parsing) and develop developer tooling to automate operational toil and streamline multi-tenant onboarding.
          </p>
        </div>

        {/* Education & Info card */}
        <div className="p-5 rounded-xl card-surface space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Education
          </div>
          <div>
            <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {personalInfo.education.degree}
            </div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
              {personalInfo.education.institution} • {personalInfo.education.period}
            </div>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-light pt-2 border-t border-zinc-100 dark:border-zinc-800">
            {personalInfo.education.description}
          </p>
        </div>
      </div>
    </section>
  );
}