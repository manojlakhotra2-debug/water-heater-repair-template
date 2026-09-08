import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { meta } from '@/content/clovis-ca';

export default function ContactPage() {
  const phoneLink = `tel:${meta.phone.replace(/[^0-9]/g, '')}`;

  return (
    <main className="container-page py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>

        <div className="mt-10 space-y-8 text-base leading-8 text-muted-foreground">
          <p>
            Dealing with a water heater emergency, need a replacement estimate, or just have a question about your unit? We're here to help.
          </p>

          <p>
            Whether it's a leaking tank, no hot water, a strange noise, or you're planning a full replacement, our team connects you with the right local professional fast with honest advice and no runaround.
          </p>

          <p>
            Reach out anytime at <strong>info@waterheaterrepairclovis.com</strong> or give us a call at <strong>{meta.phone}</strong>, and we'll get back to you as soon as possible.
          </p>

          <section className="space-y-4 rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-semibold text-foreground">
              Contact Information
            </h2>

            <div className="space-y-5">
              <a
                href={phoneLink}
                className="flex items-center gap-3 text-foreground transition-colors hover:text-accent"
              >
                <Phone className="h-5 w-5 text-accent" />
                <span>{meta.phone}</span>
              </a>

              <a
                href="mailto:info@waterheaterrepairclovis.com"
                className="flex items-center gap-3 text-foreground transition-colors hover:text-accent"
              >
                <Mail className="h-5 w-5 text-accent" />
                <span>info@waterheaterrepairclovis.com</span>
              </a>

              <div className="flex items-center gap-3 text-foreground">
                <Clock className="h-5 w-5 text-accent" />
                <span>{meta.hours}</span>
              </div>

              <div className="flex items-center gap-3 text-foreground">
                <MapPin className="h-5 w-5 text-accent" />
                <span>{meta.serviceAreaLabel}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}