'use client';
import { useState } from 'react';
import { 
  Cog8ToothIcon, 
  ChartPieIcon, 
  Cube16SolidIcon, 
  ArrowTrendingUpIcon, 
  ChevronDownIcon 
} from './Icons';

type TabKey = 'DISCOVERY' | 'ANALYSIS' | 'TRAINING';

export function BentoSystem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<TabKey>('DISCOVERY');

  const tabContents: Record<TabKey, { title: string; desc: string; telemetry: string }> = {
    DISCOVERY: {
      title: "Automated Data Discovery",
      desc: "Scan and catalog structural schemas across all your databases and API endpoints automatically with neural discovery agents.",
      telemetry: "DISC_AGENT_01: ACTIVE // 1,204 endpoints analyzed"
    },
    ANALYSIS: {
      title: "Real-time Vector Analysis",
      desc: "Parse unstructured event streams into high-dimensional vector embeddings with latency sub-5ms at edge nodes.",
      telemetry: "VEC_LATENCY: 4.8ms // 4,096 dimensions"
    },
    TRAINING: {
      title: "Dynamic Model Fine-tuning",
      desc: "Orchestrate automated training sessions triggered by database mutations, adapting agents to runtime updates.",
      telemetry: "TRAIN_LOSS: 0.042 // Epoch 12/20 complete"
    }
  };

  return (
    <div id="features" className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 border-t border-secondary-dark/30">
      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-widest text-primary-yellow bg-secondary-dark/30 border border-secondary-dark/60 px-3.5 py-1.5 rounded-full">
          \\\ OUR PRODUCT
        </span>
        <h2 className="text-3xl md:text-5xl font-mono text-light mt-6 mb-4">Tactical Telemetry & Execution</h2>
        <p className="text-secondary-light max-w-2xl mx-auto text-sm md:text-base text-balance">
          Complete visibility and execution controls over your distributed data layers.
        </p>
      </div>

      {/* Desktop Grid: 3 columns, high-contrast dashboard aesthetic */}
      <div className="hidden lg:grid grid-cols-12 gap-6 h-[480px]">
        
        {/* Card 1: Telemetry Dashboard (Grid Col: 4) */}
        <div 
          onMouseEnter={() => setActiveIndex(0)}
          className={`col-span-4 rounded-2xl border p-6 flex flex-col justify-between bg-primary-dark/40 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${activeIndex === 0 ? 'border-primary-yellow shadow-[0_0_30px_rgba(255,200,1,0.08)] scale-[1.01]' : 'border-secondary-dark/40'}`}
        >
          <div className="flex items-center justify-between border-b border-secondary-dark/30 pb-4 mb-4">
            <span className="font-mono text-xs text-secondary-light/60 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-yellow rounded-full animate-pulse" />
              \\\ LIVE_TELEMETRY
            </span>
            <ChartPieIcon className="text-primary-yellow" size={16} />
          </div>

          {/* Diagnostic Waves / Queue depth bars */}
          <div className="flex-1 flex flex-col justify-center gap-4">
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-[10px] text-secondary-light/50">
                <span>INGEST_RATE</span>
                <span className="text-primary-yellow">45,920 req/s</span>
              </div>
              <div className="w-full h-2 bg-secondary-dark/20 rounded-full overflow-hidden border border-secondary-dark/40">
                <div className="h-full bg-primary-yellow w-[85%] animate-pulse" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between font-mono text-[10px] text-secondary-light/50">
                <span>THREAD_POOL_DEPTH</span>
                <span className="text-accent-orange">94% Capacity</span>
              </div>
              <div className="w-full h-2 bg-secondary-dark/20 rounded-full overflow-hidden border border-secondary-dark/40">
                <div className="h-full bg-accent-orange w-[94%]" />
              </div>
            </div>

            {/* Diagnostic wave visualization */}
            <div className="h-20 flex items-end gap-1.5 pt-4">
              {[40, 60, 45, 90, 75, 50, 85, 60, 40, 95, 70, 50, 80, 60].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-secondary-dark/30 hover:bg-primary-yellow rounded-t transition-all duration-300"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-secondary-dark/30">
            <h3 className="font-mono text-base text-light mb-1">Telemetry Dashboard</h3>
            <p className="text-xs text-secondary-light">Monitor data workloads and queue capacity at global border nodes in real-time.</p>
          </div>
        </div>

        {/* Card 2: Visual Flowchart Canvas (Grid Col: 4) */}
        <div 
          onMouseEnter={() => setActiveIndex(1)}
          className={`col-span-4 rounded-2xl border p-6 flex flex-col justify-between bg-primary-dark/40 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${activeIndex === 1 ? 'border-primary-yellow shadow-[0_0_30px_rgba(255,200,1,0.08)] scale-[1.01]' : 'border-secondary-dark/40'}`}
        >
          <div className="flex items-center justify-between border-b border-secondary-dark/30 pb-4 mb-4">
            <span className="font-mono text-xs text-secondary-light/60 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-orange rounded-full animate-ping" />
              \\\ FLOWCHART_CANVAS
            </span>
            <Cog8ToothIcon className="text-accent-orange animate-[spin_8s_linear_infinite]" size={16} />
          </div>

          {/* Flowchart canvas elements connected by lines */}
          <div className="flex-1 flex flex-col justify-center items-center relative py-4">
            <div className="flex flex-col gap-8 w-full z-10">
              <div className="flex justify-between items-center px-4">
                <div className="px-3 py-1.5 bg-secondary-dark/40 border border-secondary-dark/80 rounded font-mono text-[10px] text-light">
                  Email Trigger
                </div>
                <div className="px-3 py-1.5 bg-secondary-dark/40 border border-secondary-dark/80 rounded font-mono text-[10px] text-light">
                  AI Agent
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="px-4 py-2 bg-primary-yellow/10 border border-primary-yellow rounded font-mono text-[10px] text-primary-yellow font-semibold animate-pulse">
                  Code Ingestion
                </div>
              </div>
            </div>

            {/* Connecting lines using SVGs */}
            <svg className="absolute inset-0 w-full h-full stroke-secondary-dark/40 stroke-[1.5] fill-none pointer-events-none">
              <path d="M 80 50 L 150 110 M 220 50 L 150 110" className="stroke-primary-yellow/20" />
              <path d="M 150 135 L 150 180" className="stroke-accent-orange/30 border-dashed" />
            </svg>
          </div>

          <div className="pt-4 border-t border-secondary-dark/30">
            <h3 className="font-mono text-base text-light mb-1">Visual Orchestration</h3>
            <p className="text-xs text-secondary-light">Map complex database workflows and trigger AI functions through our visual flowchart editor.</p>
          </div>
        </div>

        {/* Card 3: Toggleable Tabs (Grid Col: 4) */}
        <div 
          onMouseEnter={() => setActiveIndex(2)}
          className={`col-span-4 rounded-2xl border p-6 flex flex-col justify-between bg-primary-dark/40 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${activeIndex === 2 ? 'border-primary-yellow shadow-[0_0_30px_rgba(255,200,1,0.08)] scale-[1.01]' : 'border-secondary-dark/40'}`}
        >
          <div className="flex items-center justify-between border-b border-secondary-dark/30 pb-4 mb-4">
            <span className="font-mono text-xs text-secondary-light/60 flex items-center gap-2">
              \\\ EXECUTION_TABS
            </span>
            <Cube16SolidIcon className="text-secondary-light" size={16} />
          </div>

          {/* Toggleable Tabs */}
          <div className="flex-1 flex flex-col gap-4 justify-start pt-4">
            <div className="flex gap-1.5 bg-secondary-dark/25 p-1 rounded-lg border border-secondary-dark/60">
              {(['DISCOVERY', 'ANALYSIS', 'TRAINING'] as TabKey[]).map((tab) => (
                <button
                  key={tab}
                  onMouseEnter={() => setActiveTab(tab)}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-1.5 rounded text-[10px] font-mono font-bold transition-all duration-300 ${activeTab === tab ? 'bg-primary-yellow text-primary-dark shadow-sm' : 'text-secondary-light hover:text-light'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content panel */}
            <div className="p-4 rounded-lg bg-secondary-dark/15 border border-secondary-dark/40 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-mono text-xs text-primary-yellow font-bold mb-2 uppercase tracking-wide">
                  {tabContents[activeTab].title}
                </h4>
                <p className="text-xs text-secondary-light leading-relaxed">
                  {tabContents[activeTab].desc}
                </p>
              </div>
              <div className="font-mono text-[9px] text-accent-orange/80 mt-4 border-t border-secondary-dark/20 pt-2">
                {tabContents[activeTab].telemetry}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-secondary-dark/30">
            <h3 className="font-mono text-base text-light mb-1">Agent Discovery</h3>
            <p className="text-xs text-secondary-light">Configure and train custom data agents for schema analysis and cataloging.</p>
          </div>
        </div>

      </div>

      {/* Mobile Accordion (Flex accordion layout with context lock & buttery-smooth CSS grids) */}
      <div className="lg:hidden flex flex-col gap-4">
        
        {/* Accordion Item 0 (Telemetry) */}
        <div className={`border rounded-2xl overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeIndex === 0 ? 'border-primary-yellow bg-secondary-dark/10' : 'border-secondary-dark/40 bg-primary-dark/30'}`}>
          <button
            onClick={() => setActiveIndex(0)}
            className="w-full text-left p-6 font-mono text-sm md:text-base text-light flex justify-between items-center"
          >
            <span className="flex items-center gap-3">
              <span className={`p-2 rounded border transition-colors duration-300 ${activeIndex === 0 ? 'bg-primary-yellow/15 border-primary-yellow/30 text-primary-yellow' : 'bg-secondary-dark/20 border-secondary-dark/40 text-secondary-light'}`}>
                <ChartPieIcon size={16} />
              </span>
              Telemetry Dashboard
            </span>
            <ChevronDownIcon className={`w-4 h-4 transform transition-transform duration-300 ${activeIndex === 0 ? 'rotate-180 text-primary-yellow' : 'text-secondary-light'}`} />
          </button>
          <div className={`smooth-accordion ${activeIndex === 0 ? 'smooth-accordion-open' : ''}`}>
            <div className="overflow-hidden p-6 pt-0 border-t border-secondary-dark/10 space-y-4">
              <p className="text-xs text-secondary-light leading-relaxed">
                Monitor data workloads and queue capacity at global border nodes in real-time.
              </p>
              {/* Mini telemetry details */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between font-mono text-[9px] text-secondary-light/60">
                  <span>INGEST_RATE</span>
                  <span className="text-primary-yellow">45,920 req/s</span>
                </div>
                <div className="w-full h-1.5 bg-secondary-dark/20 rounded-full overflow-hidden border border-secondary-dark/40">
                  <div className="h-full bg-primary-yellow w-[85%]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Item 1 (Flowchart) */}
        <div className={`border rounded-2xl overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeIndex === 1 ? 'border-primary-yellow bg-secondary-dark/10' : 'border-secondary-dark/40 bg-primary-dark/30'}`}>
          <button
            onClick={() => setActiveIndex(1)}
            className="w-full text-left p-6 font-mono text-sm md:text-base text-light flex justify-between items-center"
          >
            <span className="flex items-center gap-3">
              <span className={`p-2 rounded border transition-colors duration-300 ${activeIndex === 1 ? 'bg-primary-yellow/15 border-primary-yellow/30 text-primary-yellow' : 'bg-secondary-dark/20 border-secondary-dark/40 text-secondary-light'}`}>
                <Cog8ToothIcon size={16} />
              </span>
              Visual Orchestration
            </span>
            <ChevronDownIcon className={`w-4 h-4 transform transition-transform duration-300 ${activeIndex === 1 ? 'rotate-180 text-primary-yellow' : 'text-secondary-light'}`} />
          </button>
          <div className={`smooth-accordion ${activeIndex === 1 ? 'smooth-accordion-open' : ''}`}>
            <div className="overflow-hidden p-6 pt-0 border-t border-secondary-dark/10 space-y-4">
              <p className="text-xs text-secondary-light leading-relaxed">
                Map complex database workflows and trigger AI functions through our visual flowchart editor.
              </p>
              <div className="flex gap-2 justify-center pt-2">
                <div className="px-2 py-1 bg-secondary-dark/30 border border-secondary-dark/80 rounded font-mono text-[9px] text-light">Trigger</div>
                <div className="px-2 py-1 bg-primary-yellow/15 border border-primary-yellow/40 rounded font-mono text-[9px] text-primary-yellow">AI Code</div>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Item 2 (Tabs) */}
        <div className={`border rounded-2xl overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeIndex === 2 ? 'border-primary-yellow bg-secondary-dark/10' : 'border-secondary-dark/40 bg-primary-dark/30'}`}>
          <button
            onClick={() => setActiveIndex(2)}
            className="w-full text-left p-6 font-mono text-sm md:text-base text-light flex justify-between items-center"
          >
            <span className="flex items-center gap-3">
              <span className={`p-2 rounded border transition-colors duration-300 ${activeIndex === 2 ? 'bg-primary-yellow/15 border-primary-yellow/30 text-primary-yellow' : 'bg-secondary-dark/20 border-secondary-dark/40 text-secondary-light'}`}>
                <Cube16SolidIcon size={16} />
              </span>
              Agent Discovery
            </span>
            <ChevronDownIcon className={`w-4 h-4 transform transition-transform duration-300 ${activeIndex === 2 ? 'rotate-180 text-primary-yellow' : 'text-secondary-light'}`} />
          </button>
          <div className={`smooth-accordion ${activeIndex === 2 ? 'smooth-accordion-open' : ''}`}>
            <div className="overflow-hidden p-6 pt-0 border-t border-secondary-dark/10 space-y-4">
              {/* Category buttons on mobile */}
              <div className="flex gap-1 bg-secondary-dark/25 p-1 rounded border border-secondary-dark/60">
                {(['DISCOVERY', 'ANALYSIS', 'TRAINING'] as TabKey[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-1 rounded text-[9px] font-mono font-bold transition-all duration-300 ${activeTab === tab ? 'bg-primary-yellow text-primary-dark' : 'text-secondary-light'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="p-4 rounded-lg bg-secondary-dark/10 border border-secondary-dark/40">
                <h4 className="font-mono text-xs text-primary-yellow font-bold mb-1 uppercase">
                  {tabContents[activeTab].title}
                </h4>
                <p className="text-xs text-secondary-light leading-relaxed">
                  {tabContents[activeTab].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
