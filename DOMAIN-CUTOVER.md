# Pointing togalacb.com at the new website

**For whoever has access to the Squarespace account that manages `togalacb.com`.**

This is a DNS change only. The domain stays registered with Squarespace, under the same
account, with the same owner. Nothing is transferred and nothing changes hands. Two
records are updated so the domain serves the new website instead of the Wix one.

It takes about five minutes and is reversible in the same five minutes.

---

## What changes — exactly two things

| # | Type  | Host / Name | Current value                | Change to |
|---|-------|-------------|------------------------------|-----------|
| 1 | A     | `@`         | `185.230.63.107` *(and .171, .186)* | **_new host IP — supplied at launch_** |
| 2 | CNAME | `www`       | `cdn1.wixdns.net`            | **_new host target — supplied at launch_** |

There are currently **three** A records on `@` (`185.230.63.107`, `185.230.63.171`,
`185.230.63.186`). All three are Wix. Delete all three and add the single new one.

---

## What must NOT change

**These are the company's Microsoft 365 email. Deleting or editing any of them stops
email arriving.** They have nothing to do with the website.

| Type  | Host             | Value                                        | What it does |
|-------|------------------|----------------------------------------------|--------------|
| MX    | `@`              | `togalacb-com.mail.protection.outlook.com`    | **Delivers all company email** |
| TXT   | `@`              | `v=spf1 include:spf.protection.outlook.com -all` | Stops our mail being marked as spam |
| CNAME | `autodiscover`   | `autodiscover.outlook.com`                    | Lets Outlook configure itself on new devices |
| A     | `webmail`        | `192.185.21.142`                              | Webmail access |
| TXT   | `@`              | `linkedin-site-verification=49f4291e-…`       | Verifies our LinkedIn page |
| CNAME | `_dmarc`         | `_dmarc.wixemails.com`                        | Email authentication |
| CNAME | `s1._domainkey`  | `s1._domainkey.togalacb.com.s019.ascendbywix.com` | Email signing |
| CNAME | `s2._domainkey`  | `s2._domainkey.togalacb.com.s019.ascendbywix.com` | Email signing |

**Rule of thumb: if the record is not one of the two in the table above, leave it alone.**

---

## Steps in Squarespace

1. Sign in at `account.squarespace.com`
2. **Domains** → **togalacb.com** → **DNS** / **DNS Settings**
3. Find the **A records** for host `@` pointing at `185.230.63.x`. Delete all three.
4. Add one A record: host `@`, value = the new IP supplied at launch.
5. Find the **CNAME** for host `www` pointing at `cdn1.wixdns.net`. Edit its value to the
   new target supplied at launch.
6. Save.

Do not change nameservers. Do not unlock or transfer the domain. Neither is needed.

---

## What to expect

- Most visitors see the new site within **15–60 minutes**; some ISPs can take up to 24 hours.
- During that window some people see the old site and some the new. Both work — this is
  normal DNS propagation, not a fault.
- **Email is unaffected throughout**, because none of the mail records are touched.

## If anything looks wrong — rollback

Put the original values back and everything returns to how it is today:

- A record, host `@` → `185.230.63.107`, `185.230.63.171`, `185.230.63.186`
- CNAME, host `www` → `cdn1.wixdns.net`

Same propagation delay applies in reverse.

---

## Also worth doing

Add a second person to the Squarespace account with access to domain settings. At the
moment one person is the only route to changing DNS for both the website and company
email. If that account becomes unreachable, so does the domain.

---

*Captured from live DNS on 29 July 2026. Full record inventory in `DNS-MIGRATION.md`.*
