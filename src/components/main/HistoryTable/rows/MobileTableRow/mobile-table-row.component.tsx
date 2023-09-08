import React, { FC, useState } from 'react'
import { TableRowProps } from '../../Table/history-table.types'
import { ShortLinkCell } from '../../cells'
import {
  MobileRowToggleIcon,
  MobileRowToggleIconButton,
  MobileTableCell,
  MobileTableList,
} from './mobile-table-row.styled'
import { MobileAttachmentRow } from './mobile-attachment-row.component'

export const MobileTableRow: FC<TableRowProps> = ({ shortLink, ...props }) => {
  const [isAttachmentRow, setIsAttachmentRow] = useState<boolean>(false)

  const handleToggle = () => {
    setIsAttachmentRow((prevState) => !prevState)
  }
  return (

    <MobileTableList>
      <MobileTableCell>
        <ShortLinkCell shortLink={shortLink}>
          <MobileRowToggleIconButton $active={isAttachmentRow} onClick={handleToggle}>
            <MobileRowToggleIcon />
          </MobileRowToggleIconButton>
        </ShortLinkCell>
      </MobileTableCell>
      {isAttachmentRow
        ?
        <MobileAttachmentRow style={{maxHeight: '380px'}} shortLink={shortLink} {...props}/>
        :
        <MobileAttachmentRow shortLink={shortLink} {...props}/>
      }
    </MobileTableList>
  )
}

