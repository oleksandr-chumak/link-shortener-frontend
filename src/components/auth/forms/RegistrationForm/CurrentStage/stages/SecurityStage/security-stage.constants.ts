import { yupResolver } from '@hookform/resolvers/yup'
import { passwordSecuritySchema } from '../../../../../../../features'
import { AlertWithoutId } from '../../../../../../../store/types'

export const FORM_OPTIONS = {
  defaultValues: {
    password: '',
    confirmPassword: '',
  },
  resolver: yupResolver(passwordSecuritySchema),
}
export const SUCCESS_REGISTRATION: AlertWithoutId = {
  type: 'success',
  header: 'Thank you for registering',
  description: 'Check your email to verify your account',
}
