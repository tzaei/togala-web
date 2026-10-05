"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { social } from "@/data/site";
import { socialIcons } from "./SocialIcons";

type NavItem = {
  readonly label: string;
  readonly href: string;
  readonly children?: readonly { readonly title: string; readonly href: string }[];
};

export default function MenuOverlay({
  open,
  onClose,
  items,
}: {
  open: boolean;
  onClose: () => void;
  items: readonly NavItem[];
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const swooshRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const fit = () => {
      const panel = panelRef.current;
      const nav = navRef.current;
      const box = swooshRef.current;
      if (!panel || !nav || !box) return;
      box.style.display = "none";

      // Boxes of actual glyphs/buttons, not their full-width link boxes.
      const rects: DOMRect[] = [];
      const range = document.createRange();
      const walker = document.createTreeWalker(nav, NodeFilter.SHOW_TEXT);
      for (let n = walker.nextNode(); n; n = walker.nextNode()) {
        if (!n.textContent?.trim()) continue;
        range.selectNodeContents(n);
        rects.push(...Array.from(range.getClientRects()));
      }
      nav.querySelectorAll("a.rounded-full").forEach((el) => rects.push(el.getBoundingClientRect()));

      const panelRect = panel.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      const BLEED_X = 15;
      const BLEED_Y = 60;
      const GAP = 16;
      // Image rotated -80deg: bounding box is 0.567L wide × 1.054L tall (L = image width, aspect 0.399).
      // Grow L until the box (anchored bottom-right) would touch text at its own height.
      const maxL = (panelRect.bottom - navRect.top + BLEED_Y) / 1.054;
      let L = 0;
      for (let c = maxL; c >= 240; c -= 8) {
        const left = panelRect.right + BLEED_X - 0.567 * c - GAP;
        const top = panelRect.bottom + BLEED_Y - 1.054 * c;
        if (!rects.some((r) => r.right > left && r.bottom > top)) {
          L = c;
          break;
        }
      }
      if (!L) return;

      box.style.width = `${0.567 * L}px`;
      box.style.height = `${1.054 * L}px`;
      (box.firstElementChild as HTMLElement).style.width = `${L}px`;
      box.style.display = "block";
    };

    fit();
    // Links slide in from translate-x-6; refit once they've settled.
    const settle = window.setTimeout(fit, 700);
    window.addEventListener("resize", fit);
    return () => {
      window.clearTimeout(settle);
      window.removeEventListener("resize", fit);
    };
  }, [open]);

  // Close on route change.
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    navRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      id="site-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className={`fixed inset-0 z-60 ${open ? "" : "pointer-events-none"}`}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-(--duration-glide) ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        ref={panelRef}
        className={`menu-panel-fade brand-pattern absolute inset-y-0 right-0 isolate flex w-full max-w-[680px] flex-col overflow-hidden bg-forest transition-transform duration-(--duration-glide) ease-(--ease-out-soft) [--pattern-tint:rgb(255_255_255/0.06)] after:fixed after:-z-10 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex items-center justify-between py-6 pr-8 pl-8 sm:pl-[200px]">
          <Image
            src="/img/togala-logo-horizontal.png"
            alt=""
            aria-hidden
            width={1600}
            height={374}
            className="h-7 w-auto opacity-90 sm:h-9"
          />
          <div className="flex items-center gap-1.5 sm:gap-2">
            {social.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full text-bone/70 outline-none transition-colors duration-(--duration-swift) hover:bg-clay hover:text-white sm:size-10"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
            <span aria-hidden className="mx-1 h-6 w-px bg-white/15" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex size-10 items-center justify-center rounded-full border border-white/20 text-bone outline-none transition-colors duration-(--duration-swift) hover:border-clay hover:bg-clay hover:text-white sm:size-11"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div aria-hidden className="mr-8 ml-8 sm:ml-[200px] h-px bg-white/10" />

        <nav ref={navRef} aria-label="Site Menu" className="relative flex-1 py-6 pr-8 pl-8 sm:pl-[200px] [&_a:focus-visible]:outline-none [&_button:focus-visible]:outline-none">
          <ul>
            {items.map((item, i) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li
                  key={item.href}
                  style={{ transitionDelay: `${open ? 120 + i * 55 : 0}ms` }}
                  className={`transition-[opacity,transform] duration-(--duration-glide) ${
                    open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                  }`}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`-mx-3 flex items-center rounded-lg px-3 py-2.5 font-display text-[1.4rem] tracking-[0.06em] !outline-none transition-colors duration-(--duration-swift) focus-visible:text-clay sm:text-2xl ${
                      active
                        ? "bg-white/[0.06] text-clay"
                        : "text-bone hover:bg-white/[0.04] hover:text-clay"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <ul className="mb-1 grid gap-0.5 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className={`-mx-3 block rounded-md px-3 py-1.5 text-[0.8rem] font-semibold tracking-wide outline-none transition-colors duration-(--duration-swift) hover:bg-white/[0.04] hover:text-lime focus-visible:text-lime ${
                              pathname === child.href ? "text-lime" : "text-bone/55"
                            }`}
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact-us"
            onClick={onClose}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-clay px-7 py-3 text-sm font-bold tracking-[0.16em] text-white transition-colors duration-(--duration-swift) hover:bg-clay-600"
          >
            CONTACT US
          </Link>
        </nav>

        {/* Swoosh rising from the bottom-right, sized at runtime to the empty lane right of the text */}
        <div
          ref={swooshRef}
          aria-hidden
          className="pointer-events-none absolute -right-[15px] -bottom-[60px] hidden"
        >
          <img
            src="/img/togala-swoosh.svg"
            alt=""
            className="absolute top-1/2 left-1/2 h-auto max-w-none -translate-x-1/2 -translate-y-1/2"
            style={{ rotate: "-80deg" }}
          />
        </div>
      </div>
    </div>
  );
}
