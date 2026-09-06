import Image from 'next/image';
import { Check } from 'lucide-react';
import { about, meta } from '@/content/clovis-ca';
import { FadeUp } from '@/components/ui/FadeUp';
import { CTAButton } from '@/components/ui/CTAButton';
import { StatCard } from '@/components/ui/StatCard';

export function About() {
  return (
    <section id="about" className="section-spacing bg-background">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeUp className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-soft-lg">
              <Image
                src={about.image.src}
                alt={about.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeUp>

          <div>
            <FadeUp>
              <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
                {about.title}
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
                {about.description}
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <ul className="mt-6 space-y-3">
                {about.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Check className="h-3 w-3 text-accent" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">{bullet}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-8 flex gap-8 border-t border-border pt-6">
                {about.stats.map((stat) => (
                  <StatCard key={stat.label} stat={stat} />
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="mt-8">
                <CTAButton href="#contact" variant="primary" icon="arrow">
                  Schedule a Visit
                </CTAButton>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
