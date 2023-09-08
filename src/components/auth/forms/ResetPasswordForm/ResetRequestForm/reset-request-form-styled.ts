import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FormDescription = styled.p`
  font-size: 12px;
  color: #333;
`
export const BackToLogin = styled(Link)`
  text-decoration: underline;
  cursor: pointer;
  color: #5469d4;
  transition: all 0.3s ease 0s;
  font-size: 15px;
  &:hover {
    color: #3c4257;
  }
`