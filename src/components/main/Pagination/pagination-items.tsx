import React, { FC } from 'react'
import { PaginationItemProps } from './pagination.types'
import { PaginationItemWrapper, PaginationItemWrapperActive, PaginationItemWrapperDisable } from './pagination.styled'
import { useAppSelector } from '../../../store'
import { useNavigate } from 'react-router-dom'

export const PaginationItem: FC<PaginationItemProps> = ({ page }) => {
  const {currentPage} = useAppSelector((state) => state.link)
  const navigate = useNavigate()
  const ItemWrapper = currentPage === page ? PaginationItemWrapperActive : PaginationItemWrapper
  const handleClick = () => {
    if(currentPage === page) {
      return;
    }
    navigate({
      pathname: '',
      search: `?page=${page}`
    })
  }
  return (
    <ItemWrapper onClick={handleClick}>
      {page}
    </ItemWrapper>
  )
}
export const PaginationGapItem = () => {
  return (
    <PaginationItemWrapperDisable>...</PaginationItemWrapperDisable>
  )
}
