import styled from 'styled-components'
import { StatusCellWrapperProps } from './status-cell.types'
import { statusColor } from './status-cell.constants'
import { rgba } from 'polished'


export const StatusCellWrapper = styled.div<StatusCellWrapperProps>`
  color: ${({$status}) => statusColor[$status]};
  display: flex;
  height: 63px;
  align-items: center;
  gap: 10px;
`
export const StatusCellHeader =  styled.h5`
  flex: 1 1 auto;
  max-width: 50px;
  
`
export const StatusCellIconWrapper = styled.div<StatusCellWrapperProps>`
  background-color: ${({$status}) => rgba(statusColor[$status],0.19)};
  border-radius: 50%;
  color: ${({theme}) => theme.color.lite};;
  display: flex;
  font-size: 13px;
  justify-content: center;
  align-items: center;
  flex: 0 0 35px;
  height: 35px;
`