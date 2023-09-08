import { IoExitOutline } from 'react-icons/io5'
import { IconType } from 'react-icons'
import { DetailedButtonProps } from '../../../../types'


export type OutlinedButtonIconType = 'exit'

export const outlinedButtonIcons: Record<OutlinedButtonIconType, IconType> = {
  exit: IoExitOutline
}
export interface OutlinedButtonProps extends DetailedButtonProps{
  iconType?: OutlinedButtonIconType
}