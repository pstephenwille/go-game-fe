import { Link } from '@tanstack/react-router';

const navigation = [
	{
		label: 'Home',
		to: '/',
	},
	{
		label: 'Game',
		to: `/game/$gameId`,
	},
	{
		label: 'Profile',
		to: '/profile',
	},
] as const;

export function MainNav() {
	return (
		<nav>
			<ul>
				{navigation.map((item, idx) => (
					<li key={idx}>
						<Link to={item.to}>{item.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
