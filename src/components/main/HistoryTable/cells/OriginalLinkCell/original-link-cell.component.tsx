import React, { FC } from 'react'
import { OriginalLinkCellProps } from './original-link-cell.types'
import { OriginalLinkCellHeader, OriginalLinkCellWrapper } from './original-link-cell.styled'
import {OriginalLinkFavicon} from './original-link-favicon.component'

export const OriginalLinkCell: FC<OriginalLinkCellProps> = ({ originalLink }) => {
  const host = new URL(originalLink).host
  return (
    <OriginalLinkCellWrapper>
      <OriginalLinkFavicon host={host}/>
      <OriginalLinkCellHeader>{originalLink}</OriginalLinkCellHeader>
    </OriginalLinkCellWrapper>
  )
}

