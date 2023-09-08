import { yupResolver } from '@hookform/resolvers/yup'
import {  userIdentificationSchema } from '../../../../../../../features'

export const FORM_OPTIONS = {
  defaultValues: {
    username: '',
    email: '',
  },
  resolver: yupResolver(userIdentificationSchema),
}