"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { social } from "@/data/site";
import { socialIcons } from "./SocialIcons";
import ArrowIcon from "./ArrowIcon";

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
  const pathname = usePathname();

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
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
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
        className={`brand-pattern absolute inset-y-0 right-0 isolate flex w-full max-w-xl flex-col overflow-y-auto bg-forest transition-transform duration-(--duration-glide) ease-(--ease-out-soft) [--pattern-tint:rgb(255_255_255/0.06)] after:fixed after:-z-10 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex items-center justify-between px-8 py-7">
          <Image
            src="/img/togala-logo-horizontal.png"
            alt=""
            aria-hidden
            width={1600}
            height={374}
            className="h-9 w-auto opacity-90"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex size-11 items-center justify-center rounded-full border border-white/20 text-bone transition-colors duration-(--duration-swift) hover:border-clay hover:bg-clay hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav aria-label="Site Menu" className="relative flex-1 px-8 pb-10">
          <ul className="space-y-1">
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
                    className={`group flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-3xl tracking-[0.06em] transition-colors duration-(--duration-swift) sm:text-4xl ${
                      active ? "text-clay" : "text-bone hover:text-clay"
                    }`}
                  >
                    <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-lime/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                    <ArrowIcon className="ml-auto size-5 self-center text-clay opacity-0 transition-[transform,opacity] group-hover:opacity-100" />
                  </Link>

                  {item.children && (
                    <ul className="mt-3 mb-5 grid gap-2 pl-10">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className={`block text-sm font-semibold tracking-wide transition-colors duration-(--duration-swift) hover:text-lime ${
                              pathname === child.href ? "text-lime" : "text-bone/70"
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

          <div className="mt-10 flex items-center gap-3">
            {social.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-11 items-center justify-center rounded-full border border-white/15 text-bone/80 transition-colors duration-(--duration-swift) hover:border-clay hover:bg-clay hover:text-white"
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>

          <Link
            href="/contact-us"
            onClick={onClose}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-clay px-7 py-3.5 text-sm font-bold tracking-[0.16em] text-white transition-colors duration-(--duration-swift) hover:bg-clay-600"
          >
            CONTACT US
          </Link>
        </nav>
      </div>
    </div>
  );
}
