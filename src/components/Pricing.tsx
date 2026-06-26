'use client';
import { useSyncExternalStore } from 'react';
import { pricingStore, PlanKey } from '@/lib/pricingStore';

export function PriceText({ plan }: { plan: PlanKey }) {
  const price = useSyncExternalStore(
    pricingStore.subscribe,
    () => pricingStore.getPrice(plan),
    () => ({ value: 0, symbol: '$', billing: 'monthly' }) // SSR snapshot
  );
  
  return (
    <div className="flex items-baseline mb-6">
      <span className="text-4xl font-mono text-primary-yellow tracking-tight">{price.symbol}{price.value}</span>
      <span className="text-secondary-light ml-2">/ {price.billing === 'annual' ? 'yr' : 'mo'}</span>
    </div>
  );
}

export function BillingToggle() {
  const billing = useSyncExternalStore(
    pricingStore.subscribe, 
    pricingStore.getBilling,
    () => 'monthly'
  );
  
  return (
    <div className="flex items-center space-x-2 bg-secondary-dark/30 p-1 rounded-full border border-secondary-dark w-fit mx-auto">
      <button 
        className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${billing === 'monthly' ? 'bg-primary-yellow text-primary-dark' : 'text-light hover:text-primary-yellow'}`}
        onClick={() => pricingStore.setBilling('monthly')}
      >
        Monthly
      </button>
      <button 
        className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${billing === 'annual' ? 'bg-primary-yellow text-primary-dark' : 'text-light hover:text-primary-yellow'}`}
        onClick={() => pricingStore.setBilling('annual')}
      >
        Annual <span className="text-accent-orange text-xs ml-1">-20%</span>
      </button>
    </div>
  );
}

export function CurrencySelect() {
  const currency = useSyncExternalStore(
    pricingStore.subscribe, 
    pricingStore.getCurrency,
    () => 'USD'
  );
  
  return (
    <div className="relative mx-auto w-fit mt-4">
      <select 
        value={currency}
        onChange={(e) => pricingStore.setCurrency(e.target.value as any)}
        className="appearance-none bg-secondary-dark/30 border border-secondary-dark text-light text-sm rounded-full px-6 py-2 pr-10 outline-none focus:border-primary-yellow transition-colors cursor-pointer"
      >
        <option value="USD">USD ($)</option>
        <option value="EUR">EUR (€)</option>
        <option value="INR">INR (₹)</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-light">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  );
}

export function PricingCard({ title, plan, features, popular }: { title: string, plan: PlanKey, features: string[], popular?: boolean }) {
  return (
    <div className={`relative p-8 rounded-2xl border bg-primary-dark/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${popular ? 'border-primary-yellow shadow-[0_0_30px_rgba(255,200,1,0.1)]' : 'border-secondary-dark hover:border-primary-yellow/50'}`}>
      {popular && (
        <div className="absolute top-0 right-8 transform -translate-y-1/2">
          <span className="bg-primary-yellow text-primary-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
        </div>
      )}
      <h3 className="text-xl font-mono text-light mb-2">{title}</h3>
      <PriceText plan={plan} />
      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <svg className="h-5 w-5 text-accent-orange mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span className="text-secondary-light text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg font-medium transition-colors ${popular ? 'bg-primary-yellow text-primary-dark hover:bg-white' : 'bg-secondary-dark text-light hover:bg-secondary-dark/70'} `}>
        Get Started
      </button>
    </div>
  );
}
