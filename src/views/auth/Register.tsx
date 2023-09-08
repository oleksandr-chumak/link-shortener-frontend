import { FormWrapper, RegistrationForm,AuthMethods } from '../../components';
import {
  AuthRedirect,
  Form,
  Header,
  A,
  Separator,
} from '../../components/auth/forms/FormWrapper/form-wrapper.styled'


export const Register = () => {
  return (
    <FormWrapper>
      <Form>
        <Header>Register</Header>
        <RegistrationForm />
        <Separator>Or sign up with</Separator>
        <AuthMethods/>
        <AuthRedirect>Already have an account? <A to='../login'>Login</A></AuthRedirect>
      </Form>
    </FormWrapper>
  );
};
