import CtaButton from "./CtaButton";
import PageShell from "./PageShell";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { servicePageContent, servicePages } from "@/data/site";
import Link from "next/link";

const STAGGER = 70;

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
      imageAlt={page.imageAlt}
    >
      {/* ── Process ────────────────────────────────────────────────────────── */}
      <section aria-labelledby="process-heading" className="relative overflow-hidden bg-[#f0f3f5]">
        <div aria-hidden className="absolute inset-0" style={{ backgroundImage: "linear-gradient(var(--color-forest) 1px, transparent 1px), linear-gradient(90deg, var(--color-forest) 1px, transparent 1px)", backgroundSize: "48px 48px", opacity: 0.05 }} />
        <div aria-hidden className="absolute inset-0" style={{ backgroundImage: "linear-gradient(var(--color-forest) 0.5px, transparent 0.5px), linear-gradient(90deg, var(--color-forest) 0.5px, transparent 0.5px)", backgroundSize: "12px 12px", opacity: 0.025 }} />
        <div className="relative mx-auto max-w-[1060px] px-6 py-14 lg:px-10 lg:py-20">
          <SectionHeading
            id="process-heading"
            kicker="HOW WE WORK"
            eyebrow="process"
            tone="light"
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {page.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * STAGGER} className="h-full">
                <div className="group flex h-full flex-col rounded-xl bg-white p-6 shadow-md shadow-ink/[0.06] ring-1 ring-ink/8 transition-[transform,box-shadow] duration-(--duration-glide) ease-(--ease-out-soft) hover:-translate-y-0.5 hover:shadow-lg sm:p-7">
                  <span className="font-display text-[2rem] leading-none text-clay">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[1.05rem] font-bold tracking-[0.02em] text-ink">
                    {step.title}
                  </h3>
                  <p className="t-body mt-2 flex-1 text-ink-700">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={90} className="mt-10 text-center">
            <CtaButton href={page.cta.href} size="lg">
              {page.cta.label}
            </CtaButton>
          </Reveal>
        </div>
      </section>

      {/* ── Other services ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="more-heading"
        className="brand-pattern relative isolate overflow-hidden bg-forest text-bone after:-z-10"
      >
        <div className="mx-auto max-w-[1060px] px-6 py-14 lg:px-10 lg:py-20">
          <SectionHeading
            id="more-heading"
            kicker="EXPERTISE ACROSS RESTORATION, RECONSTRUCTION, & CAPITAL IMPROVEMENT"
            eyebrow="other services"
          />

          <ul className="mx-auto mt-10 grid max-w-3xl gap-x-14 sm:grid-cols-2">
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
      </section>
    </PageShell>
  );
}
