import moment, { Moment } from 'moment';

interface getFormattedStringProps {
	(date: string | Date | Moment, format: string): string;
}
interface getMomentDiffProps {
	(start: string, end: string): number;
}
export const getFormattedString: getFormattedStringProps = (date, format) => {
	return moment(date).format(format);
};

export const getMomentDiff: getMomentDiffProps = (start, end) => {
	return moment(end).diff(moment(start), 'days') + 1;
};
