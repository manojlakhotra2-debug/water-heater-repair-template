'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight, Phone } from 'lucide-react';

interface CTAButtonProps {
  href: string;
  children: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  icon?: 'arrow' | 'phone' | 'none';
  className?: string;
  external?: boolean;
}

export function CTAButton({
  href,
  children,
  variant = 'primary',
  icon = 'arrow',
  className,
  external = false,
}: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

  const variants = {
    primary:
      'bg-accent text-accent-foreground shadow-soft hover:shadow-accent hover:brightness-110 active:scale-[0.98]',
    secondary:
      'bg-primary text-primary-foreground shadow-soft hover:bg-primary/90 active:scale-[0.98]',
    outline:
      'border border-border bg-background text-foreground hover:bg-muted active:scale-[0.98]',
    dark: 'bg-white text-primary hover:bg-white/90 active:scale-[0.98] shadow-soft',
  };

  const IconComponent = icon === 'phone' ? Phone : icon === 'arrow' ? ArrowRight : null;

  const content = (
    <>
      {IconComponent && <IconComponent className="h-4 w-4" />}
      {children}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={cn(base, variants[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {content}
    </Link>
  );
}
