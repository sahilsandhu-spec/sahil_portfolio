# QA Report

## Scope

Manual and automated checks for the static portfolio site in `site/`.

## Checks Performed

| Check | Result | Notes |
| --- | --- | --- |
| Static file structure | Pass | `site/`, `docs/`, and GitHub Pages workflow created; raw PRD/images are ignored from git |
| HTML parse sanity | Pass | Required section anchors resolve, local assets exist, JSON-LD parses, no form elements |
| CSS and JS source inspection | Pass | No third-party runtime dependencies, remote fonts, cookies, fetch calls, or external scripts/stylesheets |
| JavaScript syntax | Pass | `node --check site/assets/js/main.js` |
| Local static server | Pass | `python3 -m http.server 8001` from `site/`; the redesigned HTML returned 200 and contained the cinematic hero, program media, operating stage, and updated contact action |
| Responsive implementation | Pass by source inspection | Fluid layouts, clamp-based type, breakpoints at 1120, 980, and 720, short-viewport fallback, reduced-motion fallback, and minimum body width of 320px |
| Responsive screenshots | Limited | No browser backend was connected in this environment, so viewport rendering could not be captured reliably |
| Mobile menu | Pass by source inspection | Button has `aria-expanded` and `aria-controls`; the closed panel is inert/hidden; open state traps focus, restores focus on close, handles Escape, and locks body scrolling |
| Theme toggle | Pass by source inspection | Local storage persistence, system fallback, and live system-preference listener |
| Resume link | Pass | `site/assets/files/Sahil_Sandhu_Resume.pdf` replaced with latest supplied 2-page resume PDF |
| SEO files | Pass | `robots.txt`, `sitemap.xml`, metadata, Open Graph, Twitter cards, JSON-LD, favicon, and manifests present |
| Placeholder scan | Pass | No `TODO_` markers remain in the site or required docs |
| Disclosure scan | Pass | Public copy stays generic; confidential product names, raw telemetry, source data, and private resume details are not published |
| Impeccable deterministic scan | Pass | `detect.mjs --json site/index.html` returned zero findings after the redesign |

## Known Pre-Launch Gaps

- A browser-based desktop/mobile visual pass is still recommended after deployment because no connected rendering backend was available during this run.
- Final public-disclosure review should still happen before sharing the URL widely.

No resume-dependent placeholders remain in the website.
