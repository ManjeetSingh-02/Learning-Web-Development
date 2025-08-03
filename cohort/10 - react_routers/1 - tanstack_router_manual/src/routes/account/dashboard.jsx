import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/account/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/account/dashboard"!</div>
}
