import React, { FC } from 'react'
import { MobileTableHeader } from '../headers'
import { MobileTableBody } from '../bodies'
import { TableBodyProps } from '../Table/history-table.types'
import { MobileTableWrapper } from './tables.types'

export const MobileTable: FC<TableBodyProps> = ({ rows }) => {
  return (
    <MobileTableWrapper>
      <MobileTableHeader />
      <MobileTableBody rows={rows} />
    </MobileTableWrapper>
  )
}

