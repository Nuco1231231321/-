import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-[background-color,border-color,color,box-shadow,opacity,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "h-12 bg-surface-dark px-5 text-ink-inverse hover:bg-surface-dark-2 active:translate-y-px !text-[#F9F6F1]",
        secondary:
          "h-12 border border-border-default bg-transparent px-5 text-text-primary hover:border-border-strong hover:bg-bg-surface active:translate-y-px",
        ghost:
          "h-12 bg-transparent px-5 text-text-secondary hover:bg-bg-surface active:translate-y-px",
      },
      size: {
        sm: "h-10 rounded-sm px-4 text-sm",
        md: "h-12 rounded-md px-5 text-sm",
        lg: "h-14 rounded-lg px-6 text-base",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

const iconSizeByButton = {
  sm: "size-4",
  md: "size-4",
  lg: "size-[18px]",
} as const;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      icon: Icon,
      iconPosition = "left",
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      >
        {Icon && iconPosition === "left" ? (
          <Icon className={iconSizeByButton[size ?? "md"]} strokeWidth={1.75} />
        ) : null}
        {children}
        {Icon && iconPosition === "right" ? (
          <Icon className={iconSizeByButton[size ?? "md"]} strokeWidth={1.75} />
        ) : null}
      </Comp>
    );
  },
);

Button.displayName = "Button";
