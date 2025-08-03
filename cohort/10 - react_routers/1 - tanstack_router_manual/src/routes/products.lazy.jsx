import { createLazyFileRoute, Link } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/products')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
      <Link
        style={{ border: '1px solid black', padding: '10px' }}
        to={'/products/1'}
      >
        P-1
      </Link>
      <Link
        style={{ border: '1px solid black', padding: '10px' }}
        to={'/products/2'}
      >
        P-2
      </Link>
      <Link
        style={{ border: '1px solid black', padding: '10px' }}
        to={'/products/3'}
      >
        P-3
      </Link>
    </div>
  );
}
