# Togala Contractor Builder — website

Rebuild of `togalacb.com`, migrated off Wix onto Next.js.

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 (theme tokens in `src/app/globals.css`)
- **Output:** fully static — every route prerenders, no server runtime required

## Run it

```bash
npm run dev
```

Dev server: <http://localhost:3000> (the checked-in `.claude/launch.json` uses port 3100 to
avoid colliding with another local project).

```bash
npm run build && npm start
```

## Project layout

```
src/
  app/
    page.tsx                    homepage
    layout.tsx                  fonts, metadata, header/footer chrome
    globals.css                 brand tokens, display font, reveal animation
    sitemap.ts  robots.ts  not-found.tsx
    <route>/page.tsx            one folder per interior page
  components/
    SiteHeader / MenuOverlay    sticky header + slide-out site menu
    Hero                        video hero
    SectionHeading              engraved eyebrow + green sub-headline unit
    ServiceCard                 photo card used on home + /services
    PageShell                   interior page banner (+ MigrationNotice)
    Reveal                      scroll-triggered fade/lift
    SocialIcons / ProcessIcons  inline SVG
  data/site.ts                  ALL copy, nav, service cards, process steps
public/
  img/                          logos, swooshes, texture, service photos
  video/hero.mp4                homepage hero loop
  fonts/togala-display.woff2    engraved display face
```

**Edit copy in `src/data/site.ts`, not in the components.** Nav, footer, sitemap and the
service grids all read from it, so adding a service page in one place updates everywhere.

## Brand tokens

Defined as Tailwind theme colors in `globals.css`, sampled from the Wix site:

| Token     | Hex       | Used for                          |
| --------- | --------- | --------------------------------- |
| `forest`  | `#093A22` | header, deep green section field  |
| `ink`     | `#0E0E0F` | near-black panels, footer         |
| `clay`    | `#F36E48` | signature orange — CTAs, eyebrows |
| `lime`    | `#00B042` | bright accent sub-headlines       |
| `moss`    | `#2B844D` | "NATIONWIDE"                      |
| `bone`    | `#F5F6F6` | off-white page/card background    |

Type: **Montserrat** for everything but display; the engraved caps use system
`Copperplate` first (native on macOS/iOS), then the self-hosted
`public/fonts/togala-display.woff2`, then **Cinzel** from Google Fonts as the
cross-platform fallback.

## Contact form

`/contact-us` posts to `src/app/api/contact/route.ts`, which delivers via Postmark's REST
API (no SDK — just `fetch`). It validates required fields and email format, and **returns a
clear 503 rather than silently dropping an enquiry** until you set:

```
POSTMARK_SERVER_TOKEN=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
CONTACT_TO_EMAIL=info@togalacb.com
CONTACT_FROM_EMAIL=info@togalacb.com    # optional; falls back to CONTACT_TO_EMAIL
```

Put these in `.env.local` for development and in your host's environment settings for
production. Until they're set the form shows an error to the visitor — deliberately, so a
broken form is never mistaken for a working one.

### Why Postmark and not Resend

Resend verifies a sending domain with an **MX record on a subdomain**
(`send.togalacb.com`). Wix's DNS cannot create MX records on subdomains, and
`togalacb.com` is registered at Squarespace while its DNS is hosted by Wix — so moving to
Cloudflare would need registrar access that isn't currently available.

Postmark verifies with a **single DKIM TXT record**, which Wix's DNS *can* create. Swapping
providers was a ten-line change to one file; moving DNS was not an option. If registrar
access turns up later, see `DNS-MIGRATION.md` — but there is no need to switch back.

Note this is the site's only dynamic route; everything else prerenders. The Wix form also
had two optional file-upload fields, which are **not** carried over — they need object
storage and a virus-scanning story. Ask people to email attachments for now.

## Outstanding items

1. **Client logos — "who we serve".** The Wix gallery widget kept its images out of the
   public page markup, so those logo files could not be pulled across. Drop them in
   `public/img/clients/` and list them in `clientLogos` in `src/data/site.ts`; the section
   swaps automatically from the audience-tile fallback to a logo marquee.
2. **Postmark account approval — do this before launch.** The account is in test mode. The
   100-email limit is a **lifetime total for the account**, not a monthly allowance: once it
   is reached, sending simply stops and enquiries start failing. Test mode also restricts
   sending to verified domains only, so any future "thanks, we got your message" auto-reply
   to the visitor would be rejected. Approval is free — click **Request approval** in
   Postmark. Verified working on 28 Jul 2026; 2 of the 100 used by testing.
3. **File uploads on the contact form** are not carried over from Wix (see above).
4. **Display font license.** `public/fonts/togala-display.woff2` is the face that was uploaded
   to the Wix account. Confirm the license covers self-hosted webfont use on the new host — if
   it doesn't, delete the file; the stack already falls back to system Copperplate and Cinzel.
5. **DNS cutover.** Point `togalacb.com` at the new host once the interior pages are filled in.
   `src/data/site.ts` → `site.url` feeds canonical URLs, OpenGraph and the sitemap.

## Deploying

Any static host works (`next build` emits a fully prerendered app). Vercel and Netlify both
need zero configuration. Set no environment variables — there are none yet.
