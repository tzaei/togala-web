import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProcessCard from "@/components/ProcessCard";
import { sectorIcons } from "@/components/SectorIcons";
import { aboutContent, processSteps, servicePages, site, team } from "@/data/site";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, ORG_ID, pageMetadata, teamJsonLd } from "@/lib/seo";

const STAGGER = 70;

const pillars = [
  {
    num: "01",
    label: "WHO WE PARTNER WITH",
    text: "Property owners, asset managers, and consultants with complex real estate portfolios.",
  },
  {
    num: "02",
    label: "WHAT WE SPECIALIZE IN",
    text: "Construction defect, capital improvement, large loss, roofing, and emergency response.",
  },
  {
    num: "03",
    label: "HOW WE WORK",
    text: "Open, honest communication from day one, and relationships that outlast the project.",
  },
];

export const metadata = pageMetadata({
  title: "About Togala",
  description: "Meet Togala Contractor Builder, a Denver general contractor serving property owners and asset managers across multifamily, hospitality, healthcare, retail, and commercial.",
  path: "/about",
});

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${site.url}/about#page`,
      url: `${site.url}/about`,
      name: "About Togala Contractor Builder",
      about: { "@id": ORG_ID },
      mainEntity: { "@id": ORG_ID },
    },
    ...teamJsonLd(),
    breadcrumbJsonLd([{ name: "About", path: "/about" }]),
  ],
};

export default function AboutPage() {
  return (
    <PageShell eyebrow="about togala" headline={aboutContent.kicker} image="/img/banners/crew.jpg" imageAlt="Togala construction crew on site">
      <JsonLd data={pageJsonLd} />
      {/* ── Who we are ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="story-heading" className="bg-bone">
        <div className="mx-auto max-w-[1060px] px-6 py-14 lg:px-10 lg:py-20">
          <SectionHeading
            id="story-heading"
            kicker="WHO WE ARE"
            eyebrow="a contractor, and a partner"
            tone="light"
          />

          <Reveal delay={90}>
            <p className="mx-auto mt-6 max-w-[52ch] text-center text-[1rem] leading-[1.75] text-ink-700">
              A Rocky Mountain general contractor delivering next-level service
              to the nation&apos;s top asset owners and managers.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <div className="mx-auto mt-10 grid max-w-[56rem] gap-px overflow-hidden rounded-xl bg-ink/10 ring-1 ring-ink/10 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.label} className="flex items-start gap-4 bg-white px-5 py-5 text-left sm:flex-col sm:items-center sm:gap-0 sm:px-6 sm:py-8 sm:text-center">
                  <span className="w-9 shrink-0 font-display text-[1.6rem] leading-none text-clay sm:w-auto sm:text-[2rem]">{pillar.num}</span>
                  <div>
                    <p className="text-[0.68rem] font-bold tracking-[0.2em] text-ink sm:mt-3 sm:text-[0.72rem] sm:tracking-[0.22em]">{pillar.label}</p>
                    <p className="mt-1.5 text-[0.85rem] leading-[1.55] text-ink-700 sm:mt-3 sm:text-[0.88rem] sm:leading-[1.6]">{pillar.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── Sectors ───────────────────────────────────────────────────── */}
          <div className="mt-10 border-t border-ink/10 pt-10">
            <SectionHeading
              kicker="THE ASSET CLASSES WE WORK IN"
              eyebrow="sectors we serve"
              tone="light"
            />
            <ul className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-5">
              {aboutContent.sectors.map((sector, i) => {
                const Icon = sectorIcons[sector];
                return (
                  <Reveal as="li" key={sector} delay={i * STAGGER} className="h-full last:col-span-2 lg:last:col-span-1">
                    <div className="group flex h-full flex-col items-center justify-center gap-2 rounded-xl bg-white px-3 py-4 text-center shadow-md shadow-ink/[0.06] ring-1 ring-ink/8 transition-[transform,box-shadow] duration-(--duration-glide) ease-(--ease-out-soft) hover:-translate-y-0.5 hover:shadow-lg lg:gap-3 lg:px-4 lg:py-6">
                      <Icon className="size-8 text-forest transition-colors duration-(--duration-swift) group-hover:text-clay lg:size-10" />
                      <span className="text-[0.8rem] font-bold tracking-[0.08em] text-ink lg:text-[0.88rem]">{sector}</span>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>

          {/* ── Leadership ────────────────────────────────────────────────── */}
          <div className="mt-10 border-t border-ink/10 pt-10">
            <SectionHeading
              kicker="THE PEOPLE BEHIND THE WORK"
              eyebrow="leadership"
              tone="light"
            />
            <ul className="mt-8 grid gap-6 lg:grid-cols-2">
              {team.map((person, i) => (
                <Reveal as="li" key={person.name} delay={i * STAGGER} className="h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md shadow-ink/[0.06] ring-1 ring-ink/8 sm:flex-row">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      width={1100}
                      height={1650}
                      sizes="(max-width: 640px) 100vw, 220px"
                      className="aspect-[4/3] w-full shrink-0 object-cover object-[center_42%] sm:aspect-auto sm:h-auto sm:w-[40%] sm:object-top"
                    />
                    <div className="flex flex-col p-5">
                      <h3 className="text-[1.05rem] leading-tight font-bold tracking-[0.02em] text-ink">
                        {person.name}
                      </h3>
                      <p className="mt-0.5 text-[0.65rem] font-bold tracking-[0.18em] text-forest uppercase">
                        {person.title}
                      </p>
                      {person.bio.map((para, p) => (
                        <p
                          key={p}
                          className={`text-[0.82rem] leading-[1.65] text-ink-700 ${p === 0 ? "mt-3" : "mt-2"}`}
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── How we work + services ─────────────────────────────────────────── */}
      <section
        aria-labelledby="how-heading"
        className="brand-pattern relative isolate overflow-hidden bg-forest text-bone [--pattern-tint:rgb(255_255_255/0.07)] after:-z-10"
      >
        <div className="mx-auto max-w-[1060px] px-6 py-14 lg:px-10 lg:py-20">
          <SectionHeading
            id="how-heading"
            kicker="ASSESS. PLAN. IMPLEMENT. REVIEW."
            eyebrow="how we work"
          />

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => {
              return (
                <Reveal as="li" key={step.step} delay={i * STAGGER} className="h-full">
                  <ProcessCard index={i} step={step.step} title={step.title} body={step.body} />
                </Reveal>
              );
            })}
          </ol>

          <div className="mt-10 border-t border-white/10 pt-10">
            <SectionHeading kicker="WHAT WE DO" eyebrow="our services" />
            <ul className="mx-auto mt-8 grid max-w-3xl gap-x-14 sm:grid-cols-2">
              {servicePages.map((s, i) => (
                <Reveal as="li" key={s.href} delay={i * STAGGER}>
                  <Link
                    href={s.href}
                    className="group flex items-center justify-between gap-4 border-b border-white/10 py-4 text-[0.95rem] font-semibold text-bone/90 transition-colors duration-(--duration-swift) hover:text-clay"
                  >
                    {s.title}
                    <span
                      aria-hidden
                      className="text-clay transition-transform duration-(--duration-glide) ease-(--ease-out-soft) group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={90} className="mt-8 text-center">
            <CtaButton href="/contact-us" size="lg">
              WORK WITH TOGALA
            </CtaButton>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
