import type { ContinentType } from '@/utils/types';

import axios from 'axios';

export const getSelectedCountry = async (continent: ContinentType) => {
	const res = await axios.get(`https://restcountries.com/v3.1/region/${continent}`);
	const chunk = res.data.length / 3;

	const splitIntoChunk = (arr: [], chunk: number) => {
		const result = [];
		for (let j = 0; j < arr.length; j += chunk) {
			const tempArray = arr.slice(j, j + chunk);
			result.push(tempArray);
		}
		return result;
	};

	const data = splitIntoChunk(res.data, chunk);
	return data;
};
