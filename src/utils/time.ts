import moment, { Moment } from 'moment';

export const getFormattedDateString = (date?: string | Date | Moment) => {
	return moment(date).format('YYYY-MM-DD');
};
