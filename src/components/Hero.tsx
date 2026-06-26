'use client';
import React from 'react';
import { ArrowPathIcon } from './Icons';

export function Hero() {
  return (
    <section className="w-full pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-80 h-80 bg-secondary-dark/25 rounded-full blur-3xl -z-10" />
      
      {/* Left Column: Copy */}
      <div className="flex flex-col items-start text-left">
        <span className="font-mono text-xs tracking-widest text-primary-yellow bg-secondary-dark/30 border border-secondary-dark/60 px-3.5 py-1.5 rounded-full mb-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-primary-yellow rounded-full animate-pulse" />
          \\\ SYSTEM INTERFACE: ACTIVE
        </span>
        <h1 className="text-6xl md:text-8xl font-mono text-light tracking-tighter mb-6 leading-none">
          NEXUS
        </h1>
        <p className="text-lg md:text-xl text-secondary-light font-sans max-w-lg mb-10 leading-relaxed">
          The tactical execution layer for enterprise data operations. Direct telemetry pipelines, zero-cold-start edge compute, and autonomous system orchestration.
        </p>
        <div className="flex flex-row items-center gap-6">
          <a 
            href="#pricing" 
            className="px-8 py-4 bg-primary-yellow text-primary-dark font-mono text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-light transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:ring-offset-2 focus:ring-offset-primary-dark"
          >
            Start Building
          </a>
          <a 
            href="#features" 
            className="font-mono text-sm font-bold uppercase tracking-wider text-secondary-light hover:text-light transition-colors flex items-center gap-2 group"
          >
            Read Telemetry Docs
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>

      {/* Right Column: Radar Graphic */}
      <div className="flex justify-center items-center relative h-[350px] md:h-[450px] w-full">
        {/* Animated Radar Radar Container */}
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-secondary-dark/30 rounded-full flex items-center justify-center">
          {/* Coordinates Grid Lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[1px] h-full bg-secondary-dark/20" />
            <div className="h-[1px] w-full bg-secondary-dark/20" />
          </div>
          
          {/* Concentric Circles */}
          <div className="absolute w-[80%] h-[80%] border border-secondary-dark/20 rounded-full" />
          <div className="absolute w-[60%] h-[60%] border border-secondary-dark/15 rounded-full" />
          <div className="absolute w-[40%] h-[40%] border border-secondary-dark/10 rounded-full" />
          <div className="absolute w-[20%] h-[20%] border border-secondary-dark/10 rounded-full" />

          {/* Rotating Sweeper */}
          <div className="absolute inset-0 rounded-full animate-[spin_6s_linear_infinite] pointer-events-none z-10">
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent to-primary-yellow/10 origin-right border-r border-primary-yellow/30" 
                 style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }} />
          </div>

          {/* Radar Target Rings & Ticks */}
          <div className="absolute inset-4 border border-dashed border-secondary-light/10 rounded-full animate-[spin_20s_linear_infinite]" />
          
          {/* Pulsing Nodes */}
          <div className="absolute top-[25%] left-[30%] w-2 h-2 bg-primary-yellow rounded-full shadow-[0_0_10px_#FFC801] animate-ping" />
          <div className="absolute top-[25%] left-[30%] w-2 h-2 bg-primary-yellow rounded-full" />
          
          <div className="absolute bottom-[35%] right-[25%] w-1.5 h-1.5 bg-accent-orange rounded-full shadow-[0_0_8px_#FF9932] animate-pulse" />
          
          <div className="absolute top-[60%] left-[20%] w-2 h-2 bg-secondary-light rounded-full opacity-60 animate-[pulse_2s_infinite]" />

          {/* Center Core */}
          <div className="relative w-12 h-12 bg-primary-dark border border-primary-yellow/40 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,200,1,0.15)]">
            <ArrowPathIcon className="text-primary-yellow animate-[spin_10s_linear_infinite]" size={20} />
          </div>

          {/* Micro Telemetry Text Around Radar */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 font-mono text-[9px] text-secondary-light/40 tracking-wider">
            RADAR_BEACON_09 // ACTV
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-mono text-[9px] text-secondary-light/40 tracking-wider">
            GRID_COORD_45.98 // -112.45
          </div>
        </div>
      </div>
    </section>
  );
}
