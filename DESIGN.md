# Design System: Sahil Sandhu Portfolio

## 1. Visual Theme & Atmosphere

A calm technical executive portfolio with an evidence-led interface language. The atmosphere is cool, precise, and premium, borrowing from real validation labs and engineering program dashboards without becoming a fake dashboard. Variance is moderate: asymmetric hero, realistic technical imagery, and varied section rhythms, but every section stays recruiter-readable.

## 2. Color Palette & Roles

- **Cool Canvas** (`#f4f7fb`) - Primary light background.
- **White Surface** (`#ffffff`) - Elevated cards and navigation.
- **Navy Ink** (`#111827`) - Primary text.
- **Slate Signal** (`#465873`) - Supporting text.
- **Electric Blue** (`#3157f6`) - Primary CTA, links, active states, and focus rings.
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

- **Buttons:** Rounded actions with explicit hover, focus, and press states. Primary buttons use Electric Blue with white text. Secondary buttons use transparent surfaces with visible borders.
- **Cards:** Used only for evidence, program cases, credentials, and contact modules. Cards use soft technical radii, hairline borders, and low-opacity, blue-tinted shadows.
- **Navigation:** Floating, compact, translucent surface with one-line desktop layout and a full-screen mobile menu.
- **Metrics:** Tabular numbers, terse labels, and explanatory context nearby.
- **Program Cards:** Consistent Challenge, Ownership, Approach, Technical scope, Program scope, and Outcome structure.

## 5. Layout Principles

The layout follows a responsive grid with a maximum content width near 1180px. The hero is left-weighted with a right-side realistic validation-lab visual. Sections vary by rhythm: metric strip, narrative overview, realistic domain imagery, asymmetric program grid, timeline, operating model, grouped capabilities, credentials, and contact close. Mobile collapses to a strict single column.

## 6. Motion & Interaction

Motion is subtle and purposeful: reveal on scroll for scan order, short hover/press feedback for controls, and one metric count-up when visible. CSS and IntersectionObserver are used only for transform and opacity motion. Reduced-motion users get immediate content and opacity-only transitions.

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
