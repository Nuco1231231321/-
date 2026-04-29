import Link from "next/link";

import type { ToolPathItem } from "@/types/content";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ToolPathGridProps = {
  items: ToolPathItem[];
};

export function ToolPathGrid({ items }: ToolPathGridProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} variant="feature" className="h-full">
          <CardHeader>
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-text-secondary">
              {item.eyebrow}
            </p>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <Link
              href={item.href}
              className={cn(buttonVariants({ variant: "secondary", fullWidth: true }))}
            >
              {item.cta}
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
