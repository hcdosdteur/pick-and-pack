import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { City } from '@/components/city';
import { Navigator } from '@/components/navigate';
import { useGetLoacalStorage, useSetLocalStorage } from '@/hook';
import style from '@/styles/cities.module.scss';

export const Cities = () => {
	const [count, setCount] = useState<string[]>([]);
	const [selectedCity, setSelectedCity] = useState<string[]>([]);
	const contentRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	const select = () => {
		if (selectedCity.length === 0) {
			alert('Please select at least one city');
			return;
		}
		useSetLocalStorage('city', selectedCity);
		navigate('/time');
	};

	const toggle = (item: string) => {
		if (selectedCity.includes(item)) {
			setSelectedCity((props) => props.filter((city) => city !== item));
		} else {
			setSelectedCity((props) => [...props, item]);
		}
	};

	useEffect(() => {
		for (let i = 1; i <= 20; i++) {
			setCount((prev) => [...prev, `${i}`]);
		}
		console.log(useGetLoacalStorage('user', 'city'));
		setSelectedCity(useGetLoacalStorage('user', 'city'));
	}, []);

	return (
		<div className="wrapper">
			<div className="question">Is there a city in Germany you&apos;d like to visit?</div>
			<div className={style.content} ref={contentRef}>
				<div className={style.cities}>
					{count.map((item, idx) => (
						<City
							_id={idx}
							name={item}
							active={selectedCity.includes(item)}
							onClick={() => toggle(item)}
							key={idx}
						/>
					))}
				</div>
			</div>
			<Navigator prev={() => navigate('/')} next={select} />
		</div>
	);
};
