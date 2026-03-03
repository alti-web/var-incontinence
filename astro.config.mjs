// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://var-incontinence.fr',
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/api/'),
      serialize: (item) => {
        const url = item.url.replace(/\/$/, '');
        const path = url.replace('https://var-incontinence.fr', '');

        // Homepage
        if (path === '' || path === '/') {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }

        // Annuaires (pages listing)
        if (['/toulon-association', '/toulon-infirmiere', '/toulon-materiel-medical'].includes(path)) {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }

        // Blog listing
        if (path === '/blog-handicap-incontinence-toulon') {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }

        // Pages statiques importantes (contenu associatif)
        if (['/entraide-incontinence-toulon', '/aidants-toulon-83000', '/temoignages-incontinence-toulon', '/rejoindre-association-toulon-83000', '/quartiers-toulon-incontinence'].includes(path)) {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }

        // Articles de blog
        if (path.startsWith('/blog/')) {
          return { ...item, priority: 0.7, changefreq: 'monthly' };
        }

        // Fiches annuaire individuelles
        if (path.startsWith('/association/') || path.startsWith('/infirmiere/') || path.startsWith('/materiel-medical/')) {
          return { ...item, priority: 0.6, changefreq: 'monthly' };
        }

        // Pages légales
        if (['/mentions-legales', '/politique-confidentialite'].includes(path)) {
          return { ...item, priority: 0.2, changefreq: 'yearly' };
        }

        // Autres pages
        return { ...item, priority: 0.5, changefreq: 'monthly' };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
