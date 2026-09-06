import { coverage } from '@/content/clovis-ca';
import { ChecklistItem } from '@/components/ui/ChecklistItem';
import { FadeUp } from '@/components/ui/FadeUp';
import { Wrench, Replace } from 'lucide-react';

export function Coverage() {
  return (
    <section className="section-spacing bg-muted/50">
      <div className="container-page">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
              {coverage.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              {coverage.description}
            </p>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {coverage.checklist.map((group, groupIndex) => (
            <FadeUp key={group.title} delay={groupIndex * 0.1}>
              <div className="rounded-card bg-card p-6 shadow-soft">
                <h3 className="text-lg font-bold tracking-tight">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <ChecklistItem key={item} text={item} />
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <div className="mt-16">
            <h3 className="text-2xl font-bold tracking-tight text-center text-balance md:text-3xl">
              {coverage.comparisonTitle}
            </h3>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-card border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10">
                    <Wrench className="h-5 w-5 text-success" />
                  </div>
                  <h4 className="text-lg font-bold">{coverage.comparison.repair.title}</h4>
                </div>
                <ul className="mt-4 space-y-3">
                  {coverage.comparison.repair.items.map((item) => (
                    <ChecklistItem key={item} text={item} />
                  ))}
                </ul>
              </div>

              <div className="rounded-card border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <Replace className="h-5 w-5 text-accent" />
                  </div>
                  <h4 className="text-lg font-bold">{coverage.comparison.replace.title}</h4>
                </div>
                <ul className="mt-4 space-y-3">
                  {coverage.comparison.replace.items.map((item) => (
                    <ChecklistItem key={item} text={item} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-card bg-accent/5 p-6 text-center">
              <p className="text-sm leading-relaxed text-foreground text-pretty">
                {coverage.comparison.recommendation}
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
