import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Eye, Handshake, Clock, MapPin } from 'lucide-react';
import Seo from '@/components/Seo';
import { PageHero, CtaBand } from '@/components/PageLayout';
import { organizationJsonLd, websiteJsonLd } from '@/components/Seo';

export default function WhyPage() {
  const jsonLd = [organizationJsonLd, websiteJsonLd];
  return (
    <>
      <Seo
        title="Why Choose Cash Any Gadget"
        description="Cash Any Gadget offers a straightforward, transparent way to sell your electronics for cash on Long Island, NY. Real people review your request, clear communication, and no obligation."
        path="/why-cash-any-gadget"
        jsonLd={jsonLd}
      />
      <PageHero
        eyebrow="Why Cash Any Gadget"
        title="A straightforward way to sell your electronics"
        subtitle="We focus on clear communication, honest evaluation, and a simple process — so you can sell your devices without the hassle."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Why Cash Any Gadget', to: '/why-cash-any-gadget' },
        ]}
      />

      <div className="bg-gold-100">
        <div className="container-px mx-auto max-w-5xl py-14 lg:py-20">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-800 text-gold-300">
                <MessageSquare className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-800">A real person calls you</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                We do not use automated pricing tools. When you submit a quote request, a real
                person reviews your details and calls you to discuss an offer based on your actual
                device and the current market.
              </p>
            </div>
            <div className="card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-800 text-gold-300">
                <Eye className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-800">Transparent evaluation</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Our offers are based on real factors — model, condition, storage, carrier status,
                and market value. We walk you through how we arrived at the number, and the final
                offer is confirmed after an in-person inspection.
              </p>
            </div>
            <div className="card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-800 text-gold-300">
                <Handshake className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-800">No obligation, no pressure</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Submitting a quote request costs nothing and commits you to nothing. If you do not
                like the offer, you walk away. The decision to sell is always yours.
              </p>
            </div>
            <div className="card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-800 text-gold-300">
                <Clock className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-800">Simple, step-by-step process</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Submit your request, get a call with an offer, bring your device in for inspection,
                and get paid. No listings to manage, no shipping, no waiting for a buyer.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">
              What to expect when you sell to us
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-700">
              We are a local Long Island electronics buyback business. We buy used, new, unwanted,
              and eligible broken electronics and resell them through online marketplaces. Here is
              what sets our approach apart:
            </p>
            <ul className="mt-6 space-y-4">
              {[
                'We personally call you to discuss your device and an offer — no automated responses.',
                'We evaluate your device honestly, including damaged and older devices that may still have value.',
                'We confirm the final offer in person after a quick inspection, so there are no surprises.',
                'We protect your privacy — your information is used only to contact you about your quote.',
                'We are based on Long Island, so you deal with a local business, not an anonymous website.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-forest-600" />
                  <span className="text-base leading-relaxed text-ink-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex items-start gap-4 rounded-xl border border-gold-500/40 bg-white p-6">
            <MapPin className="mt-1 h-6 w-6 shrink-0 text-forest-700" />
            <div>
              <h3 className="text-base font-bold text-navy-800">Local to Long Island</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                We currently serve customers on Long Island, New York. As we grow, we plan to expand
                to additional locations. If you are outside our current area, still send us your
                details — we may be able to help or point you in the right direction.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
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
