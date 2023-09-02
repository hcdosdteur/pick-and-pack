import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { createRoot } from 'react-dom/client';

import { Cities, Country, Time } from '@/pages';
// import './samples/node-api'; // Uncomment to test Node.js API
import '@/styles/index.scss';
import '@/assets/font/index.css';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Country />} />
			<Route path="/city" element={<Cities />} />
			<Route path="/time" element={<Time />} />
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
