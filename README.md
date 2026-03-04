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

Build and copy static output to `docs/` (for GitHub Pages workflow using `/docs`):

```bash
npm run build:docs
```

## Quality checks

```bash
npm run check
```
