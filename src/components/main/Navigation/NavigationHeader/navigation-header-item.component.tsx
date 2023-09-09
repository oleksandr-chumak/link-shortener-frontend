import React, { CSSProperties, FC } from 'react'
import { NavigationHeaderItemProps, useNavigationContext } from '../../../../features'
import {
  NavigationHeaderItemWrapper,
  NavigationHeaderUnderline,
  NavigationItemHeader,
} from './navigation-header.styled'
import { Theme } from '../../../../style/theme'

export const NavigationHeaderItem: FC<NavigationHeaderItemProps> = (
  {
    header,
    icon,
    body,
    fontSize,
    onSelectEffect = 'underline',
    onSelect
  }) => {
  const { currentItem, handleSelect } = useNavigationContext()

  const itemStyle: CSSProperties = {
    fontSize: fontSize && `${fontSize}px`,
    backgroundColor: onSelectEffect === 'highlight' && currentItem === body ? Theme.color.brandPrimaryBlue : undefined,
  }


  const Icon = icon

  const underlineStyle: CSSProperties | undefined = currentItem === body ? {
    opacity: 1,
    visibility: 'visible',
  } : undefined

  const handleClick = () => {
    handleSelect(body)
    onSelect && onSelect()
  }


  return (
    <NavigationHeaderItemWrapper style={itemStyle} onClick={handleClick}>
      <Icon />
      <NavigationItemHeader>{header}</NavigationItemHeader>
      {onSelectEffect === 'underline' && <NavigationHeaderUnderline style={underlineStyle} />}
    </NavigationHeaderItemWrapper>
  )
}
