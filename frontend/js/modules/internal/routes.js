import { lazy } from 'react'

export default [
	{
		path: '/internt',
		exact: true,
		auth: true,
		component: lazy(() => import('./pages/start/index')),
	},
	{
		path: '/internt/optaelling',
		exact: true,
		auth: true,
		component: lazy(() => import('./pages/optaelling/index')),
	},
	{
		path: '/internt/konteringsark',
		exact: true,
		auth: true,
		component: lazy(() => import('./pages/konteringsark/index')),
	},

]