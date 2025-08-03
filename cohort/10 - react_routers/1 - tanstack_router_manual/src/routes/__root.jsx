import * as React from 'react';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <ul style={{ display: 'flex', gap: '10px', listStyle: 'none' }}>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/products'}>Products</Link>
      </ul>
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
