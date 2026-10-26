import Seo from '@/components/Seo';
import Hero from '@/components/sections/Hero';
import WhatWeBuy from '@/components/sections/WhatWeBuy';
import HowItWorks from '@/components/sections/HowItWorks';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import WhySell from '@/components/sections/WhySell';
import OfferFactors from '@/components/sections/OfferFactors';
import LocalStore from '@/components/sections/LocalStore';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import { FAQS } from '@/lib/content';
import { faqJsonLd } from '@/components/FaqAccordion';
import { organizationJsonLd, websiteJsonLd } from '@/components/Seo';

export default function HomePage() {
  const jsonLd = [organizationJsonLd, websiteJsonLd, faqJsonLd(FAQS)];
  return (
    <>
      <Seo
        title="Cash Any Gadget | Sell Your Electronics for Cash on Long Island, NY"
        description="Sell your used iPhones, Samsung phones, iPads, MacBooks, laptops, gaming consoles, and other electronics for cash on Long Island, NY. Request a free quote and we'll personally call you with an offer."
        path="/"
        jsonLd={jsonLd}
      />
      <Hero />
      <WhatWeBuy />
      <HowItWorks />
      <WhyChooseUs />
      <WhySell />
      <OfferFactors />
      <LocalStore />
      <Faq />
      <FinalCta />
    </>
  );
}
