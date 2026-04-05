export interface Ssiad {
	nom: string;
	adresse: string;
	telephone: string;
	description: string;
	specialites: string[];
	secteur: string;
}

export const ssiads: Ssiad[] = [
	{
		nom: "SSIAD de Toulon - Centre Hospitalier Intercommunal (CHITS)",
		adresse: "La Seyne-sur-Mer / Toulon, 83000 Toulon",
		telephone: "04 94 61 61 61",
		description: "Le SSIAD rattaché au Centre Hospitalier Intercommunal Toulon La Seyne-sur-Mer intervient auprès des personnes âgées dépendantes et des patients en situation de handicap. Soins infirmiers, aide à la toilette, prévention des escarres, suivi de l'incontinence et accompagnement post-hospitalisation.",
		specialites: ["Personnes âgées", "Post-hospitalisation", "Incontinence", "Escarres"],
		secteur: "Toulon centre / La Seyne"
	},
	{
		nom: "SSIAD ADMR du Var - Antenne de Toulon",
		adresse: "197 rue Jean Jaurès, 83000 Toulon",
		telephone: "04 94 10 56 00",
		description: "L'ADMR du Var propose un SSIAD intervenant à domicile sur Toulon et ses alentours. Soins d'hygiène, nursing, prévention des complications liées à l'alitement, aide aux changes et accompagnement des personnes souffrant d'incontinence urinaire ou fécale.",
		specialites: ["Aide à domicile", "Nursing", "Incontinence", "Personnes âgées"],
		secteur: "Toulon / périphérie"
	},
	{
		nom: "SSIAD Mutualité Française PACA - Toulon",
		adresse: "13 rue Gimelli, 83000 Toulon",
		telephone: "04 94 22 75 00",
		description: "Le SSIAD de la Mutualité Française en PACA assure des soins infirmiers à domicile pour les personnes de plus de 60 ans et les adultes handicapés. Prise en charge de l'incontinence, soins de stomie, nursing quotidien et coordination avec le médecin traitant.",
		specialites: ["Soins infirmiers", "Stomie", "Incontinence", "Coordination médicale"],
		secteur: "Toulon centre"
	},
	{
		nom: "SSIAD Aide et Soins à Domicile (ASD) Toulon",
		adresse: "Boulevard de Strasbourg, 83000 Toulon",
		telephone: "04 94 18 60 00",
		description: "Le SSIAD ASD Toulon propose des interventions à domicile pour les personnes âgées dépendantes ou en perte d'autonomie. Soins d'hygiène corporelle, changes, surveillance de l'état cutané, prévention de l'incontinence et soutien aux aidants familiaux.",
		specialites: ["Personnes âgées", "Soutien aidants", "Hygiène", "Incontinence"],
		secteur: "Toulon est"
	},
	{
		nom: "SSIAD La Garde - Secteur Toulon Est",
		adresse: "Avenue du Général de Gaulle, 83130 La Garde",
		telephone: "04 94 08 98 00",
		description: "Ce SSIAD couvre le secteur de Toulon Est et La Garde. Il intervient à domicile pour des soins infirmiers, la gestion de l'incontinence, l'accompagnement en fin de vie et les soins palliatifs. Équipe d'aides-soignants et d'infirmiers coordinateurs.",
		specialites: ["Soins palliatifs", "Incontinence", "Fin de vie", "Coordination"],
		secteur: "Toulon est / La Garde"
	},
	{
		nom: "SSIAD Soleil d'Automne - La Valette-du-Var",
		adresse: "Avenue de Toulon, 83160 La Valette-du-Var",
		telephone: "04 94 61 33 50",
		description: "Le SSIAD Soleil d'Automne intervient sur La Valette et les quartiers est de Toulon. Spécialisé dans la prise en charge des personnes atteintes de la maladie d'Alzheimer ou de troubles apparentés. Soins d'hygiène, prévention de l'incontinence et stimulation cognitive.",
		specialites: ["Alzheimer", "Troubles cognitifs", "Incontinence", "Stimulation"],
		secteur: "La Valette / Toulon est"
	},
	{
		nom: "SSIAD Croix-Rouge Française - Toulon",
		adresse: "Quartier Sainte-Musse, 83000 Toulon",
		telephone: "04 94 36 42 00",
		description: "Le SSIAD de la Croix-Rouge à Toulon prend en charge les patients à domicile nécessitant des soins infirmiers quotidiens. Gestion de l'incontinence, soins de nursing, éducation thérapeutique du patient et de l'entourage sur les protections et dispositifs médicaux.",
		specialites: ["Éducation thérapeutique", "Nursing", "Incontinence", "Protections"],
		secteur: "Toulon nord / Sainte-Musse"
	},
	{
		nom: "SSIAD du Mourillon - Association Santé à Domicile",
		adresse: "Quartier du Mourillon, 83000 Toulon",
		telephone: "04 94 41 22 10",
		description: "SSIAD de proximité desservant le Mourillon et le Cap Brun. Interventions quotidiennes pour les soins d'hygiène, la toilette, le changement de protections urinaires, le suivi des sondes et la prévention des complications liées à l'incontinence.",
		specialites: ["Soins de proximité", "Protections urinaires", "Sondes", "Incontinence"],
		secteur: "Mourillon / Cap Brun"
	},
	{
		nom: "SSIAD Les Abeilles - Toulon Ouest",
		adresse: "Quartier des Routes, 83000 Toulon",
		telephone: "04 94 92 15 30",
		description: "Ce SSIAD couvre l'ouest de Toulon (Les Routes, Le Pont du Las, La Beaucaire). Prise en charge globale incluant soins infirmiers, aide à la mobilité, gestion de l'incontinence, prévention des chutes et maintien de l'autonomie à domicile.",
		specialites: ["Maintien à domicile", "Mobilité", "Incontinence", "Prévention chutes"],
		secteur: "Toulon ouest"
	},
	{
		nom: "SPASAD Var Soins Services - Toulon / Hyères",
		adresse: "Avenue Lazare Carnot, 83000 Toulon",
		telephone: "04 94 12 78 90",
		description: "Structure polyvalente combinant SSIAD et SAAD (Service d'Aide et d'Accompagnement à Domicile). Offre une prise en charge complète : soins infirmiers, aide à la vie quotidienne, accompagnement de l'incontinence, livraison de protections et soutien psychologique.",
		specialites: ["SPASAD", "Aide quotidienne", "Incontinence", "Soutien psychologique"],
		secteur: "Toulon / Hyères"
	}
];
