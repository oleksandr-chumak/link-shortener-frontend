import React from 'react'
import { HistoryTable } from '../../../HistoryTable'
import { HistoryFilter } from './history-filter.component'

export const History = () => {
  return (
    <>
      <HistoryFilter />
      <HistoryTable />
    </>
  )
}

