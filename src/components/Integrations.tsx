export function Integrations() {
  const integrations = [
    { name: 'Slack', desc: 'Alerts & notifications' },
    { name: 'GitHub', desc: 'CI/CD webhooks' },
    { name: 'Notion', desc: 'Documentation sync' },
    { name: 'Zapier', desc: 'Workflow triggers' },
    { name: 'Google Drive', desc: 'File ingestion' },
    { name: 'Airtable', desc: 'Database sync' },
    { name: 'Jira', desc: 'Issue tracking' },
    { name: 'AWS S3', desc: 'Cloud storage' },
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 border-t border-secondary-dark/30">
      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-widest text-accent-orange bg-secondary-dark/30 border border-secondary-dark/60 px-3.5 py-1.5 rounded-full">
          \\\ INTEGRATIONS
        </span>
        <h2 className="text-3xl md:text-5xl font-mono text-light mt-6 mb-4">Connects Everywhere</h2>
        <p className="text-secondary-light max-w-2xl mx-auto text-sm md:text-base text-balance">
          Plug into your existing stack with native connectors and zero-config setup.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {integrations.map((item) => (
          <div
            key={item.name}
            className="group p-6 rounded-2xl border border-secondary-dark/40 bg-primary-dark/40 backdrop-blur-sm hover:border-primary-yellow/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,200,1,0.06)] text-center"
          >
            <div className="w-12 h-12 mx-auto rounded-xl bg-secondary-dark/30 border border-secondary-dark/60 flex items-center justify-center mb-4 group-hover:border-primary-yellow/40 group-hover:bg-primary-yellow/5 transition-colors duration-300">
              <span className="font-mono text-lg font-bold text-secondary-light group-hover:text-primary-yellow transition-colors duration-300">
                {item.name.charAt(0)}
              </span>
            </div>
            <h3 className="font-mono text-sm text-light font-bold mb-1">{item.name}</h3>
            <p className="text-xs text-secondary-light/60">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
