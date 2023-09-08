import { createContext } from 'react'
import { IFormContext } from '../../../../../features/auth/types/context.types'

export const FormContext = createContext<IFormContext | null>(null)