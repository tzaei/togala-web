import Image from "next/image";
import type { ReactNode } from "react";

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
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  children?: ReactNode;
}) {
  return (
    <>
      {image ? (
        <>
        <section className="relative isolate flex min-h-[32svh] flex-col justify-center overflow-hidden bg-ink lg:min-h-[36svh] lg:max-h-[420px]">
          <Image
            src={image}
            alt={imageAlt}
            aria-hidden={!imageAlt || undefined}
            fill
            sizes="100vw"
            priority
            className="-z-20 object-cover opacity-65 [filter:saturate(0.6)]"
            style={{ objectPosition: imagePosition }}
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-b from-forest/40 via-ink/20 to-ink"
          />

          <div className="mx-auto w-full max-w-[1060px] px-6 pt-24 pb-10 text-center lg:px-10 lg:pt-28 lg:pb-12">
            <h1 className="display-eyebrow text-[2.2rem] leading-[0.95] text-white sm:text-[2.8rem] lg:text-[3.2rem]">
              {eyebrow}
            </h1>
            {headline && (
              <p className="mt-4 inline-block max-w-[30rem] text-balance rounded-full bg-[#018042] px-4 py-2 text-[0.6rem] leading-snug font-extrabold tracking-[0.18em] text-white shadow-lg shadow-ink/40 sm:mt-5 sm:max-w-none sm:px-5 sm:py-2 sm:text-[0.7rem] sm:tracking-[0.26em]">
                {headline}
              </p>
            )}
          </div>
        </section>
        {intro && (
          <div className="bg-bone px-6 py-8 lg:px-10 lg:py-10">
            <p className="mx-auto max-w-[72ch] text-center text-[1rem] leading-[1.8] text-ink-700">
              {intro}
            </p>
          </div>
        )}
        </>
      ) : (
        <>
          <div aria-hidden className="h-20 bg-forest lg:h-24" />
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
        </>
      )}

      {children}
    </>
  );
}
