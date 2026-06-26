import Link from 'next/link';

export function Navigation() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-primary-dark/80 backdrop-blur-md border-b border-secondary-dark/30">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-xl font-bold tracking-tight text-light flex items-center gap-2 group">
          <svg className="w-6 h-6 text-primary-yellow transition-transform duration-300 group-hover:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
          <span>VIBE<span className="text-primary-yellow">OS</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary-light">
          <Link href="#features" className="hover:text-light transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-light transition-colors">Pricing</Link>
          <Link href="#testimonials" className="hover:text-light transition-colors">Enterprise</Link>
          <a href="https://github.com/Aman-das-dev/FrontendForge-AI" target="_blank" rel="noopener noreferrer" className="hover:text-light transition-colors">Github</a>
        </nav>

        <div>
          <button className="px-5 py-2 bg-secondary-dark/50 border border-secondary-dark rounded-full text-sm font-medium text-light hover:border-primary-yellow transition-all duration-200">
            Launch Console
          </button>
        </div>
      </div>
    </header>
  );
}
