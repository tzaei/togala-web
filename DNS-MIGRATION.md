# DNS migration: Wix → Cloudflare

> **STATUS: PAUSED — not required.**
>
> `togalacb.com` is registered at **Squarespace Domains**, with DNS hosted by Wix.
> Nameservers can only be changed at the registrar, and Squarespace access isn't
> currently available — so the Cloudflare move can't proceed.
>
> It also turned out to be unnecessary. The contact form now uses **Postmark**, which
> verifies with a single DKIM TXT record that Wix's DNS can create. See README
> "Contact form".
>
> A Cloudflare zone does nothing until nameservers point at it, so anything already set
> up there is inert and can be left or deleted.
>
> **Still worth chasing:** whoever holds the Squarespace login controls the domain. If
> that account lapses, `togalacb.com` and the company email go with it. Tracking down
> ownership is a business-continuity task independent of this project.
>
> This document remains a complete, accurate inventory of the domain's DNS — useful for
> the launch cutover, when the website records need repointing at the new host.

Captured from live DNS on 28 July 2026, before any changes.

**Why:** Wix's DNS cannot create MX records on a subdomain, which Resend needs for the
contact form. DNS also has to move before the new site can go live, so this is work that
was coming regardless.

**The one thing that matters:** the MX and SPF rows below are your live Microsoft 365
email. If those don't make it into Cloudflare, mail stops arriving. Everything else is
recoverable at leisure.

---

## Records as they exist today

| # | Type | Name | Value | Priority | What it does |
|---|------|------|-------|----------|--------------|
| 1 | A | `@` | `185.230.63.107` | — | Website (Wix) |
| 2 | A | `@` | `185.230.63.171` | — | Website (Wix) |
| 3 | A | `@` | `185.230.63.186` | — | Website (Wix) |
| 4 | CNAME | `www` | `cdn1.wixdns.net` | — | www → website (Wix) |
| 5 | **MX** | `@` | `togalacb-com.mail.protection.outlook.com` | **0** | **Company email — CRITICAL** |
| 6 | **TXT** | `@` | `v=spf1 include:spf.protection.outlook.com -all` | — | **Email anti-spoofing — CRITICAL** |
| 7 | CNAME | `autodiscover` | `autodiscover.outlook.com` | — | Outlook auto-setup — important |
| 8 | TXT | `@` | `linkedin-site-verification=49f4291e-d5cd-4734-a446-0eacd439c65c` | — | LinkedIn page verification |
| 9 | CNAME | `_dmarc` | `_dmarc.wixemails.com` | — | DMARC, currently delegated to Wix |
| 10 | A | `webmail` | `192.185.21.142` | — | Webmail access — keep DNS only |
| 11 | CNAME | `s1._domainkey` | `s1._domainkey.togalacb.com.s019.ascendbywix.com` | — | Wix Ascend email signing |
| 12 | CNAME | `s2._domainkey` | `s2._domainkey.togalacb.com.s019.ascendbywix.com` | — | Wix Ascend email signing |

Rows 10–12 were found by Cloudflare's scan, not the initial sweep. Cloudflare's import
totals (4 A / 5 CNAME / 1 MX / 2 TXT) match this table exactly — nothing was lost.

### Proxy status: ALL NINE proxiable records must be "DNS only" (grey cloud)

Cloudflare defaults every eligible record to Proxied. On this domain nothing should ever
be proxied — Cloudflare is acting purely as a DNS provider, not a CDN or firewall.

| Record | Consequence if left proxied |
|---|---|
| the three root `A` records | live site breaks |
| `www` | live site breaks |
| `autodiscover` | Outlook auto-configuration stops working for staff |
| `webmail` | webmail access breaks |
| `_dmarc` | DMARC policy lookup fails |
| `s1._domainkey` | DKIM signature check fails |
| `s2._domainkey` | DKIM signature check fails |

The last three matter more than they look. A proxied CNAME resolves to Cloudflare IP
addresses instead of following through to the real target, so mail servers checking DKIM
or DMARC get an IP where they expect a TXT record. Outbound mail then reads as
unauthenticated — a direct route to spam folders.

MX and TXT records cannot be proxied at all, so mail *delivery* is unaffected either way.

**Rule of thumb: if a record on this domain is orange, turn it grey.**

Note on #9: it resolves to `v=DMARC1; p=none; rua=mailto:dmarc_agg@vali.email`. Since it
points at Wix infrastructure, replace it after the migration with your own record:

```
Type: TXT   Name: _dmarc   Value: v=DMARC1; p=none; rua=mailto:info@togalacb.com
```

---

## Order of operations

1. **Create the Cloudflare account** and add `togalacb.com`. Cloudflare scans and imports
   existing records automatically.
2. **Check the imported list against the table above.** Rows 5, 6 and 7 are the ones to
   confirm by eye. Add anything missing before continuing.
3. **Set the Wix A records and www CNAME to "DNS only"** (grey cloud, not orange) in
   Cloudflare. Proxying Wix's servers through Cloudflare can break the current site.
4. **Copy Cloudflare's two nameservers** into Wix → Domains → Advanced → Nameservers.
5. **Wait.** Usually under an hour, occasionally up to 24. Email and site keep working —
   the answers aren't changing, only who gives them.
6. **Verify** — ask Claude to re-run the DNS check, or use dnschecker.org.
7. **Then** add Resend's records in Cloudflare and hit Verify.
8. **At launch**, swap rows 1–4 to point at the new host.

## Rollback

Put Wix's nameservers back and everything returns to how it is now:

```
ns10.wixdns.net
ns11.wixdns.net
```

## Verify at any point

```bash
dig +short MX togalacb.com          # must show ...mail.protection.outlook.com
dig +short TXT togalacb.com         # must include v=spf1 ...outlook.com
dig +short NS togalacb.com          # shows who is currently authoritative
```
