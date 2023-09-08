
export type LinkStatus = 'active' | 'inactive'
export interface TableRowProps {
  shortLink: string,
  originalLink: string,
  clicks: number,
  status: LinkStatus,
  date: string
}
export interface  TableBodyProps{
  rows: TableRowProps[]
}