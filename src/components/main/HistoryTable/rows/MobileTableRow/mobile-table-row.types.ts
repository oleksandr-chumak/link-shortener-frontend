import { TableRowProps } from '../../Table/history-table.types'
import React from 'react'

export interface MobileToggleIconProps{
  $active: boolean;
}
export interface MobileAttachmentRowProps extends TableRowProps{
  style?: React.CSSProperties
}