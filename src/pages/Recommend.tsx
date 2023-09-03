/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

import { useGetLoacalStorage } from '@/hook';
import style from '@/styles/recommend.module.scss';

export const Recommend: React.FC = () => {
	const myObj = useGetLoacalStorage('user', 'final');

	useEffect(() => {
		// print();
	}, []);

	console.log(Object.entries(myObj.itinerary[0]));

	return (
		<div className="wrapper a">
			<div className={style.content}>
				{myObj.itinerary.map((item: any, index: number) => (
					<div className={style.title} key={index}>
						{index + 1} day
						{Object.entries(item).map((innterItem: any, index: number) => {
							console.log(innterItem);
							return (
								<div key={index}>
									<p>{innterItem[0]}</p>
									<p>{innterItem[1]}</p>
								</div>
							);
						})}
						<hr />
					</div>
				))}
			</div>
		</div>
	);
};
