// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://blogsmanhwa-oppa.vercel.app/', // Make sure this is exactly correct
  integrations: [
    mdx(), 
    sitemap({
      // Optional: Specify custom sitemap URL (if you want it named 'sitemap.xml')
      sitemap: '/sitemap.xml',
    }),
    tailwind(),
  ],
  output: 'static', // Ensure the output is 'static' for a full static site (important for sitemap generation)
});
