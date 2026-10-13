# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

James Hawley's personal site: a single-page, recruiter-facing visual résumé. CS & Economics at UVA (Class of 2029), OneRail Data Science & AI intern (Summer 2026), Lockheed Martin HPC intern (2023–2025), founder of TPS Time (tpstime.com, the Trinity Prep student platform), ESC and Student Council leadership, TPEG Software & Electrical Lead.

The page is tuned for themed-entertainment and large-scale operations employers without naming any company. Keep that framing: real systems, guests, attractions, throughput.

## Principles (do not regress these)

- **Company and role are the headline.** Each panel's `h2` is the organization (uppercase, wide tracking), the `.role` line is the title, `.meta` is place and dates. No slogans or one-liners as headings.
- **One panel per section, full viewport.** Panels are `position: sticky` and `scroll-snap-align: start` on desktop (≥ 1001px wide and ≥ 760px tall) so the scroll settles on a panel and each new panel slides over the last. Every panel must fit inside 800px of height at 1280px wide; check `scrollHeight` per panel after changes. On smaller screens panels are static and snapping is `proximity`.
- **Show, don't write.** Every panel leads with a number, a chart, or a diagram. OneRail is only the 7.22× figure and the throughput chart; the rest of the deck stays out.
- **The look is late-century world's-fair futurism.** Geodesic facets (the hero sphere is generated geometry in `Geodesic.astro`), geometric sans (Jost) with wide-tracked uppercase labels, monoline icons in circles, and a spectrum of "pavilion" hues, one per section (`--teal`, `--purple`, `--orange`, `--magenta`, `--blue`). It evokes the style without naming or copying any park, logo, or pavilion mark.
- **Every figure is real and sourced.** OneRail numbers come from the Summer 2026 intern deck: 7.22× parity-run speedup; sweep 1.0 / 1.59 / 2.75 / 4.39 / 6.44 / 7.06 at 1 / 2 / 4 / 8 / 16 / 20 streams; 18.47 h → 2.56 h per 1,000 batches (linear estimate from a measured 20-batch run); Optimized Gain $2,351 → $2,647 (+12.6%); 98 / 40 / 22 of 160 clusters. Never extrapolate the quality dollars; always label the 1,000-batch hours as an estimate.
- **Confidentiality line.** Do not add customer names beyond FedEx (already on the public résumé), internal file paths, or content from the deck's "known gaps" appendix.
- **No AI-slop patterns.** No emoji, no gradients, no glassmorphism, no skill bars, no numbered "01/02/03" markers, no em dashes, no accent stripes on cards, no quippy taglines.
- **Charts follow the data-viz rules.** Thin marks (≤ 28px), 4px rounded data-ends, hairline solid gridlines, one series color plus one accent for the highlighted mark, text in text tokens never series color, tooltips on hover/focus, a visually hidden table for each chart.
- **Both themes, reduced motion, keyboard.** Tokens in `src/styles/global.css`; every color has a light value on `:root` and dark values under both the media query and `[data-theme="dark"]`. Animations are decorative only and switch off under `prefers-reduced-motion`.

## Stack

- Astro 4.16, static output, no UI framework; vanilla TypeScript in `<script>` blocks
- Fonts: Jost (400/500/600/700) for everything and IBM Plex Mono (400/500) for data labels, via Google Fonts
- Deployed on Vercel (`vercel.json` sets headers and build settings)

## Design tokens

| Token | Light | Dark |
|---|---|---|
| `--bg` / `--ink` | `#ffffff` / `#15122b` | `#0f0c1f` / `#f1efff` |
| `--teal` (OneRail) | `#0a9aa8` | `#17a3b0` |
| `--purple` (Lockheed) | `#6a4fc9` | `#8f7cf0` |
| `--orange` (TPS Time, chart emphasis) | `#e57200` | `#dd7418` |
| `--magenta` (Student Council) | `#c9307a` | `#e6508f` |
| `--blue` (TPEG) | `#2f5fd0` | `#5b86ff` |

Each `.panel.<hue>` sets `--sec` / `--sec-soft`; components use those. Pairs were validated with the dataviz palette checker in both modes.

## Structure

```
src/layouts/Site.astro          head, fixed nav, pavilion dot rail, scroll-spy; the `sections` array drives nav and dots
src/pages/index.astro           seven panels: hero + timeline, OneRail, Lockheed, TPS Time, Student Council, TPEG, skills/awards/contact
src/components/Timeline.astro   career strip; edit the `rows` array, positions are computed from dates, each row carries a hue
src/components/ThroughputChart.astro   data array at top; renders a desktop and a phone SVG from the same data
src/components/Geodesic.astro   hero sphere, generated at build time
src/components/Cluster.astro    HPC node grid
src/styles/global.css           tokens, panel/snap rules, section header, chips, buttons
public/James_Hawley_Resume.pdf (primary), public/James_Hawley_Resume_General.pdf, public/og.png, public/favicon.svg
```

## Commands

`npm run dev` · `npm run build` (runs `astro check` first) · `npm run preview`

## Checklist before committing

1. `npm run build` passes with 0 errors.
2. Screenshot each panel at 1280×800 (light and dark) and at 390 wide; `document.documentElement.scrollWidth` must equal the viewport width (no horizontal scroll).
3. Every panel's `scrollHeight` ≤ 800 at 1280×800, or the sticky stack will hide its bottom.
4. Chart labels do not collide; nothing is clipped.

## Contact details on the site

Email jameshawley@email.virginia.edu · linkedin.com/in/james-m-hawley · github.com/jameshawley29 · `/James_Hawley_Resume.pdf` (primary; `/resume.pdf` redirects to it) · `/James_Hawley_Resume_General.pdf`
