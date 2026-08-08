# Implementation Notes

## Design Read

Reading this as: a professional experience portfolio for technical recruiters and engineering leaders, with cinematic technical storytelling around evidence-led content, static HTML/CSS, system typography, realistic public-safe imagery, and one memorable native-scroll interaction.

## Architecture

- Static HTML, CSS, and vanilla JavaScript.
- No production npm dependencies.
- `site/` is the only deployed directory.
- Relative asset paths support GitHub Pages project-site hosting at `https://sahilsandhu-spec.github.io/sahil_portfolio/`.

## Visual Direction

The design uses generated, public-safe, realistic technical imagery rather than the supplied example hero PNGs. Deep-navy validation-lab scenes frame the full-viewport hero, impact rail, operating chapter, and contact close; cool off-white evidence surfaces, electric-blue signals, editorial rows, and large image-led program cases keep the long-form portfolio readable.

The imagery deliberately avoids employer-specific product shots, customer names, proprietary diagrams, readable UI text, and brand markings. Education and publication cards use local copies of actual IIT Madras, ISTC/CSIR, and IGI Global logo assets only for factual identification of Sahil's credentials.

## Installed UI Skill Guidance Applied

- `impeccable`: product framing, craft floor, privacy-safe UI scope, and production polish standards.
- `ui-ux-pro-max`: strong landing-page hierarchy, high-contrast technical hero treatment, and responsive design-system review.
- Recently installed taste/design skills in `.agents/skills`: used as supplemental guidance for visual restraint, motion discipline, spacing, hierarchy, and interaction polish. Non-UI or framework-dependent guidance was not forced into the site because the PRD requires lightweight static HTML/CSS/vanilla JS.

## Content Decisions

The PRD contains strong role positioning, metrics, and public-safe case-study titles. The user supplied the public contact email and LinkedIn URL on 7 August 2026. The latest resume PDF was then supplied as `docs/SahilSandhu.pdf` and used for exact Exicom titles and dates, education details, publication details, phone, selected technical programs, and skill details.

The resume lists `sahilsandhu@alumni.iitm.ac.in`; the site contact remains `sahilsandhu397@gmail.com` because the user explicitly supplied that address for the portfolio.

## Accessibility

Implemented semantic landmarks, skip link, logical headings, visible focus states, inert closed mobile navigation, focus containment/restoration, Escape handling, accessible theme toggle, descriptive links, reduced-motion and no-JavaScript fallbacks, and dedicated contrast-safe action/text tokens.

## Motion

Motion is limited to:

- A short first-viewport entrance and slow lab-image crop shift.
- A page-progress line updated through a throttled animation frame.
- One scroll-linked operating-stage scale/crop transition using CSS custom properties.
- Metric count-up once when the evidence rail enters the viewport.
- Image-crop, hover, and press feedback on real content and controls.

Native scrolling is never intercepted. Reduced-motion users receive the complete static composition immediately, and all general content remains visible even if the external JavaScript fails.
