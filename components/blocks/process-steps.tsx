import type { StepItem } from "@/types/content";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ProcessStepsProps = {
  items: StepItem[];
};

export function ProcessSteps({ items }: ProcessStepsProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {items.map((item, index) => (
        <Card key={item.title} variant="feature">
          <CardHeader>
            <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-text-secondary">
              Step {index + 1}
            </span>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[16px] leading-[1.65] text-text-secondary">{item.body}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
