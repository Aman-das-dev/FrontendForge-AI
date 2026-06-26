'use client';
import React, { useState, useEffect } from 'react';

const LOGOS = [
  'AWS',
  'OpenAI',
  'Anthropic',
  'Pinecone',
  'Microsoft',
  'Meta',
  'HuggingFace',
  'Bolt'
];

export function Footer() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    setTime(new Date().toISOString().substring(11, 19));
    const timer = setInterval(() => {
      setTime(new Date().toISOString().substring(11, 19));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="w-full bg-primary-dark border-t border-secondary-dark/30 pt-10 pb-6 overflow-hidden">
      {/* 1. Continuous Marquee Ticker */}
      <div className="w-full border-y border-secondary-dark/30 py-5 mb-8 relative overflow-hidden bg-primary-dark">
        <div className="flex w-[200%] gap-6 sm:gap-12 items-center animate-[marquee_20s_linear_infinite]">
          {/* First Loop */}
          <div className="flex justify-around w-1/2 items-center gap-6 sm:gap-12">
            {LOGOS.map((logo, idx) => (
              <span key={idx} className="font-mono text-sm tracking-widest text-secondary-light/40 uppercase font-bold hover:text-primary-yellow transition-colors">
                {logo}
              </span>
            ))}
          </div>
          {/* Second Loop for seamless sliding */}
          <div className="flex justify-around w-1/2 items-center gap-6 sm:gap-12">
            {LOGOS.map((logo, idx) => (
              <span key={`dup-${idx}`} className="font-mono text-sm tracking-widest text-secondary-light/40 uppercase font-bold hover:text-primary-yellow transition-colors">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-12 mb-4 text-left">
        {/* Logo and Tagline (Left side) */}
        <div className="flex flex-col justify-between h-fit gap-4 max-w-md min-w-0">
          <div>
            <h3 className="font-mono text-xl font-bold text-light mb-3">NEXUS</h3>
            <p className="text-secondary-light text-sm leading-relaxed max-w-sm">
              Tactical operation layers for high-throughput enterprise architectures. Distributed telemetry scheduler.
            </p>
          </div>
          <p className="text-xs text-secondary-light/50 font-mono">
            \\\ BUILD_SYS_ACTIVE // v3.02
          </p>
        </div>

        {/* Quick Links & Newsletter Signup (Right side) */}
        <div className="flex flex-col sm:flex-row gap-8 md:gap-16 w-full md:w-auto min-w-0">
          {/* Quick Links */}
          <div className="min-w-0 sm:min-w-[150px]">
            <h4 className="font-mono text-xs font-bold text-primary-yellow tracking-widest uppercase mb-4">\\\ RESOURCES</h4>
            <ul className="space-y-2 text-sm text-secondary-light">
              <li><a href="#features" className="hover:text-light transition-colors">Platform Features</a></li>
              <li><a href="#case-studies" className="hover:text-light transition-colors">Ingestion Telemetry</a></li>
              <li><a href="#pricing" className="hover:text-light transition-colors">Pricing Matrix</a></li>
              <li><a href="#faq" className="hover:text-light transition-colors">Frequently Asked</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="min-w-0 sm:min-w-[120px]">
            <h4 className="font-mono text-xs font-bold text-primary-yellow tracking-widest uppercase mb-4">\\\ LEGAL</h4>
            <ul className="space-y-2 text-sm text-secondary-light">
              <li><a href="#" className="hover:text-light transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-light transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-light transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-light transition-colors">LinkedIn</a></li>
              <li><a href="/sitemap.xml" className="hover:text-light transition-colors">Sitemap</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-xs w-full min-w-0">
            <h4 className="font-mono text-xs font-bold text-primary-yellow tracking-widest uppercase mb-4">\\\ GET STARTED</h4>
            <p className="text-xs text-secondary-light mb-3 leading-relaxed">
              Subscribe to receive direct system status updates and pipeline advisories.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="ops@domain.com"
                className="bg-secondary-dark/25 border border-secondary-dark text-light text-xs rounded-lg px-3 py-2 outline-none focus:border-primary-yellow w-full"
              />
              <button className="px-4 py-2 bg-primary-yellow text-primary-dark font-mono text-xs font-bold rounded-lg hover:bg-light transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Massive Stretched Logo & Copyright (Highly Compact & Negative Margins) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 border-t border-secondary-dark/20 pt-4 flex flex-col items-center gap-2">
        <div aria-hidden="true" className="text-[12vw] md:text-[14vw] font-mono font-black text-secondary-dark/10 select-none tracking-widest leading-[0.7] text-center w-full uppercase -mt-6 -mb-6 md:-mt-12 md:-mb-12">
          NEXUS
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full text-xs text-secondary-light/50 font-mono gap-4 text-center sm:text-left border-t border-secondary-dark/10 pt-3">
          <span>&copy; {new Date().getFullYear()} NEXUS DATA OPS. ALL RIGHTS RESERVED.</span>
          <span suppressHydrationWarning>SYSTEM TIME: {time || new Date().toISOString().substring(11, 19)} UTC</span>
        </div>
      </div>
    </footer>
  );
}
