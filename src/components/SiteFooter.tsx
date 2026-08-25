import Image from "next/image";
import Link from "next/link";
import CtaButton from "./CtaButton";
import { nav, servicePages, site, social } from "@/data/site";
import { socialIcons } from "./SocialIcons";

export default function SiteFooter() {
  return (
    <footer className="brand-pattern relative isolate overflow-hidden bg-ink text-bone [--pattern-tint:rgb(255_255_255/0.05)] after:-z-10">
      {/* Every page ends with a way to get in touch */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-6 py-10 text-center lg:flex-row lg:justify-between lg:px-10 lg:text-left">
          <p className="display-eyebrow text-[1.5rem] text-clay sm:text-[1.8rem]">
            have a project or a property challenge?
          </p>
          <CtaButton href="/contact-us" size="lg" className="shrink-0">
            CONTACT US
          </CtaButton>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Togala Contractor Builder — home">
              <Image
                src="/img/togala-logo-horizontal.png"
                alt="Togala Contractor Builder"
                width={1600}
                height={374}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/70">
              Property restoration, construction defect analysis, and large loss
              reconstruction management for complex real estate assets —
              nationwide.
            </p>
            <ul className="mt-7 flex items-center gap-3">
              {social.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex size-11 items-center justify-center rounded-full border border-white/15 text-bone/80 transition-colors duration-(--duration-swift) hover:border-clay hover:bg-clay hover:text-white"
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-[11px] font-bold tracking-[0.28em] text-bone/45">
              EXPLORE
            </h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-bone/80 transition-colors duration-(--duration-swift) hover:text-clay"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="text-[11px] font-bold tracking-[0.28em] text-bone/45">
              SERVICES
            </h2>
            <ul className="mt-5 space-y-3">
              {servicePages.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm font-semibold text-bone/80 transition-colors duration-(--duration-swift) hover:text-clay"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-4">
            <p className="text-xs tracking-wide text-bone/60">{site.copyright}</p>
            <Link
              href="/terms-and-conditions"
              className="text-xs tracking-wide text-bone/60 transition-colors duration-(--duration-swift) hover:text-clay"
            >
              Terms &amp; Conditions
            </Link>
          </div>
          <Link
            href="/togala-select"
            className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-bone/60 transition-colors duration-(--duration-swift) hover:text-clay"
          >
            <Image
              src="/img/togala-select-icon.png"
              alt=""
              aria-hidden
              width={512}
              height={512}
              className="size-5 w-auto"
            />
            TOGALA SELECT
          </Link>
        </div>
      </div>
    </footer>
  );
}
