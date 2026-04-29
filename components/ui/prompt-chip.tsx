import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const promptChipVariants = cva(
  "inline-flex h-9 items-center rounded-full border px-3.5 text-[13px] font-semibold tracking-[0.01em] transition-colors",
  {
    variants: {
      active: {
        true: "border-accent-primary bg-accent-soft text-text-primary",
        false: "border-border-default bg-bg-surface text-text-primary hover:border-border-strong hover:bg-bg-elevated",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

type PromptChipProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof promptChipVariants>;

export function PromptChip({ className, active, type = "button", ...props }: PromptChipProps) {
  return (
    <button
      type={type}
      className={cn(
        promptChipVariants({ active }),
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40",
        className,
      )}
      {...props}
    />
  );
}
