import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { social } from "@/data/site";
import { socialIcons } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Togala Contractor Builder about a project, question, or property challenge. We'll connect you with the right director to review your needs and outline next steps.",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="contact us"
      headline="LET'S TALK ABOUT YOUR PROPERTY."
      intro="Have a project, question, or property challenge you'd like to discuss? Our team is here to help. Reach out and we'll connect you with the right director to review your needs and outline next steps."
      image="/img/banners/contact-foundation.jpg"
      imageAlt="Foundation work at a construction site"
    >
      <section aria-labelledby="form-heading" className="bg-bone">
        <div className="mx-auto max-w-[1060px] px-6 py-12 lg:px-10 lg:py-14">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-12">
            <div>
              <h2
                id="form-heading"
                className="display-eyebrow text-[1.6rem] text-ink text-balance sm:text-[1.9rem]"
              >
                tell us about your project
              </h2>
              <span aria-hidden className="mt-6 mb-10 block h-px w-14 bg-ink/30" />
              <ContactForm />
            </div>

            <aside className="lg:pt-4">
              <Reveal delay={90}>
                <div className="rounded-2xl border border-ink/10 bg-white p-7">
                  <h3 className="text-[0.7rem] font-bold tracking-[0.28em] text-forest">
                    EMERGENCY?
                  </h3>
                  <p className="t-body mt-4 text-ink-700">
                    Togala Select members have guaranteed nationwide 24/7 access
                    through our invitation-only emergency response program.
                  </p>
                  <Link
                    href="/togala-select"
                    className="group mt-5 inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.18em] text-clay"
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

                <div className="mt-6 rounded-2xl border border-ink/10 bg-white p-7">
                  <h3 className="text-[0.7rem] font-bold tracking-[0.28em] text-forest">
                    FOLLOW TOGALA
                  </h3>
                  <ul className="mt-5 flex items-center gap-3">
                    {social.map((s) => {
                      const Icon = socialIcons[s.icon];
                      return (
                        <li key={s.href}>
                          <a
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            className="flex size-11 items-center justify-center rounded-full border border-ink/15 text-ink-700 transition-colors duration-(--duration-swift) hover:border-clay hover:bg-clay hover:text-white"
                          >
                            <Icon className="size-5" />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
