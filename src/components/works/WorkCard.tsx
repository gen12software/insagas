import type { WorkItem } from "@/types";

export default function WorkCard({ work }: { work: WorkItem }) {
  return (
    <div className="flex-none w-72 md:w-80 bg-brand-dark-2 rounded-lg overflow-hidden border border-white/10">
      {/* Image placeholder */}
      <div className="aspect-video bg-gradient-to-br from-brand-dark-2 to-[#3a3a3a] flex items-center justify-center">
        <svg className="w-12 h-12 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="p-4">
        <p className="text-brand-yellow font-display font-semibold text-xs tracking-widest uppercase mb-1">
          {work.date}
        </p>
        <h3 className="font-display font-bold text-lg text-white tracking-wide mb-1">
          {work.title}
        </h3>
        <p className="text-white/50 font-body text-sm leading-relaxed">
          {work.description}
        </p>
      </div>
    </div>
  );
}
