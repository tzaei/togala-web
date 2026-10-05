import Image from "next/image";
import Link from "next/link";
import { nav, site, social } from "@/data/site";
import { socialIcons } from "./SocialIcons";

const links = nav.filter((item) => item.href !== "/");

export default function SiteFooter() {
  return (
    <footer className="brand-pattern relative isolate overflow-hidden bg-ink text-bone [--pattern-tint:rgb(255_255_255/0.05)] after:-z-10">
      <div className="relative mx-auto flex max-w-[1060px] flex-col items-center px-6 pt-14 pb-8 text-center lg:px-10 lg:pt-16">
        <Link href="/" aria-label="Togala Contractor Builder home">
          <Image
            src="/img/togala-logo-stacked.png"
            alt="Togala Contractor Builder"
            width={800}
            height={862}
            className="h-20 w-auto lg:h-24"
          />
        </Link>

        <nav aria-label="Footer" className="mt-8">
          <ul className="flex flex-wrap justify-center gap-x-7 gap-y-3">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.72rem] font-bold tracking-[0.2em] text-bone/80 transition-colors duration-(--duration-swift) hover:text-clay"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6 flex flex-col items-center gap-2 text-[0.9rem] text-bone/60 sm:flex-row sm:gap-5">
          <a href={site.phoneHref} className="transition-colors duration-(--duration-swift) hover:text-clay">
            {site.phone}
          </a>
          <span aria-hidden className="hidden h-3 w-px bg-white/20 sm:block" />
          <a href={`mailto:${site.email}`} className="transition-colors duration-(--duration-swift) hover:text-clay">
            {site.email}
          </a>
        </div>

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
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-bone/70 transition-colors duration-(--duration-swift) hover:border-clay hover:bg-clay hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex w-full flex-col items-center gap-2 border-t border-white/10 pt-6 text-[0.7rem] tracking-wide text-bone/45 sm:flex-row sm:justify-center sm:gap-4">
          <p>{site.copyright}</p>
          <span aria-hidden className="hidden h-3 w-px bg-white/15 sm:block" />
          <Link
            href="/terms-and-conditions"
            className="transition-colors duration-(--duration-swift) hover:text-clay"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
