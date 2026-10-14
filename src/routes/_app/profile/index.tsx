import { createFileRoute } from '@tanstack/react-router';
import { useAuth } from '@/auth/use-auth';

export const Route = createFileRoute('/_app/profile/')({
	component: RouteComponent,
});

function RouteComponent() {
	const auth = useAuth();

	return <div>Hello "/user/profile"!</div>;
}
