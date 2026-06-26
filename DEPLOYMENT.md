# GitHub Pages Deployment Guide

## Project Details

- **Framework**: Next.js 15 (App Router)
- **Build tool**: Next.js (not Vite)
- **Deployment target**: GitHub Pages (static export)
- **Live URL**: https://bhuvanesh567.github.io/Waste-Management-System-/

---

## How It Works

Next.js is configured with `output: "export"` which generates a fully static site in the `out/` directory.

GitHub Actions builds this automatically on every push to `main`.

---

## One-Time GitHub Setup

1. Go to your repository
2. Settings
3. Pages
4. Source
5. Select **GitHub Actions**

---

## Local Development

```bash
npm install
npm run dev
npm run build
npx serve out