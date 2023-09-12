import {
  MobileAttachmentList,
  MobileTableCell,
  MobileTableCellContent,
  MobileTableCellHeader,
} from './mobile-table-row.styled'
import { OriginalLinkCell, QrCell, StatusCell } from '../../cells'
import { FC } from 'react'
import { MobileAttachmentRowProps } from './mobile-table-row.types'

export const MobileAttachmentRow: FC<MobileAttachmentRowProps> = (
  {
    style,
    shortLink,
    originalLink,
    clicks,
    status,
    createdAt,
  }
) => {
  return (
    <MobileAttachmentList style={style}>
      <MobileTableCell>
        <MobileTableCellHeader>Original Link</MobileTableCellHeader>
        {/* eslint-disable-next-line camelcase */}
        <MobileTableCellContent><OriginalLinkCell originalLink={originalLink} /></MobileTableCellContent>
      </MobileTableCell>
      <MobileTableCell>
        <MobileTableCellHeader>QR Code</MobileTableCellHeader>
        <MobileTableCellContent><QrCell shortLink={shortLink} /></MobileTableCellContent>
      </MobileTableCell>
      <MobileTableCell>
        <MobileTableCellHeader>Clicks</MobileTableCellHeader>
        <MobileTableCellContent>{clicks}</MobileTableCellContent>
      </MobileTableCell>
      <MobileTableCell>
        <MobileTableCellHeader>Status</MobileTableCellHeader>
        <MobileTableCellContent><StatusCell status={status} /></MobileTableCellContent>
      </MobileTableCell>
      <MobileTableCell>
        <MobileTableCellHeader>Date</MobileTableCellHeader>
        <MobileTableCellContent>{JSON.stringify(createdAt)}</MobileTableCellContent>
      </MobileTableCell>
    </MobileAttachmentList>
  )
}
