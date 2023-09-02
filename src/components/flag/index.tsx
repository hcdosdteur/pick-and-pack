import type { Countries, Country } from '@/utils/types';

import { useNavigate } from 'react-router-dom';

import { useSetLocalStorage } from '@/hook';

import style from './flag.module.scss';

interface FlagProps {
	data: Countries;
	num: string;
}

export const Flag: React.FC<FlagProps> = ({ data, num }) => {
	const navigate = useNavigate();

	const select = (e: React.MouseEvent<HTMLDivElement>) => {
		const cca2 = e.currentTarget.id;
		useSetLocalStorage('country', cca2);
		navigate('/city');
	};

	return (
		<div id={num} className={`${style.flagContainer}`}>
			{data.map((country: Country, idx) => (
				<div id={country.cca2} onDoubleClick={select} className={style.flag} key={idx}>
					<img src={country.flags.svg} alt={country.cca2} />
				</div>
			))}
		</div>
	);
};
