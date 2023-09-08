import React, { FC } from 'react'
import { TableBody } from '../../../UI'
import { DesktopTableRow } from '../../rows'
import { TableBodyProps } from '../../Table/history-table.types'

export const DesktopTableBody:FC<TableBodyProps> = ({rows}) => {
  return (
    <TableBody>
      {rows.map((row) => <DesktopTableRow key={Math.random()} {...row}/>)}
    </TableBody>
  )
}

