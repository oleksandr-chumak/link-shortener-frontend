import React, { FC } from 'react'
import { MainWrapperProps } from './main-controller.types'
import { Wrapper } from './main-controller.styled'
import { UnauthorizedMain } from '../UnauthorizedMain/unauthorized-main.component'
import { useAppSelector } from '../../../store'
import { AuthorizedMain } from '../AuthorizedMain/authorized-main.component'

export const MainController:FC<MainWrapperProps> = () => {
  const {user} = useAppSelector((state) => state.auth)
  const Main = user ? <AuthorizedMain/>: <Wrapper><UnauthorizedMain/></Wrapper>
  return Main
}

