import { maintenance } from '@/content/clovis-ca';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { FadeUp } from '@/components/ui/FadeUp';
import { ChecklistItem } from '@/components/ui/ChecklistItem';
import { CTAButton } from '@/components/ui/CTAButton';

export function Maintenance() {
  return (
    <section className="section-spacing bg-background">
      <div className="container-page">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
              {maintenance.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              {maintenance.description}
            </p>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          <FadeUp delay={0.1}>
            <div className="rounded-card bg-muted/50 p-8">
              <h3 className="text-xl font-bold tracking-tight">
                {maintenance.preventiveTitle}
              </h3>
              <ul className="mt-6 space-y-4">
                {maintenance.preventiveItems.map((item) => (
                  <ChecklistItem key={item} text={item} />
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton href="#contact" variant="primary" icon="arrow">
                  Schedule Maintenance
                </CTAButton>
              </div>
            </div>
          </FadeUp>

          <div className="grid gap-6 sm:grid-cols-2">
            {maintenance.benefits.map((benefit, index) => (
              <FeatureCard key={benefit.title} feature={benefit} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
