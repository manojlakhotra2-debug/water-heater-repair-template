import { faqs } from '@/content/clovis-ca';
import { FAQItem } from '@/components/ui/FAQItem';
import { FadeUp } from '@/components/ui/FadeUp';
import { Accordion } from '@/components/ui/accordion';

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
          <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </Accordion>
        </FadeUp>
      </div>
    </section>
  );
}
