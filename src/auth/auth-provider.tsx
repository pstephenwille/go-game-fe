import { useQuery } from '@tanstack/react-query';
import {
	signOut as amplifySignOut,
	signInWithRedirect,
} from 'aws-amplify/auth';
import type { ReactNode } from 'react';
import { AuthContext } from '@/auth/auth-context';
import { loggedInUserOptions } from '@/auth/user.query';

export function AuthProvider({ children }: { children: ReactNode }) {
	const { data: user, isLoading } = useQuery(loggedInUserOptions);
	console.log('%c...auth', 'color:grey', user, isLoading);

	const signIn = async () => {
		sessionStorage.setItem(
			'redirect_after_login',
			location.pathname + location.search,
		);

		void (await signInWithRedirect({
			provider: 'Google',
			customState: window.location.pathname + window.location.search,
		}));
	};

	const signOut = async () => {
		try {
			void (await amplifySignOut());
		} catch (error) {
			console.log('%c...error', 'color:gold', error);
		}
	};

	return (
		<AuthContext value={{ signIn, signOut, user }}>{children}</AuthContext>
	);
}
