import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  border-radius: 30px;
  font-size: 16px;
  background-color: ${({theme}) => theme.color.brandPrimaryBlue};
  color: white;
  padding: 12px 25px;
  transition: all 0.3s ease 0s;
  &:hover{
    -webkit-box-shadow: 0px 10px 13px -7px ${({theme}) => theme.color.brandPrimaryBlue}, 0px 0px 50px -10px ${({theme}) => theme.color.brandPrimaryBlue};
    box-shadow: 0px 10px 13px -7px ${({theme}) => theme.color.brandPrimaryBlue}, 0px 0px 50px -10px ${({theme}) => theme.color.brandPrimaryBlue};
  }
`