import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import { PageHero } from '@/components/PageLayout';
import { organizationJsonLd, websiteJsonLd } from '@/components/Seo';
import { SITE } from '@/lib/site';

export default function ContactPage() {
  const jsonLd = [organizationJsonLd, websiteJsonLd];
  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact Cash Any Gadget to sell your used electronics on Long Island, NY. Request a quote or reach out with questions about selling your iPhone, Samsung, tablet, MacBook, or gaming console."
        path="/contact-us"
        jsonLd={jsonLd}
      />
      <PageHero
        eyebrow="Contact Us"
        title="Get in touch with Cash Any Gadget"
        subtitle="Have questions about selling your electronics? Ready to request a quote? Here is how to reach us."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Contact Us', to: '/contact-us' },
        ]}
      />

      <div className="bg-gold-100">
        <div className="container-px mx-auto max-w-5xl py-14 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-2xl font-bold text-navy-800">Business details</h2>
              <p className="mt-3 text-base leading-relaxed text-ink-700">
                Our store is located on Long Island, New York. The following details will be updated
                once our physical location is finalized.
              </p>

              <div className="mt-6 space-y-5">
                <div className="card p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-navy-800 text-gold-300">
                      <MapPin className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="text-sm font-bold text-navy-800">Store address</h3>
                  </div>
                  <p className="mt-3 text-sm text-ink-600">
                    <span className="rounded bg-gold-200 px-2 py-0.5 text-xs font-medium text-navy-700">
                      To be added
                    </span>{' '}
                    Our physical store address on Long Island, NY will be displayed here once
                    finalized.
                  </p>
                </div>

                <div className="card p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-navy-800 text-gold-300">
                      <Phone className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="text-sm font-bold text-navy-800">Phone number</h3>
                  </div>
                  <p className="mt-3 text-sm text-ink-600">
                    <span className="rounded bg-gold-200 px-2 py-0.5 text-xs font-medium text-navy-700">
                      To be added
                    </span>{' '}
                    Our business phone number will be displayed here once finalized.
                  </p>
                </div>

                <div className="card p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-navy-800 text-gold-300">
                      <Mail className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="text-sm font-bold text-navy-800">Email</h3>
                  </div>
                  <p className="mt-3 text-sm text-ink-600">
                    <span className="rounded bg-gold-200 px-2 py-0.5 text-xs font-medium text-navy-700">
                      To be added
                    </span>{' '}
                    Our business email address will be displayed here once finalized.
                  </p>
                </div>

                <div className="card p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-navy-800 text-gold-300">
                      <Clock className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="text-sm font-bold text-navy-800">Business hours</h3>
                  </div>
                  <p className="mt-3 text-sm text-ink-600">
                    <span className="rounded bg-gold-200 px-2 py-0.5 text-xs font-medium text-navy-700">
                      To be added
                    </span>{' '}
                    Our operating hours will be displayed here once finalized.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-800">Request a quote</h2>
              <p className="mt-3 text-base leading-relaxed text-ink-700">
                The fastest way to get an offer is to submit a free quote request. Tell us about your
                device and we will personally call you to discuss it.
              </p>

              <div className="card mt-6 p-6">
                <h3 className="text-base font-bold text-navy-800">Ready to sell?</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  Use our quote request form to tell us what you have. It takes a few minutes, and
                  there is no obligation to accept any offer.
                </p>
                <Link to="/get-a-quote" className="btn-accent group mt-4 w-full">
                  Get My Free Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="card mt-5 p-6">
                <h3 className="text-base font-bold text-navy-800">Other ways to reach us</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  Once our phone number and email are finalized, they will appear on this page. In the
                  meantime, the quote request form is the best way to get in touch.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link to="/how-it-works" className="btn-secondary">How It Works</Link>
                  <Link to="/faq" className="btn-secondary">FAQ</Link>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-gold-500/40 bg-gold-50 p-5">
                <p className="text-sm leading-relaxed text-ink-600">
                  <span className="font-semibold text-navy-800">Service area:</span> {SITE.name} is
                  based on Long Island, New York. We plan to expand to additional locations as our
                  business grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
