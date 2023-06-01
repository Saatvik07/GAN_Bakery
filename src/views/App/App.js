import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from '../../routes';

function App() {
	return (
		<Routes>
			{routes.map((route, index) => (
				<Route key={index} path={route.path} element={<route.component />} />
			))}
			<Route path='*' element={<Navigate to='/404' />} />
		</Routes>
	);
}

export default App;
