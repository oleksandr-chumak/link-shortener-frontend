import styled from 'styled-components'
import { FieldWithAutoPaste } from '../FieldWithClipboard/FieldWithAutoPaste/field-with-auto-paste.component'


export const UnauthorizedField = styled(FieldWithAutoPaste)`
  @media (max-width: ${({ theme }) => theme.device.mobileL}) {
    height: 60px;
  }
`

export const Header = styled.h1`
  font-size: 55px;
  font-weight: bold;
  text-align: center;
  background: -webkit-linear-gradient(0deg, rgba(20,78,227,1) 0%, rgba(163,83,170,1) 20%, rgba(235,86,142,1) 60%, rgba(20,78,227,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media(max-width: ${({theme}) => theme.device.tabletL}){
    font-size: 45px;
  }
  @media(max-width: ${({theme}) => theme.device.mobileL}){
    font-size: 35px;
  }
  @media(max-width: ${({theme}) => theme.device.mobileS}){
    font-size: 30px;
  }
`
export const Description = styled.h2`
  color: ${({theme}) => theme.color.lite};
  text-align: center;
  font-weight: 300;
  max-width: 650px;
  @media(max-width: ${({theme}) => theme.device.mobileM}){
    font-size: 13px;
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 20px;
  
  max-width: 900px;
  gap: 10px;
  width: 100%;
  margin: 100px auto 30px auto;
`
export const HeaderFieldWrapper = styled.div`
  width: 70%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  @media (max-width: ${({ theme }) => theme.device.mobileL}) {
    width: 100%;
    margin-top: 15px;
  }
`
