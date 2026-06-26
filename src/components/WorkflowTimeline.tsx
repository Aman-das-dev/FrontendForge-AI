'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowTrendingUpIcon, Cog8ToothIcon, ChartPieIcon, LinkIcon, SearchIcon } from './Icons';

const STEPS = [
  {
    icon: <SearchIcon size={20} />,
    title: 'Upload Data',
    desc: 'Ingest raw datasets from any source - APIs, databases, file uploads, or live streams.',
    tag: 'STEP_01',
    color: 'border-primary-yellow/40 bg-primary-yellow/5',
    iconColor: 'text-primary-yellow',
    glow: 'shadow-[0_0_20px_rgba(116,200,255,0.08)]',
    anim: 'animate-[fade-in-up_700ms_cubic-bezier(0.16,1,0.3,1)_both]',
    delay: 'delay-[0ms]',
  },
  {
    icon: <Cog8ToothIcon size={20} />,
    title: 'AI Processing',
    desc: 'Neural agents parse, classify, and transform your data in real-time at edge nodes.',
    tag: 'STEP_02',
    color: 'border-accent-orange/40 bg-accent-orange/5',
    iconColor: 'text-accent-orange',
    glow: 'shadow-[0_0_20px_rgba(79,125,255,0.08)]',
    anim: 'animate-[fade-in-up_700ms_cubic-bezier(0.16,1,0.3,1)_both]',
    delay: 'delay-[120ms]',
  },
  {
    icon: <LinkIcon size={20} />,
    title: 'Automation',
    desc: 'Trigger downstream workflows, notifications, and integrations automatically.',
    tag: 'STEP_03',
    color: 'border-secondary-light/30 bg-secondary-light/5',
    iconColor: 'text-secondary-light',
    glow: 'shadow-[0_0_20px_rgba(198,215,234,0.06)]',
    anim: 'animate-[fade-in-up_700ms_cubic-bezier(0.16,1,0.3,1)_both]',
    delay: 'delay-[240ms]',
  },
  {
    icon: <ChartPieIcon size={20} />,
    title: 'Insights',
    desc: 'Generate actionable intelligence with vector embeddings and pattern recognition.',
    tag: 'STEP_04',
    color: 'border-primary-yellow/40 bg-primary-yellow/5',
    iconColor: 'text-primary-yellow',
    glow: 'shadow-[0_0_20px_rgba(116,200,255,0.08)]',
    anim: 'animate-[fade-in-up_700ms_cubic-bezier(0.16,1,0.3,1)_both]',
    delay: 'delay-[360ms]',
  },
  {
    icon: <ArrowTrendingUpIcon size={20} />,
    title: 'Reports',
    desc: 'Automated dashboards and scheduled reporting to stakeholders and compliance teams.',
    tag: 'STEP_05',
    color: 'border-accent-orange/40 bg-accent-orange/5',
    iconColor: 'text-accent-orange',
    glow: 'shadow-[0_0_20px_rgba(79,125,255,0.08)]',
    anim: 'animate-[fade-in-up_700ms_cubic-bezier(0.16,1,0.3,1)_both]',
    delay: 'delay-[480ms]',
  },
];

const VELOCITY_CARDS = [
  {
    title: 'Instant Ingestion',
    desc: 'Connect to databases, message queues, and cloud files with a single click. Extract, parse, and structure your data automatically.',
    footnote: 'Supports PostgreSQL, MongoDB, Kafka, AWS S3, and 50+ other integrations.',
    accent: 'border-primary-yellow/45 bg-primary-yellow/6',
    glow: 'shadow-[0_0_24px_rgba(116,200,255,0.08)]',
    tall: true,
    icon: '01',
    delay: 'delay-[0ms]',
  },
  {
    title: 'AI Model Tuning',
    desc: 'Tune custom models on private data while maintaining strict governance and predictable latency.',
    footnote: 'Hyperparameter controls, policy checks, and deployment-ready presets.',
    accent: 'border-accent-orange/35 bg-accent-orange/6',
    glow: 'shadow-[0_0_24px_rgba(79,125,255,0.08)]',
    tall: false,
    icon: '02',
    delay: 'delay-[140ms]',
  },
  {
    title: 'Enterprise Security',
    desc: 'Bank-grade encryption, audit trails, and role-based access controls for every environment.',
    footnote: 'TLS 1.3, static analysis, and directory-aware permissions.',
    accent: 'border-secondary-light/25 bg-secondary-light/6',
    glow: 'shadow-[0_0_24px_rgba(198,215,234,0.06)]',
    tall: false,
    icon: '03',
    delay: 'delay-[280ms]',
  },
  {
    title: 'Predictive Flows',
    desc: 'Automate branching logic that adapts to incoming data, user actions, and system signals.',
    footnote: 'Low-code orchestration with sub-second triggers and observability.',
    accent: 'border-primary-yellow/35 bg-primary-yellow/6',
    glow: 'shadow-[0_0_24px_rgba(116,200,255,0.08)]',
    tall: false,
    icon: '04',
    delay: 'delay-[420ms]',
  },
];

