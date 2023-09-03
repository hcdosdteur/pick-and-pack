import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import style from '@/styles/request.module.scss';

export const Request = () => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate('/recommend');
	}, []);
	return (
		<div className="wrapper">
			<div className={style.waviy}>
				<span className={style.s1}>D</span>
				<span className={style.s2}>a</span>
				<span className={style.s3}>t</span>
				<span className={style.s4}>a</span>
				<span className={style.s5}>S</span>
				<span className={style.s6}>y</span>
				<span className={style.s7}>n</span>
				<span className={style.s8}>t</span>
				<span className={style.s9}>h</span>
				<span className={style.s10}>e</span>
				<span className={style.s11}>s</span>
				<span className={style.s12}>i</span>
				<span className={style.s13}>z</span>
				<span className={style.s14}>i</span>
				<span className={style.s15}>n</span>
				<span className={style.s16}>g</span>
			</div>
		</div>
	);
};
