import React from "react";
import { StyledImg, StyledIcon } from "./styles";

function Icon({ src, link }) {
  console.log(src);
  return (
    <>
      <StyledIcon href={link}>
        <StyledImg src={src} />
      </StyledIcon>
    </>
  );
}
export default Icon;
