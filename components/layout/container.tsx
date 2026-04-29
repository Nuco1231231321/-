import * as React from "react";

import { cn } from "@/lib/utils";

const widths = {
  sm: "max-w-[720px]",
  md: "max-w-[960px]",
  lg: "max-w-[1280px]",
  xl: "max-w-[1280px]",
} as const;

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: keyof typeof widths;
};

export function Container({
  className,
  size = "lg",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", widths[size], className)}
      {...props}
    />
  );
}
