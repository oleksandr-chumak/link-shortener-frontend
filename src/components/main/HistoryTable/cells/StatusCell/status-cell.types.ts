import { LinkStatus } from 'store/interfaces/link.types'

export interface StatusCellProps{
  status: LinkStatus
}
export interface StatusCellWrapperProps{
  $status: LinkStatus
}