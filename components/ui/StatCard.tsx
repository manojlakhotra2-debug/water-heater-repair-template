import { cn } from '@/lib/utils';

interface StatCardProps {
  stat: {
    value: string;
    label: string;
  };
  variant?: 'light' | 'dark';
  className?: string;
}

export function StatCard({ stat, variant = 'light', className }: StatCardProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        'flex flex-col items-center text-center',
        className
      )}
    >
      <span className={cn(
        'text-3xl font-extrabold tracking-tight md:text-4xl',
        isDark ? 'text-white' : 'text-primary'
      )}>
        {stat.value}
      </span>
      <span className={cn(
        'mt-1 text-xs font-medium uppercase tracking-wide',
        isDark ? 'text-white/60' : 'text-muted-foreground'
      )}>
        {stat.label}
      </span>
    </div>
  );
}
