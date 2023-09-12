import React from 'react'
import { FilterButton, FilterIcon, HistoryFilterHeader, HistoryFilterWrapper } from './history.styled'
import { useAppSelector } from '../../../../../store'

export const HistoryFilter = () => {
  const {linksTotalNumber} = useAppSelector((state) => state.link);
  return (
    <HistoryFilterWrapper>
      <HistoryFilterHeader>History ({linksTotalNumber})</HistoryFilterHeader>
      <FilterButton>
        <FilterIcon/>
        Filter
      </FilterButton>
    </HistoryFilterWrapper>
  )
}

