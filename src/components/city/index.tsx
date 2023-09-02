import React from 'react';

import style from './index.module.scss';

export const City: React.FC<
	{
		_id: number;
		name: string;
		active: boolean;
		css?: object;
	} & React.HTMLAttributes<HTMLDivElement>
> = ({ _id, name, active, css, ...props }) => {
	return (
		<div id={`${_id}`} className={style.container}>
			<div
				style={css}
				className={`${style.city} ${active ? style.active : ''}`}
				onClick={props.onClick}
			></div>
			<div className={style.name} key={name}>
				BERLIN
			</div>
		</div>
	);
};
