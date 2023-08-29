import React from 'react';

import style from '@/styles/city.module.scss';

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
				onDoubleClick={props.onDoubleClick}
			>
				<div className={active ? style.introduce : style.invisible}>
					<div className={style.title}>Berlin</div>
					<div className={`${style.content} ${active ? style.active : ''}`}>
						Berlin is the capital and largest city of Germany by both area and population. Its more than 3.85 million
						inhabitants make it the European Union&apos;s most populous city, according to population within city
						limits.
					</div>
				</div>
			</div>
			<div className={style.name} key={name}>
				BERLIN
			</div>
		</div>
	);
};
