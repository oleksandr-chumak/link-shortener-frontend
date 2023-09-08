import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { AuthButton, confirmPasswordFieldProps, Error, passwordFieldProps } from '../../../../../UI'
import { ServerException } from '../../../../../UI/Error/error.styled'
import { TextFieldWrapper } from '../../../../../TextFieldWrapper/text-field-wrapper.component'
import { FORM_OPTIONS, SUCCESS_REGISTRATION } from './security-stage.constants'
import { useAlert } from '../../../../../../../hooks'
import { PasswordSecurityValues, useFormContext } from '../../../../../../../features'
import { register } from '../../../../../../../auth.service'

export const SecurityStage = () => {
  const { serverError, setServerError, updateValidate, clearServerError, updateValues, values } = useFormContext()
  const { control, formState, getValues, reset, handleSubmit } =
    useForm<PasswordSecurityValues>(FORM_OPTIONS)
  const { errors } = formState
  const navigate = useNavigate()
  const { alert } = useAlert()
  useEffect(() => {
    reset({
      password: values.current.password,
      confirmPassword: values.current.confirmPassword,
    })
  }, [])
  const onChange = () => {
    updateValues(getValues())
    updateValidate({ 2: false })
    if (!serverError) {
      return
    }
    clearServerError()
  }
  const onSubmit = async () => {
    try {
      await register(values.current)
      alert(SUCCESS_REGISTRATION)
      navigate('../login')
    } catch (e) {
      if (!axios.isAxiosError(e)) {
        return
      }
      setServerError(e.response?.data.message)
      return
    }
    clearServerError()
    updateValidate({ 2: true })
  }
  return (
    <form onChange={onChange} onSubmit={handleSubmit(onSubmit)}>
      <TextFieldWrapper
        {...passwordFieldProps}
        control={control} />
      <Error message={errors.password?.message} />

      <TextFieldWrapper
        {...confirmPasswordFieldProps}
        control={control} />
      <Error message={errors.confirmPassword?.message} />
      <AuthButton type='submit'>register</AuthButton>

      <Error component={ServerException} message={serverError} />
    </form>
  )
}

