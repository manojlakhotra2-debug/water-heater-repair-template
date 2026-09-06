import Image from 'next/image';
import { cn } from '@/lib/utils';
import { FadeUp } from '@/components/ui/FadeUp';
import type { ServiceItem } from '@/lib/types';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Wrench;

  return (
    <FadeUp delay={index * 0.05}>
      <article className="group flex h-full flex-col overflow-hidden rounded-card bg-card shadow-soft transition-all duration-300 hover:shadow-soft-lg">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-soft">
            <IconComponent className="h-6 w-6" />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold tracking-tight">{service.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>

          <div className="mt-5 space-y-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-accent">
                Common Symptoms
              </h4>
              <ul className="mt-2 space-y-1">
                {service.symptoms.map((symptom) => (
                  <li key={symptom} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Icons.AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-accent">
                What We Check
              </h4>
              <ul className="mt-2 space-y-1">
                {service.inspection.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Icons.Search className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </FadeUp>
  );
}
