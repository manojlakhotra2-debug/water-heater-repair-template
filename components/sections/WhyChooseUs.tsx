import { Phone, Siren } from 'lucide-react';
import { whyChooseUs, meta } from '@/content/clovis-ca';
import { FadeUp } from '@/components/ui/FadeUp';
import { CTAButton } from '@/components/ui/CTAButton';
import { Check } from 'lucide-react';

export function WhyChooseUs() {
  const phoneLink = `tel:${meta.phone.replace(/[^0-9]/g, '')}`;

  return (
    <section className="section-spacing bg-background">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
          <div>
            <FadeUp>
              <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
                {whyChooseUs.title}
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
                {whyChooseUs.description}
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <ul className="mt-8 space-y-4">
                {whyChooseUs.trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Check className="h-4 w-4 text-accent" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-8">
                <CTAButton href="#contact" variant="primary" icon="arrow">
                  Schedule Service
                </CTAButton>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <div className="sticky top-24 rounded-card bg-dark p-8 text-dark-foreground shadow-soft-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Siren className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {whyChooseUs.emergencyCard.title}
                  </h3>
                  <p className="text-sm text-white/60">
                    {whyChooseUs.emergencyCard.description}
                  </p>
                </div>
              </div>

              <a
                href={phoneLink}
                className="mt-6 flex items-center justify-center gap-2 rounded-pill bg-accent py-4 text-base font-bold text-accent-foreground shadow-soft transition-all hover:brightness-110 hover:shadow-accent active:scale-[0.98]"
              >
                <Phone className="h-5 w-5" />
                {meta.phone}
              </a>

              <p className="mt-4 text-center text-xs text-white/40">
                {meta.hours}
              </p>

              <div className="mt-6 border-t border-white/10 pt-6">
                <CTAButton href="#contact" variant="dark" icon="arrow" className="w-full">
                  Get a Free Quote
                </CTAButton>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
