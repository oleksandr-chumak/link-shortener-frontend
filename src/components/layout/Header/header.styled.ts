import styled from 'styled-components'
import { Button, DropDown, OutlinedButton } from '../../main'

export const HeaderWrapper = styled.header`
  padding: 20px 0 30px 0;
`
export const Navigation = styled.nav`
  display: flex;
`
export const Logo = styled.h1`
  font-size: 36px;
  font-weight: bold;
  flex: 0 0 auto;
  background: -webkit-linear-gradient(20deg, rgba(235,86,142,1) 0%, rgba(20,78,227,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
`
export const AuthorizedLogo = styled(Logo)`
  margin-top: 10px;
`
export const ActionsWrapper = styled.div`
  flex: 1 1 auto;
  display:flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
`
export const AuthorizedActionsWrapper = styled(ActionsWrapper)`
  flex: 0 0 auto;
  margin-top: 2.5px ;
  align-items: start;
  @media(max-width: ${({theme}) => theme.device.tabletL}){
    flex: 1 1 auto;
  }
`
export const RegisterButton = styled(Button)`
  @media (max-width: ${({theme}) => theme.device.mobileL}){
    display: none;
  }
`

export const FieldWithAutoPasteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 15px;
  align-items: center;
  margin: 0 20px;
  @media(max-width: ${({theme}) => theme.device.tabletL}){
    display: none;
  }
`
export const LoginButton = styled(OutlinedButton)`
  @media (max-width: ${({theme}) => theme.device.mobileL}){
    font-size: 14px;
    padding: 10px 24px;
  }
`