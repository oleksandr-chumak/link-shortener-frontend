import React from 'react'
import { ActionsWrapper, LoginButton, Logo, RegisterButton } from './header.styled'
import { useNavigate } from 'react-router-dom'

const UnauthorizedHeader = () => {
  const navigate = useNavigate()
  return (
    <>
      <Logo>Linkly</Logo>
      <ActionsWrapper>
        <LoginButton iconType='exit' onClick={() => navigate('login')}>Login</LoginButton>
        <RegisterButton onClick={() => navigate('register/1')}>Register now</RegisterButton>
      </ActionsWrapper>
    </>
  )
}

export default UnauthorizedHeader