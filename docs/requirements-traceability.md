# Requirements Traceability

Source: `Sahil_Sandhu_Portfolio_PRD_and_Launch_Pack`, 35-page PDF dated 6 August 2026.

| Requirement | Source | Implementation Location | Validation Method | Status |
| --- | --- | --- | --- | --- |
| Responsive static one-page site | PRD FR-01, Technical Architecture | `site/index.html`, `site/assets/css/styles.css` | Static server, asset checks, and responsive source inspection | Implemented |
| Sticky navigation with accessible mobile menu | PRD FR-02, IA navigation labels | `site/index.html`, `site/assets/js/main.js` | Keyboard, touch, Escape behavior | Implemented |
| Resume download path | PRD FR-03 | `site/assets/files/Sahil_Sandhu_Resume.pdf` | Link check | Placeholder implemented, final resume required |
| Email and LinkedIn contact paths | PRD FR-04, Content requirements | `site/index.html` contact section | Link check | Placeholder implemented, final contact details required |
| Four public-safe case studies | PRD FR-05, Content Strategy section 6 | `site/index.html` selected programs | Content review against disclosure rules | Implemented |
| Dark/light theme with local persistence | PRD FR-06 | `site/assets/js/main.js`, CSS tokens | Manual theme toggle check | Implemented |
| Reveal and metric effects respecting reduced motion | PRD FR-07, Design System motion | `site/assets/js/main.js`, CSS media queries | Reduced-motion and viewport check | Implemented |
| Branded 404 page | PRD FR-08 | `site/404.html` | Local route check | Implemented |
| GitHub Pages workflow publishes `site/` | PRD FR-09, Deployment Guide | `.github/workflows/deploy-pages.yml` | Workflow syntax review | Implemented |
| SEO, Open Graph, Twitter, JSON-LD, sitemap, robots | PRD FR-10 | `site/index.html`, `site/sitemap.xml`, `site/robots.txt` | Source inspection and link check | Implemented |
| No external JS/CSS libraries or remote fonts | PRD Non-functional requirements | Whole site | Source inspection | Implemented |
| Semantic HTML and heading order | PRD Accessibility | `site/index.html`, `site/404.html` | Manual DOM inspection | Implemented |
| No tracking, cookies, forms, backend, API calls, or secrets | PRD Security model | Whole repo | Source and grep inspection | Implemented |
| Public-safe content | PRD Disclosure checklist | Website copy and docs | Manual disclosure pass | Implemented with resume-dependent placeholders |
| Documentation pack | Attached request Phase 7 | `README.md`, `CHANGELOG.md`, `docs/*` | File inspection | Implemented |

## Open Validation Items

- Replace the placeholder resume PDF with Sahil's latest approved public resume.
- Replace contact and LinkedIn placeholders with verified values from the latest resume.
- Verify exact Exicom titles, dates, locations, education details, and publication details against the latest resume.
- Complete the public-disclosure checklist immediately before enabling or promoting the public Pages URL.
