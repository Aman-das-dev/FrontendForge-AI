'use client';
import { useEffect, useRef } from 'react';

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!glowRef.current) return;
        glowRef.current.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
      });
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-[40] w-[300px] h-[300px] rounded-full opacity-15 blur-[100px] bg-primary-yellow transition-transform duration-100 ease-out will-change-transform hidden md:block"
      style={{ transform: 'translate(-200px, -200px)' }}
      aria-hidden="true"
    />
  );
}
