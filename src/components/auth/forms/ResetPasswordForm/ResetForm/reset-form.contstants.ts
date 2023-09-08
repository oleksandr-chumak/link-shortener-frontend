import { yupResolver } from '@hookform/resolvers/yup'
import { resetSchema } from '../../../../../features'
import { AlertWithoutId } from '../../../../../store/types'

export const FORM_OPTIONS = {
  defaultValues: {
    password: '',
    confirmPassword: '',
  },
  resolver: yupResolver(resetSchema),
}
export const SUCCESS_RESET_PASSWORD_ALERT:AlertWithoutId = {
  type: 'success',
  header: 'Password reset',
  description: 'Your password has been successfully reset.',
}