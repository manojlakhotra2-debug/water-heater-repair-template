import { serviceCloud } from '@/content/clovis-ca';
import { ServicePill } from '@/components/ui/ServicePill';
import { FadeUp } from '@/components/ui/FadeUp';

export function ServiceCloud() {
  return (
    <section className="section-spacing bg-dark">
      <div className="container-page">
        <FadeUp>
          <h2 className="text-3xl font-extrabold tracking-tight text-white text-balance md:text-4xl">
            All Clovis Water Heater Repair &amp; Replacement Services
          </h2>
        </FadeUp>

        <FadeUp delay={0.05}>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
            Whether it's tank, tankless, gas, or electric, we handle every repair and replacement for residential and commercial properties across Clovis and the Central Valley.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-3">
            {serviceCloud.map((pill) => (
              <ServicePill key={pill.label} label={pill.label} variant="dark" />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}