import React from 'react'
import { Description, Header, HeaderContainer, HeaderFieldWrapper, UnauthorizedField } from './unauthorized-main.styled'

export const UnauthorizedMain = () => {
  return (
    <>
      <HeaderContainer>
        <Header>Shorten Your Loooong Links :)</Header>
        <Description>
          Linkly is an efficient and easy-to-use URL shortening service that streamlines your online
          experience.
        </Description>
        <HeaderFieldWrapper>
          <UnauthorizedField />
        </HeaderFieldWrapper>
      </HeaderContainer>
    </>
  )
}

