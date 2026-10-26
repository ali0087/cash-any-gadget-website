import { Link } from 'react-router-dom';
import { ArrowRight, Banknote, MessageCircle, Layers } from 'lucide-react';

const REASSURANCE = [
  { icon: Banknote, label: 'Instant cash, same day' },
  { icon: MessageCircle, label: 'Your data protected' },
  { icon: Layers, label: 'Top Dollars Offers' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gold-300">
      <div className="container-px mx-auto max-w-7xl pt-14 pb-16 sm:pt-20 lg:pt-24 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Left — copy */}
          <div className="animate-fade-up">
            <div className="flex justify-center lg:justify-start">
              <span className="relative inline-flex items-center gap-3 rounded-full bg-navy-800 px-6 py-2.5 text-sm font-extrabold uppercase tracking-[0.14em] text-gold-300 shadow-lift ring-1 ring-gold-300/20 sm:text-base">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-300/10 via-transparent to-gold-300/5" />
                <span className="relative">Don't Let Your Gadgets Collect Dust — Collect Cash!</span>
              </span>
            </div>
            <h1 className="mt-6 text-center text-[2rem] font-bold leading-[1.1] text-navy-800 sm:text-4xl lg:text-left lg:text-[2.75rem]">
              Sell Electronics <span className="text-forest-700">for Cash</span> in Long Island, NY
            </h1>
            
<p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-ink-700 sm:text-lg sm:leading-8">
  Looking to sell your iPhone, iPad, MacBook, Samsung Galaxy, laptop, or gaming console? Cash Any Gadget makes it easy to sell electronics locally. We also buy DJ equipment, Pokémon cards, and more. Get a competitive offer for your gadgets today!
</p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Link to="/quote" className="btn-primary group !rounded-full px-10 py-5 text-center">
                Get a free quote online
              </Link>
              <a href="#what-we-buy" className="btn-secondary !rounded-full px-10 py-5 text-center">
                Explore What We Buy
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-3 lg:justify-start">
              {REASSURANCE.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm font-medium text-navy-800">
                  <Icon className="h-4 w-4 text-forest-700" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — premium product imagery */}
          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="relative overflow-hidden rounded-xl bg-navy-800 shadow-lift ring-1 ring-navy-800/10">
              <img
                src="https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200"
                alt="A flat lay of a gaming console, laptop, smartphone, and headphones on a wooden tabletop"
                className="h-[380px] w-full object-cover sm:h-[460px] lg:h-[540px]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-5 left-4 sm:left-6">
              <div className="flex items-center gap-3 rounded-lg border border-gold-500/40 bg-white px-4 py-3 shadow-lift">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold-300 text-navy-800">
                  <span className="font-display text-sm font-bold">$</span>
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-navy-800">Cash for your gadgets</p>
                  <p className="text-xs text-ink-500">Reviewed by a real buyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
