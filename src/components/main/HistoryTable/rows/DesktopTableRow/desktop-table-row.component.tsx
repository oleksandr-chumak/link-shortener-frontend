import React, { FC } from 'react'
import { OriginalLinkCell, QrCell, ShortLinkCell, StatusCell } from '../../cells'
import { TableBodyCell, TableBodyRow } from '../../../UI'
import { TableRowProps } from '../../Table/history-table.types'

export const DesktopTableRow: FC<TableRowProps> = (
  {
    shortLink,
    originalLink,
    clicks,
    status,
    date,
  }) => {
  return (
    <TableBodyRow>
      <TableBodyCell><ShortLinkCell shortLink={shortLink} /></TableBodyCell>
      <TableBodyCell><OriginalLinkCell originalLink={originalLink} /></TableBodyCell>
      <TableBodyCell><QrCell shortLink={shortLink} /></TableBodyCell>
      <TableBodyCell>{clicks}</TableBodyCell>
      <TableBodyCell><StatusCell status={status} /></TableBodyCell>
      <TableBodyCell>{date}</TableBodyCell>
    </TableBodyRow>
  )
}

