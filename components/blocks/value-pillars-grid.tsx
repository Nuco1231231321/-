import type { ValuePillarItem } from "@/types/content";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ValuePillarsGridProps = {
  items: ValuePillarItem[];
};

export function ValuePillarsGrid({ items }: ValuePillarsGridProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.title} variant="feature">
            <CardHeader>
              <div className="flex size-10 items-center justify-center rounded-md border border-border-default bg-bg-elevated">
                <Icon className="size-5 text-accent-primary" strokeWidth={1.75} />
              </div>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[16px] leading-[1.65] text-text-secondary">{item.body}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
