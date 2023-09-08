import styled from 'styled-components'


export const OutlinedButtonWrapper = styled.button`
  display: flex;
  gap: 10px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.grey};
  border: 1px solid ${({ theme }) => theme.color.border.grey};
  color: white;
  font-size: 16px;
  padding: 12px 25px;
`
export const OutlinedButtonIconWrapper = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.lite};
  font-size: 18px;
`