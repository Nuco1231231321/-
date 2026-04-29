import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex h-9 items-center rounded-full border px-3.5 text-[13px] font-semibold tracking-[0.01em] transition-colors",
  {
    variants: {
      tone: {
        default: "border-border-default bg-bg-surface text-text-primary",
        muted: "border-border-default bg-bg-surface text-text-secondary",
        accent: "border-accent-primary bg-accent-soft text-text-primary",
        success: "border-ui-success/20 bg-ui-success/10 text-ui-success",
        warning: "border-ui-warning/20 bg-ui-warning/10 text-ui-warning",
        error: "border-ui-error/20 bg-ui-error/10 text-ui-error",
      },
    },
    defaultVariants: {
      tone: "default",
    },
  },
);

type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ tone, className }))} {...props} />;
}
