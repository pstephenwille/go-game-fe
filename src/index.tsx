import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';
import { AuthContext, AuthProvider } from '@/auth/auth-provider';
import { useAuthQuery } from '@/auth/use-auth';
import { router } from '@/router';

const queryClient = new QueryClient();

function Index() {
	return <RouterProvider router={router} context={{ queryClient }} />;
}

const rootElement = document.getElementById('app')!;

if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Index />
			</AuthProvider>
		</QueryClientProvider>,
	);
}
