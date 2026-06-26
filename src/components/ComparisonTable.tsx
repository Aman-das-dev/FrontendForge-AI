export function ComparisonTable() {
  const rows = [
    { label: 'Data Processing', traditional: 'Manual', nexus: 'Automated' },
    { label: 'Pipeline Speed', traditional: 'Hours', nexus: 'Seconds' },
    { label: 'Error Rate', traditional: 'Error-prone', nexus: '99.99% Accurate' },
    { label: 'Scalability', traditional: 'Limited', nexus: 'Infinite' },
    { label: 'Monitoring', traditional: 'Periodic', nexus: '24/7 Real-time' },
    { label: 'Deployment', traditional: 'Weeks', nexus: 'One Click' },
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 border-t border-secondary-dark/30">
      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-widest text-primary-yellow bg-secondary-dark/30 border border-secondary-dark/60 px-3.5 py-1.5 rounded-full">
          \\\ COMPARISON
        </span>
        <h2 className="text-3xl md:text-5xl font-mono text-light mt-6 mb-4">Why NEXUS?</h2>
        <p className="text-secondary-light max-w-2xl mx-auto text-sm md:text-base text-balance">
          See how our platform eliminates the bottlenecks of traditional data operations.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-secondary-dark/40">
        {/* Header */}
        <div className="hidden md:grid grid-cols-3 bg-secondary-dark/20 border-b border-secondary-dark/40">
          <div className="p-4 md:p-6 font-mono text-xs text-secondary-light/60 tracking-widest uppercase">Metric</div>
          <div className="p-4 md:p-6 font-mono text-xs text-secondary-light/40 tracking-widest uppercase text-center border-x border-secondary-dark/20">Traditional</div>
          <div className="p-4 md:p-6 font-mono text-xs text-primary-yellow tracking-widest uppercase text-center">NEXUS</div>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-1 md:grid-cols-3 transition-colors duration-200 hover:bg-secondary-dark/10 ${
              i < rows.length - 1 ? 'border-b border-secondary-dark/20' : ''
            }`}
          >
            <div className="p-4 md:p-6 font-mono text-xs md:text-sm text-light border-b md:border-b-0 md:border-r border-secondary-dark/20">
              {row.label}
            </div>
            <div className="p-4 md:p-6 text-sm text-secondary-light/50 text-left md:text-center border-b md:border-b-0 md:border-x border-secondary-dark/20 line-through decoration-secondary-light/20">
              {row.traditional}
            </div>
            <div className="p-4 md:p-6 text-sm text-primary-yellow font-medium text-left md:text-center">
              {row.nexus}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
