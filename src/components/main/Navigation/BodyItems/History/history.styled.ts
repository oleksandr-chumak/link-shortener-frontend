import styled from 'styled-components'
import { FiFilter } from 'react-icons/fi'

export const HistoryFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;

  margin-bottom: 20px;

  color: ${({ theme }) => theme.color.lite};
`
export const HistoryFilterHeader = styled.h3`
  font-size: 20px;
  font-weight: bold;
`
export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;

  cursor: pointer;
  
  padding: 12px 20px;
  border-radius: 30px;
  
  background-color: ${({theme}) => theme.color.grey};;
  border: 1px solid ${({theme}) => theme.color.border.grey};
`
export const FilterIcon = styled(FiFilter)``

