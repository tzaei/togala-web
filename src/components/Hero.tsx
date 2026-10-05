import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[70svh] flex-col overflow-hidden bg-ink lg:min-h-[75svh] lg:max-h-[780px]">
      <video
        className="absolute inset-0 -z-20 size-full object-cover opacity-30 [filter:saturate(0.4)]"
        src="/video/hero.mp4"
        poster="/img/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/40 via-ink/20 to-ink"
      />

      <div className="flex flex-1 flex-col items-center justify-center px-6 pt-24 pb-4 sm:px-8 lg:pt-28">
        {/* The kicker sits inside the h1 so the page's main heading carries the service keywords. */}
        <h1 className="text-center">
          <span className="block text-[0.64rem] font-bold tracking-[0.3em] text-lime sm:text-[0.7rem]">
            PROPERTY RESTORATION &amp; CONSTRUCTION CONSULTING
            <span className="sr-only">: </span>
          </span>
          {/* Font tracks viewport width so line one always fits: exactly two lines at every size. */}
          <span className="mt-4 block font-display text-[clamp(1.1rem,calc(6.3vw-3px),3.8rem)] leading-[1.05] tracking-[0.03em] text-white">
            <span className="block whitespace-nowrap">HELPING YOU GET BACK TO</span>
            <span className="block whitespace-nowrap">
              BUSINESS <span className="text-clay">FASTER</span>.
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-[44ch] text-center text-[0.88rem] leading-[1.6] text-bone/55 sm:text-[0.95rem]">
          Construction defect analysis, large loss reconstruction,
          and emergency recovery for complex real estate assets.
        </p>

        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
          <CtaButton href="/contact-us" size="lg" className="whitespace-nowrap">
            GET IN TOUCH
          </CtaButton>
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.2em] text-bone/40 transition-colors duration-(--duration-swift) hover:text-clay"
          >
            EXPLORE SERVICES
            <span aria-hidden className="text-clay/60">&#8594;</span>
          </a>
        </div>
      </div>

      <div className="relative mt-auto border-t border-white/[0.06] bg-ink/50 backdrop-blur-sm">
        <div className="mx-auto grid max-w-[1060px] grid-cols-3 px-3 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-10">
          {[
            { stat: "35+", label: "Years Experience" },
            { stat: "Nationwide", label: "Coverage" },
            { stat: "24/7", label: "Emergency Response" },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center justify-center gap-6 ${i > 0 ? "border-l border-white/10 sm:border-l-0" : ""}`}
            >
              {i > 0 && (
                <span
                  aria-hidden
                  className="hidden h-7 w-px bg-white/10 sm:block"
                />
              )}
              <div className="flex flex-col items-center gap-1 text-center sm:flex-row sm:items-baseline sm:gap-2 sm:text-left">
                <span className="font-display text-[0.95rem] tracking-[0.02em] text-clay sm:text-[1.2rem] sm:tracking-[0.04em]">
                  {item.stat}
                </span>
                <span className="text-[0.52rem] leading-tight font-bold tracking-[0.14em] text-bone/40 uppercase sm:text-[0.64rem] sm:tracking-[0.18em]">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
