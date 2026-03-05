import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, '..', 'src', 'pages', 'blog');
const LISTING_FILE = path.join(__dirname, '..', 'src', 'pages', 'blog-handicap-incontinence-toulon.astro');

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
if (!ANTHROPIC_API_KEY) {
  console.error('ANTHROPIC_API_KEY manquante.');
  process.exit(1);
}

// Pages internes du site pour le maillage
const PAGES_INTERNES = [
  { url: "/", titre: "Accueil Var Incontinence" },
  { url: "/entraide-incontinence-toulon/", titre: "Entraide incontinence à Toulon" },
  { url: "/aidants-toulon-83000/", titre: "Soutien aux aidants à Toulon" },
  { url: "/temoignages-incontinence-toulon/", titre: "Témoignages incontinence Toulon" },
  { url: "/rejoindre-association-toulon-83000/", titre: "Rejoindre l'association" },
  { url: "/toulon-materiel-medical/", titre: "Matériel médical à Toulon" },
  { url: "/toulon-infirmiere/", titre: "Infirmières à Toulon" },
  { url: "/toulon-association/", titre: "Associations santé à Toulon" },
  { url: "/quartiers-toulon-incontinence/", titre: "Quartiers de Toulon" },
  { url: "/blog-handicap-incontinence-toulon/", titre: "Blog incontinence" },
  { url: "/blog/types-incontinence-urinaire/", titre: "Types d'incontinence urinaire" },
  { url: "/blog/reeducation-perineale-toulon/", titre: "Rééducation périnéale à Toulon" },
  { url: "/blog/protections-urinaires-guide/", titre: "Guide des protections urinaires" },
  { url: "/blog/sport-incontinence/", titre: "Sport et incontinence" },
  { url: "/blog/incontinence-grossesse-post-partum-toulon/", titre: "Incontinence et grossesse" },
  { url: "/blog/incontinence-personnes-agees-toulon/", titre: "Incontinence des personnes âgées" },
  { url: "/blog/incontinence-masculine-tabou/", titre: "Incontinence masculine" },
  { url: "/blog/alimentation-incontinence/", titre: "Alimentation et incontinence" },
  { url: "/blog/aidants-incontinence-conseils/", titre: "Conseils pour les aidants" },
  { url: "/blog/nycturie-fuites-nocturnes-solutions/", titre: "Nycturie et fuites nocturnes" },
  { url: "/blog/incontinence-handicap-aides-var/", titre: "Incontinence et handicap dans le Var" },
  { url: "/blog/tabou-incontinence-briser-silence/", titre: "Briser le tabou de l'incontinence" }
];

// Formater la date en français
function formatDate(date) {
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Récupérer les slugs existants
const existingSlugs = fs.readdirSync(BLOG_DIR)
  .filter(f => f.endsWith('.astro'))
  .map(f => f.replace('.astro', ''));

// Ajouter les slugs des articles existants dans les pages internes pour le maillage
const existingBlogPages = existingSlugs.map(slug => ({
  url: `/blog/${slug}/`,
  titre: slug.replace(/-/g, ' ')
}));

const toutesLesPages = [...PAGES_INTERNES, ...existingBlogPages.filter(p => !PAGES_INTERNES.find(pi => pi.url === p.url))];

const today = new Date();
const todayFormatted = formatDate(today);
const todayISO = today.toISOString().split('T')[0];

// Appel API Anthropic
async function callAnthropic(messages, system) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 8000,
      system,
      messages
    })
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Anthropic API error ${response.status}: ${err}`);
  }

  const data = await response.json();
  return data.content[0].text;
}

// ==========================================
// ÉTAPE 1 : Générer le sujet et le slug
// ==========================================
console.log('Étape 1 : Génération du sujet...');

const sujetSystem = `Tu es un expert SEO et rédacteur spécialisé en santé pour l'association Var Incontinence, basée à Toulon (83000), dans le Var. Tu dois proposer un sujet d'article de blog unique et pertinent.`;

const sujetPrompt = `Voici les articles déjà publiés sur le blog (à ne pas reproduire) :
${existingSlugs.map(s => `- ${s}`).join('\n')}

