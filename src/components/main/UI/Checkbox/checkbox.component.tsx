import React, { FC, useEffect, useRef, useState } from 'react'
import { ActiveIndicator, CheckboxWrapper } from './checkbox.styled'
import { CheckboxProps } from './checbox.types'

export const Checkbox: FC<CheckboxProps> = ({ onClick, initialState = false , onChange, checked }) => {
  const blocked = useRef<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(initialState )
  useEffect(() => {
    checked !== undefined && setIsActive(checked)
  }, [checked])


  const handleClick = (): void => {
    if (blocked.current) {
      return
    }
    const updatedValue = !isActive
    setIsActive(updatedValue)
    blocked.current = true
    setTimeout(() => {
      blocked.current = false
    }, 200)

    onChange && onChange(updatedValue)
  }


  return (
    <CheckboxWrapper onClick={onClick ? () => onClick(isActive, handleClick) : handleClick}>
      <ActiveIndicator $active={isActive} />
    </CheckboxWrapper>
  )
}
