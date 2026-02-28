import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, '..', 'src', 'pages', 'blog');
const LISTING_FILE = path.join(__dirname, '..', 'src', 'pages', 'blog-handicap-incontinence-toulon.astro');

// Banque d'articles (incontinence + Toulon)
const articles = [
  {
    slug: "incontinence-personnes-agees-toulon",
    titre: "Incontinence chez les personnes âgées à Toulon : accompagnement et solutions",
    categorie: "Seniors",
    resume: "L'incontinence touche plus de 50 % des personnes âgées en institution. À Toulon, des solutions d'accompagnement existent pour préserver l'autonomie et la dignité.",
    contenu: `<p class="text-gray-600 leading-relaxed text-lg">Le vieillissement est l'un des principaux facteurs de risque de l'incontinence urinaire. À Toulon et dans le Var, les structures d'accompagnement se mobilisent pour offrir des solutions adaptées aux seniors.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Pourquoi l'incontinence augmente avec l'âge ?</h2>
<p class="text-gray-600 leading-relaxed">Avec le temps, les muscles du plancher pelvien perdent de leur tonicité. Chez la femme, la ménopause entraîne une baisse des oestrogènes qui fragilise les tissus. Chez l'homme, l'hypertrophie de la prostate peut provoquer des troubles mictionnels. Les pathologies neurologiques (AVC, Parkinson, Alzheimer) aggravent ces difficultés.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Les solutions à Toulon</h2>
<p class="text-gray-600 leading-relaxed">Le Centre Hospitalier de Toulon dispose de consultations spécialisées en urologie et gériatrie. Les EHPAD du Var mettent en place des protocoles de gestion de l'incontinence. Les services d'aide à domicile (SAAD) proposent une assistance quotidienne pour les personnes maintenues chez elles.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Maintenir l'autonomie</h2>
<p class="text-gray-600 leading-relaxed">Adapter le logement (barres d'appui, rehausseur WC, éclairage nocturne), choisir les bonnes protections et maintenir une activité physique douce sont des leviers essentiels pour préserver la qualité de vie des seniors incontinents.</p>`,
    lien1: { slug: "types-incontinence-urinaire", titre: "Types d'incontinence", desc: "Comprendre les différentes formes" },
    lien2: { slug: "aidants-incontinence-conseils", titre: "Conseils aidants", desc: "Prendre soin de soi pour mieux aider" }
  },
  {
    slug: "incontinence-grossesse-post-partum-toulon",
    titre: "Incontinence après la grossesse : rééducation et suivi à Toulon",
    categorie: "Femmes",
    resume: "Une femme sur trois souffre de fuites urinaires après un accouchement. La rééducation périnéale post-partum est essentielle et prise en charge à 100 %.",
    contenu: `<p class="text-gray-600 leading-relaxed text-lg">La grossesse et l'accouchement sont les premières causes d'incontinence urinaire chez la femme jeune. À Toulon, les professionnels de santé accompagnent les jeunes mamans pour une récupération optimale.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Pourquoi l'accouchement fragilise le périnée ?</h2>
<p class="text-gray-600 leading-relaxed">Le poids du bébé pendant la grossesse et les efforts de l'accouchement étirent et fragilisent les muscles du plancher pelvien. Les accouchements instrumentaux (forceps, ventouse) augmentent le risque. Les déchirures périnéales et l'épisiotomie peuvent également affecter la continence.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">La rééducation post-partum</h2>
<p class="text-gray-600 leading-relaxed">La rééducation périnéale est prescrite systématiquement après l'accouchement, généralement à partir de 6 à 8 semaines post-partum. Elle comprend 10 à 20 séances remboursées intégralement dans le cadre du suivi maternité. À Toulon, de nombreuses sages-femmes et kinésithérapeutes sont spécialisés.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Ne pas attendre</h2>
<p class="text-gray-600 leading-relaxed">Beaucoup de femmes banalisent les fuites post-partum en pensant qu'elles disparaîtront seules. Or, sans rééducation, les problèmes peuvent s'aggraver avec le temps et les grossesses suivantes. Consultez dès l'apparition des premiers symptômes.</p>`,
    lien1: { slug: "reeducation-perineale-toulon", titre: "Rééducation périnéale", desc: "Quand et comment consulter" },
    lien2: { slug: "sport-incontinence", titre: "Sport et incontinence", desc: "Quelles activités pratiquer ?" }
  },
  {
    slug: "nycturie-fuites-nocturnes-solutions",
    titre: "Fuites urinaires nocturnes : comprendre la nycturie et ses solutions",
    categorie: "Comprendre",
    resume: "Se lever plusieurs fois la nuit pour uriner perturbe le sommeil et la qualité de vie. Causes, diagnostic et solutions pour la nycturie.",
    contenu: `<p class="text-gray-600 leading-relaxed text-lg">La nycturie, ou besoin d'uriner la nuit, touche de nombreuses personnes, surtout après 60 ans. Quand les levers nocturnes deviennent fréquents, il est temps de consulter.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Qu'est-ce que la nycturie ?</h2>
<p class="text-gray-600 leading-relaxed">On parle de nycturie lorsqu'une personne se réveille une ou plusieurs fois par nuit pour uriner. Au-delà de deux levers, l'impact sur le sommeil et la santé devient significatif : fatigue, risque de chute nocturne, dépression.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Les causes</h2>
<p class="text-gray-600 leading-relaxed">La nycturie peut avoir de multiples origines : surproduction d'urine la nuit (polyurie nocturne), capacité vésicale réduite, apnée du sommeil, insuffisance cardiaque, diabète, hypertrophie prostatique ou simplement une consommation excessive de liquides le soir.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Solutions pratiques</h2>
<p class="text-gray-600 leading-relaxed">Réduisez les boissons 2 heures avant le coucher. Évitez alcool et caféine en soirée. Surélevez les jambes en fin de journée si vous avez des oedèmes. Consultez votre médecin pour un bilan : un traitement adapté peut transformer vos nuits.</p>`,
    lien1: { slug: "types-incontinence-urinaire", titre: "Types d'incontinence", desc: "Comprendre les formes" },
    lien2: { slug: "alimentation-incontinence", titre: "Alimentation", desc: "Les aliments à privilégier" }
  },
  {
    slug: "tabou-incontinence-briser-silence",
    titre: "Briser le tabou de l'incontinence : pourquoi il faut en parler",
    categorie: "Société",
    resume: "70 % des personnes incontinentes n'osent pas en parler. Pourtant, le silence aggrave l'isolement et retarde la prise en charge.",
    contenu: `<p class="text-gray-600 leading-relaxed text-lg">L'incontinence reste l'un des derniers grands tabous de santé. À Toulon comme ailleurs, des millions de personnes souffrent en silence. L'association Var Incontinence agit pour changer les mentalités.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Un tabou aux conséquences graves</h2>
<p class="text-gray-600 leading-relaxed">Le silence autour de l'incontinence entraîne un retard de diagnostic moyen de 7 ans. Pendant ce temps, les personnes concernées développent des stratégies d'évitement : réduction des sorties, isolement social, arrêt des activités sportives, repli sur soi.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Pourquoi est-ce si difficile d'en parler ?</h2>
<p class="text-gray-600 leading-relaxed">L'incontinence est associée à la perte de contrôle, au vieillissement, à la dépendance. La honte et la culpabilité empêchent la parole, même face au médecin. Les publicités pour les protections renforcent parfois le malaise en utilisant des euphémismes.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Comment briser le silence</h2>
<p class="text-gray-600 leading-relaxed">La première étape est d'en parler à un professionnel de santé. Les groupes de parole, comme ceux de Var Incontinence à Toulon, offrent un espace sécurisé pour partager son vécu. Les témoignages publics contribuent à normaliser le sujet.</p>`,
    lien1: { slug: "incontinence-masculine-tabou", titre: "Incontinence masculine", desc: "Briser le tabou après 60 ans" },
    lien2: { slug: "reeducation-perineale-toulon", titre: "Rééducation périnéale", desc: "Consulter à Toulon" }
  },
  {
    slug: "incontinence-travail-vie-professionnelle",
    titre: "Incontinence et vie professionnelle : gérer au quotidien",
    categorie: "Pratique",
    resume: "Comment gérer l'incontinence au travail ? Protections discrètes, droits des salariés et conseils pratiques pour maintenir sa vie professionnelle.",
    contenu: `<p class="text-gray-600 leading-relaxed text-lg">L'incontinence au travail est une réalité pour de nombreuses personnes. Entre la gêne, la peur d'être découvert(e) et les contraintes professionnelles, la situation peut devenir très stressante.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Conseils pratiques au bureau</h2>
<p class="text-gray-600 leading-relaxed">Utilisez des protections discrètes et performantes, adaptées à votre niveau de fuites. Gardez un kit de change dans votre casier ou sac. Repérez les toilettes les plus proches de votre poste. Programmez des passages réguliers aux toilettes toutes les 2-3 heures.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Vos droits en tant que salarié(e)</h2>
<p class="text-gray-600 leading-relaxed">L'incontinence peut être reconnue comme handicap si elle est invalidante. Le médecin du travail peut recommander des aménagements : poste proche des sanitaires, pauses supplémentaires, télétravail partiel. La RQTH (Reconnaissance de la Qualité de Travailleur Handicapé) peut ouvrir des droits complémentaires.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Ne pas s'isoler</h2>
<p class="text-gray-600 leading-relaxed">Si votre incontinence impacte votre travail, parlez-en à votre médecin traitant et au médecin du travail. Des solutions existent pour concilier vie professionnelle et gestion de l'incontinence.</p>`,
    lien1: { slug: "protections-urinaires-guide", titre: "Guide protections", desc: "Bien choisir sa protection" },
    lien2: { slug: "incontinence-handicap-aides-var", titre: "Handicap et aides", desc: "Les dispositifs dans le Var" }
  },
  {
    slug: "exercises-perinee-maison",
    titre: "Exercices du périnée à faire chez soi : guide pratique",
    categorie: "Traitements",
    resume: "Renforcez votre périnée à domicile avec ces exercices simples. Complémentaires à la rééducation, ils aident à réduire les fuites urinaires.",
    contenu: `<p class="text-gray-600 leading-relaxed text-lg">Les exercices de Kegel et d'autres techniques permettent de renforcer le périnée chez soi. Pratiqués régulièrement, ils sont un complément efficace à la rééducation avec un professionnel.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Les exercices de Kegel</h2>
<p class="text-gray-600 leading-relaxed">Contractez les muscles du périnée (comme pour retenir l'urine) pendant 5 secondes, puis relâchez 5 secondes. Répétez 10 à 15 fois, 3 fois par jour. Augmentez progressivement la durée de contraction. L'important est la régularité, pas l'intensité.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Les abdominaux hypopressifs</h2>
<p class="text-gray-600 leading-relaxed">Contrairement aux abdominaux classiques qui appuient sur la vessie, les exercices hypopressifs renforcent la sangle abdominale tout en protégeant le périnée. Ils se pratiquent en position allongée ou debout, en combinant respiration et posture.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Quand voir des résultats ?</h2>
<p class="text-gray-600 leading-relaxed">Les premiers résultats apparaissent généralement après 4 à 6 semaines de pratique quotidienne. La persévérance est essentielle. En cas de doute sur la bonne exécution des exercices, consultez un kinésithérapeute spécialisé à Toulon.</p>`,
    lien1: { slug: "reeducation-perineale-toulon", titre: "Rééducation périnéale", desc: "Consulter à Toulon" },
    lien2: { slug: "sport-incontinence", titre: "Sport et incontinence", desc: "Activités recommandées" }
  },
  {
    slug: "incontinence-diabete-complications",
    titre: "Diabète et incontinence : un lien souvent méconnu",
    categorie: "Comprendre",
    resume: "Le diabète peut provoquer ou aggraver l'incontinence urinaire. Comprendre ce lien permet une meilleure prise en charge.",
    contenu: `<p class="text-gray-600 leading-relaxed text-lg">Le diabète, maladie chronique très répandue, peut avoir des répercussions sur la continence urinaire. Les neuropathies diabétiques et la polyurie sont les principaux mécanismes en cause.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Comment le diabète affecte-t-il la vessie ?</h2>
<p class="text-gray-600 leading-relaxed">L'excès de sucre dans le sang augmente le volume d'urine (polyurie). La neuropathie diabétique peut altérer la sensibilité de la vessie, empêchant de percevoir le besoin d'uriner à temps. Le surpoids associé au diabète de type 2 exerce une pression supplémentaire sur le plancher pelvien.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Prévention et prise en charge</h2>
<p class="text-gray-600 leading-relaxed">Un bon équilibre glycémique réduit la polyurie et ralentit la progression de la neuropathie. La rééducation périnéale est recommandée. Le suivi régulier par un diabétologue et un urologue permet d'adapter le traitement.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">À Toulon et dans le Var</h2>
<p class="text-gray-600 leading-relaxed">Le service d'endocrinologie du Centre Hospitalier de Toulon assure le suivi des patients diabétiques. L'association Var Incontinence peut vous orienter vers des spécialistes qui prennent en compte cette double problématique.</p>`,
    lien1: { slug: "types-incontinence-urinaire", titre: "Types d'incontinence", desc: "Les différentes formes" },
    lien2: { slug: "alimentation-incontinence", titre: "Alimentation", desc: "Aliments à privilégier et éviter" }
  },
  {
    slug: "incontinence-anale-toulon",
    titre: "Incontinence anale : un tabou dans le tabou",
    categorie: "Comprendre",
    resume: "L'incontinence anale touche 5 % de la population mais reste encore plus taboue que l'incontinence urinaire. Solutions et accompagnement à Toulon.",
    contenu: `<p class="text-gray-600 leading-relaxed text-lg">L'incontinence anale (ou fécale) est la perte involontaire de gaz ou de selles. Encore plus taboue que l'incontinence urinaire, elle touche pourtant des millions de personnes en France.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Les causes</h2>
<p class="text-gray-600 leading-relaxed">Les causes sont multiples : lésions du sphincter anal (accouchement, chirurgie), maladies inflammatoires de l'intestin, neuropathies, constipation chronique, prolapsus rectal. Chez la femme, les déchirures obstétricales sont une cause fréquente.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Les traitements</h2>
<p class="text-gray-600 leading-relaxed">La rééducation par biofeedback est le traitement de première intention. Des traitements médicamenteux peuvent réguler le transit. La neuromodulation sacrée est une option pour les cas résistants. La chirurgie réparatrice est possible quand le sphincter est lésé.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">En parler</h2>
<p class="text-gray-600 leading-relaxed">Le premier pas est d'en parler à son médecin traitant ou à un gastro-entérologue. L'association Var Incontinence accueille également les personnes souffrant d'incontinence anale dans ses groupes de parole à Toulon.</p>`,
    lien1: { slug: "tabou-incontinence-briser-silence", titre: "Briser le tabou", desc: "Pourquoi il faut en parler" },
    lien2: { slug: "reeducation-perineale-toulon", titre: "Rééducation périnéale", desc: "Consulter à Toulon" }
  },
  {
    slug: "incontinence-voyages-conseils",
    titre: "Voyager avec une incontinence : conseils pratiques",
    categorie: "Pratique",
    resume: "L'incontinence ne doit pas vous empêcher de voyager. Préparation, protections adaptées et astuces pour des déplacements sereins.",
    contenu: `<p class="text-gray-600 leading-relaxed text-lg">Beaucoup de personnes incontinentes renoncent aux voyages par peur des accidents. Avec une bonne préparation, il est tout à fait possible de voyager sereinement.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Avant le départ</h2>
<p class="text-gray-600 leading-relaxed">Prévoyez suffisamment de protections pour tout le voyage, plus une marge de sécurité. Emportez des sacs à déchets discrets. Repérez les toilettes sur votre itinéraire (applications comme Flush ou Toilet Finder). Consultez votre médecin avant un long voyage pour adapter votre traitement.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">En transport</h2>
<p class="text-gray-600 leading-relaxed">En avion, choisissez un siège côté couloir. En voiture, prévoyez des arrêts réguliers. En train, repérez la voiture la plus proche des toilettes. Portez des vêtements confortables et faciles à retirer.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Sur place</h2>
<p class="text-gray-600 leading-relaxed">À l'hôtel, protégez le matelas avec une alèse. Gardez un kit de change facilement accessible. Ne laissez pas l'incontinence dicter vos activités : avec les bonnes protections, vous pouvez profiter pleinement de votre séjour.</p>`,
    lien1: { slug: "protections-urinaires-guide", titre: "Guide protections", desc: "Bien choisir sa protection" },
    lien2: { slug: "incontinence-travail-vie-professionnelle", titre: "Vie professionnelle", desc: "Gérer au quotidien" }
  },
  {
    slug: "prise-en-charge-incontinence-securite-sociale",
    titre: "Remboursement de l'incontinence : ce que prend en charge la Sécurité sociale",
    categorie: "Droits",
    resume: "Protections, rééducation, chirurgie : quels sont les remboursements prévus par la Sécurité sociale pour l'incontinence en 2026 ?",
    contenu: `<p class="text-gray-600 leading-relaxed text-lg">La prise en charge financière de l'incontinence a évolué ces dernières années. Voici un point complet sur les remboursements auxquels vous avez droit.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">La rééducation périnéale</h2>
<p class="text-gray-600 leading-relaxed">Sur prescription médicale, les séances de rééducation sont remboursées à 60 % par la Sécurité sociale (100 % en post-partum et en ALD). La complémentaire santé couvre généralement le reste.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Les protections urinaires</h2>
<p class="text-gray-600 leading-relaxed">Depuis 2020, certaines protections absorbantes sont inscrites à la LPPR (Liste des Produits et Prestations Remboursables) sur prescription. Le remboursement varie selon le type de protection et le niveau d'incontinence. Rapprochez-vous de votre médecin pour une prescription adaptée.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Les traitements et la chirurgie</h2>
<p class="text-gray-600 leading-relaxed">Les traitements médicamenteux sont remboursés selon les règles habituelles. Les interventions chirurgicales (bandelettes, sphincter artificiel) sont prises en charge. En cas d'ALD, le reste à charge est nul.</p>
<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Les aides complémentaires</h2>
<p class="text-gray-600 leading-relaxed">La PCH et l'APA peuvent compléter la prise en charge pour les personnes en situation de handicap ou de perte d'autonomie. L'association Var Incontinence vous aide à identifier toutes les aides disponibles.</p>`,
    lien1: { slug: "incontinence-handicap-aides-var", titre: "Handicap et aides", desc: "Dispositifs dans le Var" },
    lien2: { slug: "protections-urinaires-guide", titre: "Guide protections", desc: "Bien choisir sa protection" }
  }
];

