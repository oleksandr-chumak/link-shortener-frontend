import { FormProvider } from './RegistrationFormProvider/form-provider.component'
import { CurrentStage } from './CurrentStage'
import React from 'react'

export const RegistrationForm = () => {
  return (
    <FormProvider>
      <CurrentStage />
    </FormProvider>
  )
}
