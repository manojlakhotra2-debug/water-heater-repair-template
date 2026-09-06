import { cn } from '@/lib/utils';
import { MapPin } from 'lucide-react';

interface ServicePillProps {
  label: string;
  variant?: 'light' | 'dark';
  showIcon?: boolean;
}

export function ServicePill({ label, variant = 'light', showIcon = false }: ServicePillProps) {
  const isDark = variant === 'dark';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-pill px-4 py-2 text-sm font-medium transition-all duration-300',
        isDark
          ? 'bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 hover:border-white/20'
          : 'bg-muted text-foreground hover:bg-accent/10 hover:text-accent'
      )}
    >
      {showIcon && (
        <MapPin className={cn('h-3.5 w-3.5', isDark ? 'text-white/50' : 'text-muted-foreground')} />
      )}
      {label}
    </span>
  );
}
