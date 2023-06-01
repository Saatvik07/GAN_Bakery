import React from 'react';
const Homepage = React.lazy(() => import('./views/Homepage/Homepage'));
const Cart = React.lazy(() => import('./views/Cart/Cart'));
const NotFound = React.lazy(() => import('./views/NotFound/NotFound'));

export const routes = [
	{ path: '/', exact: true, component: Homepage },
	{ path: '/cart', exact: true, component: Cart },
	{ path: '/404', component: NotFound },
];
