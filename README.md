# jameshawley.com

Single-page visual résumé for James Hawley, built with Astro and deployed on Vercel.

Seven full-screen panels, one per organization, that the scroll snaps to: OneRail (GPU route optimization on NVIDIA cuOpt, shown as the 7.22× figure and the measured throughput chart), Lockheed Martin HPC, TPS Time (tpstime.com), Student Council, TPEG, and skills. Charts are drawn to scale from real benchmark numbers. The look borrows from late-century world's-fair futurism: a generated geodesic sphere, geometric type, and one spectrum hue per panel.

## Stack

- Astro 4 (static output), no UI framework
- Vanilla TypeScript for the few interactions (stream slider, count-up, scroll-spy)
- Jost and IBM Plex Mono from Google Fonts
- Light and dark themes via `prefers-color-scheme`; `prefers-reduced-motion` respected

## Structure

```
src/
├── layouts/Site.astro            # head, fixed nav, pavilion dot rail, scroll-spy
├── pages/index.astro             # the seven panels
├── components/
│   ├── Timeline.astro            # career strip, bar lengths computed from real dates
│   ├── ThroughputChart.astro     # 1→20 stream sweep, slider, tooltips (desktop + phone renderings)
│   ├── Geodesic.astro            # hero sphere, generated geometry
│   └── Cluster.astro             # HPC node grid
└── styles/global.css             # tokens (light/dark), panel + snap rules, type, utilities
public/
├── James_Hawley_Resume.pdf       # primary, linked from nav, hero and contact
├── James_Hawley_Resume_General.pdf  # second link in the contact panel
├── og.png                        # link preview image (1200×630)
└── favicon.svg
```

## Commands

| Command           | Description                            |
|-------------------|----------------------------------------|
| `npm install`     | Install dependencies                   |
| `npm run dev`     | Dev server at localhost:4321           |
| `npm run build`   | Type-check and build to `dist/`        |
| `npm run preview` | Preview the production build           |

## Updating content

- Numbers and copy live in `src/pages/index.astro` and the component files; each chart's data is a small array at the top of its component.
- Replace `public/James_Hawley_Resume.pdf` to update the primary résumé link everywhere (`/resume.pdf` redirects to it in `vercel.json`).
- Canonical and Open Graph URLs come from Vercel's `VERCEL_PROJECT_PRODUCTION_URL` at build time (the custom domain once one is attached). Set `SITE_URL` to override.
