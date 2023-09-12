import React from 'react'
import { useNavigationContext } from '../../../../features'
import { NAVIGATION_BODY } from '../navigation.constants'
import { NavigationBodyContainer, NavigationBodyWrapper } from '../navigation.styled'
import { Pagination } from '../../Pagination/pagination.component'

export const CurrentBodyItem = () => {
  const { currentItem } = useNavigationContext()
  const BodyItem = NAVIGATION_BODY[currentItem]

  return (
    <NavigationBodyWrapper>
      <NavigationBodyContainer>
        <BodyItem />
      </NavigationBodyContainer>
    </NavigationBodyWrapper>
  )
}
