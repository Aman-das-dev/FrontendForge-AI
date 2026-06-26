'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowPathIcon, LinkIcon } from './Icons';

export function Navigation() {
  const [showConnects, setShowConnects] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-primary-dark/80 backdrop-blur-md border-b border-secondary-dark/30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="font-mono text-xl font-bold tracking-tight text-light flex items-center gap-2 group">
          <ArrowPathIcon className="text-primary-yellow transition-transform duration-500 group-hover:rotate-180" size={24} />
          <span>NEX<span className="text-primary-yellow">US</span></span>
        </Link>

        <div className="hidden lg:flex items-center">
          <button
            type="button"
            onClick={() => setShowConnects((value) => !value)}
            className="font-mono text-[11px] tracking-[0.28em] text-secondary-light uppercase rounded-full border border-secondary-dark/60 bg-secondary-dark/20 px-4 py-1.5 hover:border-primary-yellow/50 hover:text-light transition-all duration-200"
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

        <div>
          <button className="px-5 py-2 bg-secondary-dark/50 border border-secondary-dark rounded-full text-sm font-medium text-light hover:border-primary-yellow transition-all duration-200">
            Launch Console
          </button>
        </div>
      </div>
    </header>
  );
}
