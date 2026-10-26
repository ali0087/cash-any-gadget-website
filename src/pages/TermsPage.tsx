export default function TermsPage() {
  return (
    <div className="container-px mx-auto max-w-3xl bg-gold-100 py-16 sm:py-20">
      <span className="eyebrow">Legal</span>
      <h1 className="mt-4 text-3xl font-bold text-navy-800 sm:text-4xl">Terms of Service</h1>
      <p className="mt-3 text-sm text-ink-600">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="mt-8 max-w-none space-y-6 text-ink-700">
        <Section title="Our service">
          <p>
            Cash Any Gadget provides a free quote request service for individuals
            looking to sell used, new, unwanted, or eligible broken electronics. We
            review submissions and contact you by phone to discuss an offer.
          </p>
        </Section>
        <Section title="No automatic pricing">
          <p>
            Our website does not calculate or display automatic prices. All offers
            are discussed by phone and confirmed in person at our store after
            inspection.
          </p>
        </Section>
        <Section title="No obligation">
          <p>
            Submitting a quote request does not obligate you to sell your device, and
            making an offer does not obligate us to purchase it. Both parties agree
            to the sale only after an in-person inspection.
          </p>
        </Section>
        <Section title="Accuracy of information">
          <p>
            You agree to provide accurate information about your device. Offers are
            based on the details you submit and may be adjusted after in-person
            inspection if the device's condition differs from what was described.
          </p>
        </Section>
        <Section title="Payment">
          <p>
            Payment is issued only after the device has been inspected in person and
            both parties have agreed on the final price.
          </p>
        </Section>
        <Section title="Changes to these terms">
          <p>
            We may update these terms from time to time. Continued use of our website
            after changes constitutes acceptance of the updated terms.
          </p>
        </Section>
        <p className="rounded-xl border border-gold-500/40 bg-white p-4 text-sm text-ink-600">
          This is a template terms of service provided for the initial website. Have
          it reviewed by a qualified professional before relying on it for your
          business.
        </p>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-navy-800">{title}</h2>
      <div className="mt-2 space-y-2 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
