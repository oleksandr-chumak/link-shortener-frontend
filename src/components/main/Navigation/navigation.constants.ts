import { NavigationBodyList, NavigationHeaderList } from '../../../features'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineSetting } from 'react-icons/ai'
import { History, NavigationSetting } from './BodyItems'

export const NAVIGATION_BODY: NavigationBodyList = {
  history: History,
  settings: NavigationSetting,
}
export const NAVIGATION_HEADER: NavigationHeaderList = [
  {
    header: 'History',
    icon: BiTimeFive,
    body: 'history',
  },
  {
    header: 'Setting',
    icon: AiOutlineSetting,
    body: 'settings',
  },
]

