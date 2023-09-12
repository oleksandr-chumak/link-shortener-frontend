import styled from 'styled-components'

export const MobileTableHeaderWrapper = styled.li`
  display: flex;
  align-items: center;
  
  border-radius: 10px 10px 0 0;
  
  background-color: ${({theme}) => theme.color.black};
  height: 63px;
  width: 100%;
  padding: 0 20px;
`
export const MobileTableHeaderCell  = styled.h3`
  color: ${({theme}) => theme.color.lite};
`