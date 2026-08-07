# Deployment Guide

## Local Preview

From the repository root:

```bash
python3 -m http.server 8000 --directory site
```

Open:

```text
http://localhost:8000
```

## GitHub Pages

This repository is configured for GitHub Pages through Actions. The workflow uploads only the `site/` directory.

Expected project-site URL:

```text
https://sahilsandhu-spec.github.io/sahil_portfolio/
```

## Required GitHub Settings

1. Open the repository on GitHub.
2. Go to Settings.
3. Open Pages.
4. Set Build and deployment source to GitHub Actions.
5. Push to `main`.
6. Confirm the workflow named `Deploy portfolio to GitHub Pages` succeeds.

## Required Replacements Before Public Promotion

Search for these tokens:

```text
TODO_EMAIL_TO_REPLACE
TODO_LINKEDIN_URL_TO_REPLACE
TODO_RESUME_PLACEHOLDER
TODO_EXPERIENCE_TITLES_DATES
TODO_EDUCATION_DETAILS
TODO_PUBLICATION_DETAILS
```

Replace them with values from Sahil's latest approved public resume.

## Rollback

Rollback by reverting the problematic commit on `main` and pushing again. GitHub Actions will redeploy the previous static site state.

