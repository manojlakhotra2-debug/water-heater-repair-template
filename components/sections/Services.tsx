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
              Hot Water Heater Repair Services In Clovis, California
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              Whether your water heater stopped heating, is leaking from the tank, making popping or rumbling noises, or keeps running out of hot water, here is how our Clovis water heater technicians diagnose and fix every common problem.
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
