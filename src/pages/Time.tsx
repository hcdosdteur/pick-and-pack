import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import moment from 'moment';

import { Navigator } from '@/components/navigate';
import { useSetLocalStorage } from '@/hook';
import style from '@/styles/time.module.scss';
import { getFormattedString, getMomentDiff } from '@/utils/time';

export const Time = () => {
	const [startTime, setStartTime] = useState<string>('');
	const [endTime, setEndTime] = useState<string>('');
	const [now, setNow] = useState('');
	const navigate = useNavigate();

	const select = () => {
		const start = moment(startTime);
		console.log(start, start.isBefore(endTime));
		if (start.isAfter(endTime)) {
			alert('Please select the correct time');
			return;
		}

		useSetLocalStorage('startTime', startTime);
		useSetLocalStorage('endTime', endTime);
		useSetLocalStorage('diff', getMomentDiff(startTime, endTime));
		navigate('/question/1');
	};

	const selectStartTime = (e: React.ChangeEvent<HTMLInputElement>) => {
		const date = getFormattedString(e.target.value, 'YYYY-MM-DD');
		setStartTime(date);
	};
	const selectEndTime = (e: React.ChangeEvent<HTMLInputElement>) => {
		const date = getFormattedString(e.target.value, 'YYYY-MM-DD');
		setEndTime(date);
	};

	useEffect(() => {
		setNow(getFormattedString(moment(), 'YYYY-MM-DD'));
		setStartTime(getFormattedString(moment(), 'YYYY-MM-DD'));
		setEndTime(getFormattedString(moment(), 'YYYY-MM-DD'));
	}, []);

	return (
		<div className="wrapper">
			<div className="question">Please let me know the travel itinerary</div>
			<div className={style.container}>
				<label htmlFor="start">
					<input
						id="start"
						type="date"
						defaultValue={now}
						onChange={selectStartTime}
						placeholder="Start Date"
					/>
				</label>
				<label htmlFor="end">
					<input
						id="end"
						type="date"
						defaultValue={now}
						onChange={selectEndTime}
						placeholder="End Date"
					/>
				</label>
			</div>
			<Navigator prev={() => navigate('/city')} next={select} />
		</div>
	);
};
