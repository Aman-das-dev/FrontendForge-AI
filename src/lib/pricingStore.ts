export type Currency = 'USD' | 'EUR' | 'INR';
export type Billing = 'monthly' | 'annual';
export type PlanKey = 'starter' | 'pro' | 'enterprise';

const EXCHANGE_RATES: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  INR: 83.5,
};

const SYMBOLS: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  INR: '₹',
};

const BASE_PRICES_USD_MONTHLY: Record<PlanKey, number> = {
  starter: 19,
  pro: 49,
  enterprise: 99,
};

const ANNUAL_DISCOUNT_FACTOR = 0.8; // 20% discount

// Multi-dimensional matrix representation: Matrix[Plan][Billing][Currency]
type PricingMatrix = Record<
  PlanKey,
  Record<
    Billing,
    Record<
      Currency,
      { value: number; symbol: string; billing: Billing }
    >
  >
>;

// Dynamically generate the multi-dimensional configuration matrix
const generatePricingMatrix = (): PricingMatrix => {
  const matrix = {} as PricingMatrix;

  (Object.keys(BASE_PRICES_USD_MONTHLY) as PlanKey[]).forEach((plan) => {
    matrix[plan] = {} as Record<Billing, Record<Currency, { value: number; symbol: string; billing: Billing }>>;
    
    (['monthly', 'annual'] as Billing[]).forEach((billing) => {
      matrix[plan][billing] = {} as Record<Currency, { value: number; symbol: string; billing: Billing }>;
      
      (Object.keys(EXCHANGE_RATES) as Currency[]).forEach((currency) => {
        const basePrice = BASE_PRICES_USD_MONTHLY[plan];
        // Apply discount programmatically for annual billing
        const discountedPrice = billing === 'annual' ? basePrice * ANNUAL_DISCOUNT_FACTOR : basePrice;
        // Convert based on exchange rate
        const convertedPrice = discountedPrice * EXCHANGE_RATES[currency];
        
        matrix[plan][billing][currency] = {
          value: Math.round(convertedPrice),
          symbol: SYMBOLS[currency],
          billing: billing,
        };
      });
    });
  });

  return matrix;
};

// Store the computed multi-dimensional matrix
const PRICING_MATRIX: PricingMatrix = generatePricingMatrix();

type Listener = () => void;
let currentCurrency: Currency = 'USD';
let currentBilling: Billing = 'monthly';
const listeners = new Set<Listener>();

export const pricingStore = {
  getCurrency: () => currentCurrency,
  getBilling: () => currentBilling,
  setCurrency: (c: Currency) => {
    currentCurrency = c;
    pricingStore.emit();
  },
  setBilling: (b: Billing) => {
    currentBilling = b;
    pricingStore.emit();
  },
  // Reads values directly and only from the generated pricing matrix (no on-the-fly math)
  getPrice: (plan: PlanKey) => {
    return PRICING_MATRIX[plan][currentBilling][currentCurrency];
  },
  subscribe: (listener: Listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  emit: () => {
    listeners.forEach((l) => l());
  },
};
