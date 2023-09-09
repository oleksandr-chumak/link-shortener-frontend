import React, { FC, useEffect } from 'react'
import { Header } from '../Header/header.component'
import { Children } from '../../../types'
import background from './background.svg'


export const MainLayoutWithoutContainer:FC<Children> = ({children}) => {
  useEffect(() => {
    document.body.style.background = `url(${background}) no-repeat fixed center center`
    document.body.style.backgroundSize = 'cover'
  }, [])
  return (
    <>
      <Header />
      {children}
    </>
  )
}

