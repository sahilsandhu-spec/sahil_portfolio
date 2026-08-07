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
| Resume link | Pass | `site/assets/files/Sahil_Sandhu_Resume.pdf` replaced with latest supplied 2-page resume PDF |
| SEO files | Pass | `robots.txt`, `sitemap.xml`, metadata, Open Graph, Twitter cards, JSON-LD, favicon, and manifests present |
| Placeholder scan | Pass | No `TODO_` markers remain in the site or required docs |
| Disclosure scan | Pass | Public copy stays generic; confidential product names, raw telemetry, source data, and private resume details are not published |

## Known Pre-Launch Gaps

- GitHub Pages public URL may remain 404 until the repository Pages source is set to GitHub Actions and the workflow succeeds.
- Final public-disclosure review should still happen before sharing the URL widely.

No resume-dependent placeholders remain in the website.
