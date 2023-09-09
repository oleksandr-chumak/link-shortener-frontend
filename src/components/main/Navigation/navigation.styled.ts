import styled from 'styled-components'
import { rgba } from 'polished'

export const NavigationBodyWrapper = styled.div`
  width: 100%;
  padding: 20px 20px;
  height: 100%;
  flex: 1;
  background-color: ${({ theme }) => rgba(theme.color.grey, 0.6)};
`
export const NavigationBodyContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`