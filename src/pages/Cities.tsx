import { useEffect, useRef, useState } from 'react';

import { City } from '@/components/city';
import style from '@/styles/cities.module.scss';

export const Cities = () => {
	const [count, setCount] = useState<string[]>([]);
	const [selectedCity, setSelectedCity] = useState<string>('');
	const contentRef = useRef<HTMLDivElement>(null);

	const scrollLocation = (item: string, location: number) => {
		setSelectedCity(item);
		const result = (location - 1) * 70;
		const smoothScroll = () => {
			contentRef.current?.scrollTo({ left: result, behavior: 'smooth' });
		};
		if (selectedCity === '') setTimeout(smoothScroll, 500);
		else smoothScroll();
	};

	useEffect(() => {
		for (let i = 1; i <= 20; i++) {
			setCount((prev) => [...prev, `${i}`]);
		}
	}, []);

	return (
		<div className={style.wrapper}>
			<div className={style.content} ref={contentRef}>
				<div className={style.cities}>
					{count.map((item, idx) => (
						<City
							_id={idx}
							name={item}
							active={selectedCity === item}
							onClick={() => scrollLocation(item, idx)}
							onDoubleClick={() => setSelectedCity('')}
							key={idx}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
