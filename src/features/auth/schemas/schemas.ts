import * as Yup from 'yup'
import { confirmPassword, email, password, username } from './fields'

export const resetSchema =  Yup.object().shape({
  password,
  confirmPassword
})
export const resetRequestSchema = Yup.object().shape({
  email
})
export const signInSchema = Yup.object().shape({
  email,
  password
})
export const userIdentificationSchema = Yup.object().shape({
  username,
  email,
})

export const passwordSecuritySchema  = Yup.object().shape({
  password,
  confirmPassword,
})