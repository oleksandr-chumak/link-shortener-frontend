import React, { CSSProperties, useState } from 'react'
import {
  BurgerMenu,
  BurgerMenuButton,
  BurgerMenuIcon,
  BurgerMenuList,
  CloseBurgerMenuIcon,
  CloseBurgerMenuIconWrapper,
  NavigationHeaderMobileWrapper,
} from '../navigation-header.styled'
import { NAVIGATION_HEADER } from '../../navigation.constants'
import { NavigationHeaderItem } from '../navigation-header-item.component'

export const NavigationHeaderMobileList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const burgerMenuStyle: CSSProperties = isOpen ? { transform: 'translateX(0)' } : {}
  const handleClick = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <NavigationHeaderMobileWrapper>
      <BurgerMenuButton onClick={handleClick}>
        <BurgerMenuIcon />
      </BurgerMenuButton>
      <BurgerMenu style={burgerMenuStyle}>
        <CloseBurgerMenuIconWrapper>
          <CloseBurgerMenuIcon onClick={handleClick} />
        </CloseBurgerMenuIconWrapper>
        <BurgerMenuList>
          {
            NAVIGATION_HEADER
              .map((item, index) =>
                <NavigationHeaderItem
                  {...item}
                  onSelectEffect='highlight'
                  onSelect={handleClick}
                  fontSize={40}
                  key={`${item.header}-${index}`}
                />,
              )
          }
        </BurgerMenuList>
      </BurgerMenu>
    </NavigationHeaderMobileWrapper>
  )
}

