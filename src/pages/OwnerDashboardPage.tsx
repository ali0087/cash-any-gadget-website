import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Loader2,
  Search,
  Phone,
  Mail,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronRight,
  Trash2,
  StickyNote,
  X,
  Image as ImageIcon,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { OwnerLogoutButton } from './OwnerLoginPage';
import type { QuoteRequestRecord, QuoteStatus, DeviceEntry } from '@/lib/types';

const STATUS_OPTIONS: { value: QuoteStatus; label: string; color: string }[] = [
  { value: 'new', label: 'New', color: 'bg-cash-100 text-cash-800' },
  { value: 'contacted', label: 'Contacted', color: 'bg-blue-100 text-blue-800' },
  { value: 'offer_discussed', label: 'Offer Discussed', color: 'bg-amber-100 text-amber-800' },
  { value: 'accepted', label: 'Accepted', color: 'bg-emerald-100 text-emerald-800' },
  { value: 'declined', label: 'Declined', color: 'bg-red-100 text-red-800' },
  { value: 'completed', label: 'Completed', color: 'bg-ink-200 text-ink-800' },
];

const STATUS_FILTERS = ['all', ...STATUS_OPTIONS.map((s) => s.value)];

export default function OwnerDashboardPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState<QuoteRequestRecord[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [notesDraft, setNotesDraft] = useState('');
  const [savingId, setSavingId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate('/owner', { replace: true });
        return;
      }
      load();
    });

    async function load() {
      const { data, error } = await supabase
        .from('quote_requests')
        .select('*')
        .order('submitted_at', { ascending: false });
      if (cancelled) return;
      if (error) {
        setError(error.message);
      } else {
        setRecords((data ?? []) as QuoteRequestRecord[]);
      }
      setLoading(false);
    }
    return () => { cancelled = true; };
  }, [navigate]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return records.filter((r) => {
      if (statusFilter !== 'all' && r.status !== statusFilter) return false;
      if (!q) return true;
      const haystack = `${r.full_name} ${r.phone} ${r.email ?? ''} ${
        r.devices.map((d) => `${d.brand} ${d.model} ${d.category}`).join(' ')
      }`.toLowerCase();
      return haystack.includes(q);
    });
  }, [records, search, statusFilter]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: records.length };
    for (const s of STATUS_OPTIONS) c[s.value] = records.filter((r) => r.status === s.value).length;
    return c;
  }, [records]);

  async function updateStatus(id: string, status: QuoteStatus) {
    const { error } = await supabase
      .from('quote_requests')
      .update({ status })
      .eq('id', id);
    if (error) { setError(error.message); return; }
    setRecords((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
  }

  async function saveNotes(id: string) {
    setSavingId(id);
    const { error } = await supabase
      .from('quote_requests')
      .update({ notes: notesDraft })
      .eq('id', id);
    if (error) { setError(error.message); }
    else {
      setRecords((prev) => prev.map((r) => (r.id === id ? { ...r, notes: notesDraft } : r)));
    }
    setSavingId(null);
  }

  function toggleExpand(r: QuoteRequestRecord) {
    if (expandedId === r.id) {
      setExpandedId(null);
    } else {
      setExpandedId(r.id);
      setNotesDraft(r.notes ?? '');
    }
  }

  function photoUrl(path: string) {
    return supabase.storage.from('quote-photos').getPublicUrl(path).data.publicUrl;
  }

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-ink-400" />
      </div>
    );
  }

  return (
    <div className="bg-gold-100">
      <div className="border-b border-gold-500/40 bg-white">
        <div className="container-px mx-auto flex max-w-6xl items-center justify-between py-6">
          <div>
            <h1 className="text-2xl font-bold text-navy-800">Owner Dashboard</h1>
            <p className="mt-1 text-sm text-ink-600">Manage quote requests</p>
          </div>
          <OwnerLogoutButton />
        </div>
      </div>

      <div className="container-px mx-auto max-w-6xl py-8">
        {error && (
          <div className="mb-5 rounded-xl border border-red-200 bg-white p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Stats */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {STATUS_FILTERS.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`rounded-xl border p-3 text-left transition-colors ${
                statusFilter === s
                  ? 'border-navy-500 bg-gold-200'
                  : 'border-gold-500/40 bg-white hover:border-gold-500'
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                {s === 'all' ? 'All' : STATUS_OPTIONS.find((o) => o.value === s)?.label}
              </p>
              <p className="mt-1 text-xl font-bold text-navy-800">{counts[s] ?? 0}</p>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          <input
            className="input pl-10"
            placeholder="Search by name, phone, email, or device..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* List */}
        {filtered.length === 0 ? (
          <div className="card p-10 text-center">
            <p className="text-ink-600">No quote requests match your filters.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((r) => {
              const expanded = expandedId === r.id;
              const statusOpt = STATUS_OPTIONS.find((s) => s.value === r.status);
              return (
                <div key={r.id} className="card overflow-hidden">
                  <button
                    onClick={() => toggleExpand(r)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3">
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusOpt?.color}`}>
                          {statusOpt?.label}
                        </span>
                        <span className="text-xs text-ink-400">
                          {new Date(r.submitted_at).toLocaleString()}
                        </span>
                      </div>
                      <h3 className="mt-2 truncate text-base font-bold text-navy-800">
                        {r.full_name}
                      </h3>
                      <p className="mt-0.5 truncate text-sm text-ink-600">
                        {r.devices.length} device{r.devices.length > 1 ? 's' : ''} ·{' '}
                        {r.devices.map((d) => `${d.brand} ${d.model}`).filter(Boolean).join(', ') || 'No model'}
                      </p>
                    </div>
                    {expanded ? (
                      <ChevronDown className="h-5 w-5 shrink-0 text-ink-400" />
                    ) : (
                      <ChevronRight className="h-5 w-5 shrink-0 text-ink-400" />
                    )}
                  </button>

                  {expanded && (
                    <div className="border-t border-ink-100 p-5">
                      <div className="grid gap-5 lg:grid-cols-3">
                        {/* Contact info */}
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400">Customer</h4>
                          <ul className="mt-3 space-y-2 text-sm">
                            <li className="flex items-center gap-2 text-ink-700">
                              <Phone className="h-4 w-4 text-ink-400" />
                              <a href={`tel:${r.phone}`} className="hover:text-cash-700">{r.phone}</a>
                            </li>
                            {r.email && (
                              <li className="flex items-center gap-2 text-ink-700">
                                <Mail className="h-4 w-4 text-ink-400" />
                                <a href={`mailto:${r.email}`} className="hover:text-cash-700">{r.email}</a>
                              </li>
                            )}
                            {r.zip_code && (
                              <li className="flex items-center gap-2 text-ink-700">
                                <MapPin className="h-4 w-4 text-ink-400" />
                                {r.zip_code}
                              </li>
                            )}
                            <li className="flex items-center gap-2 text-ink-700">
                              <Calendar className="h-4 w-4 text-ink-400" />
                              Prefers {r.contact_method === 'phone' ? 'phone call' : 'text'}
                            </li>
                          </ul>

                          <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-ink-400">Status</h4>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {STATUS_OPTIONS.map((s) => (
                              <button
                                key={s.value}
                                onClick={() => updateStatus(r.id, s.value)}
                                className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                                  r.status === s.value
                                    ? s.color + ' ring-2 ring-offset-1 ring-current'
                                    : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
                                }`}
                              >
                                {s.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Devices */}
                        <div className="lg:col-span-2">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                            Devices ({r.devices.length})
                          </h4>
                          <div className="mt-3 space-y-3">
                            {r.devices.map((d, i) => (
                              <DeviceDetail key={i} device={d} index={i} />
                            ))}
                          </div>

                          {r.photo_paths.length > 0 && (
                            <div className="mt-5">
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400">Photos</h4>
                              <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-5">
                                {r.photo_paths.map((p, i) => (
                                  <a
                                    key={i}
                                    href={photoUrl(p)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="aspect-square overflow-hidden rounded-lg border border-ink-200"
                                  >
                                    <img src={photoUrl(p)} alt={`Photo ${i + 1}`} className="h-full w-full object-cover" />
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Notes */}
                          <div className="mt-5">
                            <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-400">
                              <StickyNote className="h-3.5 w-3.5" />
                              Private notes
                            </h4>
                            <textarea
                              className="input mt-2 min-h-[80px] resize-y"
                              value={notesDraft}
                              onChange={(e) => setNotesDraft(e.target.value)}
                              placeholder="Notes from your phone conversation..."
                            />
                            <button
                              onClick={() => saveNotes(r.id)}
                              disabled={savingId === r.id}
                              className="btn-secondary mt-2 !py-2 !text-sm"
                            >
                              {savingId === r.id ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Save notes'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function DeviceDetail({ device, index }: { device: DeviceEntry; index: number }) {
  return (
    <div className="rounded-xl border border-ink-100 bg-ink-50/40 p-4">
      <p className="text-sm font-bold text-ink-900">
        {index + 1}. {device.brand} {device.model}
      </p>
      <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
        <DetailItem label="Category" value={device.category} />
        <DetailItem label="Condition" value={device.condition} />
        {device.storage && <DetailItem label="Storage" value={device.storage} />}
        {device.modelYear && <DetailItem label="Year" value={device.modelYear} />}
        <DetailItem label="Powers on" value={device.powersOn} />
        <DetailItem label="Unlocked" value={device.unlocked} />
        <DetailItem label="Signed out" value={device.signedOut} />
      </dl>
      {device.details && (
        <p className="mt-2 text-xs text-ink-600">
          <span className="font-semibold text-ink-700">Details: </span>
          {device.details}
        </p>
      )}
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex justify-between gap-2">
      <dt className="text-ink-400">{label}</dt>
      <dd className="text-right font-medium text-ink-800">{value}</dd>
    </div>
  );
}
