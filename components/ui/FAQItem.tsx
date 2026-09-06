'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FadeUp } from '@/components/ui/FadeUp';

interface FAQItemProps {
  faq: {
    question: string;
    answer: string;
  };
  index: number;
}

export function FAQItem({ faq, index }: FAQItemProps) {
  return (
    <FadeUp delay={index * 0.05}>
      <AccordionItem
        value={`faq-${index}`}
        className="rounded-card border border-border bg-card px-6 shadow-soft data-[state=open]:shadow-soft-lg transition-shadow duration-300"
      >
        <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
          {faq.question}
        </AccordionTrigger>
        <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
          {faq.answer}
        </AccordionContent>
      </AccordionItem>
    </FadeUp>
  );
}
