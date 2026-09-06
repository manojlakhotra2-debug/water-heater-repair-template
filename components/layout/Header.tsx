'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Clock, MapPin, Menu, X } from 'lucide-react';
import { meta } from '@/content/clovis-ca';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Service Area', href: '#service-area' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="hidden bg-primary py-2 text-primary-foreground md:block">
        <div className="container-page flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              {meta.serviceAreaLabel}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-accent" />
              {meta.hours}
            </span>
          </div>
          <a
            href={`tel:${meta.phone.replace(/[^0-9]/g, '')}`}
            className="flex items-center gap-1.5 font-semibold text-accent transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            {meta.phone}
          </a>
        </div>
      </div>

      <header className="relative z-40 w-full bg-background">
        <div className="container-page flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <img src={meta.logoPath} alt={meta.businessName} className="h-8 w-auto" />
            <span className="text-lg font-bold tracking-tight">{meta.businessName}</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${meta.phone.replace(/[^0-9]/g, '')}`}
              className="hidden items-center gap-2 rounded-pill bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:brightness-110 hover:shadow-accent active:scale-[0.98] sm:flex"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="container-page flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${meta.phone.replace(/[^0-9]/g, '')}`}
                className="mt-2 flex items-center justify-center gap-2 rounded-pill bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
              >
                <Phone className="h-4 w-4" />
                {meta.phone}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
