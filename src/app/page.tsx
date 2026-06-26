import { BillingToggle, CurrencySelect, PricingCard } from '@/components/Pricing';
import { BentoSystem } from '@/components/BentoGrid';
import { Navigation } from '@/components/Navigation';
import { SocialProof } from '@/components/SocialProof';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex flex-col items-center w-full pt-16">
        {/* Hero Section */}
        <section className="w-full pt-32 pb-20 px-4 text-center max-w-5xl mx-auto relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-secondary-dark/20 rounded-full blur-3xl -z-10" />
          <span className="font-mono text-sm uppercase tracking-wider text-primary-yellow bg-primary-yellow/10 px-3.5 py-1 rounded-full mb-6 inline-block">
            Beta v3.0 Live
          </span>
          <h1 className="text-5xl md:text-7xl font-mono text-light tracking-tight mb-6 animate-fade-in-up">
            Code at the speed of <span className="text-primary-yellow inline-block">thought.</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-light font-sans max-w-3xl mx-auto mb-10 text-balance animate-fade-in-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
            The next-generation enterprise AI platform. Transparent pricing, dynamic features, and unmatched performance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <a 
              href="#pricing" 
              className="px-8 py-4 bg-primary-yellow text-primary-dark font-medium rounded-full hover:bg-light hover:text-primary-dark transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:ring-offset-2 focus:ring-offset-primary-dark"
            >
              Start Deploying
            </a>
            <a 
              href="#features" 
              className="px-8 py-4 bg-secondary-dark/50 border border-secondary-dark text-light font-medium rounded-full hover:bg-secondary-dark transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-dark focus:ring-offset-2 focus:ring-offset-primary-dark"
            >
              Read Documentation
            </a>
          </div>
        </section>

        {/* Feature 2: Responsive Bento System */}
        <section id="features" className="w-full border-t border-secondary-dark/30">
          <BentoSystem />
        </section>

        {/* Feature 1: Pricing Engine */}
        <section id="pricing" className="w-full py-24 px-4 bg-primary-dark/30 border-t border-secondary-dark/30 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="font-mono text-sm uppercase tracking-wider text-accent-orange bg-accent-orange/10 px-3.5 py-1 rounded-full mb-4 inline-block">
                Transparent Plans
              </span>
              <h2 className="text-3xl md:text-4xl font-mono text-light mb-4">Pricing Engine</h2>
              <p className="text-secondary-light mb-8 max-w-xl mx-auto">
                Scale your infrastructure infinitely without surprise bills. Select your preferred currency and billing cycle.
              </p>
              
              {/* Controls */}
              <div className="flex flex-col items-center justify-center gap-6">
                <BillingToggle />
                <CurrencySelect />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <PricingCard 
                title="Starter" 
                plan="starter" 
                features={[
                  "Up to 10,000 requests/mo",
                  "Community support",
                  "Standard analytics",
                  "1 edge region"
                ]} 
              />
              <PricingCard 
                title="Pro" 
                plan="pro" 
                popular={true}
                features={[
                  "Up to 1M requests/mo",
                  "Priority email support",
                  "Real-time analytics",
                  "Global edge network",
                  "Advanced AI models"
                ]} 
              />
              <PricingCard 
                title="Enterprise" 
                plan="enterprise" 
                features={[
                  "Unlimited requests",
                  "24/7 phone & Slack support",
                  "Custom SLAs",
                  "Dedicated hardware",
                  "SSO & advanced security"
                ]} 
              />
            </div>
          </div>
        </section>

        {/* Social Proof / Testimonials */}
        <section className="w-full bg-primary-dark">
          <SocialProof />
        </section>

        {/* Footer */}
        <footer className="w-full py-12 border-t border-secondary-dark/30 text-center text-secondary-light text-sm">
          <p>&copy; {new Date().getFullYear()} VibeCoding Enterprise. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
