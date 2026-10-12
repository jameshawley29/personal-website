# jameshawley.com

Single-page visual résumé for James Hawley, built with Astro and deployed on Vercel.

The page tells one story with as few words as possible: measured results from OneRail (GPU route optimization on NVIDIA cuOpt), three years of HPC work at Lockheed Martin, a school web platform with 600+ daily users, and leadership at UVA. Charts are drawn to scale from real benchmark numbers; nothing is decorative.

## Stack

- Astro 4 (static output), no UI framework
- Vanilla TypeScript for the few interactions (stream slider, count-up, scroll-spy)
- IBM Plex Sans / Mono from Google Fonts
- Light and dark themes via `prefers-color-scheme`; `prefers-reduced-motion` respected

## Structure

```
src/
├── layouts/Site.astro            # head, sticky nav, footer, scroll-spy
├── pages/index.astro             # the whole page, section by section
├── components/
│   ├── Timeline.astro            # career strip, bar lengths computed from real dates
│   ├── ThroughputChart.astro     # 1→20 stream sweep, slider, tooltips (desktop + phone renderings)
│   ├── StreamsDiagram.astro      # one queue vs. twenty streams feeding the GPU
│   ├── ResultsPanel.astro        # wall time, route quality, cluster breakdown
│   └── Cluster.astro             # HPC node grid
└── styles/global.css             # tokens (light/dark), type, utilities
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
