import { lazy } from 'react'

export default [
	{
		path: '/',
		exact: true,
		auth: false,
		component: lazy(() => import('./pages/home/index')),
	},
	{
		path: '/bliv-bartender',
		exact: true,
		auth: false,
		component: lazy(() => import('./pages/bliv-bartender/index')),
	},
	{
		path: '/frebar',
		exact: true,
		auth: false,
		component: lazy(() => import('./pages/frebar/index')),
	},
	{
		path: '/webcam',
		exact: true,
		auth: false,
		component: lazy(() => import('./pages/webcam/index')),
	},
]