import React, { FC } from 'react'
import { Table } from '../../../UI'
import { DesktopTableHeader } from '../../headers'
import { DesktopTableBody } from '../../bodies'
import { TableBodyProps } from '../../Table/history-table.types'

export const DesktopTable:FC<TableBodyProps> = ({rows}) => {
  return (
    <Table>
      <DesktopTableHeader />
      <DesktopTableBody rows={rows} />
    </Table>
  )
}

