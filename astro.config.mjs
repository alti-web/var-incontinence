// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://alti-web.github.io',
  base: '/var-incontinence/',
  vite: {
    plugins: [tailwindcss()]
  }
});