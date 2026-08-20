import { useQuery } from '@tanstack/react-query';
import { createContext } from 'react';
import { fetchCurrentUserProfile } from '@/auth/api';

export interface AuthContextValue {
	isAuthenticated: boolean;
	user: { id: string; name: string } | null;
	isLoading: boolean;
}
export const AuthContext = createContext<AuthContextValue | null>(null);
// 3. Derive the type directly from the Context variable for use in your router
export type AuthContextType = React.ContextType<typeof AuthContext>;

export function AuthProvider({ children }) {
	const {
		data: user,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['auth-user'],
		queryFn: fetchCurrentUserProfile,
		staleTime: Infinity,
		retry: false,
	});

	return (
		<AuthContext.Provider
			value={{ user, isAuthenticated: true, isLoading, error }}
		>
			{children}
		</AuthContext.Provider>
	);
}
