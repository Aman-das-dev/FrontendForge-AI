'use client';
import { useState } from 'react';

const BENTO_ITEMS = [
  { id: 1, title: 'AI Automation', content: 'Automate your workflows seamlessly with our advanced ML models. No cold starts, just instantaneous execution at the edge.' },
  { id: 2, title: 'Real-time Analytics', content: 'Monitor your enterprise data with millisecond latency. Build custom dashboards directly connected to your data warehouse.' },
  { id: 3, title: 'Edge Infrastructure', content: 'Deploy your functions to the edge globally. We route your users to the nearest node for zero latency.' },
  { id: 4, title: 'Global Scale', content: 'Built on infrastructure that scales automatically with your needs. From 10 to 10M users without changing a single line of code.' },
];

export function BentoSystem() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-mono text-light mb-4">Enterprise Features</h2>
        <p className="text-secondary-light max-w-2xl mx-auto text-balance">
          Discover a platform built for speed and reliability. Hover on desktop or tap on mobile.
        </p>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-3 gap-6 h-[400px]">
        {BENTO_ITEMS.map((item, idx) => {
           const isActive = activeIndex === idx;
           return (
             <button
               key={item.id}
               onMouseEnter={() => setActiveIndex(idx)}
               onFocus={() => setActiveIndex(idx)}
               className={`relative overflow-hidden border transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-2xl p-8 flex flex-col justify-end text-left group
                 ${isActive ? 'col-span-2 border-primary-yellow bg-secondary-dark/20' : 'col-span-1 border-secondary-dark bg-primary-dark/30 hover:border-primary-yellow/50'}
               `}
               aria-expanded={isActive}
             >
               <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-80 z-0"></div>
               <div className="relative z-10 w-full">
                 <h3 className={`font-mono transition-all duration-400 mb-2 ${isActive ? 'text-2xl text-primary-yellow' : 'text-xl text-light'}`}>
                   {item.title}
                 </h3>
                 <div className={`transition-all duration-400 ease-out overflow-hidden ${isActive ? 'max-h-32 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'}`}>
                   <p className="text-secondary-light">{item.content}</p>
                 </div>
               </div>
             </button>
           );
        })}
      </div>

      {/* Mobile Accordion Layout */}
      <div className="md:hidden flex flex-col gap-4">
        {BENTO_ITEMS.map((item, idx) => {
           const isActive = activeIndex === idx;
           return (
             <div 
               key={item.id} 
               className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isActive ? 'border-primary-yellow bg-secondary-dark/20' : 'border-secondary-dark bg-primary-dark/30'}`}
             >
               <button
                 className="w-full text-left p-6 font-mono text-lg text-light flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary-yellow/50"
                 onClick={() => setActiveIndex(idx)}
                 aria-expanded={isActive}
               >
                 <span className={isActive ? 'text-primary-yellow' : ''}>{item.title}</span>
                 <svg 
                   className={`w-5 h-5 transform transition-transform duration-300 ${isActive ? 'rotate-180 text-primary-yellow' : 'text-secondary-light'}`} 
                   fill="none" viewBox="0 0 24 24" stroke="currentColor"
                 >
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                 </svg>
               </button>
               <div 
                 className={`grid transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
               >
                 <div className="overflow-hidden">
                   <p className="p-6 pt-0 text-secondary-light">{item.content}</p>
                 </div>
               </div>
             </div>
           );
        })}
      </div>
    </div>
  );
}
