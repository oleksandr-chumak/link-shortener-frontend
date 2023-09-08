import React from 'react';
import {AuthMethodsWrapper,GoogleAuthWrapper} from './auth-methods.styled'
import { BsGoogle } from 'react-icons/bs';
import { redirectToGoogleLogin } from '../../../../auth.service'

export const AuthMethods = () => {
  return (
    <AuthMethodsWrapper>
      <GoogleAuthWrapper onClick={redirectToGoogleLogin}>
        <BsGoogle color="white" size="21px" />
      </GoogleAuthWrapper>
    </AuthMethodsWrapper>
  );
};
