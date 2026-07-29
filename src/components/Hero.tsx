import Image from "next/image";
import CtaButton from "./CtaButton";

/**
 * Hero — static. No footage, no motion.
 *
 * Deliberately still: the mark is simply there when the page loads. Depth comes
 * from the layered field (photograph, brand gradient, a fixed light, the "T"
 * weave and a vignette) rather than from anything moving.
 */
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[78svh] items-center overflow-hidden bg-ink pt-20 lg:min-h-[80svh] lg:max-h-[820px] lg:pt-28">
      {/* Backdrop montage: multifamily aerial → healthcare corridor → suburban
          flyover, ending on the opening clip so the loop has no visible seam.
          Muted and playsInline so mobile browsers autoplay it. */}
      <video
        className="absolute inset-0 -z-40 size-full object-cover opacity-95 [filter:saturate(0.8)_contrast(1.02)]"
        src="/video/hero.mp4"
        poster="/img/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />

      {/* Brand field — mostly neutral so the architecture underneath reads as
          depth rather than picking up a green cast */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30 bg-[linear-gradient(150deg,rgba(9,58,34,0.50)_0%,rgba(14,14,15,0.62)_45%,rgba(14,14,15,0.74)_100%)]"
      />

      {/* Fixed light behind the mark, for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/5 left-[-8%] -z-20 h-[125%] w-[62%] rounded-full bg-[radial-gradient(closest-side,rgba(0,176,66,0.26),transparent_72%)] blur-3xl"
      />

      {/* Togala "T" weave, tying the hero to the rest of the site */}
      <div
        aria-hidden
        className="brand-pattern pointer-events-none absolute inset-0 -z-10 [--pattern-tint:rgb(255_255_255/0.05)] after:-z-10"
      />

      {/* Vignette so the headline card always has a dark bed beneath it */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_20%_45%,transparent_35%,rgba(5,12,8,0.55)_100%)]"
      />

      {/* Small-screen swoosh — a banner sweep above the headline card */}
      <div className="pointer-events-none absolute top-24 left-1/2 -z-[5] w-full -translate-x-1/2 sm:top-28 sm:w-[90%] lg:hidden">
        <Image
          src="/img/togala-swoosh-hero.png"
          alt=""
          aria-hidden
          width={2400}
          height={1259}
          priority
          className="h-auto w-full max-w-none opacity-90"
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-[60rem] grid-cols-1 items-center gap-8 px-5 py-10 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-8 lg:px-8 lg:py-12">
        {/* Swoosh + wordmark are one mark */}
        <div className="relative mx-auto hidden w-[min(18rem,88%)] lg:block">
          <Image
            src="/img/togala-swoosh-hero.png"
            alt=""
            aria-hidden
            width={2400}
            height={1259}
            priority
            className="pointer-events-none absolute top-[-32%] left-[-38%] w-[176%] max-w-none opacity-90"
          />
          <Image
            src="/img/togala-logo-stacked.png"
            alt="Togala Contractor Builder"
            width={1400}
            height={1509}
            priority
            className="relative h-auto w-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.55)]"
          />
        </div>

        <div className="mx-auto w-full max-w-[26rem] rounded-3xl border border-white/12 bg-ink/70 px-6 py-8 text-center shadow-lift backdrop-blur-md sm:px-9 sm:py-9">
          <h1 className="text-balance">
            <span className="block text-base leading-[1.3] font-bold tracking-[0.02em] text-clay sm:text-lg lg:text-[1.25rem]">
              HELPING YOU GET
              <br />
              BACK TO BUSINESS
            </span>
            <span className="mt-3 block font-display text-[2.5rem] leading-none tracking-[0.04em] text-bone sm:text-[2.75rem] lg:text-[3.1rem]">
              FASTER.
            </span>
          </h1>

          <span aria-hidden className="mx-auto mt-4 block h-px w-14 bg-white/25" />

          <p className="mt-4 text-lg leading-none font-bold tracking-[0.2em] text-moss sm:text-xl lg:text-[1.4rem]">
            NATIONWIDE
          </p>

          <CtaButton href="/contact-us" className="mt-6 w-full sm:w-auto">
            CONTACT US
          </CtaButton>
        </div>
      </div>

      <a
        href="#approach"
        aria-label="Scroll to content"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold tracking-[0.32em] text-bone/60 transition-colors duration-(--duration-swift) hover:text-clay lg:flex"
      >
        SCROLL
        <span className="h-10 w-px bg-gradient-to-b from-clay to-transparent" />
      </a>
    </section>
  );
}
