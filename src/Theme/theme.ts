import { GlobalTheme } from "./styled";

export const globalColors: GlobalTheme.Colors = {
  //Dark Blue
  primary: "#1F2A3C",

  //Light Blue
  secondary: "#394B61",
  white100: "#ffffff",
  aquaBlue: "#00E0FF",
  gray100: "#D4D7DD",
};

export const globalEffects: GlobalTheme.Effects = {
  boxShadow: `0px 1px 2px rgba(21, 21, 21, 0.02), 0px 4px 8px rgba(21, 21, 21, 0.08)`,
};

export const globalTypography: GlobalTheme.Typography = {
  openSansFont: "Open Sans, sans-serif",
};

export const theme: GlobalTheme.DefaultTheme = {
  colors: globalColors,
  effects: globalEffects,
  typography: globalTypography,
};