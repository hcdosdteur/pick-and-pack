import { Arrow } from './button';
import style from './index.module.scss';

interface NavigatorProps {
	prev?: () => void;
	next?: () => void;
}

export const Navigator: React.FC<NavigatorProps> = ({ prev, next }) => {
	return (
		<div className={style.container}>
			<Arrow state={'prev'} onClick={prev} />
			<Arrow state={'next'} onClick={next} />
		</div>
	);
};
