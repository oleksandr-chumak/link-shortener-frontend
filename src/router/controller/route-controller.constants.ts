import { PROTECTION } from '../routes/routes.types'
import { FC } from 'react'
import { Children } from '../../types/children.interface'
import { OnlyAuthorize, OnlyUnauthorized } from '../pathSecurity'

export const Protections: Record<PROTECTION, FC<Children>> = {
  [PROTECTION.ONLY_AUTHORIZED]: OnlyAuthorize,
  [PROTECTION.ONLY_UNAUTHORIZED]: OnlyUnauthorized,
}