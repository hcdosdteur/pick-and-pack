import type { ContinentType, CountryType } from '@/utils/types';

import { useEffect, useState } from 'react';

import { getSelectedCountry } from '@/api/restCountryApi';
import { Flag } from '@/components/flag';
import style from '@/styles/country.module.scss';

export const Country = () => {
	const [loading, setLoading] = useState<boolean>(true);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [count, setCount] = useState<string[]>();
	const [countries, setCountries] = useState<CountryType[][]>([[], [], []]);

	const CountryApi = async (continent: ContinentType = 'Asia') => {
		setLoading(true);
		try {
			const data = await getSelectedCountry(continent);
			console.log(data);
			setCountries(data);
		} catch (err) {
			console.log(err);
		}
		setLoading(false);
	};

	const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const continent = e.target.value as ContinentType;
		CountryApi(continent);
	};

	useEffect(() => {
		CountryApi();
	}, []);

	return (
		<div className="wrapper">
			<div className="question">Please choose a country to travel</div>
			<select className={style.select} onChange={handleChangeSelect}>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Africa">Africa</option>
				<option value="Oceania">Oceania</option>
				<option value="Americas">Americas</option>
			</select>
			<div className={style.flags}>
				{countries.map((item, idx) => (
					<div className={style.mvContainer} key={idx}>
						{item.map((country: CountryType) => (
							<Flag data={country} key={country.flag}></Flag>
						))}
					</div>
				))}
			</div>
			<div className="loading">{loading ? 'loading' : 'success'}</div>
		</div>
	);
};
