import React, { FC, useEffect } from 'react'
import { Header } from '../Header/header.component'
import { MainLayoutProps } from './main-layout.types'
import { Container } from '../Container/container.component'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import background from './background.svg'

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  useEffect(() => {
    document.body.style.background = `url(${background}) no-repeat fixed center center`
    document.body.style.backgroundSize = 'cover'
  }, [])
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
    </>
  )
}

