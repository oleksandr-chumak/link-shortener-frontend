export interface ITheme {
  device:Device,
  color:Color
}
export interface Device {
  mobileS: string,
  mobileM: string,
  mobileL: string,
  tabletS: string,
  tabletM: string,
  tabletL: string,
}

export interface Color {
  border: {
    grey: string
  }
  active: string;
  inactive: string;
  brandPrimaryPink: string,
  brandPrimaryBlue: string,
  black: string,
  grey: string,
  lite: string,
  gradient: string
}
