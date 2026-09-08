import { faqs } from '@/content/clovis-ca';
import { FadeUp } from '@/components/ui/FadeUp';
import { ChevronRight } from 'lucide-react';

export function FAQ() {
  return (
    <section id="faq" className="section-spacing bg-muted/50">
      <div className="container-page">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              Straight answers to the questions we hear most from homeowners calling about water heater problems.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-background p-5 shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-2">
                  <ChevronRight className="mt-[3px] h-4 w-4 shrink-0 stroke-[4] text-accent" />

                  <div className="flex-1">
                    <h3 className="text-[18px] font-bold leading-6 text-[#0A0A0A]">
                      {faq.question}
                    </h3>

                    <p className="mt-2 text-[12px] font-normal leading-6 text-[#737373]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}