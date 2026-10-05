import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, ORG_ID, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: "Call (877) 864-2521, email info@togalacb.com, or send your project details and Togala will connect you with the right director to outline next steps.",
  path: "/contact-us",
});

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      url: `${site.url}/contact-us`,
      name: "Contact Togala Contractor Builder",
      about: { "@id": ORG_ID },
    },
    breadcrumbJsonLd([{ name: "Contact Us", path: "/contact-us" }]),
  ],
};

const cardLabel = "text-[0.68rem] font-bold tracking-[0.26em]";

const contactRows = [
  {
    label: "PHONE",
    value: site.phone,
    href: site.phoneHref,
    icon: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  },
  {
    label: "EMAIL",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    label: "LOCATION",
    value: "Denver, CO · Serving nationwide",
    href: null,
    icon: (
      <>
        <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="contact us"
      headline="LET'S TALK ABOUT YOUR PROPERTY."
      image="/img/banners/contact-foundation.jpg"
      imageAlt="Foundation work at a construction site"
    >
      <JsonLd data={pageJsonLd} />
      <section aria-labelledby="form-heading" className="bg-bone">
        <div className="mx-auto max-w-[1060px] px-6 py-14 lg:px-10 lg:py-20">
          <SectionHeading
            id="form-heading"
            kicker="WE'LL CONNECT YOU WITH THE RIGHT DIRECTOR"
            eyebrow="tell us about your project"
            tone="light"
          />

          <Reveal delay={90}>
            <p className="mx-auto mt-6 max-w-[54ch] text-center text-[1rem] leading-[1.75] text-ink-700">
              Fill out the form and it comes straight to our team. We&apos;ll
              review your needs and outline next steps.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
            <Reveal delay={90}>
              <div className="rounded-2xl bg-white p-6 shadow-md shadow-ink/[0.06] ring-1 ring-ink/8 sm:p-8">
                <ContactForm />
              </div>
            </Reveal>

            <aside className="flex flex-col gap-6">
              <Reveal delay={150}>
                <div className="rounded-2xl bg-white p-7 shadow-md shadow-ink/[0.06] ring-1 ring-ink/8">
                  <h3 className={`${cardLabel} text-center text-forest`}>REACH US DIRECTLY</h3>
                  <ul className="mt-4 divide-y divide-ink/8">
                    {contactRows.map((row) => {
                      const inner = (
                        <>
                          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-forest/[0.07] text-forest transition-colors duration-(--duration-swift) group-hover:bg-clay group-hover:text-white">
                            <svg viewBox="0 0 24 24" aria-hidden className="size-[18px]" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                              {row.icon}
                            </svg>
                          </span>
                          <span className="min-w-0 max-w-full">
                            <span className="block text-[0.6rem] font-bold tracking-[0.18em] text-ink/45">{row.label}</span>
                            <span className="block truncate text-[0.95rem] font-semibold text-ink">{row.value}</span>
                          </span>
                        </>
                      );
                      return (
                        <li key={row.label}>
                          {row.href ? (
                            <a href={row.href} className="group flex flex-col items-center gap-2 py-4 text-center">
                              {inner}
                            </a>
                          ) : (
                            <div className="flex flex-col items-center gap-2 py-4 text-center">{inner}</div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={210}>
                <div className="brand-pattern relative isolate overflow-hidden rounded-2xl bg-forest p-7 text-bone [--pattern-tint:rgb(255_255_255/0.07)] after:-z-10">
                  <h3 className={`${cardLabel} text-clay`}>EMERGENCY?</h3>
                  <p className="t-body mt-4 text-bone/80">
                    Togala Select members have guaranteed nationwide 24/7 access
                    through our invitation-only emergency response program.
                  </p>
                  <Link
                    href="/togala-select"
                    className="group mt-5 inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.18em] text-clay transition-colors duration-(--duration-swift) hover:text-white"
                  >
                    ABOUT TOGALA SELECT
                    <span
                      aria-hidden
                      className="transition-transform duration-(--duration-glide) ease-(--ease-out-soft) group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
