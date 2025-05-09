// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://blogsmanhwa-oppa.vercel.app/',
  integrations: [
    mdx(),
    sitemap({ // Correct usage of the sitemap integration
      changefreq: 'weekly', // You can specify your preferred change frequency
      priority: 0.5, // Default priority
    }),
    tailwind(),
  ],
  output: 'static',
});
