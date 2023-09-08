import 'styled-components';
import { Theme } from './style/theme'

type ThemeType = typeof Theme


declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType{
  }
}