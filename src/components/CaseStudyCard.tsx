import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "./ArrowIcon";
import type { CaseStudy } from "@/data/caseStudies";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md shadow-ink/[0.06] ring-1 ring-ink/8 transition-[transform,box-shadow] duration-(--duration-glide) ease-(--ease-out-soft) hover:-translate-y-1 hover:shadow-lift hover:ring-clay/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={study.image}
          alt={study.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-(--duration-drift) ease-(--ease-out-soft) group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-[#018042] px-3 py-1 text-[0.6rem] font-extrabold tracking-[0.18em] text-white uppercase shadow-md shadow-ink/30">
          {study.sector}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[0.65rem] font-bold tracking-[0.2em] text-ink/50 uppercase">{study.location}</p>
        <h3 className="mt-1.5 text-[1.05rem] leading-snug font-bold text-ink">{study.name}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-[0.85rem] leading-[1.6] text-ink-700">{study.headline}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.18em] text-clay transition-colors duration-(--duration-swift) group-hover:text-clay-600">
          READ CASE STUDY
          <ArrowIcon className="size-3 transition-transform duration-(--duration-swift) group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
