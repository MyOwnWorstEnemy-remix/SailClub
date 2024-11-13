import React from "react";
import { TitleSize } from "../../ui/title/title";
import { StyledTitle, StyledUl } from "./styles"
import { Li } from "../../styled"
import YachtCard from "../../ui/yacht-card/yacht-card";
import yachts from "../../../mocks/yachts"

function Services() {
  return (
    <>
      <StyledTitle size={TitleSize.MEDIUM}>Аренда яхты</StyledTitle>
      <StyledUl>
        {yachts.map((yacht) => (
          <Li key={yacht.id}>
            <YachtCard {...yacht} />
          </Li>
        ))}
      </StyledUl>
    </>
  );
}

export default Services;
