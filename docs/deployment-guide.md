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

## Public Content Checks Before Promotion

- Confirm the public email is still `sahilsandhu397@gmail.com`.
- Confirm the phone, role dates, education, publication, and resume PDF match the latest approved public resume.
- Confirm the repository Pages source is set to GitHub Actions.
- Confirm the `Deploy portfolio to GitHub Pages` workflow succeeds after the latest push.

## Rollback

Rollback by reverting the problematic commit on `main` and pushing again. GitHub Actions will redeploy the previous static site state.
