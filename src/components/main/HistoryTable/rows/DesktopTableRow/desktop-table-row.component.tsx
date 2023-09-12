import React, { FC } from 'react'
import { OriginalLinkCell, QrCell, ShortLinkCell, StatusCell } from '../../cells'
import { TableBodyCell, TableBodyRow } from '../../../UI'
import { TransformedLink } from '../../../../../store/interfaces/link.types'

export const DesktopTableRow: FC<TransformedLink> = (
  {
    shortLink,
    originalLink,
    clicks,
    status,
    createdAt,
  }) => {
  return (
    <TableBodyRow>
      <TableBodyCell><ShortLinkCell shortLink={shortLink} /></TableBodyCell>
      <TableBodyCell><OriginalLinkCell originalLink={originalLink} /></TableBodyCell>
      <TableBodyCell><QrCell shortLink={shortLink} /></TableBodyCell>
      <TableBodyCell>{clicks}</TableBodyCell>
      <TableBodyCell><StatusCell status={status} /></TableBodyCell>
      <TableBodyCell>{JSON.stringify(createdAt)}</TableBodyCell>
    </TableBodyRow>
  )
}

