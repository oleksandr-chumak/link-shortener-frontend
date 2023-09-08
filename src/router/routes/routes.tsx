import { onlyAuthorizedRoutes } from './only-authorized-routes'
import { onlyUnauthorizedRoutes } from './only-unauthorized-routes'
import { withoutAuthorizationRoutes } from './without-authorization-routes'
import { Routes } from './routes.types'


export const routes: Routes[] = [
  ...onlyAuthorizedRoutes,
  ...onlyUnauthorizedRoutes,
  ...withoutAuthorizationRoutes,
]
