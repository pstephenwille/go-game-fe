import { createContext, useContext } from 'react';

export type AuthContextValue = {};

export const AuthContext = createContext<AuthContextValue | undefined>(
	undefined,
);

export function useAuth() {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
}
