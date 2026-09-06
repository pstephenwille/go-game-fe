import { Button } from '@heroui/react';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/auth/use-auth';
import { loggedInUserOptions } from '@/auth/user.query';
import { MainNav } from '@/components/app-shell/main-nav';

export default () => {
	const { data } = useQuery(loggedInUserOptions);
	const auth = useAuth();

	const user = data?.user;
	const loginHandler = user ? auth.signOut : auth.signIn;
	const buttonText = user ? 'Sign out' : 'Sign in';

	return (
		<div>
			<MainNav />
			<Button onPress={loginHandler}>{buttonText}</Button>
		</div>
	);
};
