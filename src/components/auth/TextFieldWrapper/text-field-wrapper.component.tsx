import React from 'react'
import { Controller, FieldValues } from 'react-hook-form'
import { TextField } from '../UI'
import { TextFieldWrapperProps } from './text-field-wrapper.types'

export const TextFieldWrapper = <T extends FieldValues>(
  { name, control, ...props }: TextFieldWrapperProps<T>,
) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField {...props} {...field} />
      )}
    />
  )
}

