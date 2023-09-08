import React from 'react'
import { ErrorOption, useForm } from 'react-hook-form'
import axios from 'axios'

import { AuthButton, emailFieldProps, Error, passwordFieldProps } from '../../UI'
import { FORM_OPTIONS } from './login-form.constants'
import { LoginFormValues } from './login-form.types'
import { TextFieldWrapper } from '../../TextFieldWrapper/text-field-wrapper.component'
import { login } from '../../../../auth.service'
import { useNavigate } from 'react-router-dom'


export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState,
    setError,
  } = useForm<LoginFormValues>(FORM_OPTIONS)
  const { errors } = formState
  const onSubmit = async (data: LoginFormValues) => {
    const serverError = errors?.root?.serverError as ErrorOption
    if (serverError) {
      setError('root.serverError', serverError)
    }
    try {
      await login(data)
      window.location.href = ''
    } catch (e) {
      if (!axios.isAxiosError (e)) {
        return
      }
      const message = e.response?.data.message
      setError('root.serverError', { type: 'custom', message })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextFieldWrapper
        {...emailFieldProps}
        control={control}
      />
      <Error message={errors.email?.message} />

      <TextFieldWrapper
        {...passwordFieldProps}
        withResetPasswordLabel={true}
        control={control}
      />
      <Error message={errors?.password?.message} />

      <AuthButton type='submit'>login</AuthButton>
      <Error message={errors?.root?.serverError.message} />
    </form>
  )
}