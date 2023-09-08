import { Icons } from '../IconClient/icon-client.component'
import { DetailedFieldProps } from '../../../../../types'

export type FieldType = 'text' | 'password';
export interface FieldProps<T> {
  name: T,
  label: string,
  iconType: Icons,
  fieldType?: FieldType;
  placeholder: string
}
export interface TextFieldProps extends DetailedFieldProps {
  label?: string
  iconType?: Icons
  fieldType?: FieldType
  withResetPasswordLabel?: boolean
}