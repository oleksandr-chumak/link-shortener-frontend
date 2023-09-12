import React, { FC } from 'react'
import { Table } from '../../UI'
import { DesktopTableHeader } from '../headers'
import { DesktopTableBody } from '../bodies'
import { TableBodyProps } from '../Table/history-table.types'
import { DesktopTableWrapper } from './tables.styled'

export const DesktopTable:FC<TableBodyProps> = ({rows}) => {
  return (
    <DesktopTableWrapper>
      <Table>
        <DesktopTableHeader />
        <DesktopTableBody rows={rows} />
      </Table>
    </DesktopTableWrapper>
  )
}

