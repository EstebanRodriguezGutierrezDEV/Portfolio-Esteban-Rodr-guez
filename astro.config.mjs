// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://estebanrg.dev',
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"]
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()],
});