import {
  PaginationIconBack, PaginationIconBackDisabled,
  PaginationIconForward, PaginationIconForwardDisabled,
  PaginationItemWrapper,
  PaginationItemWrapperDisable,
} from './pagination.styled'
import React from 'react'
import { useAppSelector } from '../../../store'
import { useNavigate } from 'react-router-dom'
import { LINK_TAKE } from '../../../features/main/constants/link.contsants'


export const PaginationActionBack = () => {
  const {currentPage} = useAppSelector((state) => state.link)
  const navigate = useNavigate();
  const isFirstPage = currentPage === 1
  const handleActionBack = () => {
    if (isFirstPage){
      return
    }
    navigate({
      search:`?page=${currentPage - 1}`
    })
  }
  const ItemWrapper = isFirstPage ? PaginationItemWrapperDisable : PaginationItemWrapper
  const Icon = isFirstPage ? PaginationIconBackDisabled : PaginationIconBack

  return (
    <ItemWrapper onClick={handleActionBack}>
      <Icon />
    </ItemWrapper>
  )
}

export const PaginationActionForward = () => {
  const {currentPage,linksTotalNumber} = useAppSelector((state) => state.link)
  const navigate = useNavigate();
  const lastPage = Math.ceil(linksTotalNumber / LINK_TAKE)
  const isLastPage = currentPage === lastPage
  const handleActionForward = () => {
    // last page
    if (isLastPage){
      return
    }
    navigate({
      search:`?page=${currentPage + 1}`
    })
  }
  const ItemWrapper = isLastPage ? PaginationItemWrapperDisable : PaginationItemWrapper
  const Icon = isLastPage ? PaginationIconForwardDisabled : PaginationIconForward
  return (
    <ItemWrapper onClick={handleActionForward}>
      <Icon/>
    </ItemWrapper>
  )
}
