import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div id={'layout'}>
layout
    <main>
      <Outlet />
    </main>
  </div>
}