import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/(play)/friend')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(play)/lobby"!</div>
}
