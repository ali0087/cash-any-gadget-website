export const SITE = {
  name: 'Cash Any Gadget',
  domain: 'https://cashanygadget.com',
  tagline: 'Sell your electronics for cash on Long Island, NY',
  description:
    'Cash Any Gadget buys used and unwanted electronics — iPhones, Samsung phones, iPads, MacBooks, laptops, gaming consoles, and more. Request a free quote and we will personally call you with an offer. Located on Long Island, New York.',
  locale: 'en_US',
  twitter: '@cashanygadget',
} as const;

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function buildTitle(pageTitle: string): string {
  return `${pageTitle} | ${SITE.name}`;
}

export function canonicalUrl(path: string): string {
  return `${SITE.domain}${path}`;
}

export function ogImageUrl(path: string): string {
  return `${SITE.domain}${path}`;
}
