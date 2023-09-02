import type { NavigateState } from '@/utils/types';

import { ReactComponent as Next } from '@/assets/icon/arrow_next.svg';
import { ReactComponent as Prev } from '@/assets/icon/arrow_prev.svg';

interface ArrowProps {
	state: NavigateState;
}

const CSS = {
	width: '10rem',
	height: '10rem',
	border: '1px dashed black',
	borderRadius: '50%',
};

export const Arrow: React.FC<ArrowProps> = ({ state }) => {
	return (
		<div style={CSS}>
			{state === 'next' && <Next></Next>}
			{state === 'prev' && <Prev></Prev>}
		</div>
	);
};
