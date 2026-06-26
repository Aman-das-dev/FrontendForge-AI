'use client';
import { useState } from 'react';
import { ChevronDownIcon } from './Icons';

type FAQItem = {
  q: string;
  a: string;
};

const FAQ_DATA: Record<string, FAQItem[]> = {
  Overview: [
    {
      q: "What makes Nexus different from other data telemetry engines?",
      a: "Nexus is built from the ground up on a custom, performance-first execution layer. Unlike standard agents that run on high-latency virtual machines, Nexus connects direct edge channels with zero initialization delay."
    },
    {
      q: "Does Nexus run at the edge globally?",
      a: "Yes, our distributed scheduler automatically routes execution requests to the closest geographic point of presence, reducing global request latency to sub-10ms."
    }
  ],
  Security: [
    {
      q: "How does Nexus handle sensitive health and financial data?",
      a: "We maintain strict SOC2 Type II compliance and end-to-end TLS 1.3 encryption. Data processed in our pipelines is isolated at the hypervisor level and is never stored persistent unless explicitly requested."
    },
    {
      q: "Is Nexus compliant with HIPAA regulations?",
      a: "Yes, we support Business Associate Agreements (BAAs) for healthcare enterprise clients requiring HIPAA-compliant telemetry collection."
    }
  ]
};

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('Overview');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const categories = Object.keys(FAQ_DATA);
  const currentFaqs = FAQ_DATA[activeCategory] || [];

  return (
    <section id="faq" className="w-full py-24 px-6 md:px-12 border-t border-secondary-dark/30 max-w-[1400px] mx-auto grid md:grid-cols-5 gap-12">
      {/* Left Column: CTA */}
      <div className="md:col-span-2 flex flex-col items-start justify-between text-left">
        <div>
          <span className="font-mono text-xs tracking-widest text-primary-yellow bg-secondary-dark/30 border border-secondary-dark/60 px-3.5 py-1.5 rounded-full">
            \\\ FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-mono text-light mt-6 mb-4">Frequently Asked Questions</h2>
          <p className="text-secondary-light text-sm max-w-sm leading-relaxed mb-8">
            Can't find the answers you're looking for? Reach out directly to our platform operation engineers.
          </p>
        </div>
        <button className="px-6 py-3.5 bg-secondary-dark/50 border border-secondary-dark text-light font-mono text-xs font-bold uppercase tracking-wider rounded-lg hover:border-primary-yellow transition-all duration-200">
          Contact Operations
        </button>
      </div>

      {/* Right Column: Categories & Accordions */}
      <div className="md:col-span-3 flex flex-col gap-6">
        {/* Category Tabs */}
        <div className="flex gap-2 border-b border-secondary-dark/30 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setExpandedIndex(0); // Reset expanded accordion
              }}
              className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider border rounded-lg transition-all duration-300 ${activeCategory === cat ? 'bg-primary-yellow text-primary-dark border-primary-yellow' : 'bg-secondary-dark/25 border-secondary-dark text-secondary-light hover:text-light'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions with buttery-smooth grid-template-rows */}
        <div className="flex flex-col gap-4">
          {currentFaqs.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-xl transition-all duration-300 ${isExpanded ? 'border-primary-yellow/60 bg-secondary-dark/15' : 'border-secondary-dark/40 bg-primary-dark/30'}`}
              >
                <button
                  className="w-full text-left p-6 font-mono text-sm md:text-base text-light flex justify-between items-center focus:outline-none"
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                >
                  <span className={isExpanded ? 'text-primary-yellow' : ''}>{faq.q}</span>
                  <ChevronDownIcon
                    className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180 text-primary-yellow' : 'text-secondary-light'}`}
                  />
                </button>
                <div
                  className={`smooth-accordion ${isExpanded ? 'smooth-accordion-open' : ''}`}
                >
                  <div className="overflow-hidden">
                    <p className="p-6 pt-0 text-secondary-light text-sm leading-relaxed border-t border-secondary-dark/10">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
