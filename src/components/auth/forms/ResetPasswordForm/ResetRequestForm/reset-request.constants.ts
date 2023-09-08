import { yupResolver } from '@hookform/resolvers/yup'
import { resetRequestSchema } from '../../../../../features'

export const FORM_OPTIONS = {
  defaultValues: {
    email: '',
  },
  resolver: yupResolver(resetRequestSchema),
}