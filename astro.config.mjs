import { defineConfig } from 'astro/config';

// Vercel exposes the production hostname (custom domain if one is set) at build time.
// Set SITE_URL to override it, e.g. for a different host.
const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = process.env.SITE_URL || (vercelProd ? `https://${vercelProd}` : undefined);

// https://astro.build/config
export default defineConfig({
  site,
});
