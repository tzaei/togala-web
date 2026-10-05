import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import SideSwoosh from "@/components/SideSwoosh";
import ProcessCard from "@/components/ProcessCard";
import { audiences, clientLogos, processSteps, serviceCards, site, social } from "@/data/site";

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

const pillars = [
  {
    num: "01",
    label: "Assess & Plan",
    text: "We partner with owners and asset managers to transform uncertainty into clarity.",
  },
  {
    num: "02",
    label: "Manage & Execute",
    text: "Every step managed with precision, accountability, and transparent reporting.",
  },
  {
    num: "03",
    label: "Restore & Protect",
    text: "We restore performance, protect value, and strengthen trust.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Hero />

      {/* ── Approach + who we serve ─────────────────────────────────────── */}
      <section
        id="approach"
        aria-labelledby="approach-heading"
        className="brand-pattern relative isolate overflow-hidden bg-forest text-bone [--pattern-tint:rgb(255_255_255/0.07)] after:-z-10"
      >
        <SideSwoosh side="right" align="bottom" />

        <div className="mx-auto max-w-[1060px] px-6 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[48rem] text-center">
            <Reveal>
              <p className="text-[0.68rem] font-bold tracking-[0.3em] text-lime">
                WHO WE ARE
              </p>
              <h2
                id="approach-heading"
                className="display-eyebrow mt-3 text-[2.2rem] leading-[0.95] text-clay sm:text-[2.6rem] lg:text-[3rem]"
              >
                the togala approach
              </h2>
            </Reveal>

            <Reveal delay={AFTER_HEADING}>
              <p className="mx-auto mt-6 max-w-[48ch] text-[1rem] leading-[1.75] text-bone/65">
                Property restoration, construction defect analysis, and large
                loss reconstruction for complex real estate assets nationwide.
              </p>
            </Reveal>
          </div>

          {/* Three pillars with numbered accents */}
          <Reveal delay={AFTER_HEADING}>
            <div className="mx-auto mt-14 grid max-w-[56rem] gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="flex items-start gap-4 bg-forest px-5 py-5 text-left sm:flex-col sm:items-center sm:gap-0 sm:px-6 sm:py-8 sm:text-center"
                >
                  <span className="w-9 shrink-0 font-display text-[1.6rem] leading-none text-clay sm:w-auto sm:text-[2rem]">
                    {pillar.num}
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-bold tracking-[0.2em] text-white sm:mt-3 sm:text-[0.72rem] sm:tracking-[0.22em]">
                      {pillar.label.toUpperCase()}
                    </p>
                    <p className="mt-1.5 text-[0.85rem] leading-[1.55] text-bone/60 sm:mt-3 sm:text-[0.88rem] sm:leading-[1.6]">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── Who we serve ────────────────────────────────────────────── */}
          <div className="mt-20 border-t border-white/10 pt-16">
            <Reveal>
              <p className="text-center text-[0.68rem] font-bold tracking-[0.3em] text-lime">
                TRUSTED BY THOSE WHO MANAGE THE MOST VALUABLE PROPERTIES
              </p>
              <h2 className="display-eyebrow mt-3 text-center text-[2.2rem] leading-[0.95] text-clay sm:text-[2.6rem] lg:text-[3rem]">
                who we serve
              </h2>
            </Reveal>

            {clientLogos.length > 0 ? (
              <Reveal delay={AFTER_HEADING} className="mt-10">
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
              <ul className="mx-auto mt-10 grid max-w-[44rem] gap-3 sm:grid-cols-2">
                {audiences.map((a, i) => (
                  <Reveal as="li" key={a} delay={AFTER_HEADING + i * STAGGER}>
                    <div className="flex h-full items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-5 py-4 text-[0.86rem] font-semibold tracking-[0.04em] text-bone/85 transition-colors duration-(--duration-swift) hover:border-clay/30 hover:bg-white/[0.07]">
                      <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                      {a}
                    </div>
                  </Reveal>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────────────── */}
      <section aria-labelledby="services-heading" className="relative overflow-hidden bg-[#f0f3f5]">
        <div aria-hidden className="absolute inset-0" style={{ backgroundImage: "linear-gradient(var(--color-forest) 1px, transparent 1px), linear-gradient(90deg, var(--color-forest) 1px, transparent 1px)", backgroundSize: "48px 48px", opacity: 0.06 }} />
        <div aria-hidden className="absolute inset-0" style={{ backgroundImage: "linear-gradient(var(--color-forest) 0.5px, transparent 0.5px), linear-gradient(90deg, var(--color-forest) 0.5px, transparent 0.5px)", backgroundSize: "12px 12px", opacity: 0.03 }} />
        <div className="relative mx-auto max-w-[1060px] px-6 py-16 lg:px-10 lg:py-24">
          <SectionHeading
            id="services-heading"
            kicker="EXPERTISE ACROSS RESTORATION, RECONSTRUCTION, & CAPITAL IMPROVEMENT"
            eyebrow="services snapshot"
            tone="light"
          />

          <Reveal delay={AFTER_HEADING}>
            <p className="mx-auto mt-6 max-w-[48ch] text-center text-[1rem] leading-[1.75] text-ink-700">
              Deep technical knowledge, proven vendor coordination, and
              executive-level communication on every project.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {serviceCards.map((card, i) => (
              <Reveal key={card.title} delay={i * STAGGER} className="h-full">
                <ServiceCard {...card} priority={i < 3} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={AFTER_HEADING} className="mt-12 text-center">
            <CtaButton href="/services" size="lg">
              VIEW OUR SERVICES
            </CtaButton>
          </Reveal>
        </div>
      </section>

      {/* ── Our process ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="process-heading"
        className="brand-pattern relative isolate overflow-hidden bg-forest text-bone [--pattern-tint:rgb(255_255_255/0.07)] after:-z-10"
      >
        <SideSwoosh side="right" align="bottom" />

        <div className="mx-auto max-w-[1060px] px-6 py-16 lg:px-10 lg:py-24">
          <SectionHeading
            id="process-heading"
            kicker="A PROVEN PROCESS FOR PROPERTY RECOVERY AND IMPROVEMENT"
            eyebrow="our process"
          />

          <Reveal delay={AFTER_HEADING}>
            <p className="mx-auto mt-6 max-w-[44ch] text-center text-[1rem] leading-[1.75] text-bone/65">
              Disciplined, repeatable, built for efficiency and clarity.
            </p>
          </Reveal>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => {
              return (
                <Reveal as="li" key={step.step} delay={i * STAGGER} className="h-full">
                  <ProcessCard index={i} step={step.step} title={step.title} body={step.body} />
                </Reveal>
              );
            })}
          </ol>

          <Reveal delay={AFTER_HEADING} className="mt-14 text-center">
            <p className="font-display text-[1.8rem] leading-tight tracking-[0.06em] text-clay sm:text-[2.2rem]">
              ASSESS. PLAN. IMPLEMENT. REVIEW.
            </p>
            <div className="mt-8">
              <CtaButton href="/contact-us" size="lg">
                GET IN TOUCH
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

    </>
  );
}
