export function CTASection() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 border-t border-secondary-dark/30">
      <div className="relative rounded-3xl border border-primary-yellow/20 bg-gradient-to-br from-secondary-dark/20 via-primary-dark to-secondary-dark/10 p-12 md:p-20 text-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-yellow/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          <span className="font-mono text-xs tracking-widest text-primary-yellow bg-secondary-dark/30 border border-secondary-dark/60 px-3.5 py-1.5 rounded-full mb-6 inline-block">
            \\\ DEPLOY NOW
          </span>
          <h2 className="text-3xl md:text-5xl font-mono text-light mb-6">Ready to Scale Your Data?</h2>
          <p className="text-secondary-light max-w-xl mx-auto text-sm md:text-base mb-10 text-balance">
            Join 500+ enterprise teams running mission-critical workloads on NEXUS. Start free, scale infinitely.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="px-10 py-4 bg-primary-yellow text-primary-dark font-mono text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-light transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:ring-offset-2 focus:ring-offset-primary-dark"
            >
              Start Free Trial
            </a>
            <a
              href="#features"
              className="px-10 py-4 border border-secondary-dark text-light font-mono text-sm font-bold uppercase tracking-wider rounded-lg hover:border-primary-yellow hover:text-primary-yellow transition-all duration-200"
            >
              View Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
