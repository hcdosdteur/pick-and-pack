import type { NavigateState } from '@/utils/types';

import { ReactComponent as Next } from '@/assets/icon/arrow_next.svg';
import { ReactComponent as Prev } from '@/assets/icon/arrow_prev.svg';

import style from './index.module.scss';

type ArrowProps = {
	state: NavigateState;
} & React.HTMLAttributes<HTMLDivElement>;

export const Arrow: React.FC<ArrowProps> = ({ state, ...props }) => {
	return (
		<div className={style.arrow} onClick={props.onClick}>
			{state === 'next' && <Next></Next>}
			{state === 'prev' && <Prev></Prev>}
		</div>
	);
};
