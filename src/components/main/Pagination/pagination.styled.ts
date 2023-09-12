import styled from 'styled-components'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { rgba } from 'polished'
export const PaginationWrapper = styled.div`
  display: flex;
  gap: 5px;
  
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px 5px;
  
  border: 1px solid ${({theme})=> theme.color.border.grey} ;
  background-color: ${({theme})=> theme.color.grey};
`
export const PaginationItemWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  width: 35px;
  height: 35px;
  border-radius: 8px;
  
  color: ${({theme})=> theme.color.lite};
  
  transition: all 0.3s ease 0s;
  &:hover{
    cursor: pointer;
    background-color: ${({theme})=> rgba(theme.color.brandPrimaryPink,0.6)};
  }
`
export const PaginationItemWrapperDisable = styled(PaginationItemWrapper)`
  &:hover{
    cursor: auto;
    background-color: ${({theme})=> theme.color.grey};
  }
`
export const PaginationItemWrapperActive = styled(PaginationItemWrapper)`
  background-color: ${({theme}) => theme.color.brandPrimaryBlue};
  color: white;
  &:hover{
    cursor: auto;
    background-color: ${({theme})=> theme.color.brandPrimaryBlue};
  }
`
export const PaginationIconForward = styled(IoIosArrowForward)`
  font-size: 22px;
  color: ${({theme}) => theme.color.brandPrimaryPink};
`
export const PaginationIconForwardDisabled = styled(PaginationIconForward)`
  color: ${({theme}) => theme.color.lite};
`
export const PaginationIconBack = styled(IoIosArrowBack)`
  font-size: 22px;
  color: ${({theme}) => theme.color.brandPrimaryPink};
`
export const PaginationIconBackDisabled = styled(PaginationIconBack)`
  color: ${({ theme }) => theme.color.lite}
`
