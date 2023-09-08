
import { useMediaQuery } from '../../../../hooks'


import { TableRowProps } from './history-table.types'
import { DesktopTable, MobileTable } from '../tables'

const mockingData: TableRowProps[] = [
  {
    shortLink: 'http://localhost:abc123',
    originalLink: 'https://example.com/page1',
    clicks: 50,
    status: 'active',
    date: '2023-09-04',
  },
  {
    shortLink: 'http://localhost:def456',
    originalLink: 'https://example.com/page2',
    clicks: 30,
    status: 'inactive',
    date: '2023-09-03',
  },
  {
    shortLink: 'http://localhost:ghi789',
    originalLink: 'https://example.com/page3',
    clicks: 75,
    status: 'active',
    date: '2023-09-02',
  },
  {
    shortLink: 'http://localhost:jkl012',
    originalLink: 'https://example.com/page4',
    clicks: 20,
    status: 'active',
    date: '2023-09-01',
  },
  {
    shortLink: 'http://localhost:mno345',
    originalLink: 'https://example.com/page5',
    clicks: 60,
    status: 'inactive',
    date: '2023-08-31',
  },
  {
    shortLink: 'http://localhost:pqr678',
    originalLink: 'https://example.com/page6',
    clicks: 45,
    status: 'active',
    date: '2023-08-30',
  },
]
export const HistoryTable = () => {
  const { matches } = useMediaQuery('max-width', 'tabletM')
  return matches ? <MobileTable rows={mockingData} /> : <DesktopTable rows={mockingData} />
}

