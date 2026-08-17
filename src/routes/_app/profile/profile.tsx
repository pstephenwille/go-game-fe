import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/profile/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/user/login"!</div>
}
