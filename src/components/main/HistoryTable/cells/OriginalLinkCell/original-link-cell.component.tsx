import React, { FC } from 'react'
import { OriginalLinkCellProps } from './original-link-cell.types'

export const OriginalLinkCell: FC<OriginalLinkCellProps> = ({originalLink}) => {
  return (
    <>{originalLink}</>
  )
}

