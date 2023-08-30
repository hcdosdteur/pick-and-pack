export type ContinentType = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

export interface CountryType {
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
