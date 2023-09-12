import React, { FC } from 'react'
import { OriginalLinkFaviconProps } from './original-link-cell.types'
import { Favicon } from './original-link-cell.styled'

export const OriginalLinkFavicon: FC<OriginalLinkFaviconProps> = ({ host }) => {
  const faviconUrl = `https://icon.horse/icon/${host}`

  return (<Favicon width={32} height={32} src={faviconUrl} alt='' />)
}
