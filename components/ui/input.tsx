import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error = false, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "flex h-[52px] w-full rounded-md border bg-bg-elevated px-4 text-base text-text-primary placeholder:text-text-tertiary transition-[border-color,box-shadow] duration-200 ease-out outline-none",
          "hover:border-border-strong focus:border-accent-primary focus:ring-4 focus:ring-accent-primary/15",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error
            ? "border-ui-error focus:border-ui-error focus:ring-ui-error/15"
            : "border-border-default",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
