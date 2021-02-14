import { Route } from '@/interfaces';

export const routes: Route[] = [
	{
		url: '/',
		component: 'home-view',
		exact: true
	},
	{
		url: '/movies',
		component: 'movies-view',
		exact: true
	},
	{
		url: '/tv',
		component: 'tvshows-view',
		exact: true
	}
];
