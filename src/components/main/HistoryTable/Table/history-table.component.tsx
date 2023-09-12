import { useMediaQuery } from '../../../../hooks'


import { TableBodyProps } from './history-table.types'
import { DesktopTable, MobileTable } from '../tables'
import { FC, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../store'
import { getLinks, setPage } from '../../../../store/slices/link-slice'
import { LINK_TAKE } from '../../../../features/main/constants/link.contsants'

export const HistoryTable: FC<TableBodyProps> = ({ rows }) => {
  const dispatch = useAppDispatch()
  const { linksTotalNumber } = useAppSelector((state) => state.link)

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const numericPage = Number(searchParams.get('page'))
    const lastPage = Math.ceil(linksTotalNumber / LINK_TAKE)
    if (
      Number.isNaN(numericPage) ||
      numericPage < 1 ||
      numericPage > lastPage
    ) {
      navigate({
        search: `?page=${1}`,
      })
    }
    dispatch(setPage(numericPage))
    dispatch(getLinks(numericPage))
  }, [searchParams])

  const { matches } = useMediaQuery('max-width', 'tabletM')
  return matches ? <MobileTable rows={rows} /> : <DesktopTable rows={rows} />
}

