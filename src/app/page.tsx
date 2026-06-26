import { BillingToggle, CurrencySelect, PricingCard } from '@/components/Pricing';
import { BentoSystem } from '@/components/BentoGrid';
import { Navigation } from '@/components/Navigation';
import { SocialProof } from '@/components/SocialProof';
import { Hero } from '@/components/Hero';
import { CaseStudies } from '@/components/CaseStudies';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex flex-col items-center w-full bg-primary-dark overflow-x-hidden">
        {/* Feature: Hero Section with Radar Telemetry Graphic */}
        <ScrollReveal delay={100}>
          <Hero />
        </ScrollReveal>

        {/* Feature: Case Studies & Statistics Counters */}
        <ScrollReveal delay={100}>
          <CaseStudies />
        </ScrollReveal>

        {/* Feature 2: Responsive Bento-to-Accordion Canvas System */}
        <ScrollReveal delay={100}>
          <BentoSystem />
        </ScrollReveal>

        {/* Feature 1: Pricing Engine (Matrix Calculated, Isolated State Re-renders) */}
        <ScrollReveal delay={100}>
          <section id="pricing" className="w-full py-24 px-6 md:px-12 bg-primary-dark/30 border-t border-secondary-dark/30 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10">
              <div className="text-center mb-16">
                <span className="font-mono text-xs tracking-widest text-primary-yellow bg-secondary-dark/30 border border-secondary-dark/60 px-3.5 py-1.5 rounded-full mb-6 inline-block">
                  \\\ PRICING ENGINE
                </span>
                <h2 className="text-3xl md:text-5xl font-mono text-light mb-4">Tactical Compute Plans</h2>
                <p className="text-secondary-light mb-8 max-w-xl mx-auto text-sm md:text-base">
                  Scale your ingestion pipelines infinitely without surprise bills. Select currency and billing frequency.
                </p>
                
                {/* Performance-Isolated Toggles & Selection */}
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
                    "Up to 10,000 telemetry packets/mo",
                    "Standard 8x5 operations support",
                    "Edge gateway routing logs",
                    "1 active system pipeline"
                  ]} 
                />
                <PricingCard 
                  title="Pro" 
                  plan="pro" 
                  popular={true}
                  features={[
                    "Up to 1M telemetry packets/mo",
                    "Priority 24/7 slack/phone ops",
                    "Real-time analytics engine access",
                    "Global edge channel mapping",
                    "Custom flowchart triggers"
                  ]} 
                />
                <PricingCard 
                  title="Enterprise" 
                  plan="enterprise" 
                  features={[
                    "Unlimited telemetry packets",
                    "Direct account reliability engineer",
                    "SLA-guaranteed throughput limits",
                    "Dedicated database replication",
                    "SSO & strict hypervisor separation"
                  ]} 
                />
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal delay={100}>
          <section className="w-full bg-primary-dark">
            <SocialProof />
          </section>
        </ScrollReveal>

        {/* FAQ with Tab-switch Category Accordions */}
        <ScrollReveal delay={100}>
          <FAQ />
        </ScrollReveal>

        {/* Footer with Marquee ticker and Watermark logo */}
        <ScrollReveal delay={100}>
          <Footer />
        </ScrollReveal>
      </main>
    </>
  );
}
