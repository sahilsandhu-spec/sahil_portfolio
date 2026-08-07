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

## Exact Fix for a GitHub Pages 404

The code is already pushed in two valid publishing forms. If `https://sahilsandhu-spec.github.io/sahil_portfolio/` returns 404, the required change is in GitHub repository settings, not in the source files.

Fastest fix:

1. Open `https://github.com/sahilsandhu-spec/sahil_portfolio`.
2. Go to Settings -> Pages.
3. Under Build and deployment, set Source to `Deploy from a branch`.
4. Set Branch to `gh-pages`.
5. Set Folder to `/root`.
6. Click Save.
7. Wait one to three minutes, then open `https://sahilsandhu-spec.github.io/sahil_portfolio/`.

Alternative Actions-based setup:

1. Go to Settings -> Pages.
2. Set Source to `GitHub Actions`.
3. Go to the Actions tab.
4. Confirm the workflow named `Deploy portfolio to GitHub Pages` runs successfully after a push to `main`.

## Required GitHub Settings

1. Open the repository on GitHub.
2. Go to Settings.
3. Open Pages.
4. Set Build and deployment source to `Deploy from a branch` using `gh-pages` and `/root`, or use GitHub Actions.
5. Push to `main`.
6. Confirm the workflow named `Deploy portfolio to GitHub Pages` succeeds, or confirm the `gh-pages` branch source is selected.

## Public Content Checks Before Promotion

- Confirm the public email is still `sahilsandhu397@gmail.com`.
- Confirm the phone, role dates, education, publication, and resume PDF match the latest approved public resume.
- Confirm the repository Pages source is set to GitHub Actions.
- Confirm the `Deploy portfolio to GitHub Pages` workflow succeeds after the latest push.

## Rollback

Rollback by reverting the problematic commit on `main` and pushing again. GitHub Actions will redeploy the previous static site state.
