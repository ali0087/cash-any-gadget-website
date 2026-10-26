export default function PrivacyPage() {
  return (
    <div className="container-px mx-auto max-w-3xl bg-gold-100 py-16 sm:py-20">
      <span className="eyebrow">Legal</span>
      <h1 className="mt-4 text-3xl font-bold text-navy-800 sm:text-4xl">Privacy Policy</h1>
      <p className="mt-3 text-sm text-ink-600">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="mt-8 max-w-none space-y-6 text-ink-700">
        <Section title="Overview">
          <p>
            Cash Any Gadget respects your privacy. This policy explains what
            information we collect when you submit a quote request and how we use it.
          </p>
        </Section>
        <Section title="Information we collect">
          <p>
            When you submit a quote request, we collect your name, phone number,
            email address (if provided), preferred contact method, ZIP code (if
            provided), device details, and any photos you choose to attach.
          </p>
        </Section>
        <Section title="How we use your information">
          <p>
            We use your information solely to contact you about your quote request,
            discuss an offer, and complete a sale if you choose to proceed. We do
            not sell, rent, or share your personal information with third parties
            for marketing purposes.
          </p>
        </Section>
        <Section title="Data storage">
          <p>
            Your quote request is stored in a secure database. Only authorized
            business personnel can access your submission. Photos you upload are
            stored to help us evaluate your device.
          </p>
        </Section>
        <Section title="Your choices">
          <p>
            You are never obligated to accept an offer. If you would like your quote
            request deleted, contact us and we will remove your information.
          </p>
        </Section>
        <Section title="Contact">
          <p>
            Questions about this policy? Contact us through the information on our
            website.
          </p>
        </Section>
        <p className="rounded-xl border border-gold-500/40 bg-white p-4 text-sm text-ink-600">
          This is a template privacy policy provided for the initial website. Have
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
