import { lazy } from 'react'

export default [
	{
		path: '/internt/nyheder',
		exact: true,
		auth: true,
		component: lazy(() => import('./pages/manage/index')),
	},
	{
		path: '/internt/nyheder/opret',
		exact: true,
		auth: true,
		component: lazy(() => import('./pages/create/index')),
	},
	{
		path: '/internt/nyheder/:id/rediger',
		exact: true,
		auth: true,
		component: lazy(() => import('./pages/edit/index')),
	},
]