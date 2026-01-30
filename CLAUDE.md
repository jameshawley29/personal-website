# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

This is a personal website/blog built with **Astro**. It features markdown-based content organized into multiple categories, deployed on Vercel.

## Tech Stack

- **Framework**: Astro 4.15.0
- **Language**: TypeScript 5.5.0
- **Deployment**: Vercel
- **Syntax Highlighting**: Shiki with Dracula theme

## Project Structure

```
src/
├── components/      # Reusable Astro components
│   └── BlogCard.astro
├── layouts/         # Page layouts
│   ├── BaseLayout.astro   # Main site layout with nav/footer
│   ├── BlogPost.astro     # Layout for blog posts
│   └── VaultEntry.astro   # Layout for vault entries
└── pages/           # File-based routing
    ├── index.astro        # Homepage
    ├── about.astro        # About page
    ├── books/             # Book reviews/notes
    ├── economics/         # Economics articles
    ├── projects/          # Project writeups
    ├── tech/              # Tech articles
    ├── thoughts/          # Opinion pieces
    └── vault/             # Personal notes (private section)
```

## Commands

| Command           | Description                              |
|-------------------|------------------------------------------|
| `npm run dev`     | Start dev server at localhost:4321       |
| `npm run build`   | Type-check and build for production      |
| `npm run preview` | Preview production build locally         |
| `npm run astro check` | Run TypeScript type checking         |

## Content Guidelines

### Adding New Blog Posts

Create a `.md` file in the appropriate category folder under `src/pages/`. Use this frontmatter format:

```markdown
---
layout: ../../layouts/BlogPost.astro
title: 'Post Title'
description: 'Brief description'
pubDate: 2024-01-15
author: 'Author Name'
---
```

### Adding Vault Entries

Vault entries use `VaultEntry.astro` layout and are for personal/private notes.

## Development Notes

- The site uses file-based routing - file paths in `src/pages/` map directly to URLs
- Markdown files are automatically processed with syntax highlighting
- Run `astro check` before committing to catch TypeScript errors
- The build command includes type checking: `astro check && astro build`

## Configuration Files

- `astro.config.mjs` - Astro configuration (site URL, markdown settings)
- `vercel.json` - Vercel deployment settings and headers
- `tsconfig.json` - TypeScript configuration
