import {
	QueryClient,
	QueryClientProvider,
	useSuspenseQuery,
} from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';
import { router } from '@/router';
import '@/auth/amplify';
import { AuthProvider } from '@/auth/auth-provider';
import { useAuth } from '@/auth/use-auth';
import { loggedInUserOptions } from '@/auth/user.query';

const queryClient = new QueryClient();

const rootElement = document.getElementById('app')!;

function AppRoutes() {
	const auth = useAuth();
	useSuspenseQuery(loggedInUserOptions);

	return <RouterProvider router={router} context={{ queryClient, auth }} />;
}
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<AppRoutes />
			</AuthProvider>
		</QueryClientProvider>,
	);
}