Propose UN SEUL nouveau sujet d'article qui :
- Parle d'incontinence ET/OU de Toulon (ou les deux)
- Les mots-clés SEO prioritaires sont : "association à Toulon", "Toulon", "incontinence", "Var"
- Soit pertinent pour une association loi 1901 à Toulon qui aide les personnes incontinentes
- Ne reproduise PAS un sujet déjà traité ci-dessus
- Puisse générer un article long (1500+ mots)

Réponds UNIQUEMENT en JSON valide, sans markdown, sans backticks :
{"slug": "le-slug-seo-optimise", "titre": "Le titre SEO de l'article", "categorie": "Catégorie", "resume": "Le résumé en 1-2 phrases pour la meta description (150 caractères max)"}`;

const sujetJSON = await callAnthropic([{ role: 'user', content: sujetPrompt }], sujetSystem);
let sujet;
try {
  // Nettoyer la réponse (enlever d'éventuels backticks ou espaces)
  const cleaned = sujetJSON.trim().replace(/^```json?\s*/i, '').replace(/```\s*$/, '').trim();
  sujet = JSON.parse(cleaned);
} catch (e) {
  console.error('Erreur parsing JSON sujet:', sujetJSON);
  process.exit(1);
}

// Vérifier que le slug n'existe pas déjà
if (existingSlugs.includes(sujet.slug)) {
  console.error(`Le slug "${sujet.slug}" existe déjà.`);
  process.exit(1);
}

console.log(`Sujet choisi : ${sujet.titre} (${sujet.slug})`);

// ==========================================
// ÉTAPE 2 : Générer le contenu complet
// ==========================================
console.log('Étape 2 : Rédaction de l\'article...');

const contenuSystem = `Tu es un rédacteur web expert pour l'association Var Incontinence, une association loi 1901 basée à Toulon (83000) dans le Var.

RÈGLES DE RÉDACTION STRICTES :

1. STYLE : Écris à la PREMIÈRE PERSONNE, ton réflexif et authentique avec profondeur.
   - Utilise "je trouve que...", "je pense sincèrement que...", "en tant que membre de l'association, je constate..."
   - Sois chaleureux, bienveillant, jamais clinique ou distant
   - Partage des réflexions personnelles authentiques

2. LONGUEUR : Minimum 1500 mots. Sois généreux dans les développements.

3. CITATIONS : Inclus au minimum 3 citations de sources médicales, professionnels de santé, études ou experts.
   Formate-les ainsi en HTML : <blockquote class="border-l-4 border-teal-500 pl-4 italic text-gray-700 my-6">"La citation ici." <br><span class="text-sm not-italic text-gray-500">— Source, Titre/Rôle</span></blockquote>

4. TABLEAUX : Inclus au minimum 2 tableaux HTML informatifs.
   Formate-les ainsi :
   <div class="overflow-x-auto my-8"><table class="w-full border-collapse border border-gray-300 text-sm"><thead><tr class="bg-teal-50"><th class="border border-gray-300 px-4 py-2 text-left">...</th></tr></thead><tbody><tr><td class="border border-gray-300 px-4 py-2">...</td></tr></tbody></table></div>

5. MAILLAGE INTERNE : Intègre naturellement 4-6 liens internes vers des pages du site.
   Utilise ce format Astro : <a href={\`\${base}URL\`} class="text-teal-600 underline hover:text-teal-800">texte du lien</a>
   Pages disponibles :
${toutesLesPages.map(p => `   - ${p.url} → ${p.titre}`).join('\n')}

6. LIENS EXTERNES : Ajoute 2-3 liens vers des sources externes crédibles (HAS, INSERM, Ameli, etc.).
   Format : <a href="URL" target="_blank" rel="noopener noreferrer" class="text-teal-600 underline hover:text-teal-800">texte</a>

7. STRUCTURE : Utilise des h2 et h3 pour structurer. Chaque section doit être développée.

8. SEO : Intègre naturellement les mots-clés "association à Toulon", "Toulon", "incontinence", "Var" sans sur-optimisation.

9. FORMAT DE SORTIE : Retourne UNIQUEMENT le contenu HTML de l'article (pas de frontmatter, pas de layout, juste le contenu entre les balises article). Commence directement par le premier <p> ou <h2>.`;

const contenuPrompt = `Rédige l'article complet sur le sujet suivant :

Titre : ${sujet.titre}
Catégorie : ${sujet.categorie}
Résumé : ${sujet.resume}

Rappel : minimum 1500 mots, 1ère personne réflexive, 3+ citations, 2+ tableaux, 4-6 liens internes, 2-3 liens externes.
Le base URL pour les liens internes Astro est la variable "base" (déjà définie). Utilise le format {\`\${base}chemin/\`}.

Retourne UNIQUEMENT le HTML du contenu de l'article.`;

const contenuHTML = await callAnthropic([{ role: 'user', content: contenuPrompt }], contenuSystem);

// Nettoyer le contenu (enlever d'éventuels backticks markdown)
const contenuClean = contenuHTML.trim().replace(/^```html?\s*/i, '').replace(/```\s*$/, '').trim();

// Compter les mots approximativement
const wordCount = contenuClean.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
console.log(`Nombre de mots approximatif : ${wordCount}`);

if (wordCount < 800) {
  console.error('Article trop court, abandon.');
  process.exit(1);
}

// ==========================================
// ÉTAPE 3 : Choisir 2 articles liés pour "Lire aussi"
// ==========================================
const liensArticles = existingSlugs.slice(0, 10); // Prendre les 10 plus récents
const lien1Slug = liensArticles[Math.floor(Math.random() * Math.min(5, liensArticles.length))];
let lien2Slug = liensArticles[Math.floor(Math.random() * liensArticles.length)];
while (lien2Slug === lien1Slug && liensArticles.length > 1) {
  lien2Slug = liensArticles[Math.floor(Math.random() * liensArticles.length)];
}

function slugToTitle(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

// ==========================================
// ÉTAPE 4 : Générer le fichier Astro
// ==========================================
console.log('Étape 3 : Création du fichier Astro...');

const astroContent = `---
import Layout from '../../layouts/Layout.astro';
const base = import.meta.env.BASE_URL;
---

<Layout
\ttitle="${sujet.titre} | Var Incontinence"
\tdescription="${sujet.resume}"
>

\t<!-- Hero -->
\t<section class="bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-600 text-white py-16 md:py-20">
\t\t<div class="max-w-4xl mx-auto px-4">
\t\t\t<nav class="text-teal-200 text-sm mb-6">
\t\t\t\t<a href={base} class="hover:text-white transition-colors">Accueil</a>
\t\t\t\t<span class="mx-2">/</span>
\t\t\t\t<a href={\`\${base}blog-handicap-incontinence-toulon/\`} class="hover:text-white transition-colors">Blog</a>
\t\t\t\t<span class="mx-2">/</span>
\t\t\t\t<span class="text-white">${sujet.categorie}</span>
\t\t\t</nav>
\t\t\t<span class="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">${sujet.categorie}</span>
\t\t\t<h1 class="text-3xl md:text-5xl font-bold mt-4 mb-4">${sujet.titre}</h1>
\t\t\t<p class="text-teal-200 text-sm">${todayFormatted}</p>
\t\t</div>
\t</section>

\t<!-- Contenu -->
\t<article class="py-16 bg-white">
\t\t<div class="max-w-3xl mx-auto px-4 prose prose-gray prose-lg">
\t\t\t${contenuClean}

\t\t\t<div class="bg-teal-50 rounded-2xl p-6 mt-10">
\t\t\t\t<h3 class="font-bold text-teal-900 mb-2">Besoin d'accompagnement ?</h3>
\t\t\t\t<p class="text-teal-800 text-sm leading-relaxed">
\t\t\t\t\tL'association Var Incontinence à Toulon est là pour vous écouter et vous orienter. <a href={\`\${base}#contact\`} class="underline hover:text-teal-600">Contactez-nous</a> en toute confidentialité.
\t\t\t\t</p>
\t\t\t</div>
\t\t</div>
\t</article>

\t<!-- Navigation articles -->
\t<section class="py-12 bg-white border-t border-gray-100">
\t\t<div class="max-w-4xl mx-auto px-4">
\t\t\t<h2 class="text-xl font-bold text-gray-900 mb-4">Lire aussi</h2>
\t\t\t<div class="grid sm:grid-cols-2 gap-4">
\t\t\t\t<a href={\`\${base}blog/${lien1Slug}/\`} class="bg-gray-50 rounded-xl p-4 hover:bg-teal-50 transition-all text-sm">
\t\t\t\t\t<p class="font-semibold text-gray-900">${slugToTitle(lien1Slug)}</p><p class="text-xs text-gray-500">Découvrir cet article</p>
\t\t\t\t</a>
\t\t\t\t<a href={\`\${base}blog/${lien2Slug}/\`} class="bg-gray-50 rounded-xl p-4 hover:bg-teal-50 transition-all text-sm">
\t\t\t\t\t<p class="font-semibold text-gray-900">${slugToTitle(lien2Slug)}</p><p class="text-xs text-gray-500">Découvrir cet article</p>
\t\t\t\t</a>
\t\t\t</div>
\t\t\t<div class="mt-6 text-center">
\t\t\t\t<a href={\`\${base}blog-handicap-incontinence-toulon/\`} class="text-teal-600 font-medium hover:text-teal-800 text-sm">&larr; Retour au blog</a>
\t\t\t</div>
\t\t</div>
\t</section>

</Layout>
`;

// Écrire le fichier
const filePath = path.join(BLOG_DIR, `${sujet.slug}.astro`);
fs.writeFileSync(filePath, astroContent, 'utf-8');
console.log(`Article créé : ${sujet.slug}`);

// ==========================================
// ÉTAPE 5 : Mettre à jour le listing blog
// ==========================================
let listing = fs.readFileSync(LISTING_FILE, 'utf-8');

const newEntry = `\t{
\t\ttitre: "${sujet.titre}",
\t\tresume: "${sujet.resume}",
\t\tcategorie: "${sujet.categorie}",
\t\tdate: "${todayFormatted}",
\t\tslug: "${sujet.slug}"
\t},\n`;

listing = listing.replace(
  'const articles = [\n',
  'const articles = [\n' + newEntry
);

fs.writeFileSync(LISTING_FILE, listing, 'utf-8');
console.log('Blog listing mis à jour.');

// ==========================================
// ÉTAPE 6 : Mettre à jour llms.txt
// ==========================================
const llmsPath = path.join(__dirname, '..', 'public', 'llms.txt');
if (fs.existsSync(llmsPath)) {
  let llms = fs.readFileSync(llmsPath, 'utf-8');
  const newLlmsEntry = `- [${sujet.titre}](https://var-incontinence.fr/blog/${sujet.slug}/) : ${sujet.resume}`;

  // Ajouter après le dernier article listé dans la section "Articles et ressources"
  const marker = '## Pages principales';
  if (llms.includes(marker)) {
    llms = llms.replace(marker, newLlmsEntry + '\n\n' + marker);
    fs.writeFileSync(llmsPath, llms, 'utf-8');
    console.log('llms.txt mis à jour.');
  }
}

console.log('Terminé !');
