import { Link } from 'react-router-dom';
import { ArrowRight, Check, Package, Tag, ShieldCheck, Smartphone, HelpCircle } from 'lucide-react';
import Seo from '@/components/Seo';
import { PageHero, CtaBand, InfoCard } from '@/components/PageLayout';
import { FaqAccordion, faqJsonLd } from '@/components/FaqAccordion';
import type { FaqItem } from '@/lib/content';
import type { PageMeta } from '@/lib/site';
import { organizationJsonLd, websiteJsonLd } from '@/components/Seo';

export interface DevicePageContent {
  meta: PageMeta;
  eyebrow: string;
  h1: string;
  heroSubtitle: string;
  intro: string;
  whatWeAccept: { title: string; detail: string }[];
  whatToProvide: { title: string; detail: string }[];
  conditionInfo: string;
  processSteps: { title: string; detail: string }[];
  faqs: FaqItem[];
  imageSrc: string;
  imageAlt: string;
  breadcrumb: string;
}

export default function DevicePage({ content }: { content: DevicePageContent }) {
  const jsonLd = [
    organizationJsonLd,
    websiteJsonLd,
    faqJsonLd(content.faqs),
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
        { '@type': 'ListItem', position: 2, name: content.breadcrumb, item: content.meta.path },
      ],
    },
  ];

  return (
    <>
      <Seo
        title={content.meta.title}
        description={content.meta.description}
        path={content.meta.path}
        jsonLd={jsonLd}
      />
      <PageHero
        eyebrow={content.eyebrow}
        title={content.h1}
        subtitle={content.heroSubtitle}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: content.breadcrumb, to: content.meta.path },
        ]}
      />

      <div className="bg-gold-100">
        <div className="container-px mx-auto max-w-7xl py-14 lg:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div>
              <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">
                Selling your device is straightforward
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-700">{content.intro}</p>

              <h3 className="mt-10 text-lg font-bold text-navy-800">What we accept</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {content.whatWeAccept.map((item) => (
                  <div key={item.title} className="card p-5">
                    <div className="flex items-center gap-2.5">
                      <Check className="h-5 w-5 shrink-0 text-forest-600" />
                      <h4 className="text-sm font-bold text-navy-800">{item.title}</h4>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.detail}</p>
                  </div>
                ))}
              </div>

              <h3 className="mt-10 text-lg font-bold text-navy-800">
                What to include in your quote request
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {content.whatToProvide.map((item) => (
                  <InfoCard key={item.title} icon={Tag} title={item.title}>
                    {item.detail}
                  </InfoCard>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-xl bg-navy-800 shadow-lift ring-1 ring-navy-800/10">
                <img
                  src={content.imageSrc}
                  alt={content.imageAlt}
                  className="h-[320px] w-full object-cover sm:h-[420px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
              </div>

              <div className="card mt-5 p-6">
                <h3 className="text-base font-bold text-navy-800">Ready for an offer?</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  Submit a free, no-obligation quote request. We will personally call you to discuss
                  your device.
                </p>
                <Link
                  to="/get-a-quote"
                  className="btn-accent group mt-4 w-full"
                >
                  Get My Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.processSteps.map((step, i) => (
              <div key={step.title} className="card p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-800 text-gold-300">
                  <span className="font-display text-sm font-bold">{i + 1}</span>
                </span>
                <h4 className="mt-4 text-sm font-bold text-navy-800">{step.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{step.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-white px-5 py-4 text-sm leading-relaxed text-ink-700 ring-1 ring-gold-500/40">
            <span className="font-semibold text-navy-800">About device condition:</span>{' '}
            {content.conditionInfo}
          </div>
        </div>
      </div>

      <section className="section-py bg-gold-300">
        <div className="container-px mx-auto max-w-3xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2.5 rounded-full bg-navy-800 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-gold-300">
              <HelpCircle className="h-3.5 w-3.5" />
              FAQ
            </span>
            <h2 className="mt-4 text-2xl font-bold text-navy-800 sm:text-3xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-8">
            <FaqAccordion items={content.faqs} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export function devicePageIcons() {
  return { Package, Tag, ShieldCheck, Smartphone };
}
