import { IconType } from 'react-icons'
import { FC } from 'react'

export type NavigationBodyType = 'history' | 'settings'

export interface INavigationContext {
  currentItem: NavigationBodyType
  handleSelect: (item: NavigationBodyType) => void
}

export type SelectEffect = 'underline' | 'highlight'
// header
export interface NavigationHeaderItemProps {
  header: string;
  icon: IconType;
  body: NavigationBodyType;
  fontSize?:number;
  onSelectEffect?:SelectEffect;
  onSelect?: () => void
}

export type NavigationHeaderList = NavigationHeaderItemProps[]

// content

export type NavigationBodyList = Record<NavigationBodyType, FC>


