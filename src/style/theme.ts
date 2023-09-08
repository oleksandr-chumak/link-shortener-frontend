import { ITheme } from './theme.types'

export const Theme:ITheme = {
  device: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tabletS: '768px',
    tabletM: '800px',
    tabletL: '1024px',
  },
  color: {
    border: {
      grey:'#353C4A'
    },
    brandPrimaryPink: '#EB568E',
    brandPrimaryBlue: '#144EE3',
    black: '#0B101B',
    grey: '#181E29',
    lite: '#C9CED6',
    active: '#1EB036',
    inactive: '#B0901E',
    gradient: 'linear-gradient(90deg, rgba(20,78,227,1) 0%, rgba(163,83,170,1) 20%, rgba(235,86,142,1) 60%, rgba(20,78,227,1) 100%)'
  },
}
