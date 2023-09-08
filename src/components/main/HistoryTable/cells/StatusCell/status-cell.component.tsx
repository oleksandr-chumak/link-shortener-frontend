import React, { FC } from 'react'
import { StatusCellProps } from './status-cell.types'
import { StatusCellHeader, StatusCellIconWrapper, StatusCellWrapper } from './status-cell.styled'
import { statusIcons, statusValues } from './status-cell.constants'

export const StatusCell:FC<StatusCellProps> = ({status}) => {
  const StatusCellIcon  = statusIcons[status];
  return (
    <StatusCellWrapper $status={status}>
      <StatusCellHeader>{statusValues[status]}</StatusCellHeader>
      <StatusCellIconWrapper $status={status}>
        <StatusCellIcon/>
      </StatusCellIconWrapper>
    </StatusCellWrapper>
  )
}

