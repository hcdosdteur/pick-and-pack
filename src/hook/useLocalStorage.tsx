interface useSetProps {
	(key: string, data: string | string[]): void;
}
interface useGetProps {
	(key: string): object;
}

export const useSetLocalStorage: useSetProps = (key, data) => {
	const str = window.localStorage.getItem('user');
	if (!str) throw new Error('no user storage');
	const obj = JSON.parse(str);
	obj[key] = data;
	console.log(obj);
	window.localStorage.setItem('user', JSON.stringify(obj));
};

export const useGetLoacalStorage: useGetProps = (key) => {
	const str = window.localStorage.getItem(key);
	if (!str) throw new Error('no user storage');
	const obj: object = JSON.parse(str);
	return obj;
};
