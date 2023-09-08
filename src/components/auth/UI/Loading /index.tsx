import React from 'react'
import {LdsRingContainer,LdsRingDiv} from './loading.styled'
export const Loading = () => {
  return (
    <LdsRingContainer className="lds-ring">
      <LdsRingDiv></LdsRingDiv>
      <LdsRingDiv></LdsRingDiv>
      <LdsRingDiv></LdsRingDiv>
      <LdsRingDiv></LdsRingDiv>
    </LdsRingContainer>
  )
}

