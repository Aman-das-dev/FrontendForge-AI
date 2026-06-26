'use client';
import { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Animate the counter
          const duration = 1500;
          const startTime = performance.now();

          function animate(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic for smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          }
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-center p-8 rounded-2xl border border-secondary-dark/40 bg-primary-dark/40 backdrop-blur-sm hover:border-primary-yellow/30 transition-colors duration-300">
      <div className="flex items-baseline justify-center gap-1 mb-3">
        <span className="text-5xl md:text-6xl font-mono font-bold text-light">{count.toLocaleString()}</span>
        <span className="text-2xl font-mono text-primary-yellow">{suffix}</span>
      </div>
      <p className="text-sm text-secondary-light font-mono">{label}</p>
    </div>
  );
}

export function AnimatedStats() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 border-t border-secondary-dark/30">
      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-widest text-primary-yellow bg-secondary-dark/30 border border-secondary-dark/60 px-3.5 py-1.5 rounded-full">
          \\\ PLATFORM METRICS
        </span>
        <h2 className="text-3xl md:text-5xl font-mono text-light mt-6 mb-4">Numbers That Matter</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <AnimatedCounter target={10} suffix="M+" label="Automations" />
        <AnimatedCounter target={98} suffix="%" label="Accuracy" />
        <AnimatedCounter target={24} suffix="/7" label="Monitoring" />
        <AnimatedCounter target={500} suffix="+" label="Enterprise Clients" />
      </div>
    </section>
  );
}
