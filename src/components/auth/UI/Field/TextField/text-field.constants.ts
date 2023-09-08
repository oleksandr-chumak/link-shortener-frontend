import { FieldProps, FieldType } from './text-field.types'
import { Field } from './text-field.styled'
import React from 'react'
import { TextFieldWithPassword } from '../TextFieldWithPassword/text-field-with-password.component'

export const fields: Record<FieldType, typeof Field | React.FC> = {
  text: Field,
  password: TextFieldWithPassword,
}
export const emailFieldProps:FieldProps<'email'> = {
  name: 'email',
  label: 'Email',
  iconType: 'email',
  placeholder: 'Enter your email',
}
export const passwordFieldProps:FieldProps<'password'> = {
  name: 'password',
  label: 'Password',
  iconType: 'lock',
  fieldType: 'password',
  placeholder: 'Enter your password',
}

export const usernameFieldProps:FieldProps<'username'> = {
  name: 'username',
  label: 'Username',
  iconType: 'user',
  placeholder: 'Enter username',
}
export const confirmPasswordFieldProps:FieldProps<'confirmPassword'> = {
  name: 'confirmPassword',
  label: 'Confirm password',
  iconType: 'lock',
  fieldType: 'password',
  placeholder: 'Enter confirm password',
}
