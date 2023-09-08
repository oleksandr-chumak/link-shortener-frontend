import { BackToLogin } from '../../components/auth/forms/ResetPasswordForm/ResetRequestForm/reset-request-form-styled'
import { FormResetController, FormWrapper } from '../../components'
import { AuthRedirect, Form, Header } from '../../components/auth/forms/FormWrapper/form-wrapper.styled'

export const Reset = () => {
  return (
    <FormWrapper>
      <Form>
        <Header>Reset</Header>
        <FormResetController/>
        <AuthRedirect><BackToLogin to={'../login'}>Return to login</BackToLogin></AuthRedirect>
      </Form>
    </FormWrapper>
  )
}

