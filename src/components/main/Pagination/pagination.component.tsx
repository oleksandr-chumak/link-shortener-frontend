import { PaginationWrapper } from './pagination.styled'
import { PaginationGapItem, PaginationItem } from './pagination-items'
import { PaginationActionBack, PaginationActionForward } from './pagination-acitons'
import { useAppSelector } from '../../../store'
import { LINK_TAKE } from '../../../features/main/constants/link.contsants'

/*
In the combination when everything works fine,
PAGINATION_MARGIN = 5 AND RADIUS = 1 OR PAGINATION_MARGIN = 7 AND RADIUS = 2
Calculate the combination where z is the number: PAGINATION_MARGIN = 5 * 2z RADIUS = 1 * z
*/
// Number of elements at the beginning and at the end
const PAGINATION_MARGIN = 5
// Number of elements around the current element
const RADIUS = 1
export const Pagination = () => {
  const {currentPage,linksTotalNumber } = useAppSelector((state) => state.link )
  const totalPages = Math.ceil(linksTotalNumber / LINK_TAKE)

  // --generate pagination items logic
  // Get pages within radius
  const getPagesWithinRadius = (): number[] => {
    const start = Math.max(1, currentPage - RADIUS)
    const end = Math.min(totalPages, currentPage + RADIUS)
    const length = end - start + 1
    return Array.from({ length: length }, (_, index) => start + index)
  }

  const getPaginationItems = (): number[] => {
    if (totalPages <= PAGINATION_MARGIN + 2) {
      return Array.from({ length: totalPages }, (_, index) => index + 1)
    }

    const paginationItems = []

    if (currentPage < PAGINATION_MARGIN) {
      // Add the first PAGINATION_MARGIN pages
      paginationItems.push(...Array.from({ length: PAGINATION_MARGIN }, (_, index) => index + 1))
    } else if (currentPage >= PAGINATION_MARGIN && totalPages - currentPage >= PAGINATION_MARGIN - RADIUS) {
      // Add space back with first page and pages around current
      paginationItems.push(1, 0, ...getPagesWithinRadius())
    } else {
      // add space back with first page
      paginationItems.push(1, 0)
    }


    if (totalPages - currentPage < PAGINATION_MARGIN - RADIUS) {
      // Add the latest PAGINATION_MARGIN pages
      paginationItems.push(...Array.from({ length: PAGINATION_MARGIN }, (_, index) => totalPages - PAGINATION_MARGIN + index + 1))
    } else {
      // Add space forward with last page
      paginationItems.push(0, totalPages)
    }

    return paginationItems
  }
  // --generate pagination items logic

  return (
    <PaginationWrapper>
      <PaginationActionBack />
      {
        getPaginationItems().map((page, index) => (
          page === 0 ?
            <PaginationGapItem key={`pag-${index}`} />
            :
            <PaginationItem  page={page} key={`pag-${index}`} />
        ))
      }
      <PaginationActionForward />
    </PaginationWrapper>
  )
}

