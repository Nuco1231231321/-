import * as React from "react";

import { cn } from "@/lib/utils";

type PageWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  navbar?: React.ReactNode;
  footer?: React.ReactNode;
};

export function PageWrapper({
  className,
  navbar,
  footer,
  children,
  ...props
}: PageWrapperProps) {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col bg-bg-base text-text-primary",
        className,
      )}
      {...props}
    >
      {navbar}
      <main className="flex-1">{children}</main>
      {footer}
    </div>
  );
}
