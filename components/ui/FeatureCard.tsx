import { cn } from '@/lib/utils';
import { FadeUp } from '@/components/ui/FadeUp';
import * as Icons from 'lucide-react';

interface FeatureCardProps {
  feature: {
    icon: string;
    title: string;
    description: string;
  };
  index: number;
  variant?: 'light' | 'dark';
}

export function FeatureCard({ feature, index, variant = 'light' }: FeatureCardProps) {
  const IconComponent = (Icons as unknown as Record<string, Icons.LucideIcon>)[feature.icon] ?? Icons.Sparkles;

  const isDark = variant === 'dark';

  return (
    <FadeUp delay={index * 0.05}>
      <div
        className={cn(
          'flex h-full flex-col rounded-card p-6 transition-all duration-300 hover:shadow-soft-lg',
          isDark
            ? 'bg-white/5 border border-white/10 hover:border-white/20'
            : 'bg-card shadow-soft hover:shadow-soft-lg'
        )}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-soft">
          <IconComponent className="h-6 w-6" />
        </div>
        <h3 className={cn('mt-4 text-lg font-bold tracking-tight', isDark && 'text-white')}>
          {feature.title}
        </h3>
        <p className={cn('mt-2 text-sm leading-relaxed', isDark ? 'text-white/70' : 'text-muted-foreground')}>
          {feature.description}
        </p>
      </div>
    </FadeUp>
  );
}
