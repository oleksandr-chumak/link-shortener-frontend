import React from 'react'
import { Navigation } from '../Navigation/navigation.component'
import { FieldWithAutoPaste } from '../FieldWithClipboard/FieldWithAutoPaste/field-with-auto-paste.component'
import { AuthorizedFieldContainer } from './authorized-main.styled'
import { useMediaQuery } from '../../../hooks'

export const AuthorizedMain = () => {
  const { matches } = useMediaQuery('max-width', 'tabletL')
  return (
    <>
      {matches &&
        <AuthorizedFieldContainer>
          <FieldWithAutoPaste />
        </AuthorizedFieldContainer>
      }
      <Navigation />
    </>
  )
}

