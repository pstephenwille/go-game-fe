import { TanStackDevtools } from '@tanstack/react-devtools';
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools';
import {
	createRootRouteWithContext,
	Outlet,
	redirect,
} from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

import '../styles.css';
import type { MyRouterContext } from '@/router';

export const Route = createRootRouteWithContext<MyRouterContext>()({
	loader: async ({ context }) => {
		const redirectUrl = sessionStorage.getItem('redirect_after_login');
		sessionStorage.removeItem('redirect_after_login');

		if (redirectUrl && context.auth.user) {
			throw redirect({ to: redirectUrl, throw: true });
		}
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
					{
						name: 'TanStack Query',
						render: <ReactQueryDevtoolsPanel />,
					},
				]}
			/>
		</>
	);
}
