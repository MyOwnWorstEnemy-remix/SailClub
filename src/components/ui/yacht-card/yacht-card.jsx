import React from "react";
import { Card, StyledTitle, StyledImg, Text, StyledUl, StyledLi } from "./styles";
import { TitleSize } from "../title/title"
import Price from "../price/price"

function YachtCard({name, src, description, features, price}) {
    return(
    <Card>
        <StyledTitle size={TitleSize.SMALL}>{name}</StyledTitle>
        <StyledImg src={src}></StyledImg>
        <Text>{description}</Text>
        <StyledUl>
        {features.map((feature) => (
          <StyledLi key={feature.id}>
            {feature.name}
          </StyledLi>
        ))}
      </StyledUl>
        <Price price={price}></Price>
    </Card>)
}

export default YachtCard;