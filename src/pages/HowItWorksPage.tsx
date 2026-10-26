import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ClipboardList,
  PhoneCall,
  Handshake,
  ShieldCheck,
  MessageSquare,
  Lock,
  BadgeDollarSign,
  Smartphone,
  FileText,
  CheckCircle2,
  Package,
  Wrench,
  Battery,
  Cpu,
  LineChart,
  Plus,
  Minus,
} from 'lucide-react';
import { CATEGORIES } from '@/lib/categories';
import { FAQS } from '@/lib/content';

const STEPS = [
  {
    icon: ClipboardList,
    title: 'Bring your device',
    body: 'No appointment required. Walk into our store with your device, working or broken, and any accessories Or provide details through our online quote form.',
  },
  {
    icon: PhoneCall,
    title: 'Get a free instant quote',
    body: "We evaluate the model, condition, and real resale value in front of you. No hidden fees or misleading online estimates.",
  },
  {
    icon: Handshake,
    title: 'Get paid instantly',
    body: "Accept our offer and get cash on the spot. Prefer digital? We also offer Zelle at participating locations..",
  },
];

const TRUST = [
  {
    icon: MessageSquare,
    title: 'A personal conversation',
    body: 'Every offer comes from a real person who reviews your request and calls you directly — no automated pricing, no call centers.',
  },
  {
    icon: BadgeDollarSign,
    title: 'No obligation, ever',
    body: 'Requesting a quote is free and never commits you to sell. The decision to accept or decline is always yours.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent process',
    body: 'We walk you through exactly how we arrive at your offer, so you understand the value behind every number.',
  },
];

const PREPARE = [
  { icon: Smartphone, title: 'Back up your data', body: 'Save any photos, contacts, or files you want to keep before handing over your device.' },
  { icon: Lock, title: 'Sign out of accounts', body: 'Sign out of iCloud, Google, Samsung, or other accounts and remove activation locks like Find My.' },
  { icon: FileText, title: 'Remove personal info', body: 'Erase the device to factory settings so your personal data does not travel with it.' },
  { icon: Package, title: 'Gather accessories', body: 'Chargers, cables, cases, and original boxes can add value. Bring what you have.' },
  { icon: ShieldCheck, title: 'Bring valid ID', body: 'A valid form of identification is required at our store to complete a sale.' },
  { icon: CheckCircle2, title: 'Be honest about condition', body: 'Tell us about any damage or issues upfront so we can give you an accurate offer.' },
];

const PRICING = [
  { icon: Cpu, title: 'Exact model and year', body: 'The specific model and release year set the baseline value of your device.' },
  { icon: Package, title: 'Storage and specifications', body: 'Higher storage and better specs typically mean a higher offer.' },
  { icon: Wrench, title: 'Cosmetic condition', body: 'Scratches, dents, and screen damage affect the resale value.' },
  { icon: Battery, title: 'Functional condition', body: 'Whether the device works fully, partially, or not at all matters.' },
  { icon: Lock, title: 'Carrier or activation status', body: 'Unlocked and signed-out devices are easier to resell.' },
  { icon: LineChart, title: 'Current resale market value', body: 'Offers reflect what similar devices are selling for today.' },
];

