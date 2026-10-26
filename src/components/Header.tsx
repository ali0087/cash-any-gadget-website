import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const NAV_LINKS: { to: string; label: string }[] = [
  { to: '/sell-electronics', label: 'What We Buy' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/why-cash-any-gadget', label: 'Why Us' },
  { to: '/faq', label: 'FAQ' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-navy-900/40 bg-navy-800/95 shadow-md backdrop-blur-md'
          : 'border-b border-navy-900/30 bg-navy-800 backdrop-blur-sm'
      }`}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 lg:h-[68px]">
        <a href="/" className="shrink-0" aria-label="Cash Any Gadget home">
          <Logo variant="forest" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-gold-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/contact-us"
            className="rounded-md px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-gold-300"
          >
            Contact
          </Link>
          <Link
            to="/get-a-quote"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-300 px-5 py-2.5 text-sm font-semibold text-navy-800 shadow-sm transition-all duration-200 hover:bg-gold-200 hover:shadow-md active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-navy-950/50"
            onClick={() => setMenuOpen(false)}
          />
          <div
            className="absolute right-0 top-0 h-full w-80 max-w-[85vw] shadow-2xl"
            style={{ backgroundColor: '#14243B' }}
          >
            <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
              <Logo variant="forest" />
              <button
                type="button"
                className="rounded-md p-2 text-white/80 transition-colors hover:bg-gold-300 hover:text-navy-800"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-lg px-4 py-3 text-base font-medium text-white transition-colors hover:bg-gold-300 hover:text-navy-800"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact-us"
                className="rounded-lg px-4 py-3 text-base font-medium text-white transition-colors hover:bg-gold-300 hover:text-navy-800"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/get-a-quote"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold-300 px-5 py-3 text-sm font-semibold text-navy-800 shadow-sm transition-all duration-200 hover:bg-gold-200 active:scale-[0.98]"
                onClick={() => setMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
