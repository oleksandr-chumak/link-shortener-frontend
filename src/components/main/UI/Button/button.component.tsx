import React, { FC } from 'react'
import { ButtonWrapper } from './button.styled'
import { DetailedButtonProps } from '../../../../types'

export const Button: FC<DetailedButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonWrapper {...props}>
      {children}
    </ButtonWrapper>
  )
}

