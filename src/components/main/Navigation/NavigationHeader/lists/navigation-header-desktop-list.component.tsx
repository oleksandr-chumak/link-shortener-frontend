import { NAVIGATION_HEADER } from '../../navigation.constants'
import { NavigationHeaderItem } from '../navigation-header-item.component'
import { NavigationHeaderDesktopWrapper } from '../navigation-header.styled'

export const NavigationHeaderDesktopList = () => {
  return (
    <NavigationHeaderDesktopWrapper>
      {
        NAVIGATION_HEADER
          .map((item,index) => <NavigationHeaderItem key={`${item.header}-${index}`} {...item}/>)
      }
    </NavigationHeaderDesktopWrapper>
  )
}

