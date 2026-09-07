import type { QueryClient } from '@tanstack/react-query';
import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

export interface MyRouterContext {
	queryClient: QueryClient;
	auth: any;
}

export const router = createTanStackRouter({
	context: {
		queryClient: undefined!,
		auth: undefined!,
	},
	routeTree,
	scrollRestoration: true,
	defaultPreload: 'intent',
	defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}
