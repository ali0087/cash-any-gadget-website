import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FinalCta() {
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
