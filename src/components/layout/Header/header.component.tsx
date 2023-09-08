import React from 'react'
import {
  HeaderWrapper,
  Navigation,
} from './header.styled'
import { Container } from '../Container/container.component'
import { useAppSelector } from '../../../store'
import AuthorizedHeader from './authorized-header.component'
import UnauthorizedHeader from './unauthorized-header.component'

export const Header = () => {
  const {user} = useAppSelector((state) => state.auth)
  return (
    <HeaderWrapper>
      <Container>
        <Navigation>
          { user ? <AuthorizedHeader user={user}/> : <UnauthorizedHeader/>}
        </Navigation>
      </Container>
    </HeaderWrapper>
  )
}

