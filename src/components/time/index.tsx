import { useEffect, useState } from 'react';

import moment from 'moment';

import { getFormattedDateString } from '@/utils/time';

import style from './index.module.scss';

interface YYMMDDProps {
	date?: Date;
}
interface NumberBoxProps {
	num: number;
}

export const YYMMDD: React.FC<YYMMDDProps> = ({ date }) => {
	const momentDate = moment();
	const [year, setYear] = useState<number>(0);
	const [month, setMonth] = useState<number>(0);
	const [day, setDay] = useState<number>(0);

	useEffect(() => {
		console.log(getFormattedDateString(momentDate));
	}, []);

	return (
		<div className={style.container}>
			<NumberBox num={year} />
			<NumberBox num={month} />
			<NumberBox num={day} />
		</div>
	);
};

const NumberBox: React.FC<NumberBoxProps> = ({ num }) => {
	return <div className={style.numberBox}>{num}</div>;
};
