export type Continent = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
export type NavigateState = 'prev' | 'next';

export interface Country {
	flag: string;
	flags: {
		svg: string;
	};
	cca2: string;
	continents: Continent[];
	name: {
		common: string;
		official: string;
	};
}

export type Countries = Country[];
export type CountriesArray = Countries[];

export type MyData = {
	style: string[];
	essential: string[];
	region: string[];
	country: string;
	hate: string;
	diff: number;
	endTime: string;
	startTime: string;
};
