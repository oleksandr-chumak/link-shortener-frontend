import React, { FC } from 'react'
import {
  AuthorizedActionsWrapper, AuthorizedLogo,
  FieldWithAutoPasteWrapper,
} from './header.styled'
import { FieldWithAutoPaste } from '../../main/FieldWithClipboard/FieldWithAutoPaste/field-with-auto-paste.component'
import { logout, useAppDispatch } from '../../../store'
import { AuthorizedHeaderProps } from './header.types'
import { DropDown } from '../../main'
import { IoExitOutline } from 'react-icons/io5'

const AuthorizedHeader: FC<AuthorizedHeaderProps> = ({ user }) => {
  const dispatch = useAppDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <>
      <AuthorizedLogo>Linkly</AuthorizedLogo>
      <FieldWithAutoPasteWrapper>
        <FieldWithAutoPaste />
      </FieldWithAutoPasteWrapper>
      <AuthorizedActionsWrapper>
        <DropDown
          title={user.username}
          subTitle={'Welcome'}
          dropDownItems={[
            {
              title: 'Logout',
              icon: IoExitOutline,
              onClick: handleLogout
            }
          ]}
        />
      </AuthorizedActionsWrapper>


    </>
  )
}

export default AuthorizedHeader