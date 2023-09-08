import React, { FC } from 'react';
import { Wrapper } from './form-wrapper.styled';
import { Children } from '../../../../types/children.interface'


export const FormWrapper: FC<Children> = ({ children }) => {
  return (
    <Wrapper>
      <>{children}</>
    </Wrapper>
  );
};

