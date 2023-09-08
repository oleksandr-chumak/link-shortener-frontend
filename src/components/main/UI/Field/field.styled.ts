import styled from 'styled-components'
import { BsLink45Deg,BsArrowRightShort } from 'react-icons/bs'
import { Button } from '../Button/button.component'


export const FieldWrapper = styled.div`
  position: relative;
  display: flex;
  border: 3px solid ${({theme}) => theme.color.border.grey};
  background-color: ${({theme}) => theme.color.grey};
  padding: 3px;
  border-radius: 50px;
  max-width: 1200px;
  width: 100%;
  height: 65px;
`
export const FieldIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: ${({ theme }) => theme.color.lite};
  flex: 0 0 70px;
`
export const FieldIcon = styled(BsLink45Deg)`
`
export const TextField = styled.input`
  width: 100%;
  padding-right: 10px ;
  caret-color: ${({theme}) => theme.color.brandPrimaryPink};
  color: ${({theme}) => theme.color.lite};
  &::placeholder{
    font-weight: 200;
    color: ${({theme}) => theme.color.lite};
  }

`
export const FieldButton = styled(Button)`
  flex-shrink: 0;
  padding: 12px 25px;
`
export const CircleButton = styled(Button)`
  aspect-ratio: 1 / 1;
  
  height: 100%;
  max-width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 0;
  border-radius: 50%;
  background-color: ${({theme}) => theme.color.brandPrimaryBlue};
`
export const CircleButtonIcon = styled(BsArrowRightShort)`
  width: 65%;
  height: 65%;
  color: white;
`