const PAGE_FAQS = [
  {
    q: 'Do I need an appointment to visit the store?',
    a: 'No appointment is needed. After we discuss an offer by phone, bring your device to our Long Island store during business hours and we will inspect it on the spot.',
  },
  {
    q: 'Will I get an instant online quote?',
    a: 'No. Our website does not calculate or display automatic prices. A real person reviews every request and contacts you personally to discuss an offer.',
  },
  {
    q: 'Do you buy broken or damaged devices?',
    a: 'We consider many broken or damaged devices depending on the model and the extent of the damage. Tell us the condition honestly in your request and we will let you know whether we can make an offer.',
  },
  {
    q: 'Is requesting a quote free?',
    a: 'Yes. There is no charge to request a quote, and you are never obligated to accept an offer.',
  },
  {
    q: 'When do I get paid?',
    a: 'Payment is issued after we inspect the device in person at our store and both sides agree on the final price. We do not send payment before inspection.',
  },
  {
    q: 'What should I bring to the store?',
    a: 'Bring the device, any accessories you want to include, and a valid form of identification. For phones and tablets, it helps to sign out of your accounts before you arrive.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <HeroSection />
      <StepsSection />
      <CategoriesSection />
      <PrepareSection />
      <PricingSection />
      <TrustSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}

/* ---------- Hero ---------- */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gold-300">
      <div className="container-px mx-auto max-w-7xl pt-14 pb-16 sm:pt-20 lg:pt-24 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="animate-fade-up">
            <span className="eyebrow">
              <span className="h-2.5 w-2.5 rounded-full bg-gold-600" />
              How It Works
            </span>
            <h1 className="mt-5 text-[2.5rem] font-bold leading-[1.05] text-navy-800 sm:text-5xl lg:text-[3.5rem]">
              How Selling Your Gadgets Works
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-700">
              Turn the gadgets you no longer need into an opportunity for cash. Tell
              us what you have, and our team will contact you to discuss an offer.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/quote" className="btn-primary group">
                Get My Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a href="#categories" className="btn-secondary">
                Explore What We Buy
              </a>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="relative overflow-hidden rounded-xl bg-navy-800 shadow-lift ring-1 ring-navy-800/10">
              <img
                src="https://images.pexels.com/photos/5398973/pexels-photo-5398973.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200"
                alt="A person using a smartphone and laptop at a clean desk"
                className="h-[380px] w-full object-cover sm:h-[460px] lg:h-[540px]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Three-step process ---------- */
function StepsSection() {
  return (
    <section className="section-py bg-gold-100">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-2.5 w-2.5 rounded-full bg-gold-600" />
            The Process
          </span>
          <h2 className="mt-4 text-lg font-medium leading-relaxed text-navy-800">
            Three simple steps
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            From submitting your details to deciding on an offer, here is how selling
            your gadgets to us works.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="relative flex flex-col rounded-xl border border-gold-500/40 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-800 text-gold-300">
                  <step.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-4xl font-bold text-forest-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-800">{step.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{step.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 rounded-lg bg-white px-5 py-4 text-sm leading-relaxed text-ink-700 ring-1 ring-gold-500/40">
          <span className="font-semibold text-navy-800">Please note:</span> Our website
          does not calculate or display automatic prices. Every offer is discussed
          personally and confirmed before any sale.
        </p>
      </div>
    </section>
  );
}

/* ---------- What gadgets can you sell ---------- */
function CategoriesSection() {
  const featured = CATEGORIES.slice(0, 8);
  return (
    <section id="categories" className="section-py bg-gold-300">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-2.5 w-2.5 rounded-full bg-gold-600" />
            What We Buy
          </span>
          <h2 className="mt-4 text-lg font-medium leading-relaxed text-navy-800">
            What Gadgets Can You Sell?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            From everyday devices to gaming gear, start by telling us what you have.
            We'll review the details and let you know whether we can make an offer.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((cat) => (
            <Link
              key={cat.id}
              to={`/quote?category=${encodeURIComponent(cat.name)}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-gold-500/40 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-forest-500 hover:shadow-cardHover"
            >
              <div className="relative h-32 overflow-hidden bg-navy-800">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
                <h3 className="absolute bottom-2.5 left-3.5 right-3.5 text-sm font-bold text-white">
                  {cat.name}
                </h3>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="text-sm leading-relaxed text-ink-600">{cat.description}</p>
                <div className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-forest-700 transition-colors group-hover:text-forest-800">
                  Get a Quote
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/#what-we-buy" className="btn-secondary">
            View All Categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Prepare your device ---------- */
function PrepareSection() {
  return (
    <section className="section-py bg-gold-100">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-2.5 w-2.5 rounded-full bg-gold-600" />
            Before You Sell
          </span>
          <h2 className="mt-4 text-lg font-medium leading-relaxed text-navy-800">
            Prepare your device
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            A few quick steps before your visit help everything go smoothly and can
            improve the offer you receive.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-gold-500/40 bg-gold-500/40 sm:grid-cols-2 lg:grid-cols-3">
          {PREPARE.map((item) => (
            <div key={item.title} className="bg-white p-6 transition-colors hover:bg-gold-50">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest-100 text-forest-700">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy-800">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- How we price ---------- */
function PricingSection() {
  return (
    <section className="section-py bg-gold-300">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-2.5 w-2.5 rounded-full bg-gold-600" />
            How We Price
          </span>
          <h2 className="mt-4 text-lg font-medium leading-relaxed text-navy-800">
            How we arrive at your offer
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            Every offer is based on real factors we walk you through on the phone. The
            final offer may be adjusted after an in-person inspection at our store.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-gold-500/40 bg-gold-500/40 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING.map((item) => (
            <div key={item.title} className="bg-white p-6 transition-colors hover:bg-gold-50">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-800 text-gold-300">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy-800">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-gold-500/40 bg-white p-6">
            <h3 className="text-lg font-bold text-navy-800">Broken devices still have value</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
              A cracked screen, a dead battery, or a console that won't read discs
              doesn't automatically mean no offer. Many damaged devices still contain
              parts and recoverable value. Tell us the condition honestly and we'll let
              you know what we can do.
            </p>
          </div>
          <div className="rounded-xl border border-gold-500/40 bg-white p-6">
            <h3 className="text-lg font-bold text-navy-800">Your privacy is protected</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
              Before any device is resold, it goes through a privacy-protection process
              so your photos, messages, and accounts stay yours. We recommend signing
              out and erasing your device before bringing it in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust / why customers choose us ---------- */
function TrustSection() {
  return (
    <section className="section-py bg-forest-700">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="eyebrow text-gold-300">
            <span className="h-2.5 w-2.5 rounded-full bg-gold-300" />
            Why customers trust Cash Any Gadget
          </span>
          <h2 className="mt-4 text-lg font-medium leading-relaxed text-white">
            Quick, transparent, in-person device buybacks in long island. No shipping delays, no online guesswork, just honest offers and instant cash.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            We are a local Long Island electronics buyback business. We buy used, new,
            unwanted, and eligible broken electronics and resold through our stores and online channels. That resale engine is exactly why we can pay more than kiosks and middlemen: we're the final buyer, not a broker.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {TRUST.map((item) => (
            <div key={item.title} className="bg-forest-800 p-6 transition-colors hover:bg-forest-900">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold-300 text-navy-800">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-py bg-gold-100">
      <div className="container-px mx-auto max-w-3xl">
        <div className="text-center">
          <span className="eyebrow justify-center">
            <span className="h-2.5 w-2.5 rounded-full bg-gold-600" />
            FAQ
          </span>
          <h2 className="mt-4 text-lg font-medium leading-relaxed text-navy-800">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            Quick answers about selling your gadgets to us.
          </p>
        </div>

        <div className="mt-10 divide-y divide-gold-500/40 overflow-hidden rounded-xl border border-gold-500/40 bg-white">
          {PAGE_FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-gold-50 sm:px-6"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-navy-800">{item.q}</span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-forest-700" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-ink-400" />
                  )}
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ink-600 sm:px-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-ink-600">
          Have another question?{' '}
          <Link to="/#faq" className="font-semibold text-forest-700 hover:text-forest-800">
            See our full FAQ
          </Link>
        </p>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function CtaSection() {
  return (
    <section className="section-py bg-gold-300">
      <div className="container-px mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl bg-navy-800 px-6 py-14 shadow-lift sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-gold-300 via-gold-400 to-transparent" />
            <div className="absolute -top-20 right-10 h-56 w-56 rounded-full bg-gold-300/15 blur-3xl" />
          </div>

          <div className="relative text-center">
            <h2 className="text-lg font-medium leading-relaxed text-white">
              Ready to Turn Your Gadgets Into Cash?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gold-100">
              Tell us what you're selling. We'll review your request and personally
              contact you to discuss an offer.
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/quote" className="btn-accent group">
                Request My Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <p className="mt-5 text-sm text-gold-200">
              Free, no-obligation quote request. You decide whether to accept.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
