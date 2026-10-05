import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { serviceCards, servicePages, site } from "@/data/site";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Construction & Restoration Consulting Services",
  description: "Construction defect consulting, capital improvement strategy, large loss reconstruction, commercial roofing, renovation planning, and property recovery, nationwide.",
  path: "/services",
});

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      name: "Togala Contractor Builder services",
      itemListElement: servicePages.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: `${site.url}${s.href}`,
      })),
    },
    breadcrumbJsonLd([{ name: "Services", path: "/services" }]),
  ],
};

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="our services"
      headline="EXPERTISE ACROSS RESTORATION, RECONSTRUCTION, & CAPITAL IMPROVEMENT"
      intro="Our services bridge the gap between construction and consultation. Togala provides hands-on expertise in construction defect consulting, emergency property recovery, commercial roofing systems, and strategic capital improvement planning."
      image="/img/banners/plans.jpg"
      imageAlt="Construction plans spread on a table"
    >
      <JsonLd data={pageJsonLd} />
      <section className="bg-bone">
        <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-10 lg:py-12">
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {serviceCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 70} className="h-full">
                <ServiceCard {...card} priority={i < 3} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={100} className="mt-12 border-t border-ink/10 pt-16">
            <h2 className="display-eyebrow text-center text-[2rem] text-ink sm:text-[2.4rem]">
              all service areas
            </h2>
            <ul className="mx-auto mt-10 grid max-w-3xl gap-3">
              {servicePages.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-ink/10 bg-white px-6 py-5 text-base font-bold text-ink transition duration-(--duration-glide) ease-(--ease-out-soft) hover:-translate-y-0.5 hover:border-clay hover:shadow-lift"
                  >
                    {s.title}
                    <ArrowIcon className="size-5 text-clay" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
