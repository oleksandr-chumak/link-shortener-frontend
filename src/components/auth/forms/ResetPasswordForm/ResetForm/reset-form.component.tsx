import axios from 'axios'
import { ErrorOption, useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { FORM_OPTIONS, SUCCESS_RESET_PASSWORD_ALERT } from './reset-form.contstants'
import { ResetFormValues } from './reset-form.types'
import { TextFieldWrapper } from '../../../TextFieldWrapper/text-field-wrapper.component'
import { AuthButton, confirmPasswordFieldProps, Error, passwordFieldProps } from '../../../UI'
import { resetPassword } from '../../../../../services'
import { useAlert } from '../../../../../hooks'
import { useResetErrorHandler } from '../../../../../features'

export const ResetFormComponent = () => {
  const { control, handleSubmit, setError, formState } = useForm<ResetFormValues>(FORM_OPTIONS)
  const { errors } = formState
  const [searchParams] = useSearchParams()
  const { alert } = useAlert()
  const navigate = useNavigate()
  const { handleError } = useResetErrorHandler()

  const onSubmit = async (data: ResetFormValues) => {
    const serverError = errors?.root?.serverError as ErrorOption | undefined
    if (serverError) {
      setError('root.serverError', serverError)
    }
    const token = searchParams.get('token')
    if (token === null) {
      navigate('../reset')
      return
    }
    const resetData = {
      newPassword: data.password,
      newConfirmPassword: data.confirmPassword,
      token,
    }
    try {
      await resetPassword(resetData)
      alert(SUCCESS_RESET_PASSWORD_ALERT)
      navigate('../login')
    } catch (e) {
      if (!axios.isAxiosError(e)) {
        return
      }
      const data = e?.response?.data
      const errorHandler = handleError(e?.response?.data.statusCode)
      if (errorHandler) {
        errorHandler()
        return
      }
      setError('root.serverError', { type: 'custom', message: data.message })
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextFieldWrapper
        {...passwordFieldProps}
        label='New password'
        control={control}
      />
      <Error message={errors?.password?.message} />

      <TextFieldWrapper
        {...confirmPasswordFieldProps}
        label='New confirm password'
        control={control}
      />
      <Error message={errors?.confirmPassword?.message} />

      <AuthButton type='submit'>reset password</AuthButton>
      <Error message={errors?.root?.serverError.message} />
    </form>
  )
}