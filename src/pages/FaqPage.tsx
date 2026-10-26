import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle } from 'lucide-react';
import Seo from '@/components/Seo';
import { PageHero, CtaBand } from '@/components/PageLayout';
import { FaqAccordion, faqJsonLd } from '@/components/FaqAccordion';
import { FAQS } from '@/lib/content';
import { organizationJsonLd, websiteJsonLd } from '@/components/Seo';

export default function FaqPage() {
  const jsonLd = [organizationJsonLd, websiteJsonLd, faqJsonLd(FAQS)];
  return (
    <>
      <Seo
        title="Frequently Asked Questions"
        description="Common questions about selling your electronics to Cash Any Gadget on Long Island, NY. How the process works, what devices we buy, what affects your offer, and what to expect."
        path="/faq"
        jsonLd={jsonLd}
      />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Quick answers about selling your electronics to Cash Any Gadget on Long Island, New York."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'FAQ', to: '/faq' },
        ]}
      />

      <div className="bg-gold-100">
        <div className="container-px mx-auto max-w-3xl py-14 lg:py-20">
          <div className="mb-6 flex items-center gap-3 rounded-lg bg-white px-5 py-4 ring-1 ring-gold-500/40">
            <HelpCircle className="h-5 w-5 shrink-0 text-forest-700" />
            <p className="text-sm text-ink-600">
              Have a question that is not answered here?{' '}
              <Link to="/contact-us" className="font-semibold text-forest-700 hover:text-forest-800">
                Contact us
              </Link>{' '}
              or{' '}
              <Link to="/get-a-quote" className="font-semibold text-forest-700 hover:text-forest-800">
                request a quote
              </Link>
              .
            </p>
          </div>
          <FaqAccordion items={FAQS} />

          <div className="mt-10 text-center">
            <Link to="/get-a-quote" className="btn-accent group">
              Get My Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
