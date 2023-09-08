import React from 'react'
import { ActionsWrapper, HeaderWrapper, LoginButton, Logo, Navigation, RegisterButton } from './header.styled'
import { Container } from '../Container/container.component'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <Container>
        <Navigation>
          <Logo>Linkly</Logo>
          <ActionsWrapper>
            <LoginButton iconType='exit' onClick={() => navigate('login')}>Login</LoginButton>
            <RegisterButton onClick={() => navigate('register/1')}>Register now</RegisterButton>
          </ActionsWrapper>
        </Navigation>
      </Container>
    </HeaderWrapper>
  )
}

