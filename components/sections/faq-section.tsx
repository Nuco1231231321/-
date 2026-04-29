import type { FaqItem } from "@/types/content";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionWrapper } from "@/components/layout/section-wrapper";

type FaqSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: FaqItem[];
};

export function FaqSection({ eyebrow = "FAQ", title, description, items }: FaqSectionProps) {
  return (
    <SectionWrapper eyebrow={eyebrow} title={title} description={description} size="md">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={item.question} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
}
