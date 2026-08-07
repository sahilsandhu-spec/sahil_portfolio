# Sahil Sandhu Portfolio

Static professional portfolio for Sahil Sandhu, positioned as a Technical Program Manager and Test Systems Architect.

## Local Preview

```bash
python3 -m http.server 8000 --directory site
```

Open `http://localhost:8000`.

## Structure

```text
.github/workflows/deploy-pages.yml
docs/
site/
  index.html
  404.html
  robots.txt
  sitemap.xml
  site.webmanifest
  manifest.webmanifest
  assets/
    css/styles.css
    js/main.js
    images/
    files/
```

## Deployment

GitHub Pages is configured through Actions. The workflow publishes only `site/` after pushes to `main`.

Expected URL:

```text
https://sahilsandhu-spec.github.io/sahil_portfolio/
```

## Personalization Required

The PRD was supplied, but the latest resume PDF was not. Before public launch, replace the clearly marked placeholders for resume, experience titles/dates, education details, and publication details.

## Privacy and Confidentiality

Do not publish employer-confidential details, customer names, supplier information, internal product names, source code, private telemetry, test limits, internal URLs, credentials, tokens, or private architecture diagrams.

## Content Updates

Update the site whenever the resume, title, employer, location, target role, publication list, or public-safe metrics change. Update `CHANGELOG.md` for meaningful changes.
