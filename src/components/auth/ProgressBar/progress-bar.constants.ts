import { STAGES } from '../forms/RegistrationForm/CurrentStage/current-stage.constants'
import { IndicatorProps } from './Indicator/indicator.types'
import { AiOutlineUser } from 'react-icons/ai'
import { TbPassword } from 'react-icons/tb'

export const INDICATORS: Record<keyof typeof STAGES, Omit<IndicatorProps, 'position'>> = {
  1: {
    icon: AiOutlineUser,
    header: 'Identification'
  },
  2: {
    icon: TbPassword,
    header: 'Security'
  },
}
export const NUMBERS_OF_INDICATORS = Object.keys(INDICATORS).length