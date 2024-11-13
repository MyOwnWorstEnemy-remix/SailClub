import React, { createContext  } from "react";


const INITIAL_VALUE =  {
    theme: {},
    setTheme: () => undefined,
    font: {},
    setFont: () => undefined
  };
  
export const ThemeContext = createContext(INITIAL_VALUE);