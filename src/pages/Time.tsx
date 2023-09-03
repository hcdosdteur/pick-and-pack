import { useNavigate } from 'react-router-dom';

import { Navigator } from '@/components/navigate';
import { YYMMDD } from '@/components/time';
import style from '@/styles/time.module.scss';

export const Time = () => {
	const navigate = useNavigate();

	return (
		<div className="wrapper">
			<div className="question">Please let me know the travel itinerary</div>
			<div className={style.container}>
				<YYMMDD />
				<YYMMDD />
			</div>
			<Navigator prev={() => navigate('/city')} />
		</div>
	);
};
