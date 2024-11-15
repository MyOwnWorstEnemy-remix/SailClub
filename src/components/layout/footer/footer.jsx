import React from "react";
import { StyledFooter, Copyright } from "./styles";
import Logo from "../../ui/logo/logo";
import Nav from "../../layout/nav/nav";

function Footer() {
    return (
      <StyledFooter>
        <Logo />
        <Nav />
        <Copyright>Яхтклуб ©2020</Copyright>
      </StyledFooter>
    );
  }
  
  export default Footer;