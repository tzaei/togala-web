import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Shared banner + body wrapper for every interior page.
 *
 * Layout, top to bottom:
 *   1. a solid band the height of the fixed header, so nothing hides beneath it
 *   2. the page photograph as its own full-bleed strip
 *   3. the green headline band
 *
 * The photograph is a separate element rather than a backdrop for the text —
 * it reads as a banner, and the headline gets a clean field to sit on.
 */
export default function PageShell({
  eyebrow,
  headline,
  intro,
  image,
  imageAlt = "",
  imagePosition = "center 32%",
  children,
}: {
  eyebrow: string;
  headline?: string;
  intro?: string;
  /** Full-bleed banner photograph for this page. */
  image?: string;
  /** Descriptive alt text for the banner photograph. */
  imageAlt?: string;
  /** Which part of the photo to keep when it crops to the banner strip. */
  imagePosition?: string;
  children?: ReactNode;
}) {
  return (
    <>
      {/* Clears the fixed header */}
      <div aria-hidden className="h-20 bg-forest lg:h-24" />

      {/* aspect-ratio, NOT a fixed height. A fixed height on a full-bleed
          element means the ratio blows out on wide screens — 380px tall at
          2560px wide is 6.7:1, which crops the subject clean out of frame. An
          aspect ratio holds the same shape at every width. The max-height stops
          it becoming a billboard on very large monitors, and the default
          object-position keeps the upper third — where heads are — on the rare
          occasion the cap does force a crop. */}
      {image && (
        <div className="relative aspect-16/5 max-h-[440px] min-h-[210px] w-full overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            aria-hidden={!imageAlt || undefined}
            fill
            sizes="100vw"
            priority
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
          {/* Eases the photo into the green band beneath it */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-forest"
          />
        </div>
      )}

      <section className="brand-pattern relative isolate overflow-hidden bg-forest py-10 text-bone [--pattern-tint:rgb(255_255_255/0.07)] after:-z-10 lg:py-12">
        <div className="mx-auto w-full max-w-[1060px] px-6 text-center lg:px-10">
          {headline && (
            <p className="mb-2.5 text-[0.68rem] font-bold tracking-[0.24em] text-lime text-balance">
              {headline}
            </p>
          )}
          <h1 className="display-eyebrow text-[2.1rem] leading-[1.08] text-balance text-clay sm:text-[2.5rem] lg:text-[2.8rem]">
            {eyebrow}
          </h1>
          <span aria-hidden className="mx-auto mt-4 block h-px w-12 bg-clay/70" />
          {intro && (
            <p className="mx-auto mt-6 max-w-[62ch] text-[1.02rem] leading-[1.85] text-bone/85">
              {intro}
            </p>
          )}
        </div>
      </section>

      {children}
    </>
  );
}
