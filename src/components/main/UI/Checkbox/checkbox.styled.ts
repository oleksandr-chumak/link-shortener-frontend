import styled from 'styled-components'
import { IsActiveProps } from './checbox.types'

export const CheckboxWrapper = styled.div`
  display: flex;
  position: relative;
  padding: 2px;
  width: 44px;
  cursor: pointer;
  height: 24px;
  background-color: ${({ theme }) => theme.color.grey};
  border: 1px solid ${({ theme }) => theme.color.border.grey};
  border-radius: 25px;
`
export const ActiveIndicator = styled.div<IsActiveProps>`
  width: 18px;
  height: 18px;
  position: absolute;
  left: ${({$active}) => $active ? 'calc(100% - 18px - 2px)': '2px'};
  border-radius: 50%;
  transition: all 0.3s ease 0s;
  background-color: ${({ theme,$active, }) => $active ? theme.color.brandPrimaryBlue : theme.color.lite};
`
