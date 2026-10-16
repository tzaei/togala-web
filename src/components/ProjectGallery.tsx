"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryGroup } from "@/data/caseStudies";
import BeforeAfter from "./BeforeAfter";

export default function ProjectGallery({ groups }: { groups: GalleryGroup[] }) {
  const photos = groups.flatMap((g) => g.photos);
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, step]);

  let offset = 0;
  const current = index === null ? null : photos[index];

  return (
    <>
      {groups.map((group, gi) => {
        const start = offset;
        offset += group.photos.length;
        return (
          <div key={group.title} className={gi > 0 ? "mt-16 lg:mt-20" : ""}>
            <h3 className="display-eyebrow text-center text-[1.5rem] leading-tight text-balance text-ink sm:text-[1.8rem]">
              {group.title}
            </h3>
            <span aria-hidden className="mx-auto mt-4 block h-px w-12 bg-clay/70" />
            {group.quote && (
              <blockquote className="mx-auto mt-6 max-w-[56ch] text-center text-[1rem] leading-[1.7] text-ink-700 italic text-balance sm:text-[1.08rem]">
                &ldquo;{group.quote}&rdquo;
              </blockquote>
            )}
            {group.comparisons && (
              <div className="mx-auto mt-8 grid max-w-[980px] gap-6 sm:grid-cols-2">
                {group.comparisons.map((c) => (
                  <BeforeAfter key={c.title} comparison={c} />
                ))}
              </div>
            )}
            {group.photos.length > 0 && (
            <ul
              className={`mt-8 columns-2 gap-3 sm:gap-4 ${group.photos.length % 3 === 0 || group.photos.length > 4 ? "lg:columns-3" : "mx-auto max-w-[760px]"}`}
            >
              {group.photos.map((photo, pi) => (
                <li key={photo.src} className="mb-3 break-inside-avoid sm:mb-4">
                  <button
                    type="button"
                    onClick={() => open(start + pi)}
                    className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl bg-ink/5 shadow-md shadow-ink/[0.08] ring-1 ring-ink/8 outline-none"
                    aria-label={`View larger: ${photo.caption}`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      sizes="(max-width: 1024px) 50vw, 340px"
                      className="h-auto w-full transition-transform duration-(--duration-drift) ease-(--ease-out-soft) group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent px-3 pt-8 pb-2.5 text-left text-[0.72rem] font-semibold text-white sm:px-4 sm:text-[0.8rem]">
                      {photo.caption}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            )}
          </div>
        );
      })}

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === e.currentTarget && close()}
        aria-label="Photo viewer"
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-ink/90 backdrop:backdrop-blur-sm"
      >
        {current && (
          <figure className="flex max-h-[92svh] w-[min(92vw,1100px)] flex-col items-center">
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="92vw"
              className="max-h-[80svh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-3 flex w-full items-center justify-between gap-4 text-bone">
              <span className="text-[0.85rem] font-semibold">{current.caption}</span>
              <span className="text-[0.75rem] text-bone/60 tabular-nums">
                {(index ?? 0) + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>
        )}
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="fixed top-4 right-4 flex size-11 items-center justify-center rounded-full bg-white/10 text-white outline-none hover:bg-clay"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>
        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="fixed top-1/2 left-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white outline-none hover:bg-clay sm:left-6"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="fixed top-1/2 right-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white outline-none hover:bg-clay sm:right-6"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}
      </dialog>
    </>
  );
}
