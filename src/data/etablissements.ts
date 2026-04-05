import type { Etablissement } from './types';

export const etablissements: Etablissement[] = [
	{
		nom: "Mouysset Médical (Médico Sud)",
		adresse: "127 avenue du Général Pruneau, 83000 Toulon",
		telephone: "04 94 03 40 03",
		description: "Spécialiste du matériel médical, orthopédique et des protections pour l'incontinence à Toulon. 3 agences dans le Var (Toulon, La Valette, Le Pradet). Vente, location, livraison à domicile gratuite, SAV et réparation. Marques Tena, Thuasne, Amoena.",
		specialites: ["Orthopédie", "Incontinence", "Location", "Livraison gratuite", "SAV"]
	},
	{
		nom: "Alpha Médical",
		adresse: "4 boulevard du Faron, 83000 Toulon",
		telephone: "04 98 03 80 15",
		description: "Vente et location de matériel médical pour professionnels et particuliers. Fauteuils roulants, lits médicalisés, déambulateurs, matelas anti-escarre.",
		specialites: ["Fauteuils roulants", "Lits médicalisés", "Location"]
	},
	{
		nom: "Ortho-Médical Santé",
		adresse: "692 boulevard Maréchal Joffre, 83000 Toulon",
		telephone: "04 30 30 33 97",
		description: "Vente et location de matériel médical, orthopédie de série et sur-mesure. Bilan à domicile gratuit, intervention en moins de 24h.",
		specialites: ["Orthopédie sur-mesure", "Bilan gratuit", "Urgence 24h"]
	},
	{
		nom: "Mon Conseil Orthopédie",
		adresse: "264 rue Jean Jaurès, 83000 Toulon",
		telephone: "04 94 10 95 25",
		description: "Cabinet spécialisé en orthopédie. Compression veineuse, orthèses pour toutes articulations. Livraison le jour même possible.",
		specialites: ["Compression veineuse", "Orthèses", "Livraison J"]
	},
	{
		nom: "Matériel Médical Assistance Landais",
		adresse: "104 boulevard Enseigne de Vaisseau Gues, 83000 Toulon",
		telephone: "04 94 21 70 14",
		description: "Vente, location et réparation de matériel médico-chirurgical. Lits médicalisés, fauteuils roulants, appareils respiratoires, prothèses.",
		specialites: ["Médico-chirurgical", "Respiratoire", "Location"]
	},
	{
		nom: "Bastide Le Confort Médical",
		adresse: "587 avenue de l'Université, 83160 La Valette-du-Var",
		telephone: "04 94 75 23 23",
		description: "Plus grand réseau français de matériel médical. Maintien à domicile : lits médicalisés, fauteuils roulants, matelas à air. Diagnostic à domicile gratuit.",
		specialites: ["Maintien à domicile", "Diagnostic gratuit", "Réseau national"]
	},
	{
		nom: "VYV Équipement Médical",
		adresse: "14 rue André Ampère, 83160 La Valette-du-Var",
		telephone: "04 89 29 72 72",
		description: "Spécialiste du handicap depuis 1992. Fauteuils roulants, lève-personnes, verticalisateurs. Également spécialisé en orthopédie et semelles orthopédiques.",
		specialites: ["Handicap", "Orthopédie", "Déplacement gratuit"]
	},
	{
		nom: "Pharmacie Herboristerie Champ de Mars",
		adresse: "51 avenue Colonel Fabien, 83000 Toulon",
		telephone: "04 94 41 57 88",
		description: "Pharmacie avec rayon matériel médical : location de lits médicalisés, fauteuils roulants, béquilles, aérosols, cannes de marche.",
		specialites: ["Pharmacie", "Location", "Matériel courant"]
	}
];
