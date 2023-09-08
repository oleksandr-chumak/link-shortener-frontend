import React, { FC } from 'react'
import { DropDownItemProps } from './drop-down.types'
import { DropDownItemWrapper, DropDownTitle } from './drop-down.styled'

export const DropDownItem: FC<DropDownItemProps> = ({ title, icon, onClick }) => {
  const Icon = icon ? icon : null
  return (
    <DropDownItemWrapper onClick={onClick}>
      {Icon && <Icon />}
      <DropDownTitle>{title}</DropDownTitle>
    </DropDownItemWrapper>
  )
}

