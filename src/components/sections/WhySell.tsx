import { MessageSquare, BadgeDollarSign, ShieldCheck, Workflow } from 'lucide-react';

const FEATURES = [
  {
    icon: MessageSquare,
    title: 'Personal communication',
    body: 'Speak directly with a real buyer. No call centers, no scripts — just a straightforward conversation about your device.',
  },
  {
    icon: BadgeDollarSign,
    title: 'A straightforward quote process',
    body: 'There is no charge to request a quotation. Tell us what you have and we will get back to you.',
  },
  {
    icon: ShieldCheck,
    title: 'No obligation',
    body: 'You decide whether to accept the offer. Submitting a request never commits you to sell.',
  },
  {
    icon: Workflow,
    title: 'Clear device information',
    body: 'We walk you through exactly what we need to know and how we arrive at an offer.',
  },
];

export default function WhySell() {
  return (
    <section id="about" className="section-py bg-forest-700">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="eyebrow text-gold-300">
            <span className="h-2.5 w-2.5 rounded-full bg-gold-300" />
            Why Cash Any Gadget
          </span>
          <h2 className="mt-4 text-lg font-medium leading-relaxed text-white">
            What to expect when you sell to us
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            We are a local Long Island electronics buyback business. We buy used,
            new, unwanted, and eligible broken electronics from individuals and
            resell them through online marketplaces.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-forest-800 p-6 transition-colors hover:bg-forest-900">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold-300 text-navy-800">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
