import React, { FC } from 'react'
import { useMediaQuery } from '../../../../hooks'
import { useFieldContext } from '../../../../features'
import { ButtonType } from '../../UI/Field/field.types'
import { Field } from '../../UI'
import { DetailedFieldProps } from '../../../../types'

export const ClipboardField:FC<DetailedFieldProps> = ({...props}) => {
  const { fieldRef } = useFieldContext()
  const {matches} = useMediaQuery('max-width','tabletS')
  const fieldProps = matches ? {buttonType: 'circle' as ButtonType} : {}
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!fieldRef.current) {
      return
    }
    fieldRef.current.value = event.target.value
  }

  return (
    <Field
      {...props}
      placeholder='Enter the link here'
      ref={fieldRef}
      onChange={handleChange}
      {...fieldProps}
    />
  )
}

