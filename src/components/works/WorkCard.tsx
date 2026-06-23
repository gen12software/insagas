import type { WorkItem } from "@/types";

export default function WorkCard({
  work,
  recent,
}: {
  work: WorkItem;
  recent?: boolean;
}) {
  return (
    <div
      className={`border-t-2 bg-bg-card-alt p-8 ${
        recent ? "border-accent" : "border-accent-dim"
      }`}
    >
      <p className="font-display text-[11px] font-semibold uppercase tracking-wide text-accent">
        {work.date}
      </p>
      <h3 className="mt-2 font-display text-[19px] font-bold uppercase tracking-wide text-ink-primary">
        {work.title}
      </h3>
      <p className="mt-3 text-[13px] leading-[1.65] text-ink-muted">
        {work.description}
      </p>
    </div>
  );
}
