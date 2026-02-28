export interface Etablissement {
	nom: string;
	adresse: string;
	telephone: string;
	description: string;
	specialites: string[];
}

export interface Cabinet {
	nom: string;
	adresse: string;
	telephone: string;
	description: string;
	quartier: string;
}

export interface Association {
	nom: string;
	adresse: string;
	telephone: string;
	description: string;
	domaines: string[];
}
