import { PROTECTION, Routes } from './routes.types'

const routes:Routes[] = [
]

export const onlyAuthorizedRoutes =
  routes.map((route) => ({...route,protection: PROTECTION.ONLY_AUTHORIZED}) )