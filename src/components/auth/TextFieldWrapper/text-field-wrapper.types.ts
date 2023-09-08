import { Control, FieldValues, Path } from 'react-hook-form'
import { TextFieldProps } from '../UI/Field/TextField/text-field.types'

export interface TextFieldWrapperProps<T extends FieldValues> extends TextFieldProps{
  name: Path<T>;
  control: Control<T>
}