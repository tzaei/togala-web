import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudyCard from "@/components/CaseStudyCard";
import ProjectGallery from "@/components/ProjectGallery";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import { pageMetadata } from "@/lib/seo";

const STAGGER = 70;

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};
  return {
    ...pageMetadata({
      title: `${study.name} Case Study`,
      description: study.headline,
      path: `/case-studies/${study.slug}`,
    }),
    // Hidden until launch: unlinked, out of the sitemap, and noindex.
    robots: { index: false, follow: false },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();

  const more = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <>
      {/* ── Photo: full colour, no overlay, at its own aspect ratio. Starts below the fixed header. */}
      <section className="bg-ink pt-20 lg:pt-24">
        <Image
          src={study.image}
          alt={study.imageAlt}
          width={study.imageSize.width}
          height={study.imageSize.height}
          priority
          sizes="100vw"
          className="mx-auto h-auto max-h-[72svh] w-full max-w-[1800px] object-cover"
        />
      </section>

      {/* ── Title, key numbers, services ────────────────────────────────── */}
      <section className="bg-bone">
        <div className="mx-auto max-w-[900px] px-6 pt-10 pb-12 text-center lg:px-10 lg:pt-14 lg:pb-16">
          <p className="inline-block rounded-full bg-[#018042] px-4 py-1.5 text-[0.6rem] font-extrabold tracking-[0.2em] text-white sm:px-5 sm:py-2 sm:text-[0.68rem]">
            {`${study.sector.toUpperCase()}\u00a0· ${study.location.toUpperCase()}`}
          </p>
          <h1 className="display-eyebrow mt-5 text-[2rem] leading-[1.02] text-balance text-ink sm:text-[2.6rem] lg:text-[3rem]">
            {study.name.toLowerCase()}
          </h1>
          <span aria-hidden className="mx-auto mt-5 block h-px w-12 bg-clay/70" />
          <p className="mx-auto mt-5 max-w-[58ch] text-[1.05rem] leading-[1.6] font-semibold text-ink-700 text-balance sm:text-[1.15rem]">
            {study.headline}
          </p>

          {study.facts.length > 0 && (
            <dl className="mx-auto mt-8 flex max-w-[560px] justify-center divide-x divide-ink/10">
              {study.facts.map((f) => (
                <div key={f.label} className="flex-1 px-3 sm:px-6">
                  <dt className="sr-only">{f.label}</dt>
                  <dd className="font-display text-[1.9rem] leading-none text-clay sm:text-[2.3rem]">{f.value}</dd>
                  <dd aria-hidden className="mt-2 text-[0.6rem] leading-tight font-bold tracking-[0.14em] text-ink/55 uppercase sm:text-[0.65rem]">
                    {f.label}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="mr-1 text-[0.62rem] font-bold tracking-[0.2em] text-ink/45">SERVICES</span>
            {study.services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-full bg-white px-3.5 py-1.5 text-[0.78rem] font-semibold text-ink ring-1 ring-ink/10 transition-colors duration-(--duration-swift) hover:bg-clay hover:text-white hover:ring-clay"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview + scope ─────────────────────────────────────────────── */}
      <section aria-labelledby="overview-heading" className="bg-bone">
        <div className="mx-auto max-w-[820px] px-6 py-14 lg:px-10 lg:py-20">
          <SectionHeading id="overview-heading" kicker="THE PROJECT" eyebrow="overview" tone="light" />
          <Reveal delay={90}>
            <p className="mt-6 text-center text-[1rem] leading-[1.8] text-ink-700">{study.overview}</p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 rounded-2xl bg-white p-6 shadow-md shadow-ink/[0.06] ring-1 ring-ink/8 sm:p-8">
              <h3 className="text-center text-[0.68rem] font-bold tracking-[0.24em] text-forest">SCOPE OF WORK</h3>
              <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {study.scope.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.9rem] leading-[1.5] text-ink-700">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-clay/10 text-clay">
                      <svg viewBox="0 0 24 24" aria-hidden className="size-3" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 12.5 4.5 4.5L19 7.5" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="process-heading"
        className="brand-pattern relative isolate overflow-hidden bg-forest text-bone [--pattern-tint:rgb(255_255_255/0.07)] after:-z-10"
      >
        <div className="mx-auto max-w-[1060px] px-6 py-14 lg:px-10 lg:py-20">
          <SectionHeading id="process-heading" kicker="HOW WE DELIVERED IT" eyebrow="our process" />
          <ol className={`mt-10 grid gap-3 sm:gap-6 ${study.process.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
            {study.process.map((step, i) => (
              <Reveal as="li" key={i} delay={i * STAGGER} className="h-full">
                <div className="flex h-full gap-4 rounded-2xl bg-white p-5 sm:flex-col sm:gap-0 sm:p-7">
                  <span className="w-9 shrink-0 font-display text-[1.6rem] leading-none text-clay sm:w-auto sm:text-[2rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[0.88rem] leading-[1.65] text-ink-700 sm:mt-4 sm:text-[0.9375rem] sm:leading-[1.7]">{step}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Photo story ──────────────────────────────────────────────────── */}
      {study.gallery && (
        <section aria-label="Project photos" className="bg-bone">
          <div className="mx-auto max-w-[1060px] px-6 py-14 lg:px-10 lg:py-20">
            <p className="mb-8 text-center text-[0.68rem] font-bold tracking-[0.24em] text-forest">PROJECT PHOTOS</p>
            <ProjectGallery groups={study.gallery} />
          </div>
        </section>
      )}

      {/* ── More projects ────────────────────────────────────────────────── */}
      <section aria-labelledby="more-heading" className="bg-bone">
        <div className="mx-auto max-w-[1060px] px-6 py-14 lg:px-10 lg:py-20">
          <SectionHeading id="more-heading" kicker="CASE STUDIES" eyebrow="more projects" tone="light" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {more.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={i * STAGGER} className="h-full">
                <CaseStudyCard study={c} />
              </Reveal>
            ))}
          </ul>
          <Reveal delay={90} className="mt-10 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.18em] text-clay transition-colors duration-(--duration-swift) hover:text-clay-600"
            >
              ALL CASE STUDIES <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
