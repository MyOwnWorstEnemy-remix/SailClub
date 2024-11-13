import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../../layout/nav/nav";
import Icon from "../../ui/icon/icon";
import HeaderIcon from "../../../assets/icon.svg";
import { StyledHeader } from "./styles";

function Header() {
  console.log("logo icon", HeaderIcon);
  return (
    <StyledHeader>
      <Logo />
      <Nav />
      <Icon src={HeaderIcon} link={"/"} />
    </StyledHeader>
  );
}

export default Header;
