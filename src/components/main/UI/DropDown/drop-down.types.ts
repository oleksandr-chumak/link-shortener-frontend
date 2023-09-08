import { IconType } from 'react-icons'

export interface DropDownItemProps {
  title: string;
  icon?: IconType;
  onClick?: () => void
}

export interface DropDownProps {
  title: string;
  subTitle?: string;
  dropDownItems: DropDownItemProps[]
}