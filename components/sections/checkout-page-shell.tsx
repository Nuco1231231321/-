import type { FaqItem, TrustItem } from "@/types/content";

import { ShieldCheck } from "lucide-react";

import { TrustBar } from "@/components/blocks/trust-bar";
import { FaqSection } from "@/components/sections/faq-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type CheckoutPageShellProps = {
  title: string;
  description: string;
  price: string;
  interval: string;
  includes: React.ReactNode;
  trustItems: TrustItem[];
  faqs: FaqItem[];
};

export function CheckoutPageShell({
  title,
  description,
  price,
  interval,
  includes,
  trustItems,
  faqs,
}: CheckoutPageShellProps) {
  return (
    <>
      <Section density="major">
        <Container size="md">
          <div className="space-y-6">
            <div className="space-y-4 text-center">
              <Badge tone="accent">One-time payment</Badge>
              <h1 className="mx-auto max-w-3xl font-serif text-[40px] leading-[1.08] font-semibold tracking-[-0.03em] text-text-primary lg:text-[56px]">
                {title}
              </h1>
              <p className="mx-auto max-w-2xl text-[18px] leading-[1.6] text-text-secondary lg:text-[20px]">
                {description}
              </p>
            </div>
            <TrustBar items={trustItems} />
          </div>
        </Container>
      </Section>

      <Section density="dense">
        <Container size="md">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Card variant="elevated" padding="relaxed">
              <CardHeader>
                <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-text-secondary">
                  Included in your report
                </p>
                <CardTitle>What you unlock with the full reading</CardTitle>
                <CardDescription>
                  A continuation of the reading you just saw — deeper, more structured, and more specific to your situation.
                </CardDescription>
              </CardHeader>
              <CardContent>{includes}</CardContent>
            </Card>

            <Card variant="dark" padding="relaxed">
              <CardHeader>
                <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-accent-soft">
                  Secure payment
                </p>
                <CardTitle className="text-ink-inverse">Unlock your full reading</CardTitle>
                <CardDescription className="text-ink-inverse/72">
                  One payment, instant delivery, and the full report opens on the same screen.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-end gap-2">
                  <span className="font-serif text-[40px] leading-[1.1] font-semibold tracking-[-0.02em] text-ink-inverse">
                    {price}
                  </span>
                  <span className="pb-1 text-sm text-ink-inverse/72">{interval}</span>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm leading-[1.6] text-ink-inverse/80">
                  You will be redirected to a secure payment screen. Your reading unlocks the moment payment is confirmed.
                </div>
                <Button fullWidth variant="secondary">
                  Continue to payment
                </Button>
                <div className="flex items-center gap-2 text-sm text-ink-inverse/72">
                  <ShieldCheck className="size-4 text-accent-soft" strokeWidth={1.75} />
                  Secure checkout. Instant delivery. 7-day refund if it does not feel useful.
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <FaqSection
        title="Before you complete the payment"
        description="The questions most people want answered before unlocking the full reading."
        items={faqs}
      />
    </>
  );
}
