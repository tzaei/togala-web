import CaseStudyCard from "@/components/CaseStudyCard";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { caseStudies } from "@/data/caseStudies";
import { pageMetadata } from "@/lib/seo";

const STAGGER = 70;

// Hidden until launch: unlinked, out of the sitemap, and noindex.
export const metadata = {
  ...pageMetadata({
    title: "Case Studies",
    description:
      "Construction defect repair, large loss reconstruction, roofing, and renovation projects Togala has delivered for multifamily, healthcare, and senior living owners.",
    path: "/case-studies",
  }),
  robots: { index: false, follow: false },
};

export default function CaseStudiesPage() {
  return (
    <PageShell
      eyebrow="case studies"
      headline="PROJECTS ACROSS COLORADO, TEXAS & CALIFORNIA"
      intro="From occupied apartment communities to operating hospitals, here is how Togala plans, manages, and delivers complex work while residents, patients, and staff carry on around it."
      image="/img/case-studies/the-viv-on-west-dallas.jpg"
      imageAlt="The Viv on West Dallas apartment courtyard"
    >
      <section className="relative overflow-hidden bg-[#f0f3f5]">
        <div aria-hidden className="absolute inset-0" style={{ backgroundImage: "linear-gradient(var(--color-forest) 1px, transparent 1px), linear-gradient(90deg, var(--color-forest) 1px, transparent 1px)", backgroundSize: "48px 48px", opacity: 0.05 }} />
        <div className="relative mx-auto max-w-[1060px] px-6 py-14 lg:px-10 lg:py-20">
          <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {caseStudies.map((study, i) => (
              <Reveal as="li" key={study.slug} delay={i * STAGGER} className="h-full">
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
