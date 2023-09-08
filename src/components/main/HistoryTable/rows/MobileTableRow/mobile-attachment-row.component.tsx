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
    date
  }
) => {
  return (
    <MobileAttachmentList style={style}>
      <MobileTableCell>
        <MobileTableCellHeader>Original Link</MobileTableCellHeader>
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
        <MobileTableCellContent>{date}</MobileTableCellContent>
      </MobileTableCell>
    </MobileAttachmentList>
  )
}
