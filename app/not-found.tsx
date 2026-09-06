import Link from 'next/link';
import { Phone, Home } from 'lucide-react';
import { meta } from '@/content/clovis-ca';

export default function NotFound() {
  const phoneLink = `tel:${meta.phone.replace(/[^0-9]/g, '')}`;

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-6xl font-extrabold text-accent md:text-8xl">404</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
        The page you are looking for does not exist. If you need water heater repair right now, call us — we are ready to help.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href={phoneLink}
          className="inline-flex items-center justify-center gap-2 rounded-pill bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:brightness-110 hover:shadow-accent active:scale-[0.98]"
        >
          <Phone className="h-4 w-4" />
          Call {meta.phone}
        </a>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-pill border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted active:scale-[0.98]"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
