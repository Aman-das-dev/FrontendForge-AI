import { ArrowTrendingUpIcon } from './Icons';

const TESTIMONIALS = [
  {
    quote: "NEXUS transformed our data automation ingestion speeds. We scaled from 1,000 events to 5,000,000 daily with zero database tuning.",
    author: "Elena Rostova",
    role: "VP of Infrastructure, NeuroScale",
    metric: "+480% Throughput"
  },
  {
    quote: "The isolation layers and pricing predictability made this an easy choice. We saved over $80k in annual cloud costs.",
    author: "Marcus Chen",
    role: "CTO, EdgeFlow Corp",
    metric: "-65% Compute Cost"
  },
  {
    quote: "A masterclass in API design and developer experience. The edge-routing ensures our global users have sub-10ms response times.",
    author: "Sarah Jenkins",
    role: "Lead Platform Engineer, ByteSync",
    metric: "9.2ms Mean Latency"
  }
];

export function SocialProof() {
  return (
    <div id="testimonials" className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 border-t border-secondary-dark/30">
      <div className="text-center mb-16">
        <span className="font-mono text-sm uppercase tracking-wider text-accent-orange bg-accent-orange/10 px-3.5 py-1 rounded-full">Case Studies</span>
        <h2 className="text-3xl md:text-4xl font-mono text-light mt-4 mb-4">Trusted at Enterprise Scale</h2>
        <p className="text-secondary-light max-w-2xl mx-auto text-balance">
          Read how top-tier teams leverage our distributed automation platform to run intensive workloads.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div 
            key={i} 
            className="p-8 rounded-2xl border border-secondary-dark/60 bg-primary-dark/40 backdrop-blur-sm flex flex-col justify-between transition-all duration-300 hover:border-primary-yellow/45 group"
          >
            <div>
              <div className="font-mono text-lg font-bold text-primary-yellow mb-6">{t.metric}</div>
              <p className="text-light/90 italic mb-8 text-sm md:text-base leading-relaxed">
                "{t.quote}"
              </p>
            </div>
            <div className="border-t border-secondary-dark/40 pt-4 flex items-center justify-between">
              <div>
                <div className="font-medium text-light text-sm">{t.author}</div>
                <div className="text-secondary-light text-xs mt-0.5">{t.role}</div>
              </div>
              <ArrowTrendingUpIcon className="text-secondary-dark group-hover:text-primary-yellow transition-colors duration-300" size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
