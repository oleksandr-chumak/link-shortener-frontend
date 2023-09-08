import styled from 'styled-components'
import { IoIosClose } from 'react-icons/io'

export const QRCodeBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  background: rgba(0,0,0,.3);
  
  width: 100vw;
  height: 100vh;
  
  z-index: 42323432432423;
`
export const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  position: relative;

  height: 350px;
  width: 350px;
  border-radius: 20px;

  background-color: white;
`
export const CloseIcon = styled(IoIosClose)`
  position: absolute;
  color: black;
  cursor: pointer;
  font-size: 50px;
  top: 0;
  right: 0;
  border-radius: 10px;
`