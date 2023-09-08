import React, { FC } from 'react'
import { useAppSelector } from '../../store'
import { Navigate, useLocation } from 'react-router-dom'
export interface OnlyAuthorizeProps {
  children: React.ReactNode
}

export const OnlyAuthorize:FC<OnlyAuthorizeProps> = ({children}) => {
  const { user } = useAppSelector(state => state.auth)
  const location = useLocation();
  if (!user) {
    return <Navigate to={'/login'} state={{from:location}} replace/>

  }
  return <>{children}</>
}

