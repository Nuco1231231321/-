import { Lock } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ResultPreviewCardProps = {
  eyebrow: string;
  title: string;
  summary: string;
  bullets: string[];
  lockedLabel: string;
};

export function ResultPreviewCard({
  eyebrow,
  title,
  summary,
  bullets,
  lockedLabel,
}: ResultPreviewCardProps) {
  return (
    <Card variant="elevated" padding="relaxed">
      <CardHeader>
        <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-text-secondary">
          {eyebrow}
        </p>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-[16px] leading-[1.65] text-text-secondary">{summary}</p>
        <ul className="space-y-3">
          {bullets.map((bullet) => (
            <li key={bullet} className="rounded-md border border-border-default bg-bg-surface px-4 py-3 text-sm leading-[1.6] text-text-primary">
              {bullet}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 rounded-md border border-border-strong bg-accent-soft px-4 py-3 text-sm font-semibold text-text-primary">
          <Lock className="size-4 text-accent-primary" strokeWidth={1.75} />
          {lockedLabel}
        </div>
      </CardContent>
    </Card>
  );
}
