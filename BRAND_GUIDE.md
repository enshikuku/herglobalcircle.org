# H.E.R Global Circle Brand Guide

## Brand name

**H.E.R Global Circle**

H.E.R represents the organisation's three connected pillars:

- **Hope**
- **Elevate**
- **Resilience**

## Tagline

**Empowering Communities. Building Generational Impact.**

The logo also carries the supporting expression:

**Hope. Elevate. Resilience.**

## Mission and positioning

H.E.R Global Circle is a Pan-African foundation and ecosystem platform advancing mentorship, leadership, education, enterprise, wellness, humanitarian care and economic inclusion.

The organisation serves girls, boys, young women and young men by connecting people, practical support and opportunity. Its position is not that of a one-off program provider; it is a trusted circle that helps communities create sustainable, intergenerational progress.

## Brand personality

The brand should consistently feel:

- Empowering
- Warm
- Inclusive
- Elegant
- Vibrant
- Hopeful
- Growth-focused
- Human
- Trustworthy
- Accountable

Communication should be confident and clear without sounding corporate, distant, sentimental or exaggerated.

## Logo usage

The official logo is:

```text
public/branding/logo/logo.png
```

Usage rules:

- Use the supplied logo file. Do not redraw, trace, recolor or recreate the mark.
- Preserve the full circular structure, H.E.R lettering, Global Circle name and supporting tagline.
- Maintain the original aspect ratio.
- Place the logo on quiet backgrounds with enough contrast.
- On dark green surfaces, use a white or very light cream holding shape behind the supplied transparent logo when necessary for clarity.
- Keep clear space around the logo. As a practical minimum, use space equal to roughly 10% of the displayed logo width.
- Do not stretch, crop, rotate, add effects to or place text over the logo.
- Use the supplied favicon files for compact browser and device contexts rather than shrinking the full logo beyond legibility.

## Color palette

| Color | HEX | Primary use |
| --- | --- | --- |
| Teal | `#008080` | Primary actions, links, active navigation and program accents |
| Deep green | `#0D492B` | Primary text, high-trust sections, footer and strong backgrounds |
| Soft blush | `#FADBD8` | Warm section backgrounds, care-focused accents and gentle highlights |
| Gold | `#C38820` | Premium emphasis, dividers, trust accents and secondary calls to action |
| Black | `#000000` | High-contrast fallback and approved logo detail |
| White | `#FFFFFF` | Clean surfaces, reversed text and breathing space |

The implemented website also uses warm paper (`#FFFAF7`) and cream (`#F8F1E8`) as supporting backgrounds. These should remain subordinate to the official palette.

Color rules:

- Deep green and teal carry authority and action.
- Blush adds warmth but should not reduce text contrast.
- Gold is an accent, not a large default body-text color.
- Avoid visible grey UI because it is not part of the brand palette. Use blush, cream, white, deep green, teal, gold or black instead.
- Avoid unrelated gradients and colors that compete with the identity.
- Maintain WCAG-readable contrast for text and interactive controls.

## Typography

### Primary display font: Tangerine

Source files:

```text
public/branding/fonts/Tangerine/
```

Use Tangerine for:

- Short expressive phrases
- Section flourishes
- Warm editorial highlights
- Selected campaign or celebration language

Do not use Tangerine for long headings, body copy, navigation, form labels or critical donation information.

### Secondary and body font: Glacial Indifference

Source files:

```text
public/branding/fonts/Glacial_Indifference/
```

Use Glacial Indifference for:

- Main headings
- Body copy
- Navigation
- Buttons
- Form controls
- Data and impact figures
- Donation and trust messages

Typography rules:

- Prefer short, confident headings with generous line spacing.
- Keep body copy readable, direct and left aligned except in short hero or call-to-action sections.
- Use uppercase letter spacing sparingly for eyebrows and labels.
- Do not load remote Google Fonts.

## Imagery style

Approved source imagery is stored in:

```text
public/branding/images/
```

Imagery should show women and communities in meaningful activity:

- Conversations and mentorship
- Workshops and learning
- Professional participation
- Community gatherings
- Celebrations and shared joy
- Enterprise and leadership

Images should feel authentic, optimistic and lived-in. Prioritise genuine expressions, interaction and purposeful activity over posed stock photography.

Avoid:

- Generic technology or NGO stock imagery
- Images that present communities without dignity or agency
- Excessively staged scenes
- AI-looking faces or environments
- Decorative images unrelated to the adjacent message
- Heavy filters that distort skin tone or the official palette

## UI style rules

- Use editorial composition, clear hierarchy and generous white space.
- Combine image-led sections with restrained borders and occasional circular brand motifs.
- Prefer open layouts and fine divider lines over repeated card grids.
- Rounded corners may be used for photography, calls to action and focused content groups, but should not become the default container for every paragraph.
- Icons should be functional and minimal. Do not create a decorative icon wall.
- Use subtle paper texture or the brand-guide-inspired weave pattern only at low opacity.
- Avoid gradient blobs, fake testimonials, excessive badges and invented impact claims.
- Motion should be subtle, optional and respectful of reduced-motion settings.

## Button styles

### Primary button

- Teal background
- White text
- Fully rounded shape
- Bold Glacial Indifference
- Clear hover and keyboard focus state

Use for the main action on light backgrounds, including Donate, Contact and Join.

### Secondary button

- Deep green background with white text, or white background with deep green text
- Visible border when placed on a light surface
- Same size and radius family as the primary button

### Gold button

- Gold background with deep green text
- Reserved for premium emphasis or important actions on deep green surfaces

Button copy should be specific. Prefer “Support Our Work” or “Start a Conversation” over vague labels such as “Learn More” when the destination can be named.

## Layout rules

- Use a maximum content width of approximately 1280px.
- Maintain comfortable page gutters on mobile, tablet and desktop.
- Keep hero sections focused on one promise and no more than three actions.
- Use responsive image crops that keep faces and gestures visible.
- Alternate section rhythm: image-led, editorial text, impact figures and call-to-action sections.
- Do not place several dense card grids back to back.
- Keep navigation labels stable across desktop, mobile and footer contexts.
- Keep Pillars, H.E.R Global Circle Community and H.E.R Enterprise visible under About Us.
- Ensure no horizontal overflow at 320px viewport width.
- Static routes must remain compatible with Next.js export and cPanel directory hosting.

## Donation trust guidelines

Donation communication must be precise and verifiable.

- Do not show a live payment button until its Paystack URL and redirect destination are verified.
- Do not collect donor details in a form that does not submit to a secure system.
- Do not claim that funds were received based only on arrival at a redirect page.
- Receipt pages should state that the process was received and that payment confirmation is handled by the donation platform.
- Display `info@herglobalcircle.org` for payment support.
- Use HTTPS Paystack links only.
- Keep each donation category mapped to a clearly named success page.
- Do not publish unverified percentages, beneficiary counts, partner logos or financial claims.
- Explain how gifts support programs in plain language without guaranteeing outcomes that cannot be substantiated.

## Maintaining consistency

Future developers should:

1. Reuse the tokens and font definitions in `src/app/globals.css` and `tailwind.config.ts`.
2. Use the official assets under `public/branding/`.
3. Keep donation categories and Paystack URLs centralised in `src/lib/donations.ts`.
4. Preserve the static-export constraints in `next.config.mjs`.
5. Run `npm run lint` and `npm run build` before deployment.
6. Verify the generated `out/` folder, internal links, images, local fonts, favicon and donation redirect pages.
7. Update this guide when the official brand guideline or approved asset set changes.
8. Protect the tone: warm and hopeful, but never vague, inflated or misleading.
