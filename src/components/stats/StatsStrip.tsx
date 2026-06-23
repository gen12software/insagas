import { stats } from "@/data/content";

export default function StatsStrip() {
  return (
    <section className="border-y border-accent-border bg-bg-deep">
      <div className="mx-auto grid max-w-content grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.id}
            className={`px-6 py-10 text-center ${
              i !== 0 ? "md:border-l md:border-line" : ""
            } ${i % 2 !== 0 ? "border-l border-line md:border-l" : ""}`}
          >
            <div className="font-display text-[40px] font-extrabold leading-none text-accent">
              {stat.value}
            </div>
            <div className="mt-2 text-xs text-ink-dim">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
