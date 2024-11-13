import React from "react";
import pages from "../../../mocks/pages";
import { Li, A } from "../../styled";
import { StyledUl } from "./styles";

function Nav() {
  return pages && pages.length ? (
    <nav>
      <StyledUl>
        {pages.map((page) => (
          <Li key={page.id}>
            <A href="/">{page.name}</A>
          </Li>
        ))}
      </StyledUl>
    </nav>
  ) : null;
}

export default Nav;
