import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { serviceArea, meta } from '@/content/clovis-ca';
import { ServicePill } from '@/components/ui/ServicePill';
import { FadeUp } from '@/components/ui/FadeUp';
import { CTAButton } from '@/components/ui/CTAButton';

export function ServiceAreas() {
  return (
    <section id="service-area" className="section-spacing bg-background">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <FadeUp>
              <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
                {serviceArea.title}
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
                {serviceArea.description}
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                {serviceArea.nearbyAreas.map((area) => (
                  <ServicePill key={area.name} label={area.name} />
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-8 flex items-center gap-3 rounded-card bg-accent/5 p-4">
                <MapPin className="h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm font-medium text-foreground">
                  Based in {meta.city}, {meta.state} — serving the entire Central Valley region.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="mt-8">
                <CTAButton href="#contact" variant="primary" icon="arrow">
                  Check Your Address
                </CTAButton>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-soft-lg">
              <Image
                src={serviceArea.image.src}
                alt={serviceArea.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
