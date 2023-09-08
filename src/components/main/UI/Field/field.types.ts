import { DetailedFieldProps } from '../../../../types'
import { MouseEventHandler } from 'react'
export type ButtonType =  'circle';
export interface FieldProps extends DetailedFieldProps {
  onClick?: MouseEventHandler<HTMLElement>;
  buttonType?: ButtonType,
}
