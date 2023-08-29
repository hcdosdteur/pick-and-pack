import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { createRoot } from 'react-dom/client';

import { Cities, Main } from '@/pages';
// import './samples/node-api'; // Uncomment to test Node.js API
import '@/styles/index.scss';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/city" element={<Cities />} />
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
