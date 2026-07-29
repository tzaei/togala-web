"use client";

import { useState } from "react";
import ArrowIcon from "./ArrowIcon";
import { servicePages } from "@/data/site";

type Status = "idle" | "sending" | "sent" | "error";

/* Compact field styling: the label sits tight above its input and the inputs
   are shorter, so the whole form reads as one block rather than a long column
   of widely spaced rows. */
const field =
  "w-full rounded-lg border border-ink/15 bg-white px-3.5 py-2.5 text-[0.9rem] text-ink placeholder:text-ink/35 transition-colors duration-(--duration-swift) focus:border-clay focus:outline-none";
const label = "mb-1 block text-[0.65rem] font-bold tracking-[0.16em] text-ink-700";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || `Request failed (${res.status})`);
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-lime/40 bg-lime/10 p-10 text-center">
        <h2 className="display-eyebrow text-[1.75rem] text-forest">thank you</h2>
        <p className="t-lead mx-auto mt-3 max-w-[46ch] text-ink-700">
          Your enquiry is with us. We&rsquo;ll connect you with the right
          director and outline next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Who you are */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="firstName">
            FIRST NAME *
          </label>
          <input id="firstName" name="firstName" required autoComplete="given-name" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="lastName">
            LAST NAME *
          </label>
          <input id="lastName" name="lastName" required autoComplete="family-name" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            PHONE *
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="email">
            EMAIL *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="company">
            COMPANY
          </label>
          <input id="company" name="company" autoComplete="organization" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="service">
            SERVICE NEEDED
          </label>
          <select id="service" name="service" defaultValue="" className={field}>
            <option value="">Select…</option>
            {servicePages.map((s) => (
              <option key={s.href} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other / not sure">Other / not sure</option>
          </select>
        </div>
      </div>

      {/* Property address — one labelled block, four inputs on two rows */}
      <div>
        <span className={label}>PROPERTY ADDRESS</span>
        <div className="grid gap-3 sm:grid-cols-[2fr_1fr]">
          <input name="address" placeholder="Street" autoComplete="street-address" className={field} />
          <input name="city" placeholder="City" autoComplete="address-level2" className={field} />
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_1fr_2fr]">
          <input name="state" placeholder="State" autoComplete="address-level1" className={field} />
          <input name="zip" placeholder="ZIP" autoComplete="postal-code" className={field} />
          <input name="timeline" placeholder="Timeline / start date" className={field} />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="message">
          TELL US ABOUT YOUR PROJECT *
        </label>
        <textarea id="message" name="message" required rows={4} className={`${field} resize-y`} />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-lg border border-clay/50 bg-clay/10 px-3.5 py-2.5 text-[0.85rem] text-ink">
          {error} You can also reach us directly by email.
        </p>
      )}

      {/* Opt-in and submit share a row rather than stacking */}
      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-start gap-2.5 text-[0.85rem] text-ink-700">
          <input
            type="checkbox"
            name="newsletter"
            value="yes"
            className="mt-0.5 size-4 shrink-0 rounded border-ink/30 accent-clay"
          />
          Subscribe me to your newsletter.
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-clay px-8 py-3.5 text-sm font-bold tracking-[0.16em] text-white transition-colors duration-(--duration-swift) hover:bg-clay-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "SENDING…" : "SUBMIT"}
          {status !== "sending" && <ArrowIcon />}
        </button>
      </div>
    </form>
  );
}
