import { Login, Register, Reset } from '../../views'
import { PROTECTION, Routes } from './routes.types'

const routes: Routes[] = [
  {
    routeProps: {
      path: '/login',
    },
    element: <Login />,
  },
  {
    routeProps: {
      path: '/register/:stage',
    },
    element: <Register />,
  },
  {
    routeProps: {
      path: '/reset',
    },
    element: <Reset />,
  },
  {
    routeProps: {
      path: '/reset',
    },
    element: <Reset />,
  },
]
export const onlyUnauthorizedRoutes =
  routes.map((route) => ({ ...route, protection: PROTECTION.ONLY_UNAUTHORIZED }))