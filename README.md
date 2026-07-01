# H.E.R Global Circle Website

A production-ready, frontend-only website for H.E.R Global Circle. The project uses Next.js App Router and exports plain static HTML, CSS, JavaScript and image files for cPanel-compatible hosting.

## Tech stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS
- Lucide icons
- Local Tangerine and Glacial Indifference font files
- Static export with no database, API routes, authentication or server actions

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Lint

```bash
npm run lint
```

## Build the static website

```bash
npm run build
```

Next.js writes the deployable website to:

```text
out/
```

To preview the exported files locally:

```bash
npm run start
```

## Deploy to cPanel, Namecheap or HostAfrica

1. Run `npm install` if dependencies are not installed.
2. Run `npm run build`.
3. Open the generated `out/` folder.
4. Upload the **contents inside `out/`**, not the `out` folder itself, to the domain's `public_html` directory.
5. If replacing an existing site, back up the current `public_html` files first.
6. Confirm that `index.html`, route folders, `_next/`, `branding/`, `robots.txt` and `sitemap.xml` are present in `public_html`.
7. Open the live site and test navigation, images, fonts, favicon and every donation redirect URL.

The project uses `trailingSlash: true`, so routes export as directories containing `index.html`, which works well on Apache and LiteSpeed cPanel hosting.

No Node.js server is required after the contents of `out/` are uploaded.

## Branding assets

Official source assets are stored in:

```text
public/branding/
```

This includes:

- `logo/` — official H.E.R Global Circle logo
- `images/` — approved brand imagery
- `fonts/` — Tangerine and Glacial Indifference font files
- `favicon/` — browser and mobile icons
- `H.E.R Global Circle Guidelines .pptx` — source brand guideline deck

Do not rename or delete these files without updating every reference. See [BRAND_GUIDE.md](./BRAND_GUIDE.md) for implementation rules.

## Site structure

Main navigation is:

- Home
- About Us
- Events
- Donate
- Contact

Pillars now live under `About Us` at `/about/`. H.E.R Global Circle Community and H.E.R Enterprise also appear under About Us, and the humanitarian initiative page is now:

```text
/sharon-mumo-initiative/
```

Partners are not shown in the top navigation. Partnership calls to action remain in footer and contact areas.

Internal navigation should use exported folder routes such as `/about/`, `/events/`, `/donate/`, `/contact/` and `/sharon-mumo-initiative/`. Do not use hash anchors; the pillars are visible directly on the About Us page.

Legacy routes such as `/pillars/`, `/partners/`, `/programs/`, `/impact/`, `/enterprise/`, `/mama-mumo/` and `/mama-mumo-initiative/` are kept only as simple static pointer pages so old visits do not break.

Use the brand palette for visible UI surfaces: teal, deep green, blush, gold, black, white, warm paper and cream. Do not use grey UI blocks or grey Tailwind color families.

## Donation setup

The site does not currently collect or process payments. Donation categories and Paystack placeholders are maintained in:

```text
src/lib/donations.ts
```

Each category currently has:

```ts
paystackUrl: null
```

When a live Paystack payment page is available:

1. Replace `null` with the verified HTTPS Paystack payment URL.
2. Configure the matching success redirect URL in Paystack.
3. Run `npm run build`.
4. Test the Paystack flow in the relevant environment.
5. Confirm that the redirect page does not imply payment confirmation beyond what Paystack has actually processed.

## Paystack success redirect mapping

| Donation category | Success redirect path |
| --- | --- |
| General Foundation Support | `/donation-received/general-foundation-support/` |
| The Sharon Mumo Initiative | `/donation-received/sharon-mumo-initiative/` |
| Mentorship & Youth Empowerment | `/donation-received/mentorship-youth-empowerment/` |
| Education Support | `/donation-received/education-support/` |
| Women & Youth Enterprise Support | `/donation-received/women-youth-enterprise-support/` |
| Wellness & Resilience Programs | `/donation-received/wellness-resilience-programs/` |

The generic fallback page is:

```text
/donation-received/
```

For production Paystack settings, use the full HTTPS URL, for example:

```text
https://herglobalcircle.org/donation-received/general-foundation-support/
```

These pages deliberately state that the donation process was received and that confirmation is handled by the donation platform. They do not independently claim that money was received.

## Static contact form

The contact form does not transmit or store data on the website. It prepares a message and opens the visitor's configured email application addressed to:

```text
info@herglobalcircle.org
```
