import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'Tell Us About Your Gadget',
    body: 'Share your device details through our quick online form.',
  },
  {
    num: '02',
    title: 'Get a Personal Offer',
    body: "We'll review your information and contact you with an offer.",
  },
  {
    num: '03',
    title: 'Decide What Works for You',
    body: 'Review the offer and decide whether you want to proceed.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-py bg-gold-300">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-2.5 w-2.5 rounded-full bg-gold-600" />
            How It Works
          </span>
          <h2 className="mt-4 text-lg font-medium leading-relaxed text-navy-800">
            A simple, personal three-step process
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">
            We don't use automatic pricing. A real person reviews every request and
            contacts you personally.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-gold-500/40 bg-gold-500/40 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.num} className="bg-white p-7 sm:p-8">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-3xl font-bold text-forest-300">{step.num}</span>
                <span className="h-px flex-1 bg-gold-500/40" />
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

        <div className="mt-6">
          <Link to="/how-it-works" className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-forest-800">
            See the full step-by-step guide
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
