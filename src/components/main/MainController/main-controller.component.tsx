import React, { FC } from 'react'
import { MainWrapperProps } from './main-controller.types'
import { Wrapper } from './main-controller.styled'
import { UnauthorizedMain } from '../UnauthorizedMain/unauthorized-main.component'

export const MainController:FC<MainWrapperProps> = () => {
  return (
    <Wrapper>
      <UnauthorizedMain/>
    </Wrapper>
  )
}

