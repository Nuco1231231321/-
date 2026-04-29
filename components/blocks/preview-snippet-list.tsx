import type { PreviewSnippet } from "@/types/content";

type PreviewSnippetListProps = {
  items: PreviewSnippet[];
};

export function PreviewSnippetList({ items }: PreviewSnippetListProps) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-lg border border-border-default bg-bg-surface px-4 py-3"
        >
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-text-secondary">
            {item.label}
          </p>
          <p className="mt-2 text-sm leading-[1.6] text-text-primary">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
