import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { CATEGORIES } from '@/lib/categories';

export default function WhatWeBuy() {
  return (
    <section id="what-we-buy" className="section-py bg-gold-100">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-2.5 w-2.5 rounded-full bg-gold-600" />
            What We Buy
          </span>
          <h2 className="mt-4 text-lg font-medium leading-relaxed text-navy-800">
            Your Gadgets Have Value.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">
            From everyday devices to gaming gear, tell us what you want to sell.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/quote?category=${encodeURIComponent(cat.name)}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-gold-500/40 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-forest-500 hover:shadow-cardHover"
            >
              <div className="relative h-36 overflow-hidden bg-navy-800">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
                <h3 className="absolute bottom-3 left-4 right-4 text-[15px] font-bold text-white">
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

        <div className="mt-10 flex items-start gap-3 rounded-lg border border-forest-200 bg-white p-5">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-forest-700" />
          <p className="text-sm leading-relaxed text-ink-700">
            <span className="font-semibold text-navy-800">Broken or damaged devices may also be considered.</span>{' '}
            Tell us the condition honestly when you submit your request, and we'll
            let you know during our call whether we can make an offer.
          </p>
        </div>
      </div>
    </section>
  );
}
