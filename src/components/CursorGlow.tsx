'use client';
import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[40] w-[300px] h-[300px] rounded-full opacity-15 blur-[100px] bg-primary-yellow transition-transform duration-100 ease-out will-change-transform hidden md:block"
      style={{
        transform: `translate(${pos.x - 150}px, ${pos.y - 150}px)`,
      }}
      aria-hidden="true"
    />
  );
}
