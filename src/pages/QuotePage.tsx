import { useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Plus,
  Trash2,
  Check,
  CheckCircle2,
  AlertCircle,
  Upload,
  X,
  Loader2,
  User,
  Smartphone,
  Camera,
  ShieldCheck,
} from 'lucide-react';
import {
  CATEGORIES,
  CATEGORY_NAMES,
  STORAGE_OPTIONS,
  CONDITIONS,
  TRI_OPTIONS,
} from '@/lib/categories';
import type { DeviceEntry, ContactMethod, TriState, DeviceCondition } from '@/lib/types';
import { supabase, QUOTE_BUCKET } from '@/lib/supabase';

const MAX_PHOTOS = 5;
const MAX_PHOTO_MB = 5;

function emptyDevice(category = ''): DeviceEntry {
  return {
    category,
    brand: '',
    model: '',
    modelYear: '',
    storage: '',
    condition: '',
    powersOn: '',
    unlocked: '',
    signedOut: '',
    details: '',
  };
}

export default function QuotePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const presetCategory = searchParams.get('category') ?? '';

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Customer info
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [contactMethod, setContactMethod] = useState<ContactMethod>('phone');
  const [zipCode, setZipCode] = useState('');

  // Devices
  const [devices, setDevices] = useState<DeviceEntry[]>([
    emptyDevice(
      CATEGORY_NAMES.includes(presetCategory) ? presetCategory : ''
    ),
  ]);

  // Photos
  const [photoFiles, setPhotoFiles] = useState<File[]>([]);
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);
  const [photoError, setPhotoError] = useState<string | null>(null);

  // Consent
  const [consent, setConsent] = useState(false);

  function updateDevice(idx: number, patch: Partial<DeviceEntry>) {
    setDevices((prev) => prev.map((d, i) => (i === idx ? { ...d, ...patch } : d)));
  }

  function addDevice() {
    setDevices((prev) => [...prev, emptyDevice()]);
  }

  function removeDevice(idx: number) {
    setDevices((prev) => (prev.length === 1 ? prev : prev.filter((_, i) => i !== idx)));
  }

  function handlePhotos(files: FileList | null) {
    if (!files) return;
    setPhotoError(null);
    const incoming = Array.from(files);
    const valid: File[] = [];
    for (const file of incoming) {
      if (!['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'].includes(file.type)) {
        setPhotoError('Photos must be JPG, PNG, WebP, or HEIC.');
        continue;
      }
      if (file.size > MAX_PHOTO_MB * 1024 * 1024) {
        setPhotoError(`Each photo must be ${MAX_PHOTO_MB}MB or smaller.`);
        continue;
      }
      valid.push(file);
    }
    if (photoFiles.length + valid.length > MAX_PHOTOS) {
      setPhotoError(`You can attach a maximum of ${MAX_PHOTOS} photos.`);
      valid.splice(MAX_PHOTOS - photoFiles.length);
    }
    if (valid.length === 0) return;
    setPhotoFiles((prev) => [...prev, ...valid]);
    setPhotoPreviews((prev) => [...prev, ...valid.map((f) => URL.createObjectURL(f))]);
  }

  function removePhoto(idx: number) {
    setPhotoFiles((prev) => prev.filter((_, i) => i !== idx));
    setPhotoPreviews((prev) => {
      URL.revokeObjectURL(prev[idx]);
      return prev.filter((_, i) => i !== idx);
    });
  }

  function validateStep1(): boolean {
    const e: Record<string, string> = {};
    if (!fullName.trim()) e.fullName = 'Please enter your full name.';
    if (!phone.trim()) e.phone = 'Please enter a phone number.';
    else if (phone.replace(/[^0-9]/g, '').length < 10) e.phone = 'Please enter a valid phone number.';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email address.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateStep2(): boolean {
    const e: Record<string, string> = {};
    devices.forEach((d, i) => {
      const prefix = `device-${i}-`;
      if (!d.category) e[`${prefix}category`] = 'Select a category.';
      if (!d.brand.trim()) e[`${prefix}brand`] = 'Enter the brand.';
      if (!d.model.trim()) e[`${prefix}model`] = 'Enter the model.';
      if (!d.condition) e[`${prefix}condition`] = 'Select a condition.';
    });
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    setSubmitError(null);
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  }

  function back() {
    setSubmitError(null);
    setErrors({});
    if (step > 1) setStep(step - 1);
  }

  async function handleSubmit() {
    if (!consent) {
      setErrors({ consent: 'Please acknowledge that you are requesting contact.' });
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    try {
      // Upload photos (if any) to the quote-photos bucket.
      const photoPaths: string[] = [];
      for (const file of photoFiles) {
        const ext = file.name.split('.').pop()?.toLowerCase() ?? 'jpg';
        const path = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}.${ext}`;
        const { error: upErr } = await supabase.storage
          .from(QUOTE_BUCKET)
          .upload(path, file, { contentType: file.type });
        if (upErr) throw new Error(`Photo upload failed: ${upErr.message}`);
        photoPaths.push(path);
      }

      const payload = {
        full_name: fullName.trim(),
        phone: phone.trim(),
        email: email.trim() || null,
        contact_method: contactMethod,
        zip_code: zipCode.trim() || null,
        devices,
        photo_paths: photoPaths,
        consent,
      };

      const { error: insertErr } = await supabase.from('quote_requests').insert(payload);
      if (insertErr) throw new Error(insertErr.message);

      setSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong.';
      setSubmitError(
        `We could not submit your request. ${msg} Please try again, or call us directly.`
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return <SuccessScreen onReset={() => navigate('/')} />;
  }

  return (
    <div className="bg-gold-100">
      {/* Page header */}
      <div className="border-b border-navy-900/30 bg-navy-800">
        <div className="container-px mx-auto max-w-3xl py-10 sm:py-14">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-100 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <h1 className="mt-5 text-3xl font-bold text-white sm:text-4xl">Get My Quote</h1>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink-300">
            Tell us about your device. We'll review your details and personally contact
            you to discuss an offer. No automatic pricing, no obligation.
          </p>
        </div>
      </div>

      <div id="quote-form" className="container-px mx-auto max-w-3xl scroll-mt-20 py-10 sm:py-14">
        <Stepper step={step} />

        {/* Step 1: Customer info */}
        {step === 1 && (
          <div className="mt-8 animate-fade-up">
            <SectionTitle icon={User} title="Your contact details" subtitle="So we can reach you with an offer." />
            <div className="card mt-6 space-y-5 p-6 sm:p-7">
              <Field label="Full name" required error={errors.fullName}>
                <input
                  className="input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jane Doe"
                  autoComplete="name"
                />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone number" required error={errors.phone}>
                  <input
                    className="input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(516) 555-0123"
                    type="tel"
                    autoComplete="tel"
                  />
                </Field>
                <Field label="Email address" error={errors.email} hint="Optional">
                  <input
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    type="email"
                    autoComplete="email"
                  />
                </Field>
              </div>

              <Field label="Preferred contact method" required>
                <div className="flex gap-3">
                {(['phone', 'text'] as ContactMethod[]).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setContactMethod(m)}
                    className={`flex-1 rounded-lg border px-4 py-3 text-sm font-semibold capitalize transition-all ${
                      contactMethod === m
                        ? 'border-navy-700 bg-navy-800 text-white ring-2 ring-navy-500/20'
                        : 'border-ink-200 bg-white text-ink-600 hover:border-navy-300'
                    }`}
                  >
                    {m === 'phone' ? 'Phone call' : 'Text message'}
                  </button>
                ))}
                </div>
              </Field>

              <Field label="ZIP code" hint="Optional">
                <input
                  className="input sm:max-w-[12rem]"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="11700"
                  inputMode="numeric"
                  autoComplete="postal-code"
                />
              </Field>
            </div>

            <NavRow onBack={back} onNext={next} backLabel="Cancel" nextLabel="Continue" backTo="/" />
          </div>
        )}

        {/* Step 2: Devices */}
        {step === 2 && (
          <div className="mt-8 animate-fade-up">
            <SectionTitle
              icon={Smartphone}
              title="Tell us about your device(s)"
              subtitle="Add one device or as many as you want to sell."
            />

            <div className="mt-6 space-y-5">
              {devices.map((device, idx) => (
                <DeviceCard
                  key={idx}
                  index={idx}
                  device={device}
                  canRemove={devices.length > 1}
                  errors={errors}
                  onChange={(patch) => updateDevice(idx, patch)}
                  onRemove={() => removeDevice(idx)}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={addDevice}
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-dashed border-ink-300 bg-white px-4 py-3 text-sm font-semibold text-ink-600 transition-colors hover:border-navy-400 hover:text-navy-800"
            >
              <Plus className="h-4 w-4" />
              Add another device
            </button>

            <NavRow onBack={back} onNext={next} nextLabel="Continue" />
          </div>
        )}

        {/* Step 3: Photos + consent + submit */}
        {step === 3 && (
          <div className="mt-8 animate-fade-up">
            <SectionTitle
              icon={Camera}
              title="Photos and review"
              subtitle="Photos are optional but help us give you a more accurate offer."
            />

            <div className="card mt-6 p-6 sm:p-7">
              <h3 className="text-base font-bold text-navy-800">Device photos (optional)</h3>
              <p className="mt-1.5 text-sm text-ink-500">
                Attach up to {MAX_PHOTOS} photos (JPG, PNG, WebP, or HEIC, {MAX_PHOTO_MB}MB each).
              </p>

              <label className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gold-500/50 bg-gold-50 px-6 py-8 text-center transition-colors hover:border-navy-400 hover:bg-gold-100">
                <Upload className="h-6 w-6 text-ink-400" />
                <span className="mt-2 text-sm font-medium text-ink-600">Click to add photos</span>
                <span className="mt-0.5 text-xs text-ink-400">Optional — not required</span>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
                  multiple
                  className="hidden"
                  onChange={(e) => handlePhotos(e.target.files)}
                />
              </label>

              {photoError && (
                <p className="mt-3 flex items-start gap-2 text-sm text-red-600">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  {photoError}
                </p>
              )}

              {photoPreviews.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
                  {photoPreviews.map((src, i) => (
                    <div key={i} className="group relative aspect-square overflow-hidden rounded-md border border-ink-200">
                      <img src={src} alt={`Device photo ${i + 1}`} className="h-full w-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removePhoto(i)}
                        className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy-900/70 text-white opacity-0 transition-opacity group-hover:opacity-100"
                        aria-label="Remove photo"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Review summary */}
            <div className="card mt-5 p-6 sm:p-7">
              <h3 className="text-base font-bold text-navy-800">Review your request</h3>
              <dl className="mt-4 divide-y divide-ink-200 text-sm">
                <SummaryRow label="Name" value={fullName} />
                <SummaryRow label="Phone" value={phone} />
                {email && <SummaryRow label="Email" value={email} />}
                <SummaryRow label="Contact method" value={contactMethod === 'phone' ? 'Phone call' : 'Text message'} />
                {zipCode && <SummaryRow label="ZIP" value={zipCode} />}
                <SummaryRow
                  label="Devices"
                  value={`${devices.length} device${devices.length > 1 ? 's' : ''}`}
                />
                {devices.map((d, i) => (
                  <div key={i} className="py-3">
                    <p className="font-medium text-navy-800">
                      {i + 1}. {d.brand} {d.model}
                    </p>
                    <p className="mt-0.5 text-ink-400">
                      {d.category || 'Uncategorized'} · {d.condition || 'Condition not set'}
                    </p>
                  </div>
                ))}
              </dl>
            </div>

            {/* Consent */}
            <div className="card mt-5 p-6 sm:p-7">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-5 w-5 rounded border-ink-300 text-navy-700 focus:ring-navy-500"
                />
                <span className="text-sm leading-relaxed text-ink-600">
                  I acknowledge that I am requesting contact from Cash Any Gadget
                  about my quotation, and I agree to be called at the phone number
                  provided. Submitting this request does not obligate me to sell my
                  device, and does not guarantee a purchase or establish a price.
                </span>
              </label>
              {errors.consent && (
                <p className="mt-2 flex items-start gap-2 text-sm text-red-600">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  {errors.consent}
                </p>
              )}
              <p className="mt-4 flex items-start gap-2 rounded-lg bg-gold-100 p-3 text-xs leading-relaxed text-ink-600">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-navy-600" />
                We never sell or share your information. Your details are used only
                to contact you about this quote request.
              </p>
            </div>

            {submitError && (
              <div className="mt-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                <p className="text-sm leading-relaxed text-red-700">{submitError}</p>
              </div>
            )}

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
              <button type="button" onClick={back} className="btn-secondary">
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="btn-accent disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit My Quote Request
                    <Check className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Stepper({ step }: { step: number }) {
  const steps = ['Contact', 'Devices', 'Photos & Review'];
  return (
    <ol className="flex items-center gap-2">
      {steps.map((label, i) => {
        const n = i + 1;
        const done = step > n;
        const active = step === n;
        return (
          <li key={label} className="flex items-center gap-2">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                done
                  ? 'bg-navy-800 text-white'
                  : active
                  ? 'bg-navy-900 text-gold-300 ring-2 ring-gold-300/30'
                  : 'bg-ink-200 text-ink-400'
              }`}
            >
              {done ? <Check className="h-4 w-4" /> : n}
            </span>
            <span className={`text-sm font-medium ${active ? 'text-navy-800' : 'text-ink-500'}`}>
              {label}
            </span>
            {i < steps.length - 1 && (
              <span className="mx-1 h-px w-6 bg-ink-300 sm:w-10" />
            )}
          </li>
        );
      })}
    </ol>
  );
}

