import { IconType } from 'react-icons'

export type Position = 'passed' | 'current' | 'next'

export interface IndicatorPositionProps{
  $position: Position;
}
export interface IndicatorProps{
  position: number;
  icon: IconType;
  header: string;
}
