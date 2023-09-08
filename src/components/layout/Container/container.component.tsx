import React, { FC } from 'react'
import { ContainerWrapper } from './container.styled'
import { ContainerProps } from './container.types'

export const Container:FC<ContainerProps> = ({children}) => {
  return (
    <ContainerWrapper>
      {children}
    </ContainerWrapper>
  )
}