export function WorkflowTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`timeline-reveal w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 border-t border-secondary-dark/30 ${
        isVisible ? 'timeline-reveal-visible' : ''
      }`}
    >
      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-widest text-accent-orange bg-secondary-dark/30 border border-secondary-dark/60 px-3.5 py-1.5 rounded-full">
          \\\ WORKFLOW
        </span>
        <h2 className="text-3xl md:text-5xl font-mono text-light mt-6 mb-4">How NEXUS Works</h2>
        <p className="text-secondary-light max-w-2xl mx-auto text-sm md:text-base text-balance">
          From raw data ingestion to actionable reports - a fully automated pipeline.
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-yellow/30 via-accent-orange/20 to-secondary-dark/10 -translate-x-1/2" />

        <div className="flex flex-col gap-8 md:gap-0">
          {STEPS.map((step, i) => (
            <div
              key={step.tag}
              className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${step.anim} ${step.delay} ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`group relative overflow-hidden p-6 rounded-2xl border ${step.color} ${step.glow} backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]`}>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-[120%] group-hover:animate-[shimmer-x_1.5s_linear_infinite]" />
                  <div className="flex items-center gap-3 mb-3 justify-start">
                    <span className="font-mono text-[10px] text-secondary-light/40">{step.tag}</span>
                    <span className="h-2 w-2 rounded-full bg-primary-yellow animate-pulse-soft" />
                  </div>
                  <h3 className="font-mono text-lg text-light font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-secondary-light leading-relaxed">{step.desc}</p>
                </div>
              </div>

              <div className="relative z-10 w-12 h-12 rounded-full border-2 border-secondary-dark bg-primary-dark flex items-center justify-center shrink-0 animate-float">
                <div className="absolute inset-0 rounded-full border border-primary-yellow/30 animate-pulse-soft" />
                <div className={`${step.iconColor}`}>{step.icon}</div>
              </div>

              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <div className="mb-10">
          <h3 className="text-2xl md:text-4xl font-mono text-light mb-3">Built for Extreme Engineering Velocities</h3>
          <p className="text-secondary-light max-w-3xl text-sm md:text-base text-balance">
            Everything you need to connect datasets, train secure models, and launch robust workflows without slowing your team down.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:auto-rows-[10rem] gap-6">
          {VELOCITY_CARDS.map((card, index) => (
            <article
              key={card.title}
              className={`timeline-card group relative overflow-hidden rounded-[1.75rem] border bg-white/5 backdrop-blur-md p-6 md:p-7 ${card.accent} ${card.glow} ${card.delay} ${
                isVisible ? 'timeline-card-visible' : ''
              } ${card.tall ? 'md:row-span-2 md:min-h-[calc(20rem+1.5rem)]' : 'md:min-h-[10rem]'} ${
                index === 0 ? 'md:col-start-1 md:row-start-1' : ''
              } ${index === 1 ? 'md:col-start-2 md:row-start-1' : ''} ${index === 2 ? 'md:col-start-2 md:row-start-2' : ''} ${
                index === 3 ? 'md:col-start-1 md:row-start-3' : ''
              }`}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-yellow/70 to-transparent animate-shimmer-x" />
              <div className="pointer-events-none absolute -right-10 top-8 h-24 w-24 rounded-full bg-primary-yellow/10 blur-3xl animate-float" />
              <div className="flex items-start justify-between gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-primary-yellow text-sm font-mono animate-pulse-soft">
                  <span aria-hidden="true">{card.icon}</span>
                </div>
                <span className="font-mono text-[10px] tracking-[0.3em] text-secondary-light/45 uppercase">
                  Velocity Stack
                </span>
              </div>

              <div className="max-w-xl">
                <h3 className="text-2xl md:text-[2rem] font-mono text-light leading-tight mb-4">{card.title}</h3>
                <p className="text-secondary-light leading-relaxed text-sm md:text-base mb-6">{card.desc}</p>
                <p className="font-mono text-[11px] md:text-xs leading-relaxed text-primary-yellow/90">{card.footnote}</p>
              </div>

              <div className="mt-8 h-px bg-gradient-to-r from-primary-yellow/0 via-primary-yellow/50 to-accent-orange/0" />
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/10 bg-primary-dark/35 px-3 py-4 animate-[fade-in-up_700ms_cubic-bezier(0.16,1,0.3,1)_both] delay-[120ms]">
                  <div className="font-mono text-[10px] text-secondary-light/45 mb-1">Latency</div>
                  <div className="font-mono text-sm text-light">Sub-second</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-primary-dark/35 px-3 py-4 animate-[fade-in-up_700ms_cubic-bezier(0.16,1,0.3,1)_both] delay-[220ms]">
                  <div className="font-mono text-[10px] text-secondary-light/45 mb-1">Scale</div>
                  <div className="font-mono text-sm text-light">Elastic</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-primary-dark/35 px-3 py-4 animate-[fade-in-up_700ms_cubic-bezier(0.16,1,0.3,1)_both] delay-[320ms]">
                  <div className="font-mono text-[10px] text-secondary-light/45 mb-1">Trust</div>
                  <div className="font-mono text-sm text-light">Governed</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
