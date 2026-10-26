import { Cpu, Package, Wrench, Battery, Lock, LineChart } from 'lucide-react';

const FACTORS = [
  { icon: Cpu, title: 'Exact model and year', body: 'The specific model and release year set the baseline value of your device.' },
  { icon: Package, title: 'Storage and specifications', body: 'Higher storage and better specs typically mean a higher offer.' },
  { icon: Wrench, title: 'Cosmetic condition', body: 'Scratches, dents, and screen damage affect the resale value.' },
  { icon: Battery, title: 'Functional condition', body: 'Whether the device works fully, partially, or not at all matters.' },
  { icon: Battery, title: 'Battery health', body: 'Where applicable, battery health is considered in the offer.' },
  { icon: Lock, title: 'Carrier or lock status', body: 'Unlocked and signed-out devices are easier to resell.' },
  { icon: Package, title: 'Included accessories', body: 'Original boxes, chargers, and cables can add value.' },
  { icon: LineChart, title: 'Current resale market value', body: 'Offers reflect what similar devices are selling for today.' },
];

export default function OfferFactors() {
  return (
    <section className="section-py bg-gold-100">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-2.5 w-2.5 rounded-full bg-gold-600" />
            What Affects Your Offer?
          </span>
          <h2 className="mt-4 text-lg font-medium leading-relaxed text-navy-800">
            How we think about your device's value
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            Several factors shape every offer we give. The final offer may be
            adjusted after an in-person inspection at our store.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-gold-500/40 bg-gold-500/40 sm:grid-cols-2 lg:grid-cols-4">
          {FACTORS.map((f) => (
            <div key={f.title} className="bg-white p-5 transition-colors hover:bg-gold-50">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-forest-100 text-forest-700">
                <f.icon className="h-4.5 w-4.5" />
              </span>
              <h3 className="mt-4 text-sm font-bold text-navy-800">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{f.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm leading-relaxed text-ink-600">
          Final offers depend on an in-person inspection. We'll always be upfront
          with you on the phone about what to expect.
        </p>
      </div>
    </section>
  );
}
