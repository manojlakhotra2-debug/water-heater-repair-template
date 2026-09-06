import { services } from '@/content/clovis-ca';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { FadeUp } from '@/components/ui/FadeUp';

export function Services() {
  return (
    <section id="services" className="section-spacing bg-muted/50">
      <div className="container-page">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
              Water Heater Repair &amp; Replacement Services
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              From a cold shower on a Monday morning to a leaking commercial unit, we handle the full range of water heater problems for {' '}
              homeowners and businesses. Every service includes a full diagnosis, clear options, and upfront pricing.
            </p>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
