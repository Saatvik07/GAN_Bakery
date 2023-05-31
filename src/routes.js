import React from 'react';
const Homepage = React.lazy(() => import('./views/Homepage/Homepage'));
const Cart = React.lazy(() => import('./views/Cart/Cart'));

export const routes = [
	{ path: '/', exact: true, component: Homepage },
	{ path: '/cart', exact: true, component: Cart },
];
