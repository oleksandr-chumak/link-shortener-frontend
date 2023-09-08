import React, { useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

import { AuthButton, emailFieldProps, Error, usernameFieldProps } from '../../../../../UI'
import { TextFieldWrapper } from '../../../../../TextFieldWrapper/text-field-wrapper.component'
import { FORM_OPTIONS } from './user-indification-stage.constants'
import { useFormContext, UserIdentificationValues } from '../../../../../../../features'
import { checkEmail } from '../../../../../../../auth.service'


export const UserIdentificationStage = () => {
  const {
    setServerError,
    clearServerError,
    serverError,
    updateValues,
    updateValidate,
    switchToNextPage,
    values,
  } = useFormContext()
  const { control, reset, getValues, formState, handleSubmit } =
    useForm<UserIdentificationValues>(FORM_OPTIONS)
  const { errors } = formState

  useEffect(() => {
    reset({
      username: values.current.username,
      email: values.current.email,
    })
  }, [])

  const onSubmit = async (data: UserIdentificationValues) => {
    try {
      await checkEmail(data.email)
    } catch (e) {
      if (!axios.isAxiosError(e)) {
        return;
      }
      setServerError(e.response?.data.message)
      return;
    }
    clearServerError()
    updateValidate({ 1: true })
    switchToNextPage()
  }
  const onChange = () => {
    updateValidate({ 1: false })
    updateValues(getValues())
    if (!serverError) {
      return
    }
    clearServerError()
  }
  return (
    <form onChange={onChange} onSubmit={handleSubmit(onSubmit)}>
      <TextFieldWrapper
        {...usernameFieldProps}
        control={control}
      />
      <Error message={errors.username?.message} />
      <TextFieldWrapper
        {...emailFieldProps}
        control={control}
      />
      <Error message={errors.email?.message} />
      <AuthButton type='submit'>continue</AuthButton>
      <Error message={serverError} />
    </form>
  )
}
