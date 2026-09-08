import Link from 'next/link';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { meta } from '@/content/clovis-ca';

const serviceLinks = [
  'Emergency Water Heater Repair',
  'Tank Water Heater Repair',
  'Tankless Water Heater Repair',
  'Gas Water Heater Service',
  'Electric Water Heater Service',
  'Water Heater Replacement',
  'Commercial Water Heaters',
];

const areaLinks = [
  'Clovis (93611, 93612, 93613, 93619)',
  'Fresno (93720, 93730)',
  'Sanger',
  'Selma',
  'Madera',
  'Reedley',
  'Kingsburg',
];

export function Footer() {
  const phoneLink = `tel:${meta.phone.replace(/[^0-9]/g, '')}`;
  const emailLink = `mailto:${meta.email}`;

  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              {meta.businessName}
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Local water heater repair and replacement specialists serving {meta.city}, {meta.state} (93611, 93612, 93613, 93619) and the surrounding Central Valley. Same-day service, upfront pricing, all major brands.
            </p>
            <img src={meta.logoPath} alt={meta.businessName} className="mt-6 h-8 w-auto brightness-0 invert" />
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Services</h4>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Service Areas</h4>
            <ul className="mt-4 space-y-2">
              {areaLinks.map((area) => (
                <li key={area}>
                  <Link
                    href="#service-area"
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={phoneLink} className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-accent">
                  <Phone className="h-4 w-4 text-accent" />
                  {meta.phone}
                </a>
              </li>
              <li>
                <a href={emailLink} className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-accent">
                  <Mail className="h-4 w-4 text-accent" />
                  {meta.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Clock className="h-4 w-4 text-accent" />
                {meta.hours}
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-accent" />
                {meta.serviceAreaLabel}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/40">
            Disclaimer: {meta.businessName} is a free referral and lead-generation service that connects property owners with independent, licensed water heater repair, replacement, and installation contractors and plumbers in Clovis, CA and surrounding areas. We are not a contractor and do not perform water heater repair, replacement, or installation services ourselves. All work is carried out by independent third-party licensed professionals. We make no warranty or guarantee regarding the services, pricing, licensing, insurance, or quality of any referred provider. All brand names (Rheem, Bradford White, AO Smith, Rinnai, Navien, Takagi) are trademarks of their respective owners, referenced for service identification purposes only, and we are not affiliated with or endorsed by these manufacturers. Response times are estimates and not guaranteed. Nothing on this site constitutes technical or legal advice.
          </p>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
            <p>
              &copy; {new Date().getFullYear()} {meta.businessName}. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/privacy-policy" className="transition-colors hover:text-accent">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="transition-colors hover:text-accent">
                Terms of Use
              </Link>
              <Link href="/contact" className="transition-colors hover:text-accent">
                Contact
              </Link>
              <Link href="/sitemap" className="transition-colors hover:text-accent">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}