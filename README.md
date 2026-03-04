# zindont.github.io

Modern online CV built with Next.js + TypeScript, based on [BartoszJarocki/cv](https://github.com/BartoszJarocki/cv) and customized for An Ho.

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS
- Biome (lint/format)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Main content file

All resume content lives in:

- `src/data/resume-data.ts`

## Build

Static export:

```bash
npm run build
```

Output folder: `out/`

## Deploy

GitHub Pages is deployed by GitHub Actions from the `out/` artifact:

- Workflow: `.github/workflows/deploy-pages.yml`
- Trigger: push to `src` branch (or manual `workflow_dispatch`)

## Quality checks

```bash
npm run check
```
