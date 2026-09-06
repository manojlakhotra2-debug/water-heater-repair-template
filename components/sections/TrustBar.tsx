import { ShieldCheck, Clock, DollarSign, Award } from 'lucide-react';
import { trustBar } from '@/content/clovis-ca';

const iconMap: Record<string, typeof ShieldCheck> = {
  ShieldCheck,
  Clock,
  DollarSign,
  Award,
};

export function TrustBar() {
  return (
    <section className="bg-accent py-6">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {trustBar.items.map((item) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <div key={item.label} className="flex items-center gap-3">
                <Icon className="h-6 w-6 shrink-0 text-accent-foreground" />
                <span className="text-sm font-semibold text-accent-foreground">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
