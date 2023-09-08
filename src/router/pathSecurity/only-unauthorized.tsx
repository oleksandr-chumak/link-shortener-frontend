import React, { FC } from 'react'
import { useAppSelector } from '../../store'
import {Navigate, useLocation} from 'react-router-dom'


interface Props {
  children: React.ReactNode
}

export const OnlyUnauthorized: FC<Props> = ({ children }) => {
  const { user } = useAppSelector(state => state.auth)
  const location = useLocation();
  if (user) {
    return <Navigate to={'/'} state={{from:location}} replace/>
  }
  return <>{children}</>
}

