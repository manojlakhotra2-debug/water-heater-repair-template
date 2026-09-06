import { cn } from '@/lib/utils';

interface ServicePillProps {
  label: string;
  variant?: 'light' | 'dark';
}

export function ServicePill({ label, variant = 'light' }: ServicePillProps) {
  const isDark = variant === 'dark';

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill px-4 py-2 text-sm font-medium transition-all duration-300',
        isDark
          ? 'bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 hover:border-white/20'
          : 'bg-muted text-foreground hover:bg-accent/10 hover:text-accent'
      )}
    >
      {label}
    </span>
  );
}