function SectionTitle({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: typeof User;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy-800 text-gold-300">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h2 className="text-xl font-bold text-navy-800">{title}</h2>
        <p className="mt-1 text-sm text-ink-500">{subtitle}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  hint,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="label">
        {label}
        {required && <span className="ml-1 text-navy-600">*</span>}
        {hint && <span className="ml-2 text-xs font-normal text-ink-400">({hint})</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-start gap-1.5 text-sm text-red-600">
          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

function DeviceCard({
  index,
  device,
  canRemove,
  errors,
  onChange,
  onRemove,
}: {
  index: number;
  device: DeviceEntry;
  canRemove: boolean;
  errors: Record<string, string>;
  onChange: (patch: Partial<DeviceEntry>) => void;
  onRemove: () => void;
}) {
  const p = `device-${index}-`;
  return (
    <div className="card p-6 sm:p-7">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-navy-800">
          Device {index + 1}
        </h3>
        {canRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" />
            Remove
          </button>
        )}
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Device category" required error={errors[`${p}category`]}>
          <select
            className="input"
            value={device.category}
            onChange={(e) => onChange({ category: e.target.value })}
          >
            <option value="">Select a category</option>
            {CATEGORY_NAMES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </Field>

        <Field label="Brand" required error={errors[`${p}brand`]}>
          <input
            className="input"
            value={device.brand}
            onChange={(e) => onChange({ brand: e.target.value })}
            placeholder="Apple, Samsung, Sony..."
          />
        </Field>

        <Field label="Model name" required error={errors[`${p}model`]}>
          <input
            className="input"
            value={device.model}
            onChange={(e) => onChange({ model: e.target.value })}
            placeholder="iPhone 15 Pro, Galaxy S24..."
          />
        </Field>

        <Field label="Model year" hint="Optional">
          <input
            className="input"
            value={device.modelYear}
            onChange={(e) => onChange({ modelYear: e.target.value })}
            placeholder="2023"
            inputMode="numeric"
          />
        </Field>

        <Field label="Storage capacity" hint="Where applicable">
          <select
            className="input"
            value={device.storage}
            onChange={(e) => onChange({ storage: e.target.value })}
          >
            <option value="">Select storage</option>
            {STORAGE_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>

        <Field label="Device condition" required error={errors[`${p}condition`]}>
          <select
            className="input"
            value={device.condition}
            onChange={(e) => onChange({ condition: e.target.value as DeviceCondition })}
          >
            <option value="">Select condition</option>
            {CONDITIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        <TriField
          label="Powers on?"
          value={device.powersOn}
          onChange={(v) => onChange({ powersOn: v })}
        />
        <TriField
          label="Carrier-unlocked?"
          value={device.unlocked}
          onChange={(v) => onChange({ unlocked: v })}
        />
        <TriField
          label="Signed out of account?"
          value={device.signedOut}
          onChange={(v) => onChange({ signedOut: v })}
        />
      </div>

      <div className="mt-5">
        <Field label="Additional details" hint="Optional">
          <textarea
            className="input min-h-[88px] resize-y"
            value={device.details}
            onChange={(e) => onChange({ details: e.target.value })}
            placeholder="Anything else we should know — cracks, repairs, missing parts, included accessories..."
          />
        </Field>
      </div>
    </div>
  );
}

function TriField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: TriState | '';
  onChange: (v: TriState) => void;
}) {
  return (
    <div>
      <label className="label">{label}</label>
      <select
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value as TriState)}
      >
        <option value="">Select</option>
        {TRI_OPTIONS.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 py-2.5">
      <dt className="text-ink-400">{label}</dt>
      <dd className="text-right font-medium text-navy-800">{value}</dd>
    </div>
  );
}

function NavRow({
  onBack,
  onNext,
  backLabel = 'Back',
  nextLabel = 'Continue',
  backTo,
}: {
  onBack: () => void;
  onNext: () => void;
  backLabel?: string;
  nextLabel?: string;
  backTo?: string;
}) {
  return (
    <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
      {backTo ? (
        <a href={backTo} className="btn-secondary" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </a>
      ) : (
        <button type="button" onClick={onBack} className="btn-secondary">
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </button>
      )}
      <button type="button" onClick={onNext} className="btn-primary">
        {nextLabel}
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function SuccessScreen({ onReset }: { onReset: () => void }) {
  return (
    <div className="container-px mx-auto max-w-2xl py-20 sm:py-28">
      <div className="card animate-scale-in p-8 text-center sm:p-12">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-800 text-gold-300">
          <CheckCircle2 className="h-9 w-9" />
        </span>
        <h1 className="mt-6 text-3xl font-bold text-navy-800 sm:text-4xl">
          Thank you! Your quote request has been received.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-500">
          We will review your details and contact you by phone to discuss your offer.
        </p>
        <p className="mt-3 text-sm text-ink-400">
          Submitting a request does not obligate you to sell your device.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button onClick={onReset} className="btn-accent">
            Back to Home
          </button>
          <a href="#what-we-buy" className="btn-secondary">See What We Buy</a>
        </div>
      </div>
    </div>
  );
}
