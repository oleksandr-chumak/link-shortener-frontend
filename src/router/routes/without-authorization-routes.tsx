import App from '../../views/App'
import { MainLayoutWithoutContainer } from '../../components/layout'
import { Routes } from './routes.types'

export const withoutAuthorizationRoutes: Routes[] = [
  {
    routeProps:{
      path: '/',
    },
    element: <App />,
    layout: MainLayoutWithoutContainer
  },
]