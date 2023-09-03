import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Send } from '@/assets/icon/send.svg';
import { useSetLocalStorage } from '@/hook';
import style from '@/styles/question.module.scss';

const SVG_CSS = { opacity: 0.5, cursor: 'pointer' };

export const Question: React.FC<{ id: number }> = ({ id }) => {
	return (
		<>
			{id === 1 && <Question1 />}
			{id === 2 && <Question2 />}
			{id === 3 && <Question3 />}
			{id === 4 && <Question4 />}
		</>
	);
};

const Question1 = () => {
	const [answer, setAnswer] = useState<string>('');
	const navigate = useNavigate();

	const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAnswer(e.target.value);
	};

	const select = () => {
		if (answer === '' || undefined) {
			alert("We can't find your answer T.T\nIf you Don't have any, please type 'None'");
			return;
		}
		console.log(answer);
		useSetLocalStorage('style', answer);
		navigate('/question/2');
	};

	return (
		<div className="wrapper q1">
			<div className="question">
				Please share your travel style and preferences
				<div className="example">
					(e.g., Hobbies, Favorite foods, Budget,
					<br />
					Active travel vs. Laid-back travel, Number of companions)
				</div>
			</div>
			<div className={[style.chat, style.p1].join(' ')}>
				<input type="text" onChange={onchange} placeholder={'Answer...'} />
				<Send onClick={select} style={SVG_CSS} />
			</div>
		</div>
	);
};
const Question2 = () => {
	const [answer, setAnswer] = useState<string>('');
	const navigate = useNavigate();

	const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const rep = e.target.value
			.split(',')
			.map((v) => v.trim())
			.join(',');
		setAnswer(rep);
	};

	const select = () => {
		if (answer === '' || undefined) {
			alert("We can't find your answer T.T\nIf you Don't have any, please type 'None'");
			return;
		}
		console.log(answer);
		useSetLocalStorage('region', answer);
		navigate('/question/3');
	};

	return (
		<div className="wrapper q2">
			<div className="question">
				What are the region you absolutely
				<br />
				want to experience or visit during your trip?
				<div className="example">
					(e.g., Seoul, New York...
					<br />
					Please separate the places you want to go with &quot;,&quot;.)
				</div>
			</div>
			<div className={[style.chat, style.p2].join(' ')}>
				<input type="text" onChange={onchange} placeholder={'Answer...'} />
				<Send onClick={select} style={SVG_CSS} />
			</div>
		</div>
	);
};
const Question3 = () => {
	const [answer, setAnswer] = useState<string>('');
	const navigate = useNavigate();

	const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const rep = e.target.value
			.split(',')
			.map((v) => v.trim())
			.join(',');
		setAnswer(rep);
	};

	const select = () => {
		if (answer === '' || undefined) {
			alert("We can't find your answer T.T\nIf you Don't have any, please type 'None'");
			return;
		}
		console.log(answer);
		useSetLocalStorage('essential', answer);
		navigate('/question/4');
	};

	return (
		<div className="wrapper q3">
			<div className="question">
				What are the places you absolutely
				<br />
				want to experience or visit during your trip?
				<div className="example">
					(e.g., Tourist attractions, Something to shop for.
					<br />
					Please separate the places you want to go with &quot;,&quot;.)
				</div>
			</div>
			<div className={[style.chat, style.p3].join(' ')}>
				<input type="text" onChange={onchange} placeholder={'Answer...'} />
				<Send onClick={select} style={SVG_CSS} />
			</div>
		</div>
	);
};
const Question4 = () => {
	const [answer, setAnswer] = useState<string>('');
	const navigate = useNavigate();

	const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAnswer(e.target.value);
	};

	const select = () => {
		if (answer === '' || undefined) {
			alert("We can't find your answer T.T\nIf you Don't have any, please type 'None'");
			return;
		}
		console.log(answer);
		useSetLocalStorage('hate', answer);
		navigate('/request');
	};

	return (
		<div className="wrapper q4">
			<div className="question">
				If there&apos;s a place you don&apos;t want to go or something
				<br />
				you&apos;d rather avoid while traveling, please let me know
			</div>
			<div className={[style.chat, style.p4].join(' ')}>
				<input type="text" onChange={onchange} placeholder={'Answer...'} />
				<Send onClick={select} style={SVG_CSS} />
			</div>
		</div>
	);
};
