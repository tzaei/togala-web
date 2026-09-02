import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import SideSwoosh from "@/components/SideSwoosh";
import { processIcons } from "@/components/ProcessIcons";
import { audiences, clientLogos, processSteps, serviceCards, site, social } from "@/data/site";

/* Spacing rhythm shared by every band on the page:
     section    py-12 lg:py-14   outer band padding
     heading→   mt-6             heading block to its intro copy
     intro→     mt-9             intro copy to a grid or list
     grid→      mt-10            grid to its closing CTA
     block      mt-14 pt-12      one sub-section to the next, over a rule */
const STAGGER = 70;
const AFTER_HEADING = 90;

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.togalacb.com/#organization",
  name: site.name,
  url: site.url,
  description: site.description,
  areaServed: { "@type": "Country", name: "US" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Denver",
    addressRegion: "CO",
    addressCountry: "US",
  },
  sameAs: social.map((s) => s.href),
  serviceType: [
    "Construction Defect Consulting",
    "Capital Improvement Strategy",
    "Large Loss Reconstruction Management",
    "Commercial Roofing",
    "Hospitality & Retail Renovation Planning",
    "Property Recovery Services",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Hero />

      {/* ── Approach + who we serve — deep green band ──────────────────────── */}
      <section
        id="approach"
        aria-labelledby="approach-heading"
        className="brand-pattern relative isolate overflow-hidden bg-forest text-bone [--pattern-tint:rgb(255_255_255/0.07)] after:-z-10"
      >
        <SideSwoosh side="left" align="top" />
        <SideSwoosh side="right" align="bottom" />

        <div className="mx-auto max-w-[1060px] px-6 py-12 lg:px-10 lg:py-14">
          {/* Editorial two-column: statement left, argument right */}
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
            <SectionHeading
              id="approach-heading"
              kicker="WHO WE ARE"
              eyebrow="the togala approach"
              align="left"
              className="lg:pt-2"
            />

            <Reveal delay={AFTER_HEADING}>
              <p className="t-lead max-w-[62ch] text-bone/85">
                At Togala, we specialize in{" "}
                <strong className="font-bold text-white">
                  property restoration, construction defect analysis,
                </strong>{" "}
                and{" "}
                <strong className="font-bold text-white">
                  large loss reconstruction management
                </strong>{" "}
                for complex real estate assets across the country. Our team
                partners with property owners, HOAs, and asset managers to
                transform uncertainty into clarity: assessing damage, planning
                recovery, and managing every step with precision and
                accountability.
              </p>
              <p className="t-lead mt-6 max-w-[62ch] font-semibold text-lime">
                We deliver more than repairs. We restore performance, protect
                value, and strengthen trust.
              </p>
            </Reveal>
          </div>

          {/* ── Who we serve ──────────────────────────────────────────────── */}
          <div className="mt-12 border-t border-white/10 pt-12">
            <SectionHeading
              kicker="TRUSTED BY THOSE WHO MANAGE THE MOST VALUABLE PROPERTIES"
              eyebrow="who we serve"
            />

            {clientLogos.length > 0 ? (
              <Reveal delay={AFTER_HEADING} className="mt-9">
                <div
                  className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
                  aria-label="Clients Togala works with"
                >
                  <div className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused]">
                    {[...clientLogos, ...clientLogos].map((logo, i) => (
                      <Image
                        key={`${logo.src}-${i}`}
                        src={logo.src}
                        alt={i < clientLogos.length ? logo.name : ""}
                        aria-hidden={i >= clientLogos.length}
                        width={320}
                        height={120}
                        className="h-12 w-auto opacity-70 brightness-0 invert transition-opacity duration-(--duration-swift) hover:opacity-100 lg:h-14"
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            ) : (
              /* A quiet divided list reads cleaner here than six boxed tiles */
              <ul className="mx-auto mt-8 grid max-w-3xl gap-x-14 sm:grid-cols-2">
                {audiences.map((a, i) => (
                  <Reveal as="li" key={a} delay={AFTER_HEADING + i * STAGGER}>
                    <div className="flex items-center gap-4 border-b border-white/10 py-4 text-[0.95rem] font-semibold tracking-wide text-bone/90">
                      <span className="size-1.5 shrink-0 rounded-full bg-lime" />
                      {a}
                    </div>
                  </Reveal>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* ── Services — light band so the photography carries the section ───── */}
      <section aria-labelledby="services-heading" className="bg-bone">
        <div className="mx-auto max-w-[1060px] px-6 py-12 lg:px-10 lg:py-14">
          <SectionHeading
            id="services-heading"
            kicker="EXPERTISE ACROSS RESTORATION, RECONSTRUCTION, & CAPITAL IMPROVEMENT"
            eyebrow="services snapshot"
            tone="light"
          />

          <Reveal delay={AFTER_HEADING}>
            <p className="t-lead mx-auto mt-6 max-w-[68ch] text-center text-ink-700">
              Our services bridge the gap between construction and consultation.
              Togala provides hands-on expertise in construction defect
              consulting, emergency property recovery, commercial roofing
              systems, and strategic capital improvement planning. We bring deep
              technical knowledge, proven vendor coordination, and
              executive-level communication, ensuring every project is
              documented, transparent, and delivered with measurable results.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((card, i) => (
              <Reveal key={card.title} delay={i * STAGGER} className="h-full">
                <ServiceCard {...card} priority={i < 3} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={AFTER_HEADING} className="mt-8 text-center">
            <CtaButton href="/services" size="lg">
              VIEW OUR SERVICES
            </CtaButton>
          </Reveal>
        </div>
      </section>

      {/* ── Our process ───────────────────────────────────────────────────── */}
      {/* Orange arrives through the brand swooshes and the display line rather
          than as a full field — the way it is used everywhere else on the site. */}
      <section
        aria-labelledby="process-heading"
        className="brand-pattern relative isolate overflow-hidden bg-forest text-bone [--pattern-tint:rgb(255_255_255/0.07)] after:-z-10"
      >
        <SideSwoosh side="left" align="top" />
        <SideSwoosh side="right" align="bottom" />

        <div className="mx-auto max-w-[1060px] px-6 py-12 lg:px-10 lg:py-14">
          <SectionHeading
            id="process-heading"
            kicker="A PROVEN PROCESS FOR PROPERTY RECOVERY AND IMPROVEMENT."
            eyebrow="our process"
          />

          <Reveal delay={AFTER_HEADING}>
            <p className="t-lead mx-auto mt-6 max-w-[62ch] text-center text-bone/85">
              Every project follows a disciplined, repeatable process designed
              for efficiency and clarity:
            </p>
          </Reveal>

          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => {
              const Icon = processIcons[i];
              return (
                <Reveal as="li" key={step.step} delay={i * STAGGER} className="h-full">
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-7 transition-[transform,box-shadow] duration-(--duration-glide) ease-(--ease-out-soft) hover:-translate-y-1 hover:shadow-lift">
                    {/* Ghost numeral instead of a competing badge */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute top-4 right-5 font-display text-[3.25rem] leading-none text-ink/[0.08] transition-colors duration-(--duration-glide) group-hover:text-clay/20"
                    >
                      {step.step}
                    </span>
                    <Icon className="size-10 text-forest" />
                    <h3 className="relative mt-6 text-[1.05rem] font-bold tracking-[0.16em] text-ink uppercase">
                      {step.title}
                    </h3>
                    <p className="t-body relative mt-3 text-ink-700">{step.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>

          <Reveal delay={AFTER_HEADING} className="mt-8 text-center">
            <p className="font-display text-[1.6rem] leading-tight tracking-[0.06em] text-clay sm:text-[2rem]">
              ASSESS. PLAN. IMPLEMENT. REVIEW.
            </p>
            <p className="t-lead mx-auto mt-6 max-w-[68ch] text-bone/85">
              We begin with detailed evaluation and scope development, then
              manage each phase with transparent reporting, field oversight, and
              continuous communication. Our process ensures accountability from
              assessment through completion... and confidence in every outcome.
            </p>
          </Reveal>
        </div>
      </section>

    </>
  );
}
