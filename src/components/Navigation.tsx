'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowPathIcon, LinkIcon } from './Icons';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const [showConnects, setShowConnects] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-primary-dark/80 backdrop-blur-md border-b border-secondary-dark/30">
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="font-mono text-xl font-bold tracking-tight text-light flex items-center gap-2 group">
          <ArrowPathIcon className="text-primary-yellow transition-transform duration-500 group-hover:rotate-180" size={24} />
          <span>NEX<span className="text-primary-yellow">US</span></span>
        </Link>

        <div className="hidden lg:flex items-center">
          <button
            type="button"
            onClick={() => setShowConnects((value) => !value)}
            className="font-mono text-[11px] tracking-[0.28em] text-secondary-light uppercase rounded-full border border-secondary-dark/60 bg-secondary-dark/20 px-4 py-1.5 hover:border-primary-yellow/50 hover:text-light transition-all duration-200 motion-safe:animate-[float_6s_ease-in-out_infinite]"
            aria-expanded={showConnects}
            aria-label="Toggle Connects Everywhere"
          >
            {showConnects ? 'Connects Everywhere' : 'Connects'}
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary-light">
          <Link href="#features" className="hover:text-light transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-light transition-colors">Pricing</Link>
          <Link href="#testimonials" className="hover:text-light transition-colors flex items-center gap-1">
            Enterprise <LinkIcon size={14} className="opacity-60" />
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="px-5 py-2 bg-secondary-dark/50 border border-secondary-dark rounded-full text-sm font-medium text-light hover:border-primary-yellow transition-all duration-200">
            Launch Console
          </button>
        </div>

        {showConnects && (
          <div className="absolute top-full right-[11rem] mt-3 w-[min(92vw,38rem)] rounded-2xl border border-secondary-dark/50 bg-primary-dark/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden animate-[pop-in_180ms_ease-out_both]">
            <div className="px-5 py-4 border-b border-secondary-dark/30">
              <p className="font-mono text-xs tracking-[0.28em] text-primary-yellow uppercase">Connects Everywhere</p>
              <p className="mt-2 text-sm text-secondary-light">
                Plug into your existing stack with native connectors and zero-config setup.
              </p>
            </div>
            <div className="grid gap-3 p-5 sm:grid-cols-2">
              {[
                ['S', 'Slack', 'Alerts & notifications'],
                ['G', 'GitHub', 'CI/CD webhooks'],
                ['N', 'Notion', 'Documentation sync'],
                ['Z', 'Zapier', 'Workflow triggers'],
                ['G', 'Google Drive', 'File ingestion'],
                ['A', 'Airtable', 'Database sync'],
                ['J', 'Jira', 'Issue tracking'],
                ['A', 'AWS S3', 'Cloud storage'],
              ].map(([initial, name, desc]) => (
                <div
                  key={`${name}-${desc}`}
                  className="flex items-center gap-3 rounded-xl border border-secondary-dark/40 bg-secondary-dark/10 px-3 py-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-secondary-dark/50 bg-primary-dark/60 font-mono text-sm font-bold text-primary-yellow">
                    {initial}
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-sm font-bold text-light">{name}</div>
                    <div className="text-xs text-secondary-light/80">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
