# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

James Hawley's personal site: a single-page, recruiter-facing visual résumé. CS & Economics at UVA (Class of 2029), OneRail Data Science & AI intern (Summer 2026), Lockheed Martin HPC intern (2023–2025), founder of a school web platform, ESC and Student Council leadership, TPEG Software & Electrical Lead.

The page is tuned for themed-entertainment and large-scale operations employers without naming any company. Keep that framing: real systems, guests, attractions, throughput.

## Principles (do not regress these)

- **Show, don't write.** Every section leads with a number, a chart, or a diagram. Paragraphs stay under two sentences. No "passionate", no adjectives doing the work a number should do.
- **Every figure is real and sourced.** OneRail numbers come from the Summer 2026 intern deck: 7.22× parity-run speedup; sweep 1.0 / 1.59 / 2.75 / 4.39 / 6.44 / 7.06 at 1 / 2 / 4 / 8 / 16 / 20 streams; 18.47 h → 2.56 h per 1,000 batches (linear estimate from a measured 20-batch run); Optimized Gain $2,351 → $2,647 (+12.6%); 98 / 40 / 22 of 160 clusters. Never extrapolate the quality dollars; always label the 1,000-batch hours as an estimate.
- **Confidentiality line.** Do not add customer names beyond FedEx (already on the public résumé), internal file paths, or content from the deck's "known gaps" appendix.
- **No AI-slop patterns.** No emoji, no gradients, no glassmorphism, no skill bars, no numbered "01/02/03" markers, no em dashes, no accent stripes on cards.
- **Charts follow the data-viz rules.** Thin marks (≤ 28px), 4px rounded data-ends, hairline solid gridlines, one series color plus one accent for the highlighted mark, text in text tokens never series color, tooltips on hover/focus, a visually hidden table for each chart.
- **Both themes, reduced motion, keyboard.** Tokens in `src/styles/global.css`; every color has a light value on `:root` and dark values under both the media query and `[data-theme="dark"]`. Animations are decorative only and switch off under `prefers-reduced-motion`.

## Stack

- Astro 4.16, static output, no UI framework; vanilla TypeScript in `<script>` blocks
- Fonts: IBM Plex Sans (400/500/600) and IBM Plex Mono (400/500) via Google Fonts
- Deployed on Vercel (`vercel.json` sets headers and build settings)

## Design tokens

| Token | Light | Dark |
|---|---|---|
| `--bg` / `--ink` | `#ffffff` / `#0e1a26` | `#0e1a26` / `#eef2f6` |
| `--navy` | `#232d4b` | `#c9d3ee` |
| `--accent` (orange, the highlighted mark) | `#e57200` | `#dd7418` |
| `--chart` (series blue) | `#2f5fd0` | `#5b86ff` |

The chart pair was validated with the dataviz palette checker in both modes.

## Structure

```
src/layouts/Site.astro          head, sticky nav, footer, scroll-spy
src/pages/index.astro           all sections: hero + timeline, OneRail, Lockheed, platform, leadership, TPEG, skills/awards, contact
src/components/Timeline.astro   career strip; edit the `rows` array, positions are computed from dates
src/components/ThroughputChart.astro   data array at top; renders a desktop and a phone SVG from the same data
src/components/StreamsDiagram.astro
src/components/ResultsPanel.astro
src/components/Cluster.astro
src/styles/global.css           tokens, reset, section rhythm, chips, buttons
public/resume.pdf, public/og.png, public/favicon.svg
```

## Commands

`npm run dev` · `npm run build` (runs `astro check` first) · `npm run preview`

## Checklist before committing

1. `npm run build` passes with 0 errors.
2. Screenshot desktop (1280), phone (390) and dark; `document.documentElement.scrollWidth` must equal the viewport width (no horizontal scroll).
3. Chart labels do not collide; nothing is clipped.

## Contact details on the site

Email jameshawley@email.virginia.edu · linkedin.com/in/james-m-hawley · github.com/jameshawley29 · `/resume.pdf`
