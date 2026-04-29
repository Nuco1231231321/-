import * as React from "react";

import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  density?: "standard" | "dense" | "major";
};

const spacing = {
  standard: "py-14 lg:py-20",
  dense: "py-10 lg:py-16",
  major: "py-16 lg:py-24",
} as const;

export function Section({
  className,
  density = "standard",
  ...props
}: SectionProps) {
  return <section className={cn(spacing[density], className)} {...props} />;
}
