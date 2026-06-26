'use client';
import React, { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // delay in ms
}

export function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  return (
    <div className={`w-full opacity-100 translate-y-0 transition-opacity transition-transform duration-500 ease-out ${className}`}>
      {children}
    </div>
  );
}
