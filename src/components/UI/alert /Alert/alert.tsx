import React, { FC } from 'react'
import {
  AlertButtonIcon,
  AlertButtonWrapper,
  AlertDescription,
  AlertHeader,
  AlertIconWrapper,
  AlertInfo,
  AlertWrapper,
} from './alert.styled'
import { MdCancel, MdOutlineSecurity } from 'react-icons/md'
import { BsExclamationLg, BsInfoLg } from 'react-icons/bs'
import { IconType } from 'react-icons'
import { useAppDispatch } from '../../../../store'
import { clearAlert } from '../../../../store/slices/alert-slice'

export type AlertType = 'success' | 'info' | 'warning' | 'error'

interface Props {
  id: string
  type: AlertType
  header: string
  description: string;
  style:React.CSSProperties
}

const alertIcons: Record<AlertType, IconType> = {
  success: MdOutlineSecurity,
  info: BsInfoLg,
  warning: BsExclamationLg,
  error: MdCancel,
}
export const Alert: FC<Props> = ({ id, type, header, description, style}) => {
  const dispatch = useAppDispatch()
  const AlertIcon = alertIcons[type]
  const handleClick = () => {
    dispatch(clearAlert(id));
  }
  return (
    <AlertWrapper style={style} $type={type}>
      <AlertIconWrapper $type={type}>
        <AlertIcon />
      </AlertIconWrapper>
      <AlertInfo>
        <AlertHeader>{header}</AlertHeader>
        <AlertDescription>{description}</AlertDescription>
      </AlertInfo>
      <AlertButtonWrapper onClick={handleClick}>
        <AlertButtonIcon />
      </AlertButtonWrapper>
    </AlertWrapper>
  )
}
export default Alert;

