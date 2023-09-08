import { yupResolver } from '@hookform/resolvers/yup'
import { signInSchema } from '../../../../features'

export const FORM_OPTIONS = {
  defaultValues: {
    email: '',
    password: '',
  },
  resolver: yupResolver(signInSchema),
}

