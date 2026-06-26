'use client';
import { ArrowTrendingUpIcon, Cog8ToothIcon, ChartPieIcon, LinkIcon, SearchIcon } from './Icons';

const STEPS = [
  {
    icon: <SearchIcon size={20} />,
    title: 'Upload Data',
    desc: 'Ingest raw datasets from any source — APIs, databases, file uploads, or live streams.',
    tag: 'STEP_01',
    color: 'border-primary-yellow/40 bg-primary-yellow/5',
    iconColor: 'text-primary-yellow',
    glow: 'shadow-[0_0_20px_rgba(255,200,1,0.08)]'
  },
  {
    icon: <Cog8ToothIcon size={20} />,
    title: 'AI Processing',
    desc: 'Neural agents parse, classify, and transform your data in real-time at edge nodes.',
    tag: 'STEP_02',
    color: 'border-accent-orange/40 bg-accent-orange/5',
    iconColor: 'text-accent-orange',
    glow: 'shadow-[0_0_20px_rgba(255,153,50,0.08)]'
  },
  {
    icon: <LinkIcon size={20} />,
    title: 'Automation',
    desc: 'Trigger downstream workflows, notifications, and integrations automatically.',
    tag: 'STEP_03',
    color: 'border-secondary-light/30 bg-secondary-light/5',
    iconColor: 'text-secondary-light',
    glow: 'shadow-[0_0_20px_rgba(217,232,226,0.06)]'
  },
  {
    icon: <ChartPieIcon size={20} />,
    title: 'Insights',
    desc: 'Generate actionable intelligence with vector embeddings and pattern recognition.',
    tag: 'STEP_04',
    color: 'border-primary-yellow/40 bg-primary-yellow/5',
    iconColor: 'text-primary-yellow',
    glow: 'shadow-[0_0_20px_rgba(255,200,1,0.08)]'
  },
  {
    icon: <ArrowTrendingUpIcon size={20} />,
    title: 'Reports',
    desc: 'Automated dashboards and scheduled reporting to stakeholders and compliance teams.',
    tag: 'STEP_05',
    color: 'border-accent-orange/40 bg-accent-orange/5',
    iconColor: 'text-accent-orange',
    glow: 'shadow-[0_0_20px_rgba(255,153,50,0.08)]'
  },
];

export function WorkflowTimeline() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 border-t border-secondary-dark/30">
      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-widest text-accent-orange bg-secondary-dark/30 border border-secondary-dark/60 px-3.5 py-1.5 rounded-full">
          \\\ WORKFLOW
        </span>
        <h2 className="text-3xl md:text-5xl font-mono text-light mt-6 mb-4">How NEXUS Works</h2>
        <p className="text-secondary-light max-w-2xl mx-auto text-sm md:text-base text-balance">
          From raw data ingestion to actionable reports — a fully automated pipeline.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical connecting line (desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-yellow/30 via-accent-orange/20 to-secondary-dark/10 -translate-x-1/2" />

        <div className="flex flex-col gap-8 md:gap-0">
          {STEPS.map((step, i) => (
            <div
              key={step.tag}
              className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content card */}
              <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`p-6 rounded-2xl border ${step.color} ${step.glow} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="flex items-center gap-3 mb-3 justify-start">
                    <span className="font-mono text-[10px] text-secondary-light/40">{step.tag}</span>
                  </div>
                  <h3 className="font-mono text-lg text-light font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-secondary-light leading-relaxed">{step.desc}</p>
                </div>
              </div>

              {/* Center node */}
              <div className="relative z-10 w-12 h-12 rounded-full border-2 border-secondary-dark bg-primary-dark flex items-center justify-center shrink-0">
                <div className={`${step.iconColor}`}>{step.icon}</div>
              </div>

              {/* Spacer for alternation */}
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
