import sun from "../assets/sun-light.svg";
import moon from "../assets/moon-light.svg";

export const defaultTheme = {
  colorWhite: "#ffffff",
  textDecorationColor: "#00c6bd",
  fontSizeDefault: "16px",
  lineHeightDefault: 1.5,
  pageWidth: "1170px",
};

export const lightTheme = {
  fontColor: "#163152",
  backgroundColor: "#fdfdff",
  iconSrc: sun,
  buttonBackground: "#00c6bd",
  imageFilter: "none",
  cardShadow: "0 4px 30px rgba(22, 49, 82, 0.12)",
}

export const darkTheme = {
  fontColor: "#fdfdff",
  backgroundColor: "#1d1f1f",
  iconSrc: moon,
  buttonBackground: "transparent",
  imageFilter: "brightness(20)",
  cardShadow: "0 4px 30px #181a1a",
};

export const defaultFont = {
  fontFamily: '"Roboto", "Arial", sans-serif',
};

export const secondaryFont = {
  fontFamily: '"Philosopher", serif',
};