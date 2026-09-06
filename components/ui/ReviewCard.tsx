import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FadeUp } from '@/components/ui/FadeUp';

interface ReviewCardProps {
  review: {
    name: string;
    rating: number;
    date: string;
    text: string;
    service: string;
  };
  index: number;
}

export function ReviewCard({ review, index }: ReviewCardProps) {
  return (
    <FadeUp delay={index * 0.1}>
      <article className="flex h-full flex-col rounded-card bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-soft-lg">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'h-4 w-4',
                i < review.rating ? 'fill-accent text-accent' : 'fill-muted text-muted'
              )}
            />
          ))}
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          &ldquo;{review.text}&rdquo;
        </p>

        <div className="mt-5 border-t border-border pt-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-sm">{review.name}</span>
            <span className="text-xs text-muted-foreground">{review.date}</span>
          </div>
          <span className="mt-1 inline-block text-xs font-medium text-accent">
            {review.service}
          </span>
        </div>
      </article>
    </FadeUp>
  );
}
