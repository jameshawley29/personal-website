# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

Personal website for James Hawley - a CS & Economics student at UVA with three years of experience at Lockheed Martin, based in Orlando, Florida. Built with **Astro** featuring a modern, minimal design inspired by McIntire School of Commerce aesthetics.

## Tech Stack

- **Framework**: Astro 4.15.0
- **Language**: TypeScript 5.5.0
- **Deployment**: Vercel
- **Syntax Highlighting**: Shiki with Dracula theme

## Design System

### Color Palette (UVA/McIntire inspired)
- `--blue-deep`: #0e1a26
- `--blue-primary`: #232d4b
- `--blue-light`: #3a4a6b
- `--orange-accent`: #e57200

### Key Design Features
- Animated dot matrix background (soothing breathing + floating animation)
- Page fade-in animations
- Scroll progress indicator on articles
- Sticky back button on articles
- Mobile hamburger menu with slide-in overlay
- No nav bar on homepage (centered, minimal layout)

## Project Structure

```
src/
├── components/
│   └── BlogCard.astro       # Article card with hover effects
├── layouts/
│   ├── BaseLayout.astro     # Main layout with nav/footer (used on all pages except homepage)
│   ├── BlogPost.astro       # Article layout with sticky back button
│   └── VaultEntry.astro     # Private notes layout
└── pages/
    ├── index.astro          # Centered homepage (no nav, custom layout)
    ├── about.astro          # About page
    ├── writing.astro        # All posts aggregated
    ├── books/               # Book reviews
    ├── economics/           # Economics articles (Fed, monetary policy)
    ├── projects/            # Project writeups
    ├── tech/                # Tech articles
    ├── thoughts/            # Opinion pieces
    └── vault/               # Password-protected private notes
```

## Commands

| Command               | Description                              |
|-----------------------|------------------------------------------|
| `npm run dev`         | Start dev server at localhost:4321       |
| `npm run build`       | Type-check and build for production      |
| `npm run preview`     | Preview production build locally         |
| `npm run astro check` | Run TypeScript type checking             |

## Content Guidelines

### Adding New Blog Posts

Create a `.md` file in the appropriate category folder under `src/pages/`. Use this frontmatter:

```markdown
---
layout: ../../layouts/BlogPost.astro
title: 'Post Title'
description: 'Brief description'
pubDate: 2024-01-15
author: 'James Hawley'
---
```

### Categories
- **tech**: Software engineering, programming, tech industry
- **economics**: Markets, policy, Fed, monetary policy
- **books**: Book reviews and notes
- **projects**: Technical project writeups
- **thoughts**: Essays and reflections

### Vault Entries
Password-protected personal notes. Use `VaultEntry.astro` layout. Default passcode: "wahoo"

## Contact Information

- **Email**: jameshawley@email.virginia.edu
- **LinkedIn**: linkedin.com/in/james-m-hawley/
- **Resume**: /resume.pdf (placeholder in public folder)

## Development Notes

- Homepage (`index.astro`) uses its own layout without nav bar - centered, minimal design
- All other pages use `BaseLayout.astro` with nav and footer
- CSS variables defined in BaseLayout and homepage separately (keep in sync)
- Dot matrix animation: `dotBreath` (opacity/size pulse) + `dotFloat` (gentle drift)
- Respects `prefers-reduced-motion` for accessibility
- Run `astro check` before committing

## Configuration Files

- `astro.config.mjs` - Astro configuration
- `vercel.json` - Deployment settings and headers
- `tsconfig.json` - TypeScript configuration
