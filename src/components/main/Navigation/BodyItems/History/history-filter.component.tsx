import React from 'react'
import { FilterButton, FilterIcon, HistoryFilterHeader, HistoryFilterWrapper } from './history.styled'

export const HistoryFilter = () => {
  return (
    <HistoryFilterWrapper>
      <HistoryFilterHeader>History (143)</HistoryFilterHeader>
      <FilterButton>
        <FilterIcon/>
        Filter
      </FilterButton>
    </HistoryFilterWrapper>
  )
}

