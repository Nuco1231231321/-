import type { FaqItem, TrustItem } from "@/types/content";

import { TrustBar } from "@/components/blocks/trust-bar";
import { FaqSection } from "@/components/sections/faq-section";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type ToolPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  inputArea: React.ReactNode;
  previewArea: React.ReactNode;
  trustItems: TrustItem[];
  faqs: FaqItem[];
  trustTitle: string;
  trustBody: string;
};

export function ToolPageShell({
  eyebrow,
  title,
  description,
  inputArea,
  previewArea,
  trustItems,
  faqs,
  trustTitle,
  trustBody,
}: ToolPageShellProps) {
  return (
    <>
      <Section density="major">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[5fr_7fr]">
            <div className="space-y-5">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-text-secondary">
                {eyebrow}
              </p>
              <h1 className="max-w-2xl font-serif text-[40px] leading-[1.08] font-semibold tracking-[-0.03em] text-text-primary lg:text-[56px]">
                {title}
              </h1>
              <p className="max-w-xl text-[18px] leading-[1.6] text-text-secondary lg:text-[20px]">
                {description}
              </p>
              <TrustBar items={trustItems} />
            </div>
            <div>{inputArea}</div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-xl border border-border-default bg-bg-surface p-6 lg:p-8">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-text-secondary">
                Why this works
              </p>
              <h2 className="mt-3 font-serif text-[30px] leading-[1.15] font-semibold tracking-[-0.02em] text-text-primary">
                {trustTitle}
              </h2>
              <p className="mt-4 text-[16px] leading-[1.65] text-text-secondary">{trustBody}</p>
            </div>
            {previewArea}
          </div>
        </Container>
      </Section>

      <FaqSection
        title="Questions you might have before starting"
        description="The answers most people look for before they decide whether this is right for them."
        items={faqs}
      />
    </>
  );
}
