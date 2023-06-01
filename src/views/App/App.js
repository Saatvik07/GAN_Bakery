import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from '../../routes';

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{routes.map((route, index) => (
					<Route key={index} path={route.path} element={<route.component />} />
				))}
				<Route path='*' element={<Navigate to='/404' />} />
			</Routes>
		</Suspense>
	);
}

export default App;
