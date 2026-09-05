import { TanStackDevtools } from '@tanstack/react-devtools';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

import '../styles.css';
import type { QueryClient } from '@tanstack/react-query';
import { loggedInUserQuery } from '@/lib/user.query';

interface MyRouterContext {
  queryClient: QueryClient;
}

/* TODO: 8/18/26, stephen; add
 *   beforeload
 *   shell-component for providers */
export const Route = createRootRouteWithContext<MyRouterContext>()({
  beforeLoad: async ({ context }) => {
    const user = await context.queryClient.ensureQueryData(loggedInUserQuery);
    console.log('%c...user-_root', 'color:gold', user);
  },
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'TanStack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  );
}
