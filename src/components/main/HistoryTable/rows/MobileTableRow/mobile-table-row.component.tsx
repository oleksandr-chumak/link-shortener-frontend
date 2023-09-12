import React, { FC, useState } from 'react'
import { ShortLinkCell } from '../../cells'
import {
  MobileRowToggleIcon,
  MobileRowToggleIconButton,
  MobileTableCell,
  MobileTableList,
} from './mobile-table-row.styled'
import { MobileAttachmentRow } from './mobile-attachment-row.component'
import { TransformedLink } from '../../../../../store/interfaces/link.types'

export const MobileTableRow: FC<TransformedLink> = ({ shortLink, ...props }) => {
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

