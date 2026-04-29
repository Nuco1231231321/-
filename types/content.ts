import type { LucideIcon } from "lucide-react";

export type TrustItem = {
  label: string;
  icon: LucideIcon;
};

export type StepItem = {
  title: string;
  body: string;
};

export type ToolPathItem = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ValuePillarItem = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export type PreviewSnippet = {
  label: string;
  value: string;
};
