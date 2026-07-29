"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, social } from "@/data/site";
import { socialIcons } from "./SocialIcons";
import MenuOverlay from "./MenuOverlay";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-(--duration-swift) ${
          scrolled
            ? "bg-forest/95 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md"
            : "bg-forest"
        }`}
      >
        <div className="relative mx-auto flex h-20 max-w-[1600px] items-center px-4 sm:px-6 lg:h-24 lg:px-10">
          {/* Wordmark — centred on desktop, flush left on small screens */}
          <Link
            href="/"
            aria-label="Togala Contractor Builder — home"
            className="relative z-10 shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
          >
            <Image
              src="/img/togala-logo-horizontal.png"
              alt="Togala Contractor Builder"
              width={1600}
              height={374}
              priority
              className="h-10 w-auto sm:h-12 lg:h-14"
            />
          </Link>

          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <ul className="mr-1 hidden items-center gap-1 sm:flex" aria-label="Social Bar">
              {social.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex size-10 items-center justify-center rounded-full text-bone/85 transition-colors duration-(--duration-swift) hover:bg-white/10 hover:text-white"
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/togala-select"
              aria-label="Togala Select"
              className="hidden size-11 items-center justify-center rounded-full transition-colors duration-(--duration-swift) hover:bg-white/10 sm:flex"
            >
              <Image
                src="/img/togala-select-icon.png"
                alt="Togala Select"
                width={512}
                height={512}
                className="size-7 w-auto"
              />
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="group ml-1 flex items-center gap-3 rounded-full bg-clay px-5 py-3 text-sm font-bold tracking-[0.14em] text-white transition-colors duration-(--duration-swift) hover:bg-clay-600 lg:px-7"
            >
              <span className="flex w-5 flex-col gap-[5px]">
                <span className="h-[2px] w-full bg-current transition-transform duration-(--duration-swift) group-hover:translate-x-0.5" />
                <span className="h-[2px] w-full bg-current" />
                <span className="h-[2px] w-full bg-current transition-transform duration-(--duration-swift) group-hover:-translate-x-0.5" />
              </span>
              MENU
            </button>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-lime/40 to-transparent" />
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} items={nav} />
    </>
  );
}
