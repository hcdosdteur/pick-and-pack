import type { Continent, Countries, CountriesArray } from '@/utils/types';

import axios from 'axios';

export const getSelectedCountry = async (continent: Continent) => {
	const res = await axios.get(`https://restcountries.com/v3.1/region/${continent}`);
	const chunk = res.data.length / 3;

	const splitIntoChunk = (arr: Countries, chunk: number) => {
		const result = [];
		for (let j = 0; j < arr.length; j += chunk) {
			const tempArray = arr.slice(j, j + chunk);
			result.push(tempArray);
		}
		return result;
	};

	const replaceArray = (arr: CountriesArray) => {
		const result = [];
		for (let i = 0; i < arr.length; i++) {
			const tempArray = [];
			for (let j = 0; j < arr.length; j++) {
				const temp = arr[i];
				tempArray.push(temp);
			}
			result.push(tempArray);
		}
		return result;
	};

	const data = splitIntoChunk(res.data, chunk);

	const result = replaceArray(data);
	console.log(result);

	return result;
};
