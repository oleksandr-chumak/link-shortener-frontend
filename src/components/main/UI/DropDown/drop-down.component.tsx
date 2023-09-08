import React, { CSSProperties, FC } from 'react'
import { DropDownProps } from './drop-down.types'
import {
  DropDownButton,
  DropDownIcon,
  DropDownList,
  DropDownSubTitle,
  DropDownTitle,
  DropDownTitleWrapper,
  DropDownWrapper,
} from './drop-down.styled'
import { DropDownItem } from './drop-down-item.component'
import { useDelayedState } from '../../../../hooks'

export const DropDown: FC<DropDownProps> = ({ title, subTitle, dropDownItems }) => {
  const [isOpen, setIsOpen] = useDelayedState<boolean>(false, 300)
  const iconStyle: CSSProperties = isOpen ? { rotate: '180deg' } : { rotate: '0deg' }
  const buttonStyle: CSSProperties | undefined = isOpen ? { borderRadius: '30px 30px 0 0' } : undefined
  const listStyle: CSSProperties | undefined = isOpen ? {
    opacity: '1',
    visibility: 'visible',
  } : undefined
  const handleClick = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <DropDownWrapper>
      <DropDownButton style={buttonStyle} onClick={handleClick}>
        <DropDownTitleWrapper>
          <DropDownSubTitle>{subTitle}</DropDownSubTitle>
          <DropDownTitle>{title}</DropDownTitle>
        </DropDownTitleWrapper>
        <DropDownIcon style={iconStyle} />
      </DropDownButton>
      <DropDownList style={listStyle}>
        {dropDownItems.map((itemProps, index) => (
          <DropDownItem key={`sub-${index}`}  {...itemProps} />
        ))}
      </DropDownList>
    </DropDownWrapper>

  )
}

