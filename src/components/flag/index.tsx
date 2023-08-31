import type { Countries, Country } from '@/utils/types';

import style from '@/styles/flag.module.scss';

export const Flag: React.FC<{ data: Countries }> = ({ data }) => {
	const onMouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		console.log(e.currentTarget);
	};
	return (
		<div className={style.flagContainer}>
			{data.map((country: Country, idx) => (
				<div className={style.flag} onMouseOver={onMouseOver} key={idx}>
					<img src={country.flags.svg} alt={country.cca2} />
				</div>
			))}
		</div>
	);
};
