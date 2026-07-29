import type { Metadata } from "next";
import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { serviceCards, servicePages } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Construction defect consulting, capital improvement strategy, large loss reconstruction management, commercial roofing, hospitality and retail renovation planning, and property recovery services — nationwide.",
};

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="our services"
      headline="EXPERTISE ACROSS RESTORATION, RECONSTRUCTION, & CAPITAL IMPROVEMENT"
      intro="Our services bridge the gap between construction and consultation. Togala provides hands-on expertise in construction defect consulting, emergency property recovery, commercial roofing systems, and strategic capital improvement planning."
      image="/img/banners/plans.jpg"
    >
      <section className="bg-bone">
        <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-10 lg:py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
