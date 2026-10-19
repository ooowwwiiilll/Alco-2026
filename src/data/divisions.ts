import type { DivisionItem } from '../types';

const division = (name: string, description: string): Omit<DivisionItem, 'id'> => ({
  name,
  description,
  status: 'Active',
});

/** Seeded into new workspaces; the Role Manager maintains the list afterwards. */
export const DEFAULT_DIVISIONS: readonly Omit<DivisionItem, 'id'>[] = [
  division('CRD', 'Credit risk, underwriting, and loan portfolio management'),
  division(
    'Wealth & Investment',
    'Wealth advisory, mutual funds, and premier investment solutions',
  ),
  division(
    'Retail & Daily Banking',
    'Consumer retail banking, savings, and personal financial services',
  ),
  division('Cards & Payments', 'Credit cards, debit cards, acquiring, and payment gateways'),
  division(
    'Corporate Banking',
    'Large enterprise corporate client solutions and structured finance',
  ),
  division(
    'Digital Banking & Jenius',
    'Digital mobile banking app, Jenius ecosystem, and fintech innovation',
  ),
  division(
    'SME & Commercial',
    'Small and medium enterprise business financing and commercial loans',
  ),
  division(
    'Operations & Tech',
    'Core IT infrastructure, software engineering, and bank operations',
  ),
  division(
    'Treasury & Markets',
    'Foreign exchange, fixed income, money markets, and liquidity management',
  ),
  division(
    'Risk Management & Compliance',
    'Enterprise governance, fraud risk control, and regulatory compliance',
  ),
];
