import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { CommunityIcon, sectorIcons } from "@/components/SectorIcons";
import { selectContent, site } from "@/data/site";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, ORG_ID, pageMetadata } from "@/lib/seo";

const STAGGER = 70;

const audienceIcons = [CommunityIcon, sectorIcons.Healthcare, sectorIcons.Multifamily];

const card = "rounded-2xl bg-white shadow-md shadow-ink/[0.06] ring-1 ring-ink/8";

export const metadata = pageMetadata({
  title: "Togala Select: 24/7 Emergency Response Program",
  description: "Togala Select is an invitation-only program giving property owners and managers priority access to Togala's nationwide 24/7 emergency response network.",
  path: "/togala-select",
});

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${site.url}/togala-select#service`,
      name: "Togala Select",
      serviceType: "24/7 emergency response program",
      description: selectContent.intro,
      url: `${site.url}/togala-select`,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "United States" },
      audience: selectContent.audience.map((a) => ({ "@type": "Audience", audienceType: a })),
    },
    breadcrumbJsonLd([{ name: "Togala Select", path: "/togala-select" }]),
  ],
};

export default function TogalaSelectPage() {
  return (
    <PageShell
      eyebrow="togala select"
      headline="CONFIDENCE ON CALL."
      image="/img/banners/towers.jpg"
      imageAlt="High-rise towers against the sky"
    >
      <JsonLd data={pageJsonLd} />
      {/* ── Intro + program benefits ─────────────────────────────────────── */}
      <section aria-labelledby="benefits-heading" className="bg-bone">
        <div className="mx-auto max-w-[1060px] px-6 py-14 lg:px-10 lg:py-20">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/img/togala-select-icon.png"
              alt=""
              aria-hidden
              width={512}
              height={512}
              className="mb-6 size-14 w-auto"
            />
            <SectionHeading
              id="benefits-heading"
              kicker="WHAT MEMBERSHIP INCLUDES"
              eyebrow="program benefits"
              tone="light"
            />
          </div>

          <Reveal delay={90}>
            <p className="mx-auto mt-6 max-w-[62ch] text-center text-[1rem] leading-[1.75] text-ink-700">
              {selectContent.intro}
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-2.5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {selectContent.benefits.map((benefit, i) => (
              <Reveal as="li" key={benefit} delay={i * STAGGER} className="h-full">
                <div className={`${card} flex h-full items-center gap-3 px-4 py-3.5 sm:items-start sm:gap-4 sm:p-6`}>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-clay/10 text-clay sm:size-8">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden
                      className="size-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 12.5 4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  <p className="text-[0.875rem] leading-[1.5] text-ink-700 sm:pt-1 sm:text-[0.9375rem] sm:leading-[1.7]">{benefit}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Who it's for + how it works + enrollment ───────────────────────── */}
      <section
        aria-labelledby="who-heading"
        className="brand-pattern relative isolate overflow-hidden bg-forest text-bone [--pattern-tint:rgb(255_255_255/0.07)] after:-z-10"
      >
        <div className="mx-auto max-w-[1060px] px-6 py-14 lg:px-10 lg:py-20">
          <SectionHeading id="who-heading" kicker="BUILT FOR" eyebrow="who it's for" />
          <ul className="mx-auto mt-8 grid max-w-[56rem] gap-2.5 sm:mt-10 sm:grid-cols-3 sm:gap-4">
            {selectContent.audience.map((who, i) => {
              const Icon = audienceIcons[i];
              return (
                <Reveal as="li" key={who} delay={i * STAGGER} className="h-full">
                  <div className={`${card} flex h-full items-center gap-3.5 px-4 py-3.5 sm:flex-col sm:justify-center sm:gap-3 sm:px-5 sm:py-7 sm:text-center`}>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-forest/[0.07] sm:size-auto sm:bg-transparent">
                      <Icon className="size-6 text-forest sm:size-10" />
                    </span>
                    <span className="text-[0.88rem] font-bold tracking-[0.06em] text-ink sm:text-[0.9rem]">{who}</span>
                  </div>
                </Reveal>
              );
            })}
          </ul>

          <div className="mt-14 border-t border-white/10 pt-14">
            <SectionHeading kicker="FROM ENROLLMENT TO MOBILIZATION" eyebrow="how it works" />
            <ol className="mt-8 grid gap-2.5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {selectContent.howItWorks.map((step, i) => (
                <Reveal as="li" key={step} delay={i * STAGGER} className="h-full">
                  <div className={`${card} flex h-full items-center gap-4 px-4 py-4 sm:flex-col sm:items-start sm:gap-0 sm:p-7`}>
                    <span className="w-9 shrink-0 font-display text-[1.6rem] leading-none text-clay sm:w-auto sm:text-[2rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[0.875rem] leading-[1.5] text-ink-700 sm:mt-4 sm:text-[0.9375rem] sm:leading-[1.7]">{step}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={90} className="mt-14 border-t border-white/10 pt-14 text-center">
            <p className="text-[0.68rem] font-bold tracking-[0.3em] text-lime">BY INVITATION ONLY</p>
            <h2 className="display-eyebrow mt-3 text-[2.2rem] leading-[0.95] text-clay sm:text-[2.6rem]">
              enrollment
            </h2>
            <p className="mx-auto mt-6 max-w-[48ch] text-[1rem] leading-[1.75] text-bone/80">
              {selectContent.enrollment}
            </p>
            <CtaButton href="/contact-us" size="lg" className="mt-8">
              CONTACT YOUR REPRESENTATIVE
            </CtaButton>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
