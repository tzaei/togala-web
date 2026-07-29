import CtaButton from "./CtaButton";
import PageShell from "./PageShell";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { servicePageContent, servicePages } from "@/data/site";
import Link from "next/link";

const STAGGER = 70;

/** Renders a full service detail page from the content in `src/data/site.ts`. */
export default function ServiceDetail({ slug }: { slug: string }) {
  const page = servicePageContent.find((p) => p.slug === slug);
  if (!page) throw new Error(`No service content for slug "${slug}"`);

  const others = servicePages.filter((s) => s.href !== `/${slug}`);

  return (
    <PageShell
      eyebrow={page.heading}
      headline={page.kicker}
      intro={page.intro}
      image={page.image}
    >
      {/* ── Process ────────────────────────────────────────────────────────── */}
      <section aria-labelledby="process-heading" className="bg-bone">
        <div className="mx-auto max-w-[1060px] px-6 py-12 lg:px-10 lg:py-14">
          <SectionHeading
            id="process-heading"
            kicker="HOW WE WORK"
            eyebrow="process"
            tone="light"
          />

          <ol className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-ink/10 ring-1 ring-ink/10">
            {page.steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * STAGGER}>
                <div className="group flex items-start gap-5 bg-white p-6 transition-colors duration-(--duration-swift) hover:bg-bone sm:gap-7 sm:p-7">
                  <span className="font-display text-[1.75rem] leading-none text-clay tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[1.05rem] font-bold tracking-[0.02em] text-ink">
                      {step.title}
                    </h3>
                    <p className="t-body mt-1.5 text-ink-700">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={90} className="mt-8 text-center">
            <CtaButton href={page.cta.href} size="lg">
              {page.cta.label}
            </CtaButton>
          </Reveal>
        </div>
      </section>

      {/* ── Imagery + other services ───────────────────────────────────────── */}
      <section
        aria-labelledby="more-heading"
        className="brand-pattern relative isolate overflow-hidden bg-forest text-bone [--pattern-tint:rgb(255_255_255/0.07)] after:-z-10"
      >
        <div className="mx-auto max-w-[1060px] px-6 py-12 lg:px-10 lg:py-14">
          <div>
            <SectionHeading
              id="more-heading"
              kicker="EXPERTISE ACROSS RESTORATION, RECONSTRUCTION, & CAPITAL IMPROVEMENT"
              eyebrow="other services"
            />

            <ul className="mx-auto mt-8 grid max-w-3xl gap-x-14 sm:grid-cols-2">
              {others.map((s, i) => (
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
        </div>
      </section>
    </PageShell>
  );
}
