import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { processIcons } from "@/components/ProcessIcons";
import { aboutContent, processSteps, servicePages, team } from "@/data/site";

const STAGGER = 70;

export const metadata: Metadata = {
  title: "About",
  description:
    "Based in the Rocky Mountain Region, Togala Contractor Builder is a general contractor working with property owners, asset managers, and consultants across multifamily, hospitality, healthcare, retail and commercial property.",
};

export default function AboutPage() {
  return (
    <PageShell eyebrow="about togala" headline={aboutContent.kicker} image="/img/banners/crew.jpg">
      {/* ── Who we are ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="story-heading" className="bg-bone">
        <div className="mx-auto max-w-[1060px] px-6 py-12 lg:px-10 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
            <SectionHeading
              id="story-heading"
              kicker="WHO WE ARE"
              eyebrow="a contractor, and a partner"
              align="left"
              tone="light"
              className="lg:pt-2"
            />

            <Reveal delay={90}>
              {aboutContent.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`t-lead max-w-[62ch] text-ink-700 ${i > 0 ? "mt-6" : ""}`}
                >
                  {p}
                </p>
              ))}
            </Reveal>
          </div>

          {/* ── Leadership ─────────────────────────────────────────────────── */}
          {/* Deliberately unlabelled. Heading this "our team" would imply these
              two are the whole team; each card states its own title, which is
              enough. */}
          <div className="mt-12 border-t border-ink/10 pt-12">
            <ul className="grid gap-6 lg:grid-cols-2">
              {team.map((person, i) => (
                <Reveal as="li" key={person.name} delay={i * STAGGER} className="h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-ink/10 sm:flex-row">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      width={1100}
                      height={1650}
                      sizes="(max-width: 640px) 100vw, 240px"
                      className="h-56 w-full shrink-0 object-cover object-top sm:h-auto sm:w-[42%]"
                    />
                    <div className="flex flex-col p-6">
                      <h3 className="text-[1.15rem] leading-tight font-bold tracking-[0.02em] text-ink">
                        {person.name}
                      </h3>
                      <p className="mt-1 text-[0.7rem] font-bold tracking-[0.16em] text-forest uppercase">
                        {person.title}
                      </p>
                      {person.bio.map((para, p) => (
                        <p
                          key={p}
                          className={`text-[0.85rem] leading-[1.7] text-ink-700 ${p === 0 ? "mt-4" : "mt-3"}`}
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

          <div className="mt-12 border-t border-ink/10 pt-12">
            <SectionHeading
              kicker="THE ASSET CLASSES WE WORK IN"
              eyebrow="sectors we serve"
              tone="light"
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {aboutContent.sectors.map((sector, i) => (
                <Reveal as="li" key={sector} delay={i * STAGGER} className="h-full">
                  <div className="flex h-full items-center justify-center rounded-xl border border-ink/10 bg-white px-4 py-6 text-center text-[0.95rem] font-bold tracking-[0.06em] text-ink">
                    {sector}
                  </div>
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
        <div className="mx-auto max-w-[1060px] px-6 py-12 lg:px-10 lg:py-14">
          <SectionHeading
            id="how-heading"
            kicker="ASSESS. PLAN. IMPLEMENT. REVIEW."
            eyebrow="how we work"
          />

          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => {
              const Icon = processIcons[i];
              return (
                <Reveal as="li" key={step.step} delay={i * STAGGER} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7">
                    <Icon className="size-9 text-lime" />
                    <h3 className="mt-5 text-[1rem] font-bold tracking-[0.16em] uppercase">
                      {step.title}
                    </h3>
                    <p className="t-body mt-3 text-bone/75">{step.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>

          <div className="mt-12 border-t border-white/10 pt-12">
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
