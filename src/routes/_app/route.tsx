import { createFileRoute, Outlet } from '@tanstack/react-router'
import AppShell from '@/components/app-shell';

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div id={'layout'} className={'grid min-h-screen grid-cols-1 gap5 md:grid-cols-4'}>
      <AppShell />
    <main>
      <Outlet />
    </main>
  </div>)
}