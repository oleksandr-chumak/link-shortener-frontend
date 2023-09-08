import { useContext } from 'react'
import { FieldContext } from '../../../components/main/FieldWithClipboard/FieldProvider/field-provider.component'

export const useFieldContext = () => {
  const context = useContext(FieldContext)
  if (!context){
    throw new Error('Component out of context')
  }
  return context
}

