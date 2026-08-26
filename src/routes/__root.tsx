import { TanStackDevtools } from '@tanstack/react-devtools';
import {
	createRootRouteWithContext,
	Outlet,
	redirect,
} from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

import '../styles.css';
import type { QueryClient } from '@tanstack/react-query';
import { fetchCurrentUserProfile } from '@/auth/api';

interface MyRouterContext {
	queryClient: QueryClient;
}
/* TODO: 8/18/26, stephen; add
 *   beforeload
 *   shell-component for providers */
export const Route = createRootRouteWithContext<MyRouterContext>()({
	beforeLoad: async ({ context, location }) => {
		const authData = await context.queryClient.ensureQueryData({
			queryKey: ['auth-user'],
			queryFn: fetchCurrentUserProfile,
		});
		const isAuthenticated = !!authData;
		console.log('%c...beforeload', 'color:gold', authData);

		// if (!isAuthenticated && location.pathname !== '/profile/login') {
		// 	throw redirect({ to: '/profile/login' });
		// }
	},
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<Outlet />
			<TanStackDevtools
				config={{
					position: 'bottom-right',
				}}
				plugins={[
					{
						name: 'TanStack Router',
						render: <TanStackRouterDevtoolsPanel />,
					},
				]}
			/>
		</>
	);
}
