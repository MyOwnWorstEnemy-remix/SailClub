import React from "react";
import { A } from "../../styled";
import { StyledImg, StyledDiv, Info, StyledIcon } from "./styles";
import authorPhoto from "../../../assets/news-author.jpg";
import icon from "../../../assets/share-icon.svg";

function NewsAuthor ({ name, date }) {
    return (
        <StyledDiv>
            <StyledImg src={authorPhoto}></StyledImg>
            <Info>
                <A href="#">{name}</A>
                <time>{date}</time>
            </Info>
            <A href="#">
                <StyledIcon src={icon}></StyledIcon>
            </A>
        </StyledDiv>
    );
}

export default NewsAuthor;

