import { useContext } from 'react'
import { FormContext } from '../../../components/auth/forms/RegistrationForm/RegistrationFormProvider/form-context'

export const useFormContext = () => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('Component out of form context')
  }

  return context
}