import { Link } from 'react-router-dom';
import Logo from './Logo';
import { CATEGORIES } from '@/lib/categories';

export default function Footer() {
  return (
    <footer className="border-t border-navy-900/40 bg-navy-800 text-white">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="forest" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Cash Any Gadget buys your used and unwanted electronics. Tell us what
              you have and we'll personally contact you with an offer.
            </p>
            <p className="mt-4 text-sm text-gold-300">Long Island, New York</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">Navigation</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/" className="text-white/85 hover:text-gold-300">Home</Link></li>
              <li><Link to="/sell-electronics" className="text-white/85 hover:text-gold-300">What We Buy</Link></li>
              <li><Link to="/how-it-works" className="text-white/85 hover:text-gold-300">How It Works</Link></li>
              <li><Link to="/why-cash-any-gadget" className="text-white/85 hover:text-gold-300">Why Cash Any Gadget</Link></li>
              <li><Link to="/about-us" className="text-white/85 hover:text-gold-300">About Us</Link></li>
              <li><Link to="/faq" className="text-white/85 hover:text-gold-300">FAQ</Link></li>
              <li><Link to="/contact-us" className="text-white/85 hover:text-gold-300">Contact</Link></li>
              <li><Link to="/get-a-quote" className="text-white/85 hover:text-gold-300">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">Sell Your Device</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/sell-your-iphone" className="text-white/85 hover:text-gold-300">Sell Your iPhone</Link></li>
              <li><Link to="/sell-your-samsung" className="text-white/85 hover:text-gold-300">Sell Your Samsung</Link></li>
              <li><Link to="/sell-your-tablet" className="text-white/85 hover:text-gold-300">Sell Your Tablet</Link></li>
              <li><Link to="/sell-your-macbook" className="text-white/85 hover:text-gold-300">Sell Your MacBook</Link></li>
              <li><Link to="/sell-your-gaming-console" className="text-white/85 hover:text-gold-300">Sell Your Console</Link></li>
              <li><Link to="/sell-electronics" className="text-white/85 hover:text-gold-300">Sell Electronics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <span className="block text-white/50">Store address</span>
                <span className="text-white/80">[Add your store address]</span>
              </li>
              <li>
                <span className="block text-white/50">Phone</span>
                <span className="text-white/80">[Add your phone number]</span>
              </li>
              <li>
                <span className="block text-white/50">Hours</span>
                <span className="text-white/80">[Add your business hours]</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Cash Any Gadget. All rights reserved.
          </p>
          <div className="flex gap-5 text-sm">
            <Link to="/privacy-policy" className="text-white/60 hover:text-gold-300">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-white/60 hover:text-gold-300">Terms of Service</Link>
            <Link to="/owner" className="text-white/40 hover:text-white/80">Owner</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
