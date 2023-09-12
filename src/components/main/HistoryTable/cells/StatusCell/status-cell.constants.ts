import { Theme } from '../../../../../style/theme'
import { GoUnlink, GoLink } from 'react-icons/go'
import { IconType } from 'react-icons'
import { LinkStatus } from '../../../../../store/interfaces/link.types'


export const statusColor: Record<LinkStatus, string> = {
  active: Theme.color.active,
  inactive: Theme.color.inactive
}
export const statusIcons : Record<LinkStatus, IconType> = {
  active: GoLink,
  inactive: GoUnlink
}

export const statusValues: Record<LinkStatus, string> = {
  active: 'Active',
  inactive: 'Inactive'
}