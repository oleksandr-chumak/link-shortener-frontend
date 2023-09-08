import React, { ForwardedRef, forwardRef } from 'react'
import {
  CircleButton,
  CircleButtonIcon,
  FieldButton,
  FieldIcon,
  FieldIconWrapper,
  FieldWrapper,
  TextField,
} from './field.styled'
import { FieldProps } from './field.types'

export const Field = forwardRef<HTMLInputElement, FieldProps>((
  {
    onClick,
    className,
    buttonType,
    ...props
  },
  ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <FieldWrapper className={className}>
      <FieldIconWrapper>
        <FieldIcon />
      </FieldIconWrapper>
      <TextField {...props} ref={ref} />
      {
        buttonType
          ?
          <CircleButton>
            <CircleButtonIcon/>
          </CircleButton>
          :
          <FieldButton onClick={onClick}>Shorten Now!</FieldButton>
      }
    </FieldWrapper>
  )
})

Field.displayName = 'Field'