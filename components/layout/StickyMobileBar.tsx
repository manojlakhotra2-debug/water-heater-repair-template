'use client';

import { Phone } from 'lucide-react';
import { meta } from '@/content/clovis-ca';

export function StickyMobileBar() {
  const phoneLink = `tel:${meta.phone.replace(/[^0-9]/g, '')}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md md:hidden">
      <a
        href={phoneLink}
        className="flex w-full items-center justify-center gap-2 rounded-pill bg-accent py-3.5 text-sm font-bold text-accent-foreground shadow-soft active:scale-[0.98]"
      >
        <Phone className="h-4 w-4" />
        Call Now – 24/7
      </a>
    </div>
  );
}
