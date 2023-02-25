import { DefaultTheme } from 'styled-components';

export const defaultColors = {
  blue100: '#103EAC',
  blue200: '#193F9A',
  white: '#FFFFFF',
  grey50: '#F8F9FA',
  grey100: '#EFF2F4',

  grey200: '#E3E8EC',
  grey300: '#CFD6DC',
  grey400: '#B2BAC2',
  grey500: '#87929C',
  grey600: '#606A74',
  grey700: '#444B52',
  grey800: '#2E3338',
  grey900: '#191C20',
  black: '#060B11',
};

export const color = {
  ...defaultColors,
  textBlackHigh: defaultColors.black,
  textBlackMedium: `${defaultColors.black}99`,
  textBlackDisable: `${defaultColors.black}3d`,

  textWhiteHigh: defaultColors.white,
  textWhiteMidium: `${defaultColors.white}99`,
  textWhiteDisable: `${defaultColors.white}3d`,

  textBlue: defaultColors.blue200,

  pointBlue: '#008DFF',
  pointGreen: '#03E1C1',
  pointLightPurple: '#AF52DE',
  pointOrange: '#FF7143',
  pointPeriwinkle: '#8A76FF',
  pointPurple: '#6C48FF',
  pointRed: '#FF3C3C',
  pointSkyBlue: '#1CD5FF',
  pointYellow700: '#FEBD00',
  pointGrey: '#F9F9FA',

  dividerBlack: defaultColors.black,
  dividerGrey100: defaultColors.grey100,
  dividerGrey200: defaultColors.grey200,
  dividerWhite: defaultColors.white,
  dividerWhite24: `${defaultColors.white}3d`,
  dividerWhithe12: `${defaultColors.white}1f`,

  pressedBlack6: `${defaultColors.black}0f`,

  backgroundWhite: defaultColors.white,
  backgroundGrey50: defaultColors.grey50,

  backgroundTransparency: '#00000000',

  backgroundDim: `${defaultColors.black}99`,
};

export type ColorType = typeof color;

export const theme: DefaultTheme = {
  color,
};
