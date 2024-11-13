import React, { useState  } from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import { defaultTheme, lightTheme, darkTheme, defaultFont, secondaryFont } from "../../thems/default";
import { ThemeContext } from "../../thems/theme-context";

function App() {
  const [theme, setTheme] = useState("light");

  const [font, setFont] = useState("default");

  const fontTheme = font === "default" ? defaultFont : secondaryFont;
  const colorTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme, font, setFont}}>
      <ThemeProvider theme={{...defaultTheme, ...fontTheme, ...colorTheme}}>
        <GlobalStyle />
        <PageWrapper />
      </ThemeProvider>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
