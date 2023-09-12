import React, { useEffect } from 'react'
import { HistoryTable } from '../../../HistoryTable'
import { HistoryFilter } from './history-filter.component'
import { useAppDispatch, useAppSelector } from '../../../../../store'
import { getLinks } from '../../../../../store/slices/link-slice'
import { Pagination } from '../../../Pagination/pagination.component'

export const History = () => {
  const { links } = useAppSelector(state => state.link)
  return (
    <>
      <HistoryFilter />
      <HistoryTable  rows={links}/>
      <Pagination/>
    </>
  )
}

