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

        // Annuaires (pages listing) + page pilier cocon
        if (['/toulon-association', '/toulon-infirmiere', '/toulon-materiel-medical', '/toulon-ssiad', '/annuaire-associations-var-83'].includes(path)) {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }

        // Blog listing
        if (path === '/blog-handicap-incontinence-toulon') {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }

        // Pages cocon Niveau 1 (thématiques + quartiers)
        if ([
          '/association-handicap-toulon', '/association-sante-toulon', '/association-aidants-toulon', '/association-seniors-toulon',
          '/association-mourillon-toulon', '/association-centre-ville-toulon', '/association-la-rode-toulon', '/association-cap-brun-toulon', '/association-saint-jean-du-var-toulon'
        ].includes(path)) {
          return { ...item, priority: 0.85, changefreq: 'monthly' };
        }

        // Pages cocon Niveau 2 (guides pratiques)
        if (['/comment-creer-association-toulon', '/subventions-associations-toulon', '/maison-associations-toulon', '/benevolat-toulon'].includes(path)) {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }

        // Pages statiques importantes (contenu associatif)
        if (['/entraide-incontinence-toulon', '/aidants-toulon-83000', '/temoignages-incontinence-toulon', '/rejoindre-association-toulon-83000', '/quartiers-toulon-incontinence', '/mouysset-medical-toulon'].includes(path)) {
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
