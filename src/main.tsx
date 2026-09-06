import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';
import { router } from '@/router';
import '@/auth/amplify';
import { AuthProvider } from '@/auth/auth-provider';

const queryClient = new QueryClient();

const rootElement = document.getElementById('app')!;

if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<RouterProvider router={router} context={{ queryClient }} />
			</AuthProvider>
		</QueryClientProvider>,
	);
}
