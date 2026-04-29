import * as React from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

type SectionWrapperProps = React.HTMLAttributes<HTMLElement> & {
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  size?: "sm" | "md" | "lg" | "xl";
  density?: "standard" | "dense" | "major";
};

export function SectionWrapper({
  className,
  eyebrow,
  title,
  description,
  align = "left",
  size = "lg",
  density = "standard",
  children,
  ...props
}: SectionWrapperProps) {
  const centered = align === "center";

  return (
    <Section className={className} density={density} {...props}>
      <Container size={size}>
        {(eyebrow || title || description) && (
          <div
            className={cn(
              "mb-8 flex flex-col gap-4 lg:mb-12",
              centered && "items-center text-center",
            )}
          >
            {eyebrow ? (
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-text-secondary">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="max-w-4xl font-serif text-[30px] leading-[1.15] font-semibold tracking-[-0.02em] text-text-primary lg:text-[40px]">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="max-w-[720px] text-[16px] leading-[1.65] text-text-secondary lg:text-[20px]">
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </Section>
  );
}
