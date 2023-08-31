export type Continent = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

export interface Country {
	flag: string;
	flags: {
		svg: string;
	};
	cca2: string;
	name: {
		common: string;
		official: string;
	};
}

export type Countries = Country[];
export type CountriesArray = Countries[];
