import React, { FC } from 'react'
import { ShortLinkCellProps } from './short-link-cell.types'
import {
  ChildrenWrapper,
  ShortLinkCellHeader,
  ShortLinkCellWrapper,
  ShortLinkCopyIcon,
  ShortLinkCopyWrapper,
} from './short-link-cell.styled'
import { useAlert } from '../../../../../hooks'

export const ShortLinkCell: FC<ShortLinkCellProps> = ({ shortLink, children }) => {
  const { alert } = useAlert()
  const handleClick = async () => {
    await navigator.clipboard.writeText(shortLink)
    alert({
      type: 'success',
      header: 'Copied',
      description: `${shortLink} to clipboard`,
    })
  }

  return (
    <ShortLinkCellWrapper>
      <ShortLinkCellHeader>{shortLink}</ShortLinkCellHeader>
      <ShortLinkCopyWrapper onClick={handleClick}>
        <ShortLinkCopyIcon />
      </ShortLinkCopyWrapper>
      {children &&
        <ChildrenWrapper>
          {children}
        </ChildrenWrapper>
      }
    </ShortLinkCellWrapper>
  )
}

