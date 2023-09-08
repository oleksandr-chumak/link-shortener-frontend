import React, { FC } from 'react'
import { MobileTableHeader } from '../../headers'
import { MobileTableBody } from '../../bodies'
import { TableBodyProps } from '../../Table/history-table.types'

export const MobileTable:FC<TableBodyProps> = ({rows}) => {
  return (
    <ul>
      <MobileTableHeader/>
      <MobileTableBody rows={rows}/>
    </ul>
  )
}

