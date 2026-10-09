export interface ServiceItem {
  id: string;
  title: string;
  category: 'automation' | 'content' | 'video' | 'social';
  badge: string;
  description: string;
  iconName: string;
  image: string;
  subFeatures: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  sampleDeliverables: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'social' | 'video' | 'branding' | 'automation';
  categoryLabel: string;
  image: string;
  client: string;
  resultMetric: string;
  description: string;
  tags: string[];
}

export interface GrowthStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  metrics: string;
  tools: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export type AuthMode = 'login' | 'register' | null;

export type CheckoutStep = 'payment' | 'success' | 'failure';