// Formater la date en français
function formatDate(date) {
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Vérifier quels articles existent déjà
const existingSlugs = fs.readdirSync(BLOG_DIR)
  .filter(f => f.endsWith('.astro'))
  .map(f => f.replace('.astro', ''));

// Trouver le prochain article à créer
const nextArticle = articles.find(a => !existingSlugs.includes(a.slug));

if (!nextArticle) {
  console.log('Tous les articles de la banque ont déjà été publiés.');
  process.exit(0);
}

const today = formatDate(new Date());

// Générer le fichier .astro
const astroContent = `---
import Layout from '../../layouts/Layout.astro';
const base = import.meta.env.BASE_URL;
---

<Layout
\ttitle="${nextArticle.titre} | Var Incontinence"
\tdescription="${nextArticle.resume}"
>

\t<!-- Hero -->
\t<section class="bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-600 text-white py-16 md:py-20">
\t\t<div class="max-w-4xl mx-auto px-4">
\t\t\t<nav class="text-teal-200 text-sm mb-6">
\t\t\t\t<a href={base} class="hover:text-white transition-colors">Accueil</a>
\t\t\t\t<span class="mx-2">/</span>
\t\t\t\t<a href={\`\${base}blog-handicap-incontinence-toulon/\`} class="hover:text-white transition-colors">Blog</a>
\t\t\t\t<span class="mx-2">/</span>
\t\t\t\t<span class="text-white">${nextArticle.categorie}</span>
\t\t\t</nav>
\t\t\t<span class="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">${nextArticle.categorie}</span>
\t\t\t<h1 class="text-3xl md:text-5xl font-bold mt-4 mb-4">${nextArticle.titre}</h1>
\t\t\t<p class="text-teal-200 text-sm">${today}</p>
\t\t</div>
\t</section>

\t<!-- Contenu -->
\t<article class="py-16 bg-white">
\t\t<div class="max-w-3xl mx-auto px-4 prose prose-gray prose-lg">
\t\t\t${nextArticle.contenu}

\t\t\t<div class="bg-teal-50 rounded-2xl p-6 mt-10">
\t\t\t\t<h3 class="font-bold text-teal-900 mb-2">Besoin d'accompagnement ?</h3>
\t\t\t\t<p class="text-teal-800 text-sm leading-relaxed">
\t\t\t\t\tL'association Var Incontinence à Toulon est là pour vous écouter et vous orienter. Contactez-nous en toute confidentialité.
\t\t\t\t</p>
\t\t\t</div>
\t\t</div>
\t</article>

\t<!-- Navigation articles -->
\t<section class="py-12 bg-white border-t border-gray-100">
\t\t<div class="max-w-4xl mx-auto px-4">
\t\t\t<h2 class="text-xl font-bold text-gray-900 mb-4">Lire aussi</h2>
\t\t\t<div class="grid sm:grid-cols-2 gap-4">
\t\t\t\t<a href={\`\${base}blog/${nextArticle.lien1.slug}/\`} class="bg-gray-50 rounded-xl p-4 hover:bg-teal-50 transition-all text-sm">
\t\t\t\t\t<p class="font-semibold text-gray-900">${nextArticle.lien1.titre}</p><p class="text-xs text-gray-500">${nextArticle.lien1.desc}</p>
\t\t\t\t</a>
\t\t\t\t<a href={\`\${base}blog/${nextArticle.lien2.slug}/\`} class="bg-gray-50 rounded-xl p-4 hover:bg-teal-50 transition-all text-sm">
\t\t\t\t\t<p class="font-semibold text-gray-900">${nextArticle.lien2.titre}</p><p class="text-xs text-gray-500">${nextArticle.lien2.desc}</p>
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
const filePath = path.join(BLOG_DIR, `${nextArticle.slug}.astro`);
fs.writeFileSync(filePath, astroContent, 'utf-8');
console.log(`Article créé : ${nextArticle.slug}`);

// Mettre à jour le listing blog
let listing = fs.readFileSync(LISTING_FILE, 'utf-8');

// Ajouter l'article dans le tableau articles du frontmatter
const newEntry = `\t{
\t\ttitre: "${nextArticle.titre}",
\t\tresume: "${nextArticle.resume}",
\t\tcategorie: "${nextArticle.categorie}",
\t\tdate: "${today}",
\t\tslug: "${nextArticle.slug}"
\t},\n`;

// Insérer après le premier "const articles = ["
listing = listing.replace(
  'const articles = [\n',
  'const articles = [\n' + newEntry
);

fs.writeFileSync(LISTING_FILE, listing, 'utf-8');
console.log('Blog listing mis à jour.');
