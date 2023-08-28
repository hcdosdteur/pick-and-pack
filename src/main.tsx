import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './App';
// import './samples/node-api'; // Uncomment to test Node.js API
import './index.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

postMessage({ payload: 'removeLoading' }, '*');
