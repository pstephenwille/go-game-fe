import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/game/$gameId')({
	component: RouteComponent,
});

function RouteComponent() {
	// const { gameId } = useParams({ strict: false });
	return <div>Hello /game/1!</div>;
}
