import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '@/lib/content';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-py bg-gold-100">
      <div className="container-px mx-auto max-w-3xl">
        <div className="text-center">
          <span className="eyebrow justify-center">
            <span className="h-2.5 w-2.5 rounded-full bg-gold-600" />
            FAQ
          </span>
          <h2 className="mt-4 text-lg font-medium leading-relaxed text-navy-800">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            Everything you need to know about selling your gadgets to us.
          </p>
        </div>

        <div className="mt-10 divide-y divide-gold-500/40 overflow-hidden rounded-xl border border-gold-500/40 bg-white">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-gold-50 sm:px-6"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-navy-800">{item.q}</span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-forest-700" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-ink-400" />
                  )}
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ink-600 sm:px-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
