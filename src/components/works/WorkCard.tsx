import Image from "next/image";
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
      className={`border-t-2 bg-bg-card-alt ${
        recent ? "border-accent" : "border-accent-dim"
      }`}
    >
      {work.image && (
        <div className="relative h-48 w-full">
          <Image
            src={work.image}
            alt={`${work.title} — ${work.place}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-8">
        <p className="font-display text-[11px] font-semibold uppercase tracking-wide text-accent">
          {work.place}
        </p>
        <h3 className="mt-2 font-display text-[19px] font-bold uppercase tracking-wide text-ink-primary">
          {work.title}
        </h3>
        <p className="mt-3 text-[13px] leading-[1.65] text-ink-muted">
          {work.description}
        </p>
      </div>
    </div>
  );
}
