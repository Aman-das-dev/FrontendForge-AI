'use client';
import React, { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // delay in ms
}

export function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  return (
    <div
      style={{ animationDelay: `${delay}ms` }}
      className={`w-full animate-[fade-in-up_700ms_cubic-bezier(0.16,1,0.3,1)_both] ${className}`}
    >
      {children}
    </div>
  );
}
