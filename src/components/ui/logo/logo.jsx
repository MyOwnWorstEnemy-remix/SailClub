import React from "react";
import { ReactComponent } from "../../../assets/logotype.svg";
import { StyledLogo } from "./styles";

// Логотип сайта с названием
function Logo() {
  return (
    <>
      <StyledLogo href="/">
        <ReactComponent />
      </StyledLogo>
    </>
  );
}

export default Logo;
