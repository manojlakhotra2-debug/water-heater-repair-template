import { Star } from 'lucide-react';
import { reviews } from '@/content/clovis-ca';
import { ReviewCard } from '@/components/ui/ReviewCard';
import { FadeUp } from '@/components/ui/FadeUp';
import { CTAButton } from '@/components/ui/CTAButton';

export function Reviews() {
  return (
    <section id="reviews" className="section-spacing bg-background">
      <div className="container-page">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
              {reviews.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              {reviews.description}
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-4 rounded-card bg-muted/50 p-6">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-2xl font-extrabold">{reviews.averageRating}/5</p>
              <p className="text-xs text-muted-foreground">
                Based on {reviews.totalReviews}+ reviews
              </p>
            </div>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-12 text-center">
            <CTAButton href="#contact" variant="primary" icon="phone">
              Join Our Happy Customers
            </CTAButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
