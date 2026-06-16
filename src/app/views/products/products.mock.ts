export type ProductPlan = {
  id: 'basic' | 'pro' | 'enterprise';
  nameKey: string;
  priceKey: string;
  featureKeys: string[];
  cta?: {
    labelKey: string;
    routerLink: string;
  };
};

export const PRODUCT_PLANS: ProductPlan[] = [
  {
    id: 'basic',
    nameKey: 'plans.basic.name',
    priceKey: 'plans.basic.price',
    featureKeys: ['plans.texts.online-ordering', 'plans.texts.limited-support'],
    cta: { labelKey: 'plans.texts.join', routerLink: '/basic-plan' },
  },
  {
    id: 'pro',
    nameKey: 'plans.pro.name',
    priceKey: 'plans.pro.price',
    featureKeys: [
      'plans.texts.online-ordering',
      'plans.texts.limited-support',
      'plans.texts.special-events-access',
    ],
  },
  {
    id: 'enterprise',
    nameKey: 'plans.enterprise.name',
    priceKey: 'plans.enterprise.price',
    featureKeys: [
      'plans.texts.online-ordering',
      'plans.texts.unlimited-support',
      'plans.texts.special-events-access',
      'plans.texts.personal-chef-consultation',
    ],
  },
];
