import React, { FC } from 'react'
import { DesktopTableRow } from '../rows'
import { TableBodyProps } from '../Table/history-table.types'
import { DesktopTableBodyWrapper } from './table-body.styled'

export const DesktopTableBody:FC<TableBodyProps> = ({rows}) => {
  return (
    <DesktopTableBodyWrapper>
      {rows.map((row) => <DesktopTableRow key={Math.random()} {...row}/>)}
    </DesktopTableBodyWrapper>
  )
}

