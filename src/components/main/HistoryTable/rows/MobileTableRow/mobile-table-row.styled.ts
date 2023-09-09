import { SlArrowDown } from 'react-icons/sl'
import styled from 'styled-components'
import { MobileToggleIconProps } from './mobile-table-row.types'
import { rgba } from 'polished'


export const MobileTableList = styled.ul`
  color: ${({theme}) => theme.color.lite};
`

export const MobileTableCell =  styled.li`
  display: flex;
  align-items: center;
  
  width: 100%;
  height: 63px;
  
  padding: 0 20px;
  background-color: ${({theme}) => rgba(theme.color.black,0.6)};
`

export const MobileTableCellHeader = styled.h4`
  display: flex;
  justify-content: center;
 
  font-weight: 400;
  width: 100px;
`
export const MobileTableCellContent = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
`




export const MobileRowToggleIconButton = styled.button<MobileToggleIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
 
  width: 35px;
  height: 35px;
  
  border-radius: 50%;
  background-color: ${({theme}) => theme.color.grey};
  
  transition: all 0.7s ease 0s;
  transform: rotate(${({$active}) => $active ? '0.5turn' : '0'});
`
export const MobileRowToggleIcon = styled(SlArrowDown)``

export const MobileAttachmentList = styled.ul`
  overflow: hidden;
  transition: all 0.7s ease 0s;
  max-height: 0;
`