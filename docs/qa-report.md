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
| Local static server | Pass | `python3 -m http.server 8000 --directory site`; `index.html`, CSS, JS, PDF, 404, sitemap, robots, and social image returned 200 |
| Responsive implementation | Pass by source inspection | Fluid grids, clamp-based type, breakpoints at 1120, 980, and 720, and minimum body width of 320px |
| Responsive screenshots | Limited | Headless browser/Playwright was not available in this environment; macOS Quick Look produced a low-confidence 1440px thumbnail only |
| Mobile menu | Pass by source inspection | Button has `aria-expanded`, `aria-controls`, Escape close, outside-link close, and body scroll lock |
| Theme toggle | Pass by source inspection | Local storage persistence, system fallback, and live system-preference listener |
| Resume link | Pass with placeholder | Placeholder PDF is valid and served as `application/pdf`; replace before public promotion |
| SEO files | Pass | `robots.txt`, `sitemap.xml`, metadata, Open Graph, Twitter cards, JSON-LD, favicon, and manifests present |
| Placeholder scan | Pass with documented blockers | `TODO_` markers are limited to missing resume/contact/education/publication details and deployment docs |
| Disclosure scan | Pass | Public copy stays generic; confidential product names, raw telemetry, source data, and private resume details are not published |

## Known Pre-Launch Gaps

- Latest approved public resume PDF was not supplied.
- Professional email was not supplied.
- LinkedIn URL was not supplied.
- Exact Exicom titles, dates, and locations were not supplied.
- Exact IIT Madras, INDO-SWISS, and publication details were not supplied.

These gaps are intentionally listed and are not silently invented.
