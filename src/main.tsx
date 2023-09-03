import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { createRoot } from 'react-dom/client';

import { Cities, Country, Time, Question, Request } from '@/pages';
// import './samples/node-api'; // Uncomment to test Node.js API
import '@/styles/index.scss';
import '@/assets/font/index.css';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Country />} />
			<Route path="/city" element={<Cities />} />
			<Route path="/time" element={<Time />} />
			<Route path="/question/1" element={<Question id={1} />} />
			<Route path="/question/2" element={<Question id={2} />} />
			<Route path="/question/3" element={<Question id={3} />} />
			<Route path="/request" element={<Request />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<Router />
	</BrowserRouter>
);

postMessage({ payload: 'removeLoading' }, '*');
