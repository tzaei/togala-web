import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Contact form handler.
 *
 * Delivery is via Postmark's REST API — no SDK, just fetch. Postmark was chosen
 * over Resend because it verifies a sending domain with a single DKIM TXT
 * record, which Wix's DNS can create; Resend needs an MX record on a subdomain,
 * which Wix cannot do. See README "Contact form".
 *
 * The route stays inert until POSTMARK_SERVER_TOKEN and CONTACT_TO_EMAIL are
 * set, and returns a clear error rather than silently swallowing an enquiry.
 */

type Payload = Record<string, string>;

const REQUIRED = ["firstName", "lastName", "phone", "email", "message"] as const;

const LABELS: Record<string, string> = {
  firstName: "First name",
  lastName: "Last name",
  phone: "Phone",
  email: "Email",
  company: "Company",
  service: "Service needed",
  address: "Address",
  city: "City",
  state: "State",
  zip: "ZIP",
  timeline: "Timeline",
  message: "Message",
  newsletter: "Newsletter opt-in",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const missing = REQUIRED.filter((k) => !data[k]?.trim());
  if (missing.length) {
    return NextResponse.json(
      {
        error: `Missing required field${missing.length > 1 ? "s" : ""}: ${missing.join(", ")}.`,
      },
      { status: 400 },
    );
  }

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) {
    return NextResponse.json(
      { error: "That email address doesn't look right." },
      { status: 400 },
    );
  }

  const token = process.env.POSTMARK_SERVER_TOKEN;
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || to;

  if (!token || !to) {
    console.error(
      "[contact] POSTMARK_SERVER_TOKEN and/or CONTACT_TO_EMAIL are not set — enquiry was NOT delivered.",
      { from: data.email },
    );
    return NextResponse.json(
      { error: "The contact form isn't configured to send mail yet." },
      { status: 503 },
    );
  }

  const present = Object.entries(LABELS).filter(([key]) => data[key]?.trim());

  const html = `<div style="font-family:system-ui,-apple-system,sans-serif">
<h2 style="color:#093a22;margin:0 0 16px">New website enquiry</h2>
<table style="border-collapse:collapse;font-size:14px">${present
    .map(
      ([key, labelText]) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#2d2d2d;font-weight:700;vertical-align:top;white-space:nowrap">${labelText}</td><td style="padding:6px 0;color:#0e0e0f">${escapeHtml(
          data[key],
        ).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("")}</table></div>`;

  const text = present
    .map(([key, labelText]) => `${labelText}: ${data[key]}`)
    .join("\n");

  try {
    const res = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        "X-Postmark-Server-Token": token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        From: from,
        To: to,
        ReplyTo: data.email,
        Subject: `Website enquiry — ${data.firstName} ${data.lastName}${
          data.company ? ` (${data.company})` : ""
        }`,
        HtmlBody: html,
        TextBody: text,
        MessageStream: "outbound",
      }),
    });

    if (!res.ok) {
      /* Postmark returns a JSON body with ErrorCode + Message on failure —
         surface it in the log so misconfiguration is diagnosable. */
      const detail = await res.text();
      console.error("[contact] Postmark rejected the message:", res.status, detail);
      return NextResponse.json(
        { error: "We couldn't send that just now." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[contact] Delivery failed:", err);
    return NextResponse.json(
      { error: "We couldn't send that just now." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
