import { lazy } from 'react'

export default [
	{
		path: '/internt',
		exact: true,
		auth: true,
		component: lazy(() => import('./pages/start/index')),
	},
]