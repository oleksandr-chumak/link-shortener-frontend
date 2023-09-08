import { FC } from 'react'
import { TableBodyProps } from '../../Table/history-table.types'
import { MobileTableRow } from '../../rows'
import { MobileTableBodyWrapper } from './mobile-table-body.styled'

export const MobileTableBody: FC<TableBodyProps> = ({rows}) => {
  return (
    <MobileTableBodyWrapper>
      {rows.map((row) => <MobileTableRow key={Math.random()} {...row}/>)}
    </MobileTableBodyWrapper>
  )
}

