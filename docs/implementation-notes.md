# Implementation Notes

## Design Read

Reading this as: a professional experience portfolio for technical recruiters and engineering leaders, with a calm technical executive language, static HTML/CSS, system typography, realistic public-safe technical imagery, and restrained motion.

## Architecture

- Static HTML, CSS, and vanilla JavaScript.
- No production npm dependencies.
- `site/` is the only deployed directory.
- Relative asset paths support GitHub Pages project-site hosting at `https://sahilsandhu-spec.github.io/sahil_portfolio/`.

## Visual Direction

The design now uses generated, public-safe, realistic technical imagery rather than the supplied example hero PNGs. The visual world remains cool off-white canvas, deep navy ink, electric blue emphasis, subtle technical surfaces, and compact navigation.

The imagery deliberately avoids employer-specific product shots, customer names, proprietary diagrams, readable UI text, and brand markings. Education and publication marks are local badge-style identifiers rather than downloaded official logos.

## Installed UI Skill Guidance Applied

- `impeccable`: product framing, craft floor, privacy-safe UI scope, and production polish standards.
- `ui-ux-pro-max`: strong landing-page hierarchy, high-contrast technical hero treatment, and responsive design-system review.
- Recently installed taste/design skills in `.agents/skills`: used as supplemental guidance for visual restraint, motion discipline, spacing, hierarchy, and interaction polish. Non-UI or framework-dependent guidance was not forced into the site because the PRD requires lightweight static HTML/CSS/vanilla JS.

## Content Decisions

The PRD contains strong role positioning, metrics, and public-safe case-study titles. The user supplied the public contact email and LinkedIn URL on 7 August 2026. The latest resume PDF was then supplied as `docs/SahilSandhu.pdf` and used for exact Exicom titles and dates, education details, publication details, phone, selected technical programs, and skill details.

The resume lists `sahilsandhu@alumni.iitm.ac.in`; the site contact remains `sahilsandhu397@gmail.com` because the user explicitly supplied that address for the portfolio.

## Accessibility

Implemented semantic landmarks, skip link, logical headings, visible focus states, mobile menu keyboard support, Escape handling, accessible theme toggle, descriptive links, reduced-motion behavior, and sufficient contrast-focused tokens.

## Motion

Motion is limited to:

- Reveal-on-scroll using IntersectionObserver.
- Metric count-up once when the metric strip enters the viewport.
- Hover and press feedback on links, cards, and buttons.

Reduced-motion users get immediate content and no transform-based reveal movement.
