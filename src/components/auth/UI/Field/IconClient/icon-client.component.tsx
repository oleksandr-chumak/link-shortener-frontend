import React, { CSSProperties, FC } from 'react'
import { FaRegUser } from 'react-icons/fa';
import { BiLock } from 'react-icons/bi';
import { IconType } from 'react-icons';
import { AiOutlineMail } from 'react-icons/ai';

export type Icons = 'user' | 'lock' | 'email';

interface Props {
  iconType: Icons;
  isFocus: boolean;
}

const icons: Record<Icons, IconType> = {
  user: FaRegUser,
  lock: BiLock,
  email: AiOutlineMail
};
const commonProperties: CSSProperties = {
  fontSize: 17
};
const focusedProperties: CSSProperties = {
  ...commonProperties,
  color: '#a64bf4',
  transition: 'all 0.5s ease'
};

export const IconClientComponent: FC<Props> = ({ iconType, isFocus }) => {
  const IconComponent = icons[iconType];
  const iconStyles = isFocus ? focusedProperties : commonProperties;
  return <IconComponent style={iconStyles} />;
};
