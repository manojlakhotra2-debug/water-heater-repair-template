import { process } from '@/content/clovis-ca';
import { FadeUp } from '@/components/ui/FadeUp';

export function Process() {
  return (
    <section className="section-spacing bg-muted/50">
      <div className="container-page">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
              Our Water Heater Repair Process
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              From the first call to the final walkthrough, here is exactly what happens when you hire us - no surprises, no jargon, no hidden fees.
            </p>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, index) => (
            <FadeUp key={step.step} delay={index * 0.05}>
              <div className="relative flex h-full flex-col rounded-card bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-soft-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-lg font-extrabold text-accent-foreground shadow-soft">
                  {step.step}
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                {index < process.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-border lg:block" />
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
