import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error = false, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[136px] w-full rounded-lg border bg-bg-elevated px-[18px] py-4 text-base text-text-primary placeholder:text-text-tertiary transition-[border-color,box-shadow] duration-200 ease-out outline-none",
          "hover:border-border-strong focus:border-accent-primary focus:ring-4 focus:ring-accent-primary/15 disabled:cursor-not-allowed disabled:opacity-50",
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

Textarea.displayName = "Textarea";
