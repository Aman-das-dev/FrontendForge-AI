'use client';
import { useState } from 'react';
import { ArrowTrendingUpIcon } from './Icons';

const CASES = [
  {
    id: 'case-01',
    company: 'Aetna Health',
    workload: 'Structured health data pipeline ingestion and routing',
    metric: '99.999% Reliability',
    latency: '8.4ms Ingestion',
    color: 'border-primary-yellow/20 hover:border-primary-yellow/60'
  },
  {
    id: 'case-02',
    company: 'NeuroScale Labs',
    workload: 'Real-time multi-agent LLM telemetry collection',
    metric: '5.2B Logs/day',
    latency: '11.2ms Ingestion',
    color: 'border-accent-orange/20 hover:border-accent-orange/60'
  },
  {
    id: 'case-03',
    company: 'EdgeFlow Systems',
    workload: 'Distributed code execution at global border nodes',
    metric: '10x Speed Improvement',
    latency: '3.1ms Ingestion',
    color: 'border-secondary-light/20 hover:border-secondary-light/60'
  }
];

export function CaseStudies() {
  const [hoveredCase, setHoveredCase] = useState<string | null>(null);

  return (
    <section id="case-studies" className="w-full py-24 px-6 md:px-12 border-t border-secondary-dark/30 max-w-[1400px] mx-auto">
      <div className="text-left mb-16">
        <span className="font-mono text-xs tracking-widest text-accent-orange bg-secondary-dark/30 border border-secondary-dark/60 px-3.5 py-1.5 rounded-full">
          \\\ CASE STUDIES
        </span>
        <h2 className="text-3xl md:text-5xl font-mono text-light mt-6">Proven Telemetry In Production</h2>
      </div>

      {/* Case studies rows */}
      <div className="flex flex-col gap-4 mb-20">
        {CASES.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredCase(item.id)}
            onMouseLeave={() => setHoveredCase(null)}
            className={`p-6 md:p-8 rounded-xl border bg-primary-dark/40 backdrop-blur-sm transition-all duration-300 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-6 ${item.color} ${hoveredCase === item.id ? 'shadow-[0_0_20px_rgba(255,200,1,0.05)]' : ''}`}
          >
            <div className="flex items-center gap-6">
              <span className="font-mono text-sm text-secondary-light/40">{item.id}</span>
              <div>
                <h3 className="text-xl font-mono text-light font-bold mb-1">{item.company}</h3>
                <p className="text-secondary-light text-sm max-w-lg leading-relaxed">{item.workload}</p>
              </div>
            </div>

            {/* Ingestion & Metric Details (Revealed dynamically or static) */}
            <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end border-t border-secondary-dark/30 md:border-none pt-4 md:pt-0">
              <div className="text-left md:text-right">
                <div className="font-mono text-xs text-secondary-light/50">INGESTION_SPEED</div>
                <div className="text-sm font-semibold text-light">{item.latency}</div>
              </div>
              <div className="text-left md:text-right">
                <div className="font-mono text-xs text-secondary-light/50">PERFORMANCE</div>
                <div className="text-sm font-bold text-primary-yellow flex items-center gap-1.5 justify-end">
                  {item.metric}
                  <ArrowTrendingUpIcon size={14} className="text-primary-yellow" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics Counter Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-xl border border-secondary-dark/40 bg-secondary-dark/5 flex flex-col items-start justify-between h-48 hover:border-primary-yellow/30 transition-colors">
          <span className="font-mono text-xs text-secondary-light/40">\\\ TELEMETRY_LATENCY</span>
          <div className="flex items-baseline">
            <span className="text-5xl font-mono font-bold text-light">12</span>
            <span className="text-2xl font-mono text-primary-yellow ml-1">ms</span>
          </div>
          <p className="text-xs text-secondary-light">Average global roundtrip ingest to query time.</p>
        </div>

        <div className="p-8 rounded-xl border border-secondary-dark/40 bg-secondary-dark/5 flex flex-col items-start justify-between h-48 hover:border-primary-yellow/30 transition-colors">
          <span className="font-mono text-xs text-secondary-light/40">\\\ PIPELINE_SPEEDUP</span>
          <div className="flex items-baseline">
            <span className="text-5xl font-mono font-bold text-light">10</span>
            <span className="text-2xl font-mono text-primary-yellow ml-1">x</span>
          </div>
          <p className="text-xs text-secondary-light">Increase in deployment pipeline throughput speeds.</p>
        </div>

        <div className="p-8 rounded-xl border border-secondary-dark/40 bg-secondary-dark/5 flex flex-col items-start justify-between h-48 hover:border-primary-yellow/30 transition-colors">
          <span className="font-mono text-xs text-secondary-light/40">\\\ ENGINE_UPTIME</span>
          <div className="flex items-baseline">
            <span className="text-5xl font-mono font-bold text-light">99.99</span>
            <span className="text-2xl font-mono text-primary-yellow ml-1">%</span>
          </div>
          <p className="text-xs text-secondary-light">SLA-backed infrastructure platform availability.</p>
        </div>
      </div>
    </section>
  );
}
