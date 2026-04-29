import type { TrustItem } from "@/types/content";

type TrustBarProps = {
  items: TrustItem[];
};

export function TrustBar({ items }: TrustBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 rounded-lg border border-border-default bg-bg-surface px-5 py-4">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.label} className="flex items-center gap-2">
            <Icon className="size-[18px] text-accent-primary" strokeWidth={1.75} />
            <span className="text-sm font-semibold text-text-secondary">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
