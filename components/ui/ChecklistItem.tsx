import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChecklistItemProps {
  text: string;
  variant?: 'light' | 'dark';
}

export function ChecklistItem({ text, variant = 'light' }: ChecklistItemProps) {
  const isDark = variant === 'dark';

  return (
    <li className="flex items-start gap-3">
      <span
        className={cn(
          'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
          isDark ? 'bg-accent/20 text-accent' : 'bg-accent/10 text-accent'
        )}
      >
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
      <span className={cn('text-sm leading-relaxed', isDark ? 'text-white/80' : 'text-foreground')}>
        {text}
      </span>
    </li>
  );
}
