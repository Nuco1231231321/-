import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PricingCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  price: string;
  interval?: string;
  features: string[];
  featured?: boolean;
  cta: {
    label: string;
  };
};

export function PricingCard({
  eyebrow,
  title,
  description,
  price,
  interval,
  features,
  featured = false,
  cta,
}: PricingCardProps) {
  return (
    <Card variant={featured ? "dark" : "elevated"} padding="relaxed" className="h-full">
      <CardHeader>
        {eyebrow ? (
          <p
            className={
              featured
                ? "text-[12px] font-bold uppercase tracking-[0.08em] text-accent-soft"
                : "text-[12px] font-bold uppercase tracking-[0.08em] text-text-secondary"
            }
          >
            {eyebrow}
          </p>
        ) : null}
        <CardTitle className={featured ? "text-ink-inverse" : undefined}>
          {title}
        </CardTitle>
        <CardDescription className={featured ? "text-ink-inverse/72" : undefined}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-end gap-2">
          <span
            className={
              featured
                ? "font-serif text-[40px] leading-[1.1] font-semibold tracking-[-0.02em] text-ink-inverse"
                : "font-serif text-[40px] leading-[1.1] font-semibold tracking-[-0.02em] text-text-primary"
            }
          >
            {price}
          </span>
          {interval ? (
            <span
              className={
                featured
                  ? "pb-1 text-sm text-ink-inverse/72"
                  : "pb-1 text-sm text-text-secondary"
              }
            >
              {interval}
            </span>
          ) : null}
        </div>
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check
                className={
                  featured
                    ? "mt-0.5 size-[18px] text-accent-soft"
                    : "mt-0.5 size-[18px] text-accent-primary"
                }
                strokeWidth={1.75}
              />
              <span
                className={
                  featured
                    ? "text-sm leading-[1.6] text-ink-inverse/88"
                    : "text-sm leading-[1.6] text-text-secondary"
                }
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <Button fullWidth variant={featured ? "secondary" : "primary"}>
          {cta.label}
        </Button>
      </CardContent>
    </Card>
  );
}
