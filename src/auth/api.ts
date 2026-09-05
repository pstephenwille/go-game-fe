import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';

async function fetchCurrentUserProfile() {
	try {
		const [user, session] = await Promise.all([
			fetchAuthSession(),
			getCurrentUser(),
		]);
		return {user, session}
	} catch (error) {
		console.log('%c...auth-error', 'color:gold',   error);

		return null;
	}
}

export { fetchCurrentUserProfile };
