import { createGlobalStyle } from 'styled-components';

import SFProDisplayUltralight from '../fonts/SFProDisplay/woff/SF-Pro-Display-Ultralight.woff'; // 100
import SFProDisplayLight from '../fonts/SFProDisplay/woff/SF-Pro-Display-Light.woff'; // 200
import SFProDisplayThin from '../fonts/SFProDisplay/woff/SF-Pro-Display-Thin.woff'; // 300
import SFProDisplaySemiRegular from '../fonts/SFProDisplay/woff/SF-Pro-Display-Regular.woff'; // 400
import SFProDisplaySemiMedium from '../fonts/SFProDisplay/woff/SF-Pro-Display-Medium.woff'; // 500
import SFProDisplaySemiBold from '../fonts/SFProDisplay/woff/SF-Pro-Display-Semibold.woff'; // 600
import SFProDisplayBold from '../fonts/SFProDisplay/woff/SF-Pro-Display-Bold.woff'; // 700
import SFProDisplayHeavy from '../fonts/SFProDisplay/woff/SF-Pro-Display-Heavy.woff'; // 800
import SFProDisplayBlack from '../fonts/SFProDisplay/woff/SF-Pro-Display-Black.woff'; // 900

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'SF Pro Display';
    src: local('SF Pro Display'), local('SFProDisplay'), url(${SFProDisplayUltralight}) format('woff');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: local('SF Pro Display'), local('SFProDisplay'), url(${SFProDisplayLight}) format('woff');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: local('SF Pro Display'), local('SFProDisplay'), url(${SFProDisplayThin}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: local('SF Pro Display'), local('SFProDisplay'), url(${SFProDisplaySemiRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: local('SF Pro Display'), local('SFProDisplay'), url(${SFProDisplaySemiMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: local('SF Pro Display'), local('SFProDisplay'), url(${SFProDisplaySemiBold}) format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: local('SF Pro Display'), local('SFProDisplay'), url(${SFProDisplayBold}) format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: local('SF Pro Display'), local('SFProDisplay'), url(${SFProDisplayHeavy}) format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: local('SF Pro Display'), local('SFProDisplay'), url(${SFProDisplayBlack}) format('woff');
    font-weight: 900;
    font-style: normal;
  }
`;

export default GlobalFonts;
