import type { QueryClient } from '@tanstack/react-query';
import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import type { useAuthQuery } from '@/auth/use-auth';
import { routeTree } from './routeTree.gen';

export interface MyRouterContext {
	queryClient: QueryClient;
}

export const router = createTanStackRouter({
	context: {
		queryClient: undefined!,
	},
	routeTree,
	scrollRestoration: true,
	defaultPreload: 'intent',
	defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
	interface Register {
		router: ReturnType<typeof createTanStackRouter>;
	}
}
