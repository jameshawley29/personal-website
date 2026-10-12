# jameshawley.com

Single-page visual résumé for James Hawley, built with Astro and deployed on Vercel.

Seven full-screen panels, one per organization, that the scroll snaps to: OneRail (GPU route optimization on NVIDIA cuOpt, shown as the 7.22× figure and the measured throughput chart), Lockheed Martin HPC, the Trinity Prep web platform, UVA leadership, TPEG, and skills. Charts are drawn to scale from real benchmark numbers. The look borrows from late-century world's-fair futurism: a generated geodesic sphere, geometric type, and one spectrum hue per panel.

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
├── resume.pdf                    # linked from nav, hero and footer
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
- Replace `public/resume.pdf` to update the résumé link everywhere.
- Set `site` in `astro.config.mjs` to the production domain so canonical and Open Graph URLs resolve.
