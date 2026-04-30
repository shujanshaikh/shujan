// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://shujan.xyz',
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
