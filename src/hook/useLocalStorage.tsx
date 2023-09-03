interface useSetProps {
	(key: string, data: string | string[]): void;
}
interface useGetAllProps {
	(key: string): object;
}
interface useGetProps {
	(key: string, obj_key: string): string[];
}

export const useSetLocalStorage: useSetProps = (key, data) => {
	const str = window.localStorage.getItem('user');
	if (!str) throw new Error('no user storage');
	const obj = JSON.parse(str);
	obj[key] = data;
	console.log(obj);
	window.localStorage.setItem('user', JSON.stringify(obj));
};

export const useGetAllLoacalStorage: useGetAllProps = (key) => {
	const str = window.localStorage.getItem(key);
	if (!str) throw new Error('no user storage');
	const obj: object = JSON.parse(str);
	return obj;
};

export const useGetLoacalStorage: useGetProps = (key, obj_key) => {
	const str = window.localStorage.getItem(key);
	if (!str) throw new Error('no user storage');
	const obj = JSON.parse(str);
	return obj[obj_key];
};
