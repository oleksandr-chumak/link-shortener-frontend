import styled from 'styled-components'
import { rgba } from 'polished'


// HEADER
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0 3px;
  color: ${({ theme }) => theme.color.lite};
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`
export const TableHeader = styled.thead`
  text-align: left;
  background-color: ${({ theme }) => theme.color.black};
`
export const TableHeaderRow = styled.tr`
  height: 63px;
`
export const TableHeaderCell = styled.th`
  padding:18px 10px 18px 0;
  font-size: 14px;
  font-weight: 500;
  &:first-child {
    padding: 13px 10px 13px 20px;
  }
`

// BODY

export const TableBody = styled.tbody`
  border-collapse: separate;
  border-spacing: 0 15px;
`

export const TableBodyRow = styled(TableHeaderRow)`
  background: ${({theme}) => rgba(theme.color.black,0.6)};
  border-bottom: 2px solid ${({theme}) => theme.color.black};

`
export const TableBodyCell = styled.td`
  font-weight: 400;
  font-size: 13px;
  padding: 0 10px 0 0;
  &:first-child {
    padding: 0 10px 0 20px;
  }
`
