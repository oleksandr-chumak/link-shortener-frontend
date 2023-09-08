import styled from 'styled-components'
import { SlArrowDown } from 'react-icons/sl'

export const DropDownWrapper = styled.div`
  position: relative;
  color: white;
`
export const DropDownButton = styled.button`
  display: flex;
  gap: 15px;
  
  align-items: center;

  transition: all 0.3s ease 0s;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.color.grey};
  border: 1px solid ${({ theme }) => theme.color.border.grey};
  height: 60px;
  padding: 0 25px;
`
// title
export const DropDownTitleWrapper = styled.div`
  text-align: start;
`
export const DropDownTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
`
export const DropDownSubTitle = styled.p`
  font-size: 12px;
  font-weight: 300;
`
// --title

export const DropDownIcon = styled(SlArrowDown)`
  transition: all 0.3s ease 0s
`
// --icons
export const DropDownList = styled.ul`
  position: absolute;
  transition: all 0.3s ease 0s;
  opacity: 0;
  visibility: hidden;
  border: 1px solid ${({ theme }) => theme.color.border.grey};
  border-top: 0;
  background-color: ${({ theme }) => theme.color.grey};
  width: 100%;
  border-radius: 0 0 30px 30px;
`
export const DropDownItemWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 0 25px;
  height: 60px;

`
