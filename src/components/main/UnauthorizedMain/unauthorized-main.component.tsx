import React from 'react'
import {
  Description,
  Header,
  UnauthorizedContainer,
  UnauthorizedField,
  UnauthorizedFieldWrapper,
} from './unauthorized-main.styled'
import Limit from '../Limit/limit.component'
import { HistoryTable } from '../HistoryTable'

export const UnauthorizedMain = () => {
  return (
    <>
      <UnauthorizedContainer>
        <Header>Shorten Your Loooong Links :)</Header>
        <Description>
          Linkly is an efficient and easy-to-use URL shortening service that streamlines your online
          experience.
        </Description>
        <UnauthorizedFieldWrapper>
          <UnauthorizedField />
        </UnauthorizedFieldWrapper>
        <Limit />
      </UnauthorizedContainer>
      <HistoryTable/>
    </>
  )
}

