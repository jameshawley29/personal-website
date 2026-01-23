# Astro Blog Template

A clean and modern blog template built with Astro.

## Features

- Fast and lightweight
- Responsive design
- Markdown blog posts
- Syntax highlighting for code blocks
- SEO friendly
- Easy to customize

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── BlogCard.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogPost.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       └── blog/
│           ├── index.astro
│           ├── first-post.md
│           ├── getting-started-with-astro.md
│           └── web-development-tips.md
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:4321`

## Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |

## Adding New Blog Posts

1. Create a new `.md` file in `src/pages/blog/`
2. Add frontmatter with title, description, pubDate, and author
3. Write your content in Markdown
4. The post will automatically appear in the blog list

Example frontmatter:

```markdown
---
layout: ../../layouts/BlogPost.astro
title: 'Your Post Title'
description: 'A brief description of your post'
pubDate: 2024-01-15
author: 'Your Name'
---
```

## Customization

- **Colors**: Edit the color values in the `<style>` sections of layout files
- **Site name**: Update in `src/layouts/BaseLayout.astro`
- **Navigation**: Modify the nav section in `src/layouts/BaseLayout.astro`
- **About page**: Edit `src/pages/about.astro` with your information

## Deployment

This site can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
