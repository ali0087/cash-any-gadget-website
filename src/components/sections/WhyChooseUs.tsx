import { Link } from 'react-router-dom';
import { ArrowRight, User, Wrench, Wallet, ShieldCheck, Package, MessageSquare } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: User,
    title: 'A real person, not a machine',
    body: 'You talk to a trained buyer who evaluates your device and explains your offer. No kiosk scanning and no remote attendant on a screen.',
  },
  {
    icon: Package,
    title: 'We buy far more than phones',
    body: 'ecoATM kiosks take phones, tablets, and watches. We also buy laptops, gaming consoles, cameras, audio gear, and more at the same counter.',
  },
  {
    icon: Wallet,
    title: 'Cash, not store credit',
    body: 'You walk out with money in your pocket. No purchase required, no gift cards, no points to redeem later.',
  },
  {
    icon: Wrench,
    title: 'Damaged devices are welcome',
    body: 'Cracked screens, water damage, devices that will not power on — we evaluate them all honestly and tell you what they are worth.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe and verified',
    body: 'Like a kiosk, we require a valid government ID for every sale. That keeps stolen devices out of the resale market.',
  },
  {
    icon: MessageSquare,
    title: 'Ask questions, get answers',
    body: 'A kiosk cannot explain why an offer is what it is. We walk you through it, answer your questions, and let you decide with no pressure.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-2.5 w-2.5 rounded-full bg-gold-600" />
            Why Choose Us
          </span>
          <h2 className="mt-4 text-lg font-medium leading-relaxed text-navy-800">
            Why choose us over an ecoATM kiosk?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">
            You will find ecoATM kiosks inside malls and convenience stores, but here is
            why selling to us is the smarter, more personal way to get top dollar for your
            electronics.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-xl border border-gold-500/40 bg-gold-100/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-forest-400 hover:shadow-cardHover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-forest-600 text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy-800">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 rounded-lg bg-forest-600 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-forest-700 hover:shadow-lg"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
