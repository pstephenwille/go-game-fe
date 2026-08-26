import { useQuery } from '@tanstack/react-query';
import { fetchCurrentUserProfile } from '@/auth/api';

export async function useAuthQuery() {
	return useQuery({
		queryKey: ['auth-user'],
		queryFn: fetchCurrentUserProfile,
		staleTime: Infinity,
		retry: false,
	});
}
