import { queryOptions, useQuery } from '@tanstack/react-query';
import { fetchCurrentUserProfile } from '@/auth/api';

export const loggedInUserQuery = queryOptions({
	queryKey: ['auth-user'],
	queryFn: fetchCurrentUserProfile,
	staleTime: Infinity,
	retry: false,
});
