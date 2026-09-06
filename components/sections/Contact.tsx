import Image from 'next/image';
import { Phone, Mail, Clock, MapPin, Siren } from 'lucide-react';
import { contact, meta } from '@/content/clovis-ca';
import { FadeUp } from '@/components/ui/FadeUp';
import { CTAButton } from '@/components/ui/CTAButton';

export function Contact() {
  const phoneLink = `tel:${meta.phone.replace(/[^0-9]/g, '')}`;
  const emailLink = `mailto:${meta.email}`;

  return (
    <section id="contact" className="section-spacing bg-muted/50">
      <div className="container-page">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
              {contact.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              {contact.description}
            </p>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <FadeUp>
            <div className="flex h-full flex-col rounded-card bg-card p-8 shadow-soft">
              <div className="space-y-6">
                <a href={phoneLink} className="flex items-center gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-soft transition-transform group-hover:scale-105">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Phone</p>
                    <p className="text-base font-bold">{contact.phone}</p>
                  </div>
                </a>

                <a href={emailLink} className="flex items-center gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-foreground shadow-soft transition-transform group-hover:scale-105">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Email</p>
                    <p className="text-base font-bold">{contact.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-foreground shadow-soft">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Hours</p>
                    <p className="text-base font-bold">{contact.hours}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive shadow-soft">
                    <Siren className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Emergency Line</p>
                    <p className="text-base font-bold">{contact.emergencyPhone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-foreground shadow-soft">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Service Area</p>
                    <p className="text-base font-bold">{contact.serviceArea}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <CTAButton href={phoneLink} external variant="primary" icon="phone" className="w-full">
                  Call Now
                </CTAButton>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="relative">
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-card shadow-soft-lg">
              <Image
                src={contact.image.src}
                alt={contact.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <div className="mt-8 overflow-hidden rounded-card shadow-soft">
            <iframe
              src={contact.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${meta.city}, ${meta.state}`}
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
