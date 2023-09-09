import React, { FC, useState } from 'react'
import { NavigationBodyType, NavigationContext } from '../../../../features'
import { Children } from '../../../../types'

export const NavigationProvider:FC<Children> = ({children}) => {
  const [currentItem, setCurrentItem] = useState<NavigationBodyType>('history')
  const handleSelect = (item: NavigationBodyType) => {
    setCurrentItem(item)
  }

  return (
    <NavigationContext.Provider value={{
      currentItem,
      handleSelect
    }}>
      {children}
    </NavigationContext.Provider>
  )
}

