import { Link, useNavigate } from 'react-router-dom';

// import style from '@/styles/time.module.scss';
import { Navigator } from '@/components/Navigate';

export const Time = () => {
	const navigate = useNavigate();

	return (
		<div className="wrapper">
			<div></div>
			<Link to="/">div</Link>
			<Navigator prev={() => navigate('/')} />
		</div>
	);
};
