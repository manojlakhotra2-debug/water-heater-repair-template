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
