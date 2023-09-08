import { RouteProps } from 'react-router-dom'
import { FC, ReactElement } from 'react'
import { Children } from '../../types/children.interface'

export enum PROTECTION {
  ONLY_AUTHORIZED = 'onlyAuthorized',
  ONLY_UNAUTHORIZED = 'onlyUnauthorized'
}

export interface Routes {
  routeProps: RouteProps
  element:ReactElement,
  protection?:PROTECTION
  layout?: FC<Children>
}