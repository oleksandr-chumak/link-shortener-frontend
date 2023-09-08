import React from 'react'
import axios from 'axios'
import { ErrorOption, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { AuthButton, emailFieldProps, Error } from '../../../UI'
import { resetPasswordRequest } from '../../../../../services'
import { FormDescription } from './reset-request-form-styled'
import { TextFieldWrapper } from '../../../TextFieldWrapper/text-field-wrapper.component'
import { FORM_OPTIONS } from './reset-request.constants'
import { useAlert } from '../../../../../hooks'
import { ResetRequestFormValues } from '../../../../../features'

export const ResetRequestForm = () => {
  const { control, handleSubmit, formState, setError } =
    useForm<ResetRequestFormValues>(FORM_OPTIONS)
  const { alert } = useAlert()
  const navigate = useNavigate()
  const { errors } = formState
  const onSubmit = async ({ email }: ResetRequestFormValues) => {
    const serverError = errors?.root?.serverError as ErrorOption
    if (serverError) {
      setError('root.serverError', serverError)
    }
    try {
      await resetPasswordRequest(email)
      alert({
        type: 'success',
        header: 'Email Sent',
        description: 'An email with a reset link has been sent to the email address.',
      })
      navigate('../login')
    } catch (e) {
      if (!axios.isAxiosError(e)) {
        return
      }
      const message = e.response?.data.message
      setError('root.serverError', { type: 'custom', message })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormDescription>
        Enter the email address associated with your account and we&apos;ll send you a link to reset your password
      </FormDescription>
      <TextFieldWrapper
        {...emailFieldProps}
        control={control}
      />
      <Error message={errors?.email?.message} />

      <AuthButton type={'submit'}>Continue</AuthButton>
      <Error message={errors?.root?.serverError.message} />
    </form>
  )
}

