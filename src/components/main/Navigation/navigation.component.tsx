import React from 'react'
import { NavigationProvider } from './NavigationProvider/navigation-provider.component'
import { NavigationHeader } from './NavigationHeader/navigation-header.component'
import { CurrentBodyItem } from './CurrentBodyItem/current-body-item.component'
import { Pagination } from '../Pagination/pagination.component'

export const Navigation = () => {
  return (
    <NavigationProvider>
      <NavigationHeader />
      <CurrentBodyItem/>
    </NavigationProvider>
  )
}

