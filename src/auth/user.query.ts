import { queryOptions } from '@tanstack/react-query';
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';

export const loggedInUserOptions = queryOptions({
	queryKey: ['auth-user'],
	queryFn: async function fetchCurrentUserProfile() {
		try {
			const [user, session] = await Promise.all([
				fetchAuthSession(),
				getCurrentUser(),
			]);
			return { user, session };
		} catch (error) {
			console.log('%c...auth-error', 'color:gold', error);

			return null;
		}
	},
	staleTime: Infinity,
	retry: false,
});
