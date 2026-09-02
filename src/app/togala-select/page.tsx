import type { Metadata } from "next";
import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { selectContent } from "@/data/site";

const STAGGER = 70;

export const metadata: Metadata = {
  title: "Togala Select",
  description:
    "Togala Select is an invitation-only program giving property owners and managers priority access to Togala's nationwide 24/7 emergency response network.",
};

export default function TogalaSelectPage() {
  return (
    <PageShell
      eyebrow="togala select"
      headline="CONFIDENCE ON CALL."
      intro={selectContent.intro}
      image="/img/banners/towers.jpg"
      imageAlt="High-rise towers against the sky"
    >
      {/* ── Program benefits ─────────────────────────────────────────────── */}
      <section aria-labelledby="benefits-heading" className="bg-bone">
        <div className="mx-auto max-w-[1060px] px-6 py-12 lg:px-10 lg:py-14">
          <div className="flex flex-col items-center gap-6 text-center">
            <Image
              src="/img/togala-select-icon.png"
              alt=""
              aria-hidden
              width={512}
              height={512}
              className="size-14 w-auto"
            />
            <SectionHeading
              id="benefits-heading"
              kicker="WHAT MEMBERSHIP INCLUDES"
              eyebrow="program benefits"
              tone="light"
            />
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {selectContent.benefits.map((benefit, i) => (
              <Reveal as="li" key={benefit} delay={i * STAGGER} className="h-full">
                <div className="flex h-full items-start gap-4 rounded-xl border border-ink/10 bg-white p-6">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden
                    className="mt-0.5 size-5 shrink-0 text-lime"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 12.5 4.5 4.5L19 7.5" />
                  </svg>
                  <p className="t-body text-ink-700">{benefit}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Who it's for + how it works ────────────────────────────────────── */}
      <section
        aria-labelledby="how-heading"
        className="brand-pattern relative isolate overflow-hidden bg-forest text-bone [--pattern-tint:rgb(255_255_255/0.07)] after:-z-10"
      >
        <div className="mx-auto max-w-[1060px] px-6 py-12 lg:px-10 lg:py-14">
          <SectionHeading kicker="BUILT FOR" eyebrow="who it's for" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {selectContent.audience.map((who, i) => (
              <Reveal as="li" key={who} delay={i * STAGGER} className="h-full">
                <div className="flex h-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-7 text-center text-[0.95rem] font-bold tracking-wide">
                  {who}
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="mt-12 border-t border-white/10 pt-12">
            <SectionHeading
              id="how-heading"
              kicker="FROM ENROLLMENT TO MOBILIZATION"
              eyebrow="how it works"
            />
            <ol className="mx-auto mt-8 max-w-3xl">
              {selectContent.howItWorks.map((step, i) => (
                <Reveal as="li" key={step} delay={i * STAGGER}>
                  <div className="flex items-start gap-5 border-b border-white/10 py-5">
                    <span className="font-display text-[1.5rem] leading-none text-clay tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="t-body pt-1 text-bone/90">{step}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* ── Enrollment ──────────────────────────────────────────────────── */}
          <Reveal delay={90} className="mt-14">
            <div className="mx-auto max-w-2xl rounded-2xl border border-clay/40 bg-clay/10 p-8 text-center sm:p-10">
              <h2 className="display-eyebrow text-[1.75rem] text-clay sm:text-[2rem]">
                enrollment
              </h2>
              <p className="t-lead mx-auto mt-4 max-w-[52ch] text-bone/85">
                {selectContent.enrollment}
              </p>
              <CtaButton href="/contact-us" size="lg" className="mt-8">
                CONTACT YOUR REPRESENTATIVE
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
