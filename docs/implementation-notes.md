# Implementation Notes

## Design Read

Reading this as: a professional experience portfolio for technical recruiters and engineering leaders, with a calm technical executive language, leaning toward static HTML/CSS, system typography, supplied hero imagery, and restrained motion.

## Architecture

- Static HTML, CSS, and vanilla JavaScript.
- No production npm dependencies.
- `site/` is the only deployed directory.
- Relative asset paths support GitHub Pages project-site hosting at `https://sahilsandhu-spec.github.io/sahil_portfolio/`.

## Visual Direction

The design extends the supplied desktop and mobile hero PNGs: cool off-white canvas, deep navy ink, electric blue emphasis, subtle grid texture, glass-like technical surfaces, and compact navigation.

The site deliberately avoids fake dashboards. The program operating model visual is a conceptual architecture diagram based on PRD content, not a product screenshot or employer artifact.

## Installed UI Skill Guidance Applied

- `impeccable`: product framing, craft floor, privacy-safe UI scope, and production polish standards.
- `ui-ux-pro-max`: strong landing-page hierarchy, high-contrast technical hero treatment, and responsive design-system review.
- Recently installed taste/design skills in `.agents/skills`: used as supplemental guidance for visual restraint, motion discipline, spacing, hierarchy, and interaction polish. Non-UI or framework-dependent guidance was not forced into the site because the PRD requires lightweight static HTML/CSS/vanilla JS.

## Content Decisions

The PRD contains strong role positioning, metrics, and public-safe case-study titles. It does not include the latest resume PDF, exact email, LinkedIn URL, exact Exicom titles and dates, exact education dates, or publication details.

Where resume-dependent information is missing, the site uses clearly marked placeholders and the docs list the required replacements.

## Accessibility

Implemented semantic landmarks, skip link, logical headings, visible focus states, mobile menu keyboard support, Escape handling, accessible theme toggle, descriptive links, reduced-motion behavior, and sufficient contrast-focused tokens.

## Motion

Motion is limited to:

- Reveal-on-scroll using IntersectionObserver.
- Metric count-up once when the metric strip enters the viewport.
- Hover and press feedback on links, cards, and buttons.

Reduced-motion users get immediate content and no transform-based reveal movement.
