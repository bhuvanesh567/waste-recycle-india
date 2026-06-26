# GitHub Pages Deployment Guide

## Project Details
- **Framework**: Next.js 15 (App Router)
- **Build tool**: Next.js (not Vite)
- **Deployment target**: GitHub Pages (static export)
- **Live URL**: https://bhuvanesh567.github.io/Waste-Management-System-/

---

## How It Works

Next.js is configured with `output: "export"` which generates a fully static
site in the `out/` directory. GitHub Actions builds this on every push to
`main` and deploys it to GitHub Pages automatically.

---

## One-Time GitHub Setup (do this once)

1. Go to your repo on GitHub:
   https://github.com/bhuvanesh567/Waste-Management-System-

2. Click **Settings** → **Pages** (left sidebar)

3. Under **Build and deployment** → **Source**, select:
   **GitHub Actions** (not "Deploy from a branch")

4. Save. That's it — the workflow handles the rest.

---

## Commands to Run Locally

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server (basePath is empty locally)
npm run dev

# Build static export (outputs to /out directory)
npm run build

# Preview the static build locally (optional)
npx serve out
```

---

## Deploy Manually (optional)

The GitHub Actions workflow deploys automatically on push to `main`.
To trigger a manual deploy without pushing code:

1. Go to your repo → **Actions** tab
2. Select **Deploy to GitHub Pages**
3. Click **Run workflow** → **Run workflow**

---

## Files Changed for Deployment

### `next.config.ts`
- Added `output: "export"` — generates static HTML instead of a Node.js server
- Added `basePath: "/Waste-Management-System-"` — prefixes all routes in production
- Added `assetPrefix: "/Waste-Management-System-/"` — prefixes all static assets
- Added `trailingSlash: true` — generates `page/index.html` instead of `page.html`
- Added `images.unoptimized: true` — disables server-side image optimization (required for static export)

### `.github/workflows/deploy.yml` (new file)
- GitHub Actions workflow that builds and deploys on every push to `main`
- Uses the official `actions/deploy-pages` action

### `.gitignore`
- Removed `/out/` from ignored files so GitHub Actions can access the build output

### `package.json`
- Added `export` script alias for `next build`
- Added `deploy` script for manual use

---

## Troubleshooting

### Pages shows 404 on all routes
- Make sure **Source** in GitHub Pages settings is set to **GitHub Actions** (not a branch)
- Check that the `deploy.yml` workflow ran successfully in the Actions tab

### Images not loading
- All images use external Unsplash/randomuser URLs — verify internet access
- `images.unoptimized: true` is set so `next/image` works in static mode

### Assets returning 404 (CSS/JS)
- The `basePath` in `next.config.ts` must exactly match your repo name including the trailing dash: `Waste-Management-System-`
- Verify `assetPrefix` ends with `/`

### Styles not applying
- Check that `trailingSlash: true` is set — without it, some routes return HTML without proper asset links

### Three.js globe not rendering
- The globe is purely procedural (no external assets) and renders client-side only
- Verify the browser supports WebGL (all modern browsers do)

### Local dev `basePath` issue
- `basePath` is only applied when `NODE_ENV=production`
- `npm run dev` always uses an empty base path, so `localhost:3000/` works normally

---

## Environment Variables

No environment variables are required for deployment.
The `NODE_ENV=production` flag is set automatically by the GitHub Actions workflow.

---

## Build Output Structure

After `npm run build`, the `out/` directory will contain:

```
out/
├── index.html          → Home page
├── about/
│   └── index.html      → About page
├── services/
│   └── index.html      → Services page
├── industries/
│   └── index.html
├── sustainability/
│   └── index.html
├── careers/
│   └── index.html
├── blog/
│   └── index.html
├── contact/
│   └── index.html
├── 404.html
├── .nojekyll           → Prevents Jekyll processing
└── _next/
    └── static/         → JS, CSS, and other static assets
```
