import { FormWrapper, LoginForm,AuthMethods } from '../../components';
import {
  AuthRedirect,
  Form,
  Header,
  A,
  Separator,
} from '../../components/auth/forms/FormWrapper/form-wrapper.styled'

export const Login = () => {
  return (
    <FormWrapper>
      <Form>
        <Header>Login</Header>
        <LoginForm/>
        <Separator>Or sign up with</Separator>
        <AuthMethods/>
        <AuthRedirect>Don&apos;t have an account? <A to='../register/1'>Register now</A></AuthRedirect>
      </Form>
    </FormWrapper>
  );
};
