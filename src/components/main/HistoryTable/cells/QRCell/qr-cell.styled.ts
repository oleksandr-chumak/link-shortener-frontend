import styled from 'styled-components'
import { BsQrCode } from 'react-icons/bs'

export const QRCodeIconWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: ${({ theme }) => theme.color.grey};
  
  width: 45px;
  height: 45px;
  border-radius: 50%;
  
  font-size: 22px;
  
  cursor: pointer;

`
export const QRCodeIcon = styled(BsQrCode)``