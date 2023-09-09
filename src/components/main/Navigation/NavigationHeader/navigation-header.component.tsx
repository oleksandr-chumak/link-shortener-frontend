import React from 'react'
import { useMediaQuery } from '../../../../hooks'
import { NavigationHeaderMobileList } from './lists/navigation-header-mobile-list.component'
import { NavigationHeaderDesktopList } from './lists/navigation-header-desktop-list.component'

export const NavigationHeader = () => {
  const {matches} = useMediaQuery('max-width','tabletS')

  return (
    <>
      {matches ? <NavigationHeaderMobileList/> : <NavigationHeaderDesktopList/>}
    </>
  )
}
