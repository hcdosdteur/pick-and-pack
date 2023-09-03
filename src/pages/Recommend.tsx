import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import style from '@/styles/recommend.module.scss';

export const Recommend: React.FC = () => {
	// const asdf = axios.get(
	// 	'https://www.google.com/search?client=ms-google-coop&q=korea+city&cx=e196a8bb34d534983'
	// );

	// useEffect(() => {
	// 	console.log(asdf);
	// }, []);

	return (
		<div className="wrapper">
			<div className={style.day}></div>
			<Link to="/">go home</Link>
		</div>
	);
};
