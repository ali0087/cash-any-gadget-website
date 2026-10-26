import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, Lock, LogOut, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function OwnerLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate('/owner/dashboard', { replace: true });
      setChecking(false);
    });
  }, [navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error: err } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    if (err) {
      setError(err.message === 'Invalid login credentials'
        ? 'Incorrect email or password.'
        : err.message);
      setLoading(false);
    } else {
      navigate('/owner/dashboard', { replace: true });
    }
  }

  if (checking) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-gold-100">
        <Loader2 className="h-6 w-6 animate-spin text-navy-500" />
      </div>
    );
  }

  return (
    <div className="container-px mx-auto flex min-h-[70vh] max-w-md items-center bg-gold-100 py-16">
      <div className="w-full">
        <div className="text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-navy-800 text-gold-300">
            <Lock className="h-6 w-6" />
          </span>
          <h1 className="mt-5 text-2xl font-bold text-navy-800">Owner Sign In</h1>
          <p className="mt-2 text-sm text-ink-500">
            Secure access to quote requests. Authorized personnel only.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card mt-8 space-y-5 p-6 sm:p-7">
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="you@cashanygadget.com"
            />
          </div>
          <div>
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          {error && (
            <p className="flex items-start gap-2 text-sm text-red-600">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              {error}
            </p>
          )}

          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Sign In'}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-ink-400">
          The dashboard is protected by Supabase authentication. Create an owner
          account in the Supabase dashboard to sign in.
        </p>
      </div>
    </div>
  );
}

export function OwnerLogoutButton() {
  const navigate = useNavigate();
  async function handle() {
    await supabase.auth.signOut();
    navigate('/owner', { replace: true });
  }
  return (
    <button onClick={handle} className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-800/20 bg-white px-4 py-2 text-sm font-medium text-navy-800 transition-colors hover:bg-gold-100 hover:text-navy-900">
      <LogOut className="h-4 w-4" />
      Sign Out
    </button>
  );
}
