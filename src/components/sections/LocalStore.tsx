import { MapPin, Phone, Clock, Navigation, Info } from 'lucide-react';

export default function LocalStore() {
  return (
    <section id="contact" className="section-py bg-gold-300">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <span className="eyebrow">
              <span className="h-2.5 w-2.5 rounded-full bg-gold-600" />
              Local Store
            </span>
            <h2 className="mt-4 text-lg font-medium leading-relaxed text-navy-800">
              Visit us in Long Island, New York
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-700">
              We currently operate one physical store. Bring your device in after we
              agree on an offer, and we'll inspect it and pay you on the spot.
            </p>

            <div className="mt-8 space-y-3">
              <InfoRow icon={MapPin} label="Store address" value="[Add your store address]" />
              <InfoRow icon={Phone} label="Phone number" value="[Add your phone number]" />
              <InfoRow icon={Clock} label="Business hours" value="[Add your business hours]" />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
              <a href="tel:+10000000000" className="btn-secondary">
                <Phone className="h-4 w-4" />
                Call the Store
              </a>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-lg border border-gold-500/40 bg-white p-4">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-ink-500" />
              <p className="text-sm leading-relaxed text-ink-600">
                Our address, phone number, hours, and map link are placeholders.
                They will be updated with the actual store details before publishing.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-gold-500/40 bg-white shadow-card">
            <div className="flex aspect-[4/3] w-full items-center justify-center bg-gold-100">
              <div className="text-center">
                <MapPin className="mx-auto h-10 w-10 text-forest-300" />
                <p className="mt-3 text-sm font-medium text-ink-600">
                  Map will be embedded with the actual store address
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-lg border border-gold-500/40 bg-white p-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-forest-700 text-gold-300">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">{label}</p>
        <p className="mt-1 text-base font-medium text-navy-800">{value}</p>
      </div>
    </div>
  );
}
