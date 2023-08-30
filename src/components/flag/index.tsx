import type { CountryType } from '@/utils/types';

import style from '@/styles/flag.module.scss';

export const Flag: React.FC<{ data: CountryType }> = ({ data }) => {
	return (
		<div className={style.flag}>
			<img src={data.flags.svg} alt={data.cca2} />
		</div>
	);
};
