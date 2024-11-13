import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body{
  margin: 0;
  background-color: ${(props) => props.theme.backgroundColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 24px;
  font-weight: 400;
  color: ${(props) => props.theme.fontColor};
}`;
