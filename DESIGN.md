# Design System: Sahil Sandhu Portfolio

## 1. Visual Theme & Atmosphere

A cinematic technical executive portfolio with an evidence-led interface language. The opening and operating-model chapter feel like entering a validation lab under controlled lighting; the evidence sections return to cool, precise reading surfaces. Large imagery, editorial type, and changes in section scale create momentum without turning the portfolio into a fake dashboard or an animation demo.

## 2. Color Palette & Roles

- **Cool Canvas** (`#f4f7fb`) - Primary light background.
- **White Surface** (`#ffffff`) - Light-theme evidence and credential surfaces.
- **Navy Ink** (`#111827`) - Primary text.
- **Slate Signal** (`#465873`) - Supporting text.
- **Electric Blue** (`#3157f6`) - Primary CTA, links, active states, progress, and focus rings.
- **Technical Teal** (`#0d9488`) - Secondary proof accents used sparingly.
- **Deep Navy** (`#07111f`) - Dark theme background.
- **Panel Navy** (`#0d1b2e`) - Dark theme elevated surfaces.
- **Hairline** (`#d9e2ef`) - Structural borders.

One accent family carries the page: blue is the action color, teal is reserved for proof and status.

## 3. Typography Rules

- **Display:** `Inter`, `ui-sans-serif`, `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `sans-serif`; tight tracking, controlled `clamp()` scale, weight-driven hierarchy.
- **Body:** Same system stack, 16px base, relaxed 1.65 leading, 65-75ch measure.
- **Mono:** `ui-monospace`, `SFMono-Regular`, `Menlo`, `Consolas`, monospace for metrics, compact labels, and data-like fragments.
- Headings use concise, factual language. No decorative section numbering, no poetic labels, no gradient text.

## 4. Component Styling

- **Buttons:** Rounded actions with explicit hover, focus, and press states. Primary buttons use a dedicated high-contrast blue token with white text. Secondary buttons use transparent surfaces with visible borders.
- **Containers:** Borders define evidence and credential surfaces; shadows are reserved for the fixed navigation. Large imagery and open editorial rows replace repeated card walls.
- **Navigation:** Floating, compact, deep-navy surface with four recruiter-critical anchors, Resume and Theme utilities, active-section state, and an inert full-screen mobile menu.
- **Metrics:** Tabular numbers in an open evidence rail, with terse labels and explanatory context nearby.
- **Program Cases:** Large alternating media-and-evidence compositions that keep category, scale, technical scope, ownership, and outcome visible without hover.

## 5. Layout Principles

The layout follows a responsive grid with a maximum content width near 1180px. The hero is a full-viewport lab scene with a left-weighted claim and a four-stage delivery sequence. Sections vary deliberately: open evidence rail, narrative overview, asymmetric domain mosaic, alternating program cases, editorial timeline, full-viewport operating chapter, grouped capabilities, credentials, and a dark contact close. Mobile collapses to a strict single column and removes sticky staging.

## 6. Motion & Interaction

Motion is subtle and purposeful: a short hero entrance, one scroll-linked operating-model expansion, a page-progress line, metric count-up, and crop feedback on real imagery. Native scrolling remains untouched. Vanilla JavaScript updates custom properties through one throttled animation frame; reduced-motion users receive the complete static composition immediately.

## 7. Anti-Patterns

- No emojis.
- No remote fonts.
- No external JavaScript or CSS libraries.
- No generic AI-purple glow.
- No fake dashboards or decorative charts.
- No unsupported metrics, customers, employers, dates, certifications, or education details.
- No contact form.
- No hidden tracking.
- No section-number eyebrows.
- No repeated identical card rows as the page structure.
- No blocking loader, custom cursor, WebGL, smooth-scroll interception, or hover-only evidence.
