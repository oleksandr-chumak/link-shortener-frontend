import styled from 'styled-components'
import { IoMdCopy } from 'react-icons/io'

export const ShortLinkCellWrapper = styled.div`
  display: flex;
  flex: 1 1 auto; 
  align-items: center;
  height: 63px;

`
export const ShortLinkCellHeader = styled.h4`
  flex: 1 1 auto;
  max-width: 200px;
`
export const ShortLinkCopyWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 35px;

  cursor: pointer;
 
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.color.grey};
  font-size: 15px;
`
export const ShortLinkCopyIcon = styled(IoMdCopy)`
`
export const ChildrenWrapper = styled.div`
  flex: 1 1 auto;
  
  display: flex;
  justify-content: end;
`