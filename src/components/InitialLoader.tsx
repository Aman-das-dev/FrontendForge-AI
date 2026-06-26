'use client';
import { useEffect, useState } from 'react';

export function InitialLoader() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Complete orchestration safely within 500ms cap (400ms execution)
    const timer = setTimeout(() => {
      setMounted(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-primary-dark flex flex-col items-center justify-center animate-[fadeOut_0.4s_ease-out_forwards] pointer-events-none">
      <div className="font-mono text-primary-yellow text-sm tracking-widest animate-pulse">
        \\\ INITIALIZING NEXUS KERNEL
      </div>
      <div className="w-48 h-1 bg-secondary-dark mt-4 overflow-hidden rounded-full">
        <div className="h-full w-full bg-primary-yellow origin-left animate-[loadingBar_0.3s_ease-in-out_forwards]" />
      </div>
    </div>
  );
}
