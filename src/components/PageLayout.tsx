import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  breadcrumb?: { label: string; to: string }[];
}

export function PageHero({ eyebrow, title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <div className="border-b border-navy-900/30 bg-navy-800">
      <div className="container-px mx-auto max-w-4xl py-12 sm:py-16 lg:py-20">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gold-200">
              {breadcrumb.map((crumb, i) => (
                <li key={crumb.to} className="flex items-center gap-1.5">
                  {i < breadcrumb.length - 1 ? (
                    <>
                      <Link to={crumb.to} className="text-gold-200/80 hover:text-gold-300">
                        {crumb.label}
                      </Link>
                      <span className="text-gold-200/40">/</span>
                    </>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <span className="inline-flex items-center gap-2.5 rounded-full bg-navy-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-gold-300">
          {eyebrow}
        </span>
        <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gold-100">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="section-py bg-gold-300">
      <div className="container-px mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl bg-navy-800 px-6 py-14 shadow-lift sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-gold-300 via-gold-400 to-transparent" />
            <div className="absolute -top-20 right-10 h-56 w-56 rounded-full bg-gold-300/15 blur-3xl" />
          </div>
          <div className="relative text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Ready to turn your gadgets into cash?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gold-100">
              Tell us what you're selling. We'll review your request and personally contact you to
              discuss an offer.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link to="/get-a-quote" className="btn-accent group">
                Request My Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary">
                How It Works
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

export function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof ArrowRight;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="card p-6">
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-800 text-gold-300">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-base font-bold text-navy-800">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-ink-600">{children}</div>
    </div>
  );
}
