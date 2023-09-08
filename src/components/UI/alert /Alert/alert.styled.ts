import { GrFormClose } from 'react-icons/gr'
import styled from 'styled-components'
import { AlertType } from './alert'

const borderColors: Record<AlertType, string> = {
  success: '#cfe8d4',
  info: '#b4cdef',
  warning: '#f4e0b9',
  error: '#e0c2ba',
}
const AlertBackgroundColors: Record<AlertType, string> = {
  success: '#f1f8f4',
  info: '#e6effa',
  warning: '#fef8eb',
  error: '#f1e5e3',
}

const AlertIconWrapperBackgroundColors: Record<AlertType, string> = {
  success: '#51dc6d',
  info: '#3286ea',
  warning: '#ffbf23',
  error: '#fc5758',
}
interface AlertProps {
  $type: AlertType
}


export const AlertWrapper = styled.div<AlertProps>`
  position: fixed;
  bottom: -100px;
  left: 50%;
  
  transition: all 0.5s ease 0s;
  z-index: 4234234324324;
  transform: translate(-50%, 0);

  display: flex;
  align-items: center;
  
  width: 450px;
  height: 63px;
  gap: 10px;
  padding: 10px;
  
  border-radius: 15px;
  border: 2px solid ${(props) => borderColors[props.$type]};
  
  background-color: ${(props) => AlertBackgroundColors[props.$type]};
  
  @media(max-width: ${({ theme }) => theme.device.mobileL}){
    width: calc(100% - 20px);
  }
`
export const AlertIconWrapper = styled.div<AlertProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 25px;
  min-height: 39px;
  min-width: 39px;
  border-radius: 50%;
  background-color: ${(props) => AlertIconWrapperBackgroundColors[props.$type]};
`
export const AlertInfo = styled.div`
  font-size: 12px;
  flex: 1 1 auto;
`
export const AlertHeader = styled.h3`
  font-weight: 600;
`
export const AlertDescription = styled.p`
`
export const AlertButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &:hover{
    background-color: white;
  }
`
export const AlertButtonIcon = styled(GrFormClose)`
  font-size: 25px;
`