import { Link } from 'react-router-dom';
import { ArrowRight, Target, HandHeart, ShieldCheck, MapPin } from 'lucide-react';
import Seo from '@/components/Seo';
import { PageHero, CtaBand } from '@/components/PageLayout';
import { organizationJsonLd, websiteJsonLd } from '@/components/Seo';

export default function AboutPage() {
  const jsonLd = [organizationJsonLd, websiteJsonLd];
  return (
    <>
      <Seo
        title="About Us"
        description="Cash Any Gadget is a Long Island, New York electronics buyback business. We help people sell used and unwanted iPhones, Samsung phones, tablets, MacBooks, gaming consoles, and other electronics for cash."
        path="/about-us"
        jsonLd={jsonLd}
      />
      <PageHero
        eyebrow="About Us"
        title="Helping you turn unused electronics into cash"
        subtitle="Cash Any Gadget is a local Long Island business built on a simple idea: selling your old electronics should be easy, transparent, and fair."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'About Us', to: '/about-us' },
        ]}
      />

      <div className="bg-gold-100">
        <div className="container-px mx-auto max-w-4xl py-14 lg:py-20">
          <div className="prose-content">
            <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">Who we are</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-700">
              Cash Any Gadget is an electronics buyback business based on Long Island, New York. We
              buy used, new, unwanted, and eligible broken electronics from people in our community
              and resell them through online marketplaces. Our goal is to give gadgets a second life
              while putting cash in your pocket.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-700">
              We started Cash Any Gadget because we saw how many people have old phones, tablets,
              laptops, and gaming consoles sitting in drawers — devices that still have value but
              are too much hassle to sell on your own. We make the process simple: you tell us what
              you have, we personally call you with an offer, and if you accept, you bring it to our
              store for a quick inspection and walk out with cash.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-800 text-gold-300">
                <Target className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy-800">Our purpose</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Make it easy for people to sell electronics they no longer need, with a process that
                is simple and respectful.
              </p>
            </div>
            <div className="card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-800 text-gold-300">
                <HandHeart className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy-800">Our approach</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Every quote request is reviewed by a real person. We call you to discuss the offer,
                not an automated response.
              </p>
            </div>
            <div className="card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-800 text-gold-300">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy-800">Our promise</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                No obligation, no pressure. You decide whether to accept the offer. We evaluate your
                device honestly and transparently.
              </p>
            </div>
            <div className="card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-800 text-gold-300">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy-800">Our location</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                We operate a single store on Long Island, New York. As we grow, we plan to expand to
                additional locations.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">What we buy</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-700">
              We buy iPhones, Samsung and other smartphones, iPads and tablets, MacBooks and laptops,
              desktop computers, gaming consoles, video games, smartwatches, AirPods and headphones,
              cameras, drones, computer components, and other eligible electronics. If you are not
              sure whether we accept your device, send us the details and we will take a look.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/sell-your-iphone" className="btn-secondary">Sell an iPhone</Link>
              <Link to="/sell-your-samsung" className="btn-secondary">Sell a Samsung</Link>
              <Link to="/sell-your-tablet" className="btn-secondary">Sell a Tablet</Link>
              <Link to="/sell-your-macbook" className="btn-secondary">Sell a MacBook</Link>
              <Link to="/sell-your-gaming-console" className="btn-secondary">Sell a Console</Link>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-gold-500/40 bg-white p-6">
            <h2 className="text-xl font-bold text-navy-800">Growing with our community</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              We are currently serving Long Island, New York. As our business grows, we plan to
              expand to additional locations across the United States. This page will be updated as
              we add new service areas and store locations.
            </p>
          </div>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
