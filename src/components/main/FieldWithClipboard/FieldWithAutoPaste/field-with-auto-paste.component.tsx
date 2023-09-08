import React, { FC } from 'react'
import { FieldProvider } from '../FieldProvider/field-provider.component'
import { ClipboardCheckbox } from '../ClipboardCheckbox/clipboard-checkbox.component'
import { ClipboardField } from '../ClipbaordField/clipboard-field.component'
import { FieldWithAutoPasteProps } from './field-with-auto-paste.types'

export const FieldWithAutoPaste:FC<FieldWithAutoPasteProps> = ({...props}) => {
  return (
    <FieldProvider>
      <ClipboardField {...props}/>
      <ClipboardCheckbox />
    </FieldProvider>
  )
}
