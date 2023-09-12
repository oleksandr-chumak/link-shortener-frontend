import React from 'react'
import { TransformedLink } from '../../../../../store/interfaces/link.types'

export interface MobileToggleIconProps{
  $active: boolean;
}
export interface MobileAttachmentRowProps extends TransformedLink{
  style?: React.CSSProperties
}