"use client";

import Image from "next/image";
import { useState } from "react";

export type Comparison = {
  title: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  width: number;
  height: number;
};

/** Drag-to-compare slider. The range input is the real control, so keyboard and screen readers work. */
export default function BeforeAfter({ comparison }: { comparison: Comparison }) {
  const [pos, setPos] = useState(50);
  const { before, after, width, height, title } = comparison;

  return (
    <figure>
      <div
        className="relative overflow-hidden rounded-xl bg-ink/5 shadow-md shadow-ink/[0.08] ring-1 ring-ink/8 select-none"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <Image src={after.src} alt={after.alt} fill sizes="(max-width: 640px) 100vw, 520px" className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={before.src} alt={before.alt} fill sizes="(max-width: 640px) 100vw, 520px" className="object-cover" />
        </div>

        <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-ink/70 px-2.5 py-1 text-[0.6rem] font-extrabold tracking-[0.18em] text-white">
          BEFORE
        </span>
        <span className="pointer-events-none absolute top-3 right-3 rounded-full bg-[#018042] px-2.5 py-1 text-[0.6rem] font-extrabold tracking-[0.18em] text-white">
          AFTER
        </span>

        <div aria-hidden className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)]" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-lg">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`${title}: drag to compare before and after`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-3 text-center text-[0.85rem] font-semibold text-ink">{title}</figcaption>
    </figure>
  );
}
