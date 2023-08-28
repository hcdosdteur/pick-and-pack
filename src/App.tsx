import { useState } from 'react';

import './App.scss';

import logoElectron from '@/assets/icon/logo-electron.svg';
import logoVite from '@/assets/icon/logo-vite.svg';

const App = () => {
	const [count, setCount] = useState(0);
	return (
		<div className="App">
			<div className="logo-box">
				<img src={logoVite} className="logo vite" alt="Electron + Vite logo" />
				<a href="https://github.com/electron-vite/electron-vite-react" target="_blank" rel="noreferrer">
					<img src={logoElectron} className="logo electron" alt="Electron + Vite logo" />
				</a>
			</div>
			<h1>Electron + Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Electron + Vite logo to learn more</p>
			<div className="flex-center">
				Place static files into the<code>/public</code> folder{' '}
				<img style={{ width: '5em' }} src="./node.svg" alt="Node logo" />
			</div>
		</div>
	);
};

export default App;
