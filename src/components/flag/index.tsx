import type { Countries, Country } from '@/utils/types';

import { useState } from 'react';

import style from '@/styles/flag.module.scss';

interface FlagProps {
	data: Countries;
	num: string;
}

export const Flag: React.FC<FlagProps> = ({ data, num }) => {
	const [cca, setcca] = useState<string>('default');
	const [countryInnerId, setCountryInnerId] = useState<string>('default');

	const onMouseOverFlag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
		setcca(e.currentTarget.id);
	const onMouseOutFlag = () => setcca('default');
	const onMouseOverCon = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
		setCountryInnerId(e.currentTarget.id);
	const onMouseOutCon = () => setCountryInnerId('default');

	return (
		<div
			id={num}
			className={`${style.flagContainer} ${countryInnerId !== num ? style.dark : ''}`}
			onMouseOver={onMouseOverCon}
			onMouseOut={onMouseOutCon}
		>
			{data.map((country: Country, idx) => (
				<div
					id={country.cca2}
					className={`${style.flag} ${cca !== country.cca2 ? style.dark : ''}`}
					onMouseOver={onMouseOverFlag}
					onMouseOut={onMouseOutFlag}
					key={idx}
				>
					<img src={country.flags.svg} alt={country.cca2} />
				</div>
			))}
		</div>
	);
};
