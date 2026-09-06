import Image from 'next/image';
import { Phone, Clock, Zap, DollarSign, Wrench, Siren } from 'lucide-react';
import { hero, meta } from '@/content/clovis-ca';
import { CTAButton } from '@/components/ui/CTAButton';
import { FadeUp } from '@/components/ui/FadeUp';

const iconMap: Record<string, typeof Phone> = {
  Clock,
  Zap,
  DollarSign,
  Wrench,
};

export function Hero() {
  const phoneLink = `tel:${meta.phone.replace(/[^0-9]/g, '')}`;

  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-16 md:pt-16 md:pb-24">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <FadeUp>
              <span className="inline-flex items-center gap-2 rounded-pill bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                <Siren className="h-4 w-4" />
                {hero.subtitle}
              </span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-balance md:text-5xl lg:text-6xl">
                {hero.title}
              </h1>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
                {hero.description}
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton href={phoneLink} external variant="primary" icon="phone">
                  Call Now
                </CTAButton>
                <CTAButton href="#contact" variant="outline" icon="arrow">
                  Get a Quote
                </CTAButton>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {hero.trustIcons.map((item) => {
                  const Icon = iconMap[item.icon] ?? Wrench;
                  return (
                    <div key={item.label} className="flex flex-col items-center text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <span className="mt-2 text-xs font-medium text-muted-foreground">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-soft-lg">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-card bg-card p-5 shadow-soft-lg md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold">{hero.emergencyCard.title}</p>
                  <a
                    href={phoneLink}
                    className="text-sm font-semibold text-accent"
                  >
                    {meta.phone}
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
