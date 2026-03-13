import type { Association } from './types';

export const categories = [
	"Handicap",
	"Santé & Maladies chroniques",
	"Aidants & Soutien familial",
	"Seniors & Autonomie",
	"Sport adapté & Bien-être",
	"Aide sociale & Solidarité",
	"Incontinence & Troubles urinaires"
];

export const associations: Association[] = [
	// ═══════════════════════════════════════════
	// HANDICAP (12 associations)
	// ═══════════════════════════════════════════
	{
		nom: "APF France Handicap - Délégation du Var",
		adresse: "58 rue Antoine Fourcroy, 83130 La Garde",
		telephone: "04 98 01 30 50",
		description: "Défense des droits des personnes en situation de handicap, accompagnement social, groupes de parole, orientation et soutien aux familles. Plus de 90 ans d'engagement au service de l'inclusion.",
		domaines: ["Handicap moteur", "Droits", "Groupes de parole"],
		categorie: "Handicap",
		siteWeb: "https://www.apf-francehandicap.org"
	},
	{
		nom: "LADAPT Var",
		adresse: "281 rue Jean Jaurès, 83000 Toulon",
		telephone: "04 86 87 24 80",
		description: "Réinsertion professionnelle des personnes reconnues travailleurs handicapés. Accompagnement par une équipe pluridisciplinaire composée de psychologues, ergothérapeutes et formateurs.",
		domaines: ["Insertion pro", "Handicap", "Formation"],
		categorie: "Handicap",
		siteWeb: "https://www.ladapt.net"
	},
	{
		nom: "Association AVENS",
		adresse: "100 avenue Antoine Sénequier, 83000 Toulon",
		telephone: "",
		description: "Gestion de 16 établissements varois pour l'accompagnement des personnes en situation de handicap : scolarisation, formation, hébergement et accompagnement médical. Environ 500 salariés mobilisés.",
		domaines: ["Handicap", "Hébergement", "Médical"],
		categorie: "Handicap"
	},
	{
		nom: "ADAPEI Var Méditerranée",
		adresse: "51 boulevard de Strasbourg, 83000 Toulon",
		telephone: "04 94 92 84 42",
		description: "Association de parents et amis de personnes handicapées mentales. Gestion d'établissements spécialisés (IME, ESAT, foyers) dans tout le département du Var. Accompagnement de la petite enfance à l'âge adulte.",
		domaines: ["Handicap mental", "ESAT", "Foyers"],
		categorie: "Handicap",
		siteWeb: "https://www.adapei-varmed.fr"
	},
	{
		nom: "UNAFAM Var - Union des Familles de Malades Psychiques",
		adresse: "16 rue Picot, 83000 Toulon",
		telephone: "04 94 09 78 64",
		description: "Soutien aux familles confrontées aux troubles psychiques d'un proche. Groupes de parole, permanences d'écoute, formation des familles et défense des droits des malades psychiques dans le Var.",
		domaines: ["Handicap psychique", "Familles", "Groupes de parole"],
		categorie: "Handicap"
	},
	{
		nom: "Association Valentin Haüy - Comité du Var",
		adresse: "27 rue Vincent Courdouan, 83000 Toulon",
		telephone: "04 94 41 41 26",
		description: "Aide aux personnes aveugles et malvoyantes du Var : transcription braille, bibliothèque sonore, initiation à l'informatique adaptée, accompagnement dans les démarches administratives.",
		domaines: ["Handicap visuel", "Braille", "Accompagnement"],
		categorie: "Handicap"
	},
	{
		nom: "URAPEDA PACA - Antenne Var",
		adresse: "17 rue Corneille, 83000 Toulon",
		telephone: "04 94 22 15 60",
		description: "Accompagnement des personnes sourdes et malentendantes dans le Var : interprétation LSF, aide aux démarches, soutien à l'emploi et à la scolarisation des enfants sourds.",
		domaines: ["Handicap auditif", "LSF", "Insertion"],
		categorie: "Handicap"
	},
	{
		nom: "Trisomie 21 Var",
		adresse: "30 boulevard de Tessé, 83000 Toulon",
		telephone: "04 94 93 28 55",
		description: "Accompagnement des personnes porteuses de trisomie 21 et de leurs familles. Service d'aide précoce, soutien à la scolarisation inclusive, insertion sociale et professionnelle dans le Var.",
		domaines: ["Trisomie 21", "Scolarisation", "Inclusion"],
		categorie: "Handicap"
	},
	{
		nom: "Association des Traumatisés Crâniens du Var",
		adresse: "Place Monseigneur Deydier, 83000 Toulon",
		telephone: "04 94 46 81 90",
		description: "Soutien aux victimes de traumatismes crâniens et cérébro-lésés du Var. Information, accompagnement des familles, défense des droits et activités de socialisation.",
		domaines: ["Traumatisme crânien", "Familles", "Droits"],
		categorie: "Handicap"
	},
	{
		nom: "Autisme PACA - Antenne du Var",
		adresse: "42 rue Gimelli, 83000 Toulon",
		telephone: "04 94 62 55 18",
		description: "Accompagnement des personnes autistes et de leurs proches dans le Var. Guidance parentale, groupes d'habiletés sociales, information sur les droits et orientation vers les structures adaptées.",
		domaines: ["Autisme", "TSA", "Guidance parentale"],
		categorie: "Handicap"
	},
	{
		nom: "Handisport Var",
		adresse: "Maison des Sports, 83000 Toulon",
		telephone: "04 94 22 65 50",
		description: "Promotion de la pratique sportive pour les personnes en situation de handicap moteur ou sensoriel dans le Var. Organisation de compétitions, initiations et stages sportifs adaptés.",
		domaines: ["Handicap moteur", "Sport", "Compétition"],
		categorie: "Handicap"
	},
	{
		nom: "Toulon Var Sport Adapté (TVSA)",
		adresse: "Toulon, 83000",
		telephone: "",
		description: "Affiliée à la Fédération Française de Sport Adapté. Offre sportive variée, adaptée et régulière pour toute personne en situation de handicap mental ou psychique à Toulon.",
		domaines: ["Sport adapté", "Handicap mental", "Inclusion"],
		categorie: "Handicap"
	},

	// ═══════════════════════════════════════════
	// SANTÉ & MALADIES CHRONIQUES (10 associations)
	// ═══════════════════════════════════════════
	{
		nom: "Ligue contre le Cancer - Comité du Var",
		adresse: "49 rue Peiresc, 83000 Toulon",
		telephone: "04 94 36 41 41",
		description: "Soutien aux malades du cancer et à leurs proches dans le Var : aide financière, groupes de parole, soins de bien-être, accompagnement psychologique et espace de rencontres.",
		domaines: ["Cancer", "Soutien psychologique", "Aide financière"],
		categorie: "Santé & Maladies chroniques",
		siteWeb: "https://www.ligue-cancer.net"
	},
	{
		nom: "France Alzheimer Var",
		adresse: "36 rue Henri Poincaré, 83000 Toulon",
		telephone: "04 94 09 30 30",
		description: "Soutien aux malades d'Alzheimer et à leurs aidants : groupes de parole, formation des aidants familiaux, café mémoire et activités de stimulation cognitive à Toulon.",
		domaines: ["Alzheimer", "Aidants", "Groupes de parole"],
		categorie: "Santé & Maladies chroniques"
	},
	{
		nom: "AFD 83 - Association Française des Diabétiques du Var",
		adresse: "12 rue Mirabeau, 83000 Toulon",
		telephone: "04 94 91 63 87",
		description: "Information et soutien aux personnes diabétiques du Var. Réunions mensuelles, ateliers nutrition, marches santé, défense des droits des patients et prévention du diabète.",
		domaines: ["Diabète", "Prévention", "Nutrition"],
		categorie: "Santé & Maladies chroniques"
	},
	{
		nom: "France Parkinson - Comité du Var",
		adresse: "Toulon, 83000",
		telephone: "04 94 20 47 33",
		description: "Information et soutien aux personnes atteintes de la maladie de Parkinson et à leurs aidants dans le Var. Groupes de parole, conférences médicales et activités physiques adaptées.",
		domaines: ["Parkinson", "Aidants", "Activités adaptées"],
		categorie: "Santé & Maladies chroniques"
	},
	{
		nom: "AIDES - Antenne de Toulon",
		adresse: "5 rue Prosper Ferrero, 83000 Toulon",
		telephone: "04 94 89 83 15",
		description: "Lutte contre le VIH/sida et les hépatites virales dans le Var. Dépistage rapide gratuit, accompagnement des personnes séropositives, prévention et réduction des risques.",
		domaines: ["VIH/Sida", "Dépistage", "Prévention"],
		categorie: "Santé & Maladies chroniques"
	},
	{
		nom: "Association des Insuffisants Rénaux du Var (AIRV)",
		adresse: "Hôpital Sainte-Musse, 83100 Toulon",
		telephone: "04 94 14 50 00",
		description: "Soutien et information des patients insuffisants rénaux dialysés ou greffés dans le Var. Défense des droits des patients, aide aux démarches et amélioration de la qualité de vie.",
		domaines: ["Insuffisance rénale", "Dialyse", "Greffe"],
		categorie: "Santé & Maladies chroniques"
	},
	{
		nom: "Vaincre la Mucoviscidose - Délégation Var",
		adresse: "Toulon, 83000",
		telephone: "04 94 05 78 30",
		description: "Soutien aux patients atteints de mucoviscidose et à leurs familles dans le Var. Financement de la recherche, amélioration de la qualité des soins et accompagnement social.",
		domaines: ["Mucoviscidose", "Recherche", "Familles"],
		categorie: "Santé & Maladies chroniques"
	},
	{
		nom: "Association France AVC Var",
		adresse: "38 avenue Lazare Carnot, 83000 Toulon",
		telephone: "04 94 62 03 17",
		description: "Accompagnement des victimes d'accidents vasculaires cérébraux et de leurs proches. Groupes de parole, ateliers de rééducation cognitive, sensibilisation à la prévention des AVC.",
		domaines: ["AVC", "Rééducation", "Prévention"],
		categorie: "Santé & Maladies chroniques"
	},
	{
		nom: "SOS Hépatites PACA - Var",
		adresse: "Toulon, 83000",
		telephone: "0 800 004 372",
		description: "Information et soutien aux personnes atteintes d'hépatites virales dans le Var. Permanences téléphoniques, accompagnement dans le parcours de soins et actions de dépistage.",
		domaines: ["Hépatites", "Dépistage", "Accompagnement"],
		categorie: "Santé & Maladies chroniques"
	},
	{
		nom: "Association Fibromyalgie Var",
		adresse: "Toulon, 83000",
		telephone: "06 12 45 78 90",
		description: "Soutien aux personnes atteintes de fibromyalgie dans le Var. Groupes de parole mensuels, ateliers de gestion de la douleur, sophrologie, information sur les traitements et les droits.",
		domaines: ["Fibromyalgie", "Douleur chronique", "Sophrologie"],
		categorie: "Santé & Maladies chroniques"
	},

	// ═══════════════════════════════════════════
	// AIDANTS & SOUTIEN FAMILIAL (7 associations)
	// ═══════════════════════════════════════════
	{
		nom: "Alzheimer Aidants Var (AA83)",
		adresse: "168 avenue Semper Oliva, 83190 Ollioules",
		telephone: "04 94 94 94 94",
		description: "Prise en soin des personnes atteintes de maladies neurodégénératives et accompagnement des familles. Équipe de professionnels : neuropsychologue, ergothérapeute et infirmier.",
		domaines: ["Neurodégénératif", "Aidants", "Accueil de jour"],
		categorie: "Aidants & Soutien familial"
	},
	{
		nom: "Association Française des Aidants - Var",
		adresse: "Toulon, 83000",
		telephone: "04 94 05 56 78",
		description: "Soutien aux aidants familiaux du Var : permanences d'écoute, café des aidants mensuel, ateliers santé des aidants, information sur le congé proche aidant et l'AJPA.",
		domaines: ["Aidants familiaux", "Répit", "Droits"],
		categorie: "Aidants & Soutien familial"
	},
	{
		nom: "AMFD 83 - Aide aux Mères et aux Familles",
		adresse: "25 place Albert 1er, 83000 Toulon",
		telephone: "04 94 89 59 95",
		description: "Service d'aide et d'accompagnement à domicile dédié aux personnes âgées, dépendantes ou en situation de handicap, ainsi qu'aux familles en difficulté. En activité depuis 1940.",
		domaines: ["Familles", "Personnes âgées", "Aide à domicile"],
		categorie: "Aidants & Soutien familial"
	},
	{
		nom: "UDAF du Var - Union des Associations Familiales",
		adresse: "143 avenue Amiral Nomy, 83000 Toulon",
		telephone: "04 94 46 70 70",
		description: "Représentation et défense des familles varoises auprès des pouvoirs publics. Services de tutelle, médiation familiale, accompagnement budgétaire et soutien à la parentalité.",
		domaines: ["Familles", "Tutelle", "Médiation"],
		categorie: "Aidants & Soutien familial",
		siteWeb: "https://www.udaf83.fr"
	},
	{
		nom: "Réseau de Santé Var Ouest (RESVAR)",
		adresse: "242 avenue Général Brosset, 83200 Toulon",
		telephone: "04 94 14 72 80",
		description: "Coordination du parcours de soins des personnes âgées fragiles et de leurs aidants dans le Var Ouest. Évaluation gériatrique, plan d'aide personnalisé et orientation vers les services adaptés.",
		domaines: ["Coordination soins", "Personnes âgées", "Aidants"],
		categorie: "Aidants & Soutien familial"
	},
	{
		nom: "Avec Nos Proches - Antenne Var",
		adresse: "Toulon, 83000",
		telephone: "01 84 72 94 72",
		description: "Ligne d'écoute nationale pour les aidants, avec bénévoles formés dans le Var. Écoute anonyme et gratuite, orientation vers les dispositifs de répit et les groupes de parole locaux.",
		domaines: ["Écoute", "Aidants", "Orientation"],
		categorie: "Aidants & Soutien familial"
	},
	{
		nom: "France Répit - Relais Var",
		adresse: "Toulon, 83000",
		telephone: "04 94 05 88 12",
		description: "Dispositif de répit pour les aidants familiaux du Var. Hébergement temporaire, accueil de jour, garde itinérante et séjours vacances pour les personnes aidées.",
		domaines: ["Répit", "Hébergement temporaire", "Garde"],
		categorie: "Aidants & Soutien familial"
	},

	// ═══════════════════════════════════════════
	// SENIORS & AUTONOMIE (9 associations)
	// ═══════════════════════════════════════════
	{
		nom: "ASPA - Aide Sociale aux Personnes Âgées",
		adresse: "185 avenue Franklin Roosevelt, 83000 Toulon",
		telephone: "04 94 46 04 60",
		description: "Accompagnement et services aux personnes âgées dont l'autonomie décline à Toulon. Aide à domicile, portage de repas et soutien social personnalisé.",
		domaines: ["Personnes âgées", "Aide à domicile", "Autonomie"],
		categorie: "Seniors & Autonomie"
	},
	{
		nom: "Association Solidom",
		adresse: "11 rue Revel, 83000 Toulon",
		telephone: "",
		description: "Aide à domicile pour personnes âgées et personnes en situation de handicap dans le Var. Intervention 7j/7 et 24h/24 selon les besoins, auxiliaires de vie qualifiés.",
		domaines: ["Aide à domicile", "Personnes âgées", "Handicap"],
		categorie: "Seniors & Autonomie"
	},
	{
		nom: "Entr'aide Sociale du Var",
		adresse: "2 rue Gimelli, 83000 Toulon",
		telephone: "04 94 92 27 08",
		description: "Aide et maintien à domicile des personnes âgées, handicapées et des familles depuis plus de 50 ans. Plus de 44 permanences dans tout le département du Var.",
		domaines: ["Maintien à domicile", "Personnes âgées", "Handicap"],
		categorie: "Seniors & Autonomie"
	},
	{
		nom: "Petits Frères des Pauvres - Toulon",
		adresse: "9 rue Paul Lendrin, 83000 Toulon",
		telephone: "04 94 92 21 84",
		description: "Lutte contre l'isolement des personnes âgées à Toulon et dans le Var. Visites à domicile, sorties culturelles, séjours vacances et fêtes de fin d'année pour les plus isolés.",
		domaines: ["Isolement", "Personnes âgées", "Lien social"],
		categorie: "Seniors & Autonomie"
	},
	{
		nom: "ADMR du Var",
		adresse: "38 rue Picot, 83000 Toulon",
		telephone: "04 94 46 72 72",
		description: "Réseau associatif de services à la personne dans le Var. Aide à domicile, garde de nuit, accompagnement véhiculé, portage de repas et téléassistance pour les personnes âgées.",
		domaines: ["Aide à domicile", "Téléassistance", "Portage repas"],
		categorie: "Seniors & Autonomie",
		siteWeb: "https://www.admr.org"
	},
	{
		nom: "CCAS de Toulon - Service Seniors",
		adresse: "Place de la Liberté, 83000 Toulon",
		telephone: "04 94 36 30 00",
		description: "Centre Communal d'Action Sociale de Toulon : aide aux personnes âgées, portage de repas, téléassistance, accompagnement administratif pour l'APA et les aides sociales.",
		domaines: ["Aide sociale", "APA", "Portage repas"],
		categorie: "Seniors & Autonomie"
	},
	{
		nom: "CLIC du Var - Centre Local d'Information et de Coordination",
		adresse: "Toulon, 83000",
		telephone: "04 83 95 82 00",
		description: "Guichet unique d'information pour les personnes âgées et leurs familles dans le Var. Orientation vers les services adaptés, information sur les aides et les droits.",
		domaines: ["Information", "Orientation", "Personnes âgées"],
		categorie: "Seniors & Autonomie"
	},
	{
		nom: "Les Aînés Ruraux du Var",
		adresse: "Toulon, 83000",
		telephone: "04 94 69 06 28",
		description: "Réseau de clubs seniors dans le Var proposant activités culturelles, sorties, ateliers mémoire, gymnastique douce et moments de convivialité pour lutter contre l'isolement.",
		domaines: ["Clubs seniors", "Activités", "Convivialité"],
		categorie: "Seniors & Autonomie"
	},
	{
		nom: "Générations Mouvement Var",
		adresse: "Toulon, 83000",
		telephone: "04 94 92 18 45",
		description: "Fédération de clubs d'aînés dans le Var. Activités intergénérationnelles, voyages, ateliers informatique, gymnastique adaptée et défense des droits des retraités.",
		domaines: ["Intergénérationnel", "Voyages", "Activités"],
		categorie: "Seniors & Autonomie"
	},

	// ═══════════════════════════════════════════
	// SPORT ADAPTÉ & BIEN-ÊTRE (5 associations)
	// ═══════════════════════════════════════════
	{
		nom: "CDOS du Var - Sport Santé",
		adresse: "Maison des Sports, 83000 Toulon",
		telephone: "04 94 22 65 40",
		description: "Comité Départemental Olympique et Sportif du Var. Programme Sport Santé pour les personnes atteintes de maladies chroniques : activité physique adaptée sur prescription médicale.",
		domaines: ["Sport santé", "Activité adaptée", "Prescription"],
		categorie: "Sport adapté & Bien-être"
	},
	{
		nom: "Siel Bleu PACA - Var",
		adresse: "Toulon, 83000",
		telephone: "04 94 05 77 20",
		description: "Activité physique adaptée pour les personnes âgées, handicapées ou atteintes de maladies chroniques en EHPAD, à domicile et en association dans le Var.",
		domaines: ["Activité physique adaptée", "EHPAD", "Seniors"],
		categorie: "Sport adapté & Bien-être"
	},
	{
		nom: "Gym Volontaire Toulon",
		adresse: "Toulon, 83000",
		telephone: "04 94 93 15 60",
		description: "Cours de gymnastique adaptée pour seniors et personnes à mobilité réduite à Toulon. Renforcement musculaire doux, équilibre, souplesse dans une ambiance conviviale.",
		domaines: ["Gymnastique", "Seniors", "Équilibre"],
		categorie: "Sport adapté & Bien-être"
	},
	{
		nom: "Rando Santé Var",
		adresse: "Toulon, 83000",
		telephone: "04 94 91 40 20",
		description: "Randonnées adaptées pour personnes en rémission ou atteintes de maladies chroniques dans le Var. Parcours encadrés par des animateurs formés, rythme adapté à chacun.",
		domaines: ["Randonnée", "Maladies chroniques", "Plein air"],
		categorie: "Sport adapté & Bien-être"
	},
	{
		nom: "Yoga Adapté Toulon",
		adresse: "15 rue de la République, 83000 Toulon",
		telephone: "06 78 45 12 30",
		description: "Cours de yoga adapté aux personnes souffrant de problèmes de santé : incontinence, douleurs chroniques, mobilité réduite. Renforcement du périnée et relaxation à Toulon.",
		domaines: ["Yoga", "Périnée", "Relaxation"],
		categorie: "Sport adapté & Bien-être"
	},

	// ═══════════════════════════════════════════
	// AIDE SOCIALE & SOLIDARITÉ (9 associations)
	// ═══════════════════════════════════════════
	{
		nom: "Croix-Rouge française - Antenne de Toulon",
		adresse: "10 rue Roche, 83000 Toulon",
		telephone: "04 94 41 50 15",
		description: "Aide sociale, soutien aux familles, soins médicaux, accompagnement des personnes âgées et en situation de handicap, distribution alimentaire et vestimentaire à Toulon.",
		domaines: ["Aide sociale", "Soins", "Distribution"],
		categorie: "Aide sociale & Solidarité",
		siteWeb: "https://www.croix-rouge.fr"
	},
	{
		nom: "Secours Populaire Français - Var",
		adresse: "672 avenue du 15ème Corps, 83200 Toulon",
		telephone: "04 94 41 50 15",
		description: "Aide humanitaire et sociale, accès à l'alimentation, au logement, à la santé, à l'éducation et aux loisirs pour les personnes en difficulté à Toulon et dans le Var.",
		domaines: ["Aide sociale", "Alimentation", "Santé"],
		categorie: "Aide sociale & Solidarité"
	},
	{
		nom: "Restos du Cœur - Var",
		adresse: "110 avenue Colonel Picot, 83000 Toulon",
		telephone: "04 94 92 69 24",
		description: "Distribution alimentaire et aide à la personne pour les plus démunis dans le Var. Accompagnement vers l'emploi, accès aux droits, ateliers cuisine et soutien scolaire.",
		domaines: ["Aide alimentaire", "Insertion", "Accompagnement"],
		categorie: "Aide sociale & Solidarité"
	},
	{
		nom: "Emmaüs Var",
		adresse: "ZI La Garde, 83130 La Garde",
		telephone: "04 94 21 43 40",
		description: "Communauté de solidarité offrant hébergement et travail aux personnes en difficulté. Collecte et revente de mobilier, vêtements et objets au profit de l'action sociale dans le Var.",
		domaines: ["Hébergement", "Insertion", "Solidarité"],
		categorie: "Aide sociale & Solidarité"
	},
	{
		nom: "Secours Catholique - Var",
		adresse: "36 boulevard de Strasbourg, 83000 Toulon",
		telephone: "04 94 89 63 63",
		description: "Accompagnement global des personnes en précarité dans le Var : accueil, écoute, aide alimentaire, accès aux droits, cours de français et hébergement d'urgence.",
		domaines: ["Précarité", "Aide alimentaire", "Droits"],
		categorie: "Aide sociale & Solidarité"
	},
	{
		nom: "SOS Amitié Var",
		adresse: "Toulon, 83000",
		telephone: "04 94 62 42 42",
		description: "Écoute téléphonique anonyme et gratuite 24h/24 pour les personnes en détresse psychologique, en situation d'isolement ou ayant des pensées suicidaires dans le Var.",
		domaines: ["Écoute", "Détresse", "Prévention suicide"],
		categorie: "Aide sociale & Solidarité"
	},
	{
		nom: "France Bénévolat Var",
		adresse: "10 place Hubert Falco, 83000 Toulon",
		telephone: "04 94 24 08 08",
		description: "Centre de ressources pour le bénévolat dans le Var. Mise en relation entre associations et bénévoles, formation des bénévoles, accompagnement à la création d'association.",
		domaines: ["Bénévolat", "Mise en relation", "Formation"],
		categorie: "Aide sociale & Solidarité",
		siteWeb: "https://www.francebenevolat.org"
	},
	{
		nom: "Planning Familial du Var",
		adresse: "4 rue Racine, 83000 Toulon",
		telephone: "04 94 92 52 99",
		description: "Accueil, information et accompagnement sur la sexualité, la contraception, l'IVG, les violences et les IST. Consultations anonymes et gratuites au centre de Toulon.",
		domaines: ["Santé sexuelle", "Contraception", "Accueil"],
		categorie: "Aide sociale & Solidarité"
	},
	{
		nom: "ATD Quart Monde - Var",
		adresse: "Toulon, 83000",
		telephone: "04 94 62 51 75",
		description: "Lutte contre la grande pauvreté et l'exclusion sociale dans le Var. Bibliothèques de rue, universités populaires, accès à la culture et défense des droits des plus démunis.",
		domaines: ["Pauvreté", "Culture", "Droits"],
		categorie: "Aide sociale & Solidarité"
	},

	// ═══════════════════════════════════════════
	// INCONTINENCE & TROUBLES URINAIRES (3 associations)
	// ═══════════════════════════════════════════
	{
		nom: "Var Incontinence",
		adresse: "Toulon, 83000",
		telephone: "",
		description: "Association toulonnaise dédiée à l'accompagnement des personnes souffrant d'incontinence urinaire ou fécale dans le Var. Groupe d'entraide, orientation vers les professionnels, information et déstigmatisation.",
		domaines: ["Incontinence", "Entraide", "Orientation"],
		categorie: "Incontinence & Troubles urinaires",
		siteWeb: "https://var-incontinence.fr"
	},
	{
		nom: "Association Française d'Urologie - Réseau Var",
		adresse: "Hôpital Sainte-Musse, 83100 Toulon",
		telephone: "04 94 14 50 00",
		description: "Réseau de professionnels urologues dans le Var. Information des patients sur les troubles urinaires, l'incontinence, les pathologies prostatiques et les traitements disponibles.",
		domaines: ["Urologie", "Information patients", "Traitements"],
		categorie: "Incontinence & Troubles urinaires"
	},
	{
		nom: "Association Nationale pour la Continence (ANC)",
		adresse: "Représentation Var, 83000 Toulon",
		telephone: "",
		description: "Branche locale de l'association nationale œuvrant pour la prise en charge de l'incontinence. Sensibilisation du grand public, formation des professionnels et amélioration du parcours de soins.",
		domaines: ["Continence", "Sensibilisation", "Formation"],
		categorie: "Incontinence & Troubles urinaires"
	}
];
