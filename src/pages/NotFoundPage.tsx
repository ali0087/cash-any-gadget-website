import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="container-px mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center py-16 text-center">
      <p className="font-display text-7xl font-extrabold text-forest-600">404</p>
      <h1 className="mt-4 text-3xl font-bold text-navy-800">Page not found</h1>
      <p className="mt-3 text-lg text-ink-700">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/" className="btn-primary">
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
        <button onClick={() => history.back()} className="btn-secondary">
          <ArrowLeft className="h-4 w-4" />
          Go Back
        </button>
      </div>
    </div>
  );
}
