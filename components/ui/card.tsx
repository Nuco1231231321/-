import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-lg border text-text-primary shadow-none", {
  variants: {
    variant: {
      default: "border-border-default bg-bg-surface",
      feature: "border-border-default bg-bg-surface",
      elevated: "border-border-strong bg-bg-elevated",
      dark: "border-transparent bg-surface-dark text-ink-inverse",
    },
    padding: {
      compact: "p-4",
      default: "p-6",
      relaxed: "p-8",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "default",
  },
});

type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

export function Card({
  className,
  variant,
  padding,
  ...props
}: CardProps) {
  return <div className={cn(cardVariants({ variant, padding, className }))} {...props} />;
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-4", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-serif text-[24px] leading-[1.2] font-semibold tracking-[-0.02em]",
        className,
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-[16px] leading-[1.65] text-text-secondary", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-6", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-6 flex items-center gap-3", className)} {...props} />;
}
