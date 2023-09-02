import type { Countries, Country } from '@/utils/types';

import { useNavigate } from 'react-router-dom';

import style from '@/styles/flag.module.scss';

interface FlagProps {
	data: Countries;
	num: string;
}

export const Flag: React.FC<FlagProps> = ({ data, num }) => {
	const navigate = useNavigate();

	const select = (e: React.MouseEvent<HTMLDivElement>) => {
		const cca2 = e.currentTarget.id;
		navigate('/city', { state: { country: cca2 } });
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
