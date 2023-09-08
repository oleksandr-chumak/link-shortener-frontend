import React, { FC } from 'react'
import { outlinedButtonIcons, OutlinedButtonProps } from './outlined-button.types'
import { OutlinedButtonIconWrapper, OutlinedButtonWrapper } from './outlined-button.styled'

export const OutlinedButton: FC<OutlinedButtonProps> = ({ iconType,children,...props }) => {
  const Icon = iconType ? outlinedButtonIcons[iconType] : null;
  return (
    <OutlinedButtonWrapper {...props}>
      {children}
      {
        Icon &&
        <OutlinedButtonIconWrapper>
          <Icon/>
        </OutlinedButtonIconWrapper>
      }
    </OutlinedButtonWrapper>
  )
}